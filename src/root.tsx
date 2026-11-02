import React from 'react';
import {Composition, useCurrentFrame, staticFile} from 'remotion';
import {scenes,FPS,DURATION} from './scenes';
export type Assets=Record<string,string>;
const clamp=(x:number)=>Math.max(0,Math.min(1,x));
const ease=(x:number)=>1-Math.pow(1-clamp(x),3);
const splitText=(s:string,n:number)=>{const a=[];for(let i=0;i<s.length;i+=n)a.push(s.slice(i,i+n));return a;};
export const SvgScene=({frame,assets={}}:{frame:number;assets?:Assets})=>{
 let idx=scenes.length-1,start=0;
 for(let i=0;i<scenes.length;i++){if(frame<start+scenes[i].duration*FPS){idx=i;break;}start+=scenes[i].duration*FPS;}
 const s=scenes[idx],f=frame-start,span=s.duration*FPS,p=clamp(f/span),entry=ease(f/20);
 // A small framing motion, not an imitation of a user action. All image edges remain visible.
 const scale=.845+.009*p,iw=1920*scale,ih=1080*scale,x=(1920-iw)/2,y=58+(1-entry)*9;
 const next=idx<scenes.length-1?scenes[idx+1]:null,transition=next?clamp((f-(span-14))/14):0;
 return <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" style={{fontFamily:'Noto Sans CJK SC, sans-serif'}}>
 <defs><linearGradient id="bg" x2="1" y2="1"><stop stopColor="#091B2B"/><stop offset="1" stopColor="#183D4A"/></linearGradient></defs>
 <rect width="1920" height="1080" fill="url(#bg)"/>
 <text x="62" y="33" fontSize="18" letterSpacing="3" fill="#D0E4EE">JLSH / INTELLIGENT MONTHLY REPORT</text>
 <text x="1858" y="33" fontSize="18" textAnchor="end" fill={s.accent}>真实界面 · 模拟数据 · 人工复核</text>
 <rect x={x-2} y={y-2} width={iw+4} height={ih+4} rx="3" fill="#5F7887" opacity=".6"/>
 {assets[s.asset]?<image href={assets[s.asset]} x={x} y={y} width={iw} height={ih}/>:<text x="960" y="500" fill="white" textAnchor="middle">等待真实脱敏素材</text>}
 {next&&transition>0&&assets[next.asset]&&<image opacity={transition} href={assets[next.asset]} x={(1920-1920*.845)/2} y="58" width={1920*.845} height={1080*.845}/>}
 <g opacity={1-transition}>
 {splitText(s.detail,56).map((line,i)=><text key={i} x="960" y={1015+i*29} textAnchor="middle" fontSize="23" fill="#E1EDF3">{line}</text>)}
 </g>
 <text x="62" y="1045" fontSize="16" fill="#90B5C7">{s.tag} / 10</text>
 <text x="1858" y="1045" fontSize="16" textAnchor="end" fill="#90B5C7">84 秒 / 字幕演示</text>
 <rect x="62" y="1066" width="1796" height="3" fill="#35505F"/>
 <rect x="62" y="1066" width={1796*clamp((frame+1)/DURATION)} height="3" fill={s.accent}/>
 </svg>
};
const Video=()=>{const frame=useCurrentFrame();const assets=Object.fromEntries(scenes.map(s=>[s.asset,staticFile(`assets/${s.asset}`)]));return <SvgScene frame={frame} assets={assets}/>;};
export const Root=()=> <Composition id="MonthlyReport" component={Video} durationInFrames={DURATION} fps={FPS} width={1920} height={1080}/>;
