// Browser-free alternate export of the same React/SVG scene.
const ts=require('typescript');const fs=require('fs');const path=require('path');
const React=require('react');const {renderToStaticMarkup}=require('react-dom/server');const {Resvg}=require('@resvg/resvg-js');
fs.mkdirSync('out/frames',{recursive:true});
fs.writeFileSync('out/scene.cjs',ts.transpileModule(fs.readFileSync('src/root.tsx','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText);
const {SvgScene}=require(path.resolve('out/scene.cjs'));
for(let frame=0;frame<=240;frame++){
 const svg=renderToStaticMarkup(React.createElement(SvgScene,{frame}));
 const png=new Resvg(svg).render().asPng();
 fs.writeFileSync(`out/frames/${String(frame).padStart(4,'0')}.png`,png);
 if(frame===48){fs.writeFileSync('out/poster.png',png);fs.writeFileSync('out/pelican-motorcycle-preview.svg',svg);}
 if(frame%60===0) console.log(`Rendered ${frame}/240`);
}
if(!fs.readFileSync('out/frames/0000.png').equals(fs.readFileSync('out/frames/0240.png'))) console.log('Loop endpoint differs; inspect periodic layout.');
else console.log('Loop endpoint pixel-exact.');
