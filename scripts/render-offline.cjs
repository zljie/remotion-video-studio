// Deterministic browser-free export of the same React/SVG component.
// Requires ffmpeg on PATH. Stops if reviewed source assets are absent.
const ts=require('typescript'),fs=require('fs'),path=require('path');
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server'),{Resvg}=require('@resvg/resvg-js');
const {spawnSync,spawn}=require('child_process');
fs.mkdirSync('out',{recursive:true});
for(const name of ['scenes','root']) fs.writeFileSync(`out/${name}.cjs`,ts.transpileModule(fs.readFileSync(`src/${name}.${name==='root'?'tsx':'ts'}`,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText.replace('require("./scenes")','require("./scenes.cjs")'));
const {scenes,FPS,DURATION}=require(path.resolve('out/scenes.cjs'));
const {SvgScene}=require(path.resolve('out/root.cjs'));
const assets={};
for(const scene of scenes.filter(s=>s.asset)) {
 const file=path.join('public/assets',scene.asset);
 if(!fs.existsSync(file)) throw Error(`Missing reviewed screenshot: ${file}. Final export is blocked.`);
 assets[scene.asset]='data:image/png;base64,'+fs.readFileSync(file).toString('base64');
}
const fontFiles=['/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc','/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc'].filter(fs.existsSync);
function render(frame){return new Resvg(renderToStaticMarkup(React.createElement(SvgScene,{frame,assets})),{font:{fontFiles,defaultFontFamily:'Noto Sans CJK SC'}}).render().asPng();}
const previewOnly=process.argv.includes('--previews');
let start=0;const representative=[];
for(let i=0;i<scenes.length;i++){const frame=start+Math.min(60,scenes[i].duration*FPS-1);representative.push(frame);fs.writeFileSync(`out/scene-${i+1}.png`,render(frame));start+=scenes[i].duration*FPS;}
fs.writeFileSync('out/poster.png',render(60));
if(previewOnly){console.log('Representative scene images ready.');process.exit(0);}
const ff=spawn('ffmpeg',['-y','-hide_banner','-loglevel','warning','-f','image2pipe','-framerate',String(FPS),'-i','pipe:0','-an','-c:v','libx264','-preset','fast','-crf','19','-pix_fmt','yuv420p','-movflags','+faststart','out/jlsh-monthly-report.mp4'],{stdio:['pipe','inherit','inherit']});
const done=new Promise((res,rej)=>{ff.on('error',rej);ff.on('close',code=>code===0?res():rej(Error(`FFmpeg failed ${code}`)));});
(async()=>{for(let frame=0;frame<DURATION;frame++){if(!ff.stdin.write(render(frame)))await new Promise(r=>ff.stdin.once('drain',r));if(frame%300===0)console.log(`Rendered ${frame}/${DURATION}`);}ff.stdin.end();await done;console.log(`Complete: ${DURATION/FPS}s, ${DURATION} frames.`);})().catch(e=>{console.error(e);process.exitCode=1;});
