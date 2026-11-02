import React from 'react';
import {AbsoluteFill, Composition, useCurrentFrame, useVideoConfig} from 'remotion';

const ink='#173B42';
const Wheel=({x,angle}:{x:number;angle:number})=><g transform={`translate(${x},539)`}>
  <circle r="67" fill={ink}/><circle r="53" fill="#344D4C"/><circle r="41" fill="#E5D9B7"/><circle r="33" fill="#A6B4A5"/>
  <g transform={`rotate(${angle})`} stroke="#F7EDCF" strokeWidth="5">{Array.from({length:8},(_,i)=><path key={i} transform={`rotate(${i*45})`} d="M0 -9 L0 -35"/>)}</g>
  <circle r="13" fill={ink}/><circle r="5" fill="#E7B858"/>
</g>;
export const SvgScene=({frame}:{frame:number})=>{
 const f=frame; const durationInFrames=240; const p=f/durationInFrames; const a=p*Math.PI*2;
 const bounce=Math.sin(a*8)*3; const flutter=Math.sin(a*12); const blink=(f%120>=105&&f%120<=109);
 return <svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <linearGradient id="sky" x2="0" y2="1"><stop stopColor="#F6E6C5"/><stop offset="1" stopColor="#E5EFDA"/></linearGradient>
  <linearGradient id="tank" x2="0.2" y2="1"><stop stopColor="#F57E59"/><stop offset="1" stopColor="#D64D3C"/></linearGradient>
  <linearGradient id="bird" x2="0.7" y2="1"><stop stopColor="#FFFBEB"/><stop offset="1" stopColor="#E7E3CF"/></linearGradient>
  <pattern id="grain" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".6" fill="#173B42" opacity=".055"/></pattern>
 </defs>
 <rect width="1280" height="720" fill="url(#sky)"/>
 <circle cx="1005" cy="183" r="101" fill="#EDB856"/>
 <circle cx="1005" cy="183" r="123" fill="none" stroke="#E6B968" strokeWidth="1" opacity=".5"/>
 <g fill="#FFFCED" opacity=".8" transform={`translate(${-p*480},0)`}>{[-1,0,1,2,3].map(i=><path key={i} transform={`translate(${i*480},0)`} d="M90 230 Q90 208 115 210 Q125 178 153 195 Q180 187 188 215 Q219 214 221 231Z"/>)}</g>
 <g fill="#91B5AA">{[-1,0,1,2].map(i=><path key={i} transform={`translate(${i*640-p*640},0)`} d="M0 438 L100 367 Q130 346 155 370 L245 417 L350 333 Q375 320 399 346 L530 425 L640 438 L640 540 L0 540Z"/>)}</g>
 <path d="M0 463 Q260 424 500 464 Q770 502 1280 448 L1280 553 L0 553Z" fill="#6C9D92"/>
 <path d="M0 500 Q210 472 500 500 T1280 489 L1280 556 L0 556Z" fill="#B7C9A5"/>
 <g transform={`translate(${-p*960},0)`} stroke="#658F7C" strokeWidth="4">{Array.from({length:12},(_,i)=><g key={i} transform={`translate(${i*240},0)`}><path d="M15 550 l-4 -24 m4 15 l12 -13 m-12 8 l-11 -8"/><path d="M90 550 l2 -13"/></g>)}</g>
 <rect y="552" width="1280" height="168" fill="#364C4A"/>
 <rect y="552" width="1280" height="8" fill="#F5E6BC"/>
 <path d="M0 568 H1280" stroke="#172F35" strokeWidth="3"/>
 <g transform={`translate(${-p*640},0)`} stroke="#ECDDB6" strokeWidth="5" strokeDasharray="115 205"><path d="M0 651 H2000"/></g>
 <g fill={ink} fontFamily="Arial, sans-serif">
 <text x="64" y="78" fontSize="13" letterSpacing="5" fontWeight="700">A LITTLE ADVENTURE</text>
 <text x="59" y="149" fontSize="63" fontWeight="900" letterSpacing="-2">PELICAN</text>
 <text x="63" y="190" fontSize="29" fontWeight="700" letterSpacing="8">MOTOR CLUB</text>
 <path d="M65 213 H270" stroke={ink} strokeWidth="2"/>
 <text x="65" y="244" fontSize="14" letterSpacing="2">TWO WHEELS. ONE BIG BEAK.</text>
 </g>
 <g transform={`translate(0,${bounce})`} stroke={ink} strokeLinejoin="round" strokeLinecap="round">
 <ellipse cx="699" cy="608" rx="231" ry="15" fill="#182F32" opacity=".25" stroke="none"/>
 <Wheel x={522} angle={p*360*12}/><Wheel x={843} angle={p*360*12}/>
 {/* exhaust and frame */}
 <path d="M657 490 Q678 531 731 541 L800 541" fill="none" strokeWidth="18"/><path d="M668 492 Q690 529 733 534 L804 534" fill="none" stroke="#C1D0BF" strokeWidth="8"/>
 <path d="M522 539 L592 433 L710 436 L648 537 Z M648 537 L744 455" fill="none" strokeWidth="12"/>
 <path d="M522 539 L618 533" stroke="#B0C3B5" strokeWidth="8"/>
 <path d="M571 460 L542 518" stroke="#E8DBC1" strokeWidth="13"/><path d="M571 460 L542 518" strokeWidth="5" strokeDasharray="4 8"/>
 {/* fenders */}
 <path d="M452 514 Q467 450 532 460 Q570 463 589 499" fill="none" strokeWidth="15"/><path d="M452 509 Q474 454 529 466 Q557 467 580 493" fill="none" stroke="#E66B48" strokeWidth="9"/>
 <path d="M780 505 Q824 457 877 489" fill="none" strokeWidth="15"/><path d="M782 500 Q827 457 878 486" fill="none" stroke="#E66B48" strokeWidth="9"/>
 {/* engine */}
 <path d="M622 451 L690 452 L706 498 L686 527 L622 518 L601 491Z" fill="#AEBEB0" strokeWidth="5"/>
 <path d="M621 463 H680 M617 475 H687 M619 487 H690" strokeWidth="5"/>
 <circle cx="659" cy="506" r="22" fill="#E1D8B8" strokeWidth="4"/><circle cx="659" cy="506" r="10" fill="#718F85" strokeWidth="3"/>
 <path d="M611 537 H684" strokeWidth="9"/>
 {/* front forks */}
 <path d="M780 393 L843 539 M795 394 L854 535" stroke="#C6D5C1" strokeWidth="10"/>
 <path d="M780 393 L807 454 M795 394 L819 451" strokeWidth="11"/>
 <path d="M775 394 L759 359 L793 353" fill="none" strokeWidth="8"/><path d="M783 353 H809" strokeWidth="12"/>
 <path d="M794 383 L816 379 L826 410 L803 416Z" fill="#FBE8A4" strokeWidth="4"/>
 {/* fuel tank and seat */}
 <path d="M640 406 Q655 373 700 383 L748 404 Q766 423 744 446 L678 452 Q643 446 640 406Z" fill="url(#tank)" strokeWidth="5"/>
 <path d="M666 407 Q693 399 725 417" fill="none" stroke="#FFE8BF" strokeWidth="9"/>
 <path d="M682 383 H703" strokeWidth="9"/>
 <rect x="545" y="403" width="111" height="25" rx="12" fill="#7C4B3B" strokeWidth="5"/>
 <path d="M558 409 H628" stroke="#B8885E" strokeWidth="3"/>
 <path d="M472 430 H556" strokeWidth="7"/><rect x="477" y="427" width="17" height="16" rx="4" fill="#F08D54" strokeWidth="3"/>
 {/* tail feather */}
 <path d="M598 345 Q555 342 529 314 Q549 358 558 377 L591 385Z" fill="#FAF5DE" strokeWidth="4"/>
 {/* back body */}
 <path d="M606 274 Q559 304 571 366 Q581 412 629 407 Q681 407 692 356 Q700 307 657 282Z" fill="url(#bird)" strokeWidth="5"/>
 <path d="M605 388 Q632 394 647 379" fill="none" stroke="#CFD7C7" strokeWidth="7"/>
 {/* rider leg */}
 <path d="M632 398 Q660 413 645 440 L619 477 L650 494" fill="none" stroke="#E6AC47" strokeWidth="16"/>
 <path d="M635 492 Q655 485 674 497 L681 504 L642 504Z" fill="#E8AF4A" strokeWidth="4"/>
 {/* neck */}
 <path d="M627 326 Q647 302 642 269 Q637 230 667 216 Q700 205 715 239 Q723 261 704 283 Q688 301 686 331" fill="url(#bird)" strokeWidth="5"/>
 {/* scarf flutter back */}
 <path d={`M645 282 Q602 ${266+flutter*8} 571 ${283+flutter*4} Q546 ${292-flutter*5} 517 ${273+flutter*9} L528 ${300+flutter*8} Q559 ${313-flutter*6} 587 ${302+flutter*5} Q618 294 653 303Z`} fill="#E56A4D" strokeWidth="4"/>
 <path d="M640 283 Q660 292 686 280 L690 295 Q668 311 645 298Z" fill="#E56A4D" strokeWidth="4"/>
 {/* wing reaching bars */}
 <path d="M620 323 Q640 310 660 330 Q693 365 740 354 Q761 347 777 355 Q776 368 760 370 Q698 389 663 369 Q635 355 620 341Z" fill="#F8F4DE" strokeWidth="5"/>
 <path d="M635 336 Q664 361 691 365" fill="none" stroke="#BBC9B8" strokeWidth="4"/>
 {/* head and beak pouch */}
 <ellipse cx="703" cy="224" rx="43" ry="44" fill="#FFFAE6" strokeWidth="5"/>
 <path d="M730 234 L850 244 Q827 289 778 281 Q746 275 730 248Z" fill="#ECAF50" strokeWidth="4"/>
 <path d="M730 224 Q788 222 865 240 Q869 246 858 248 L733 242Z" fill="#F5C95E" strokeWidth="4"/>
 <path d="M746 248 Q779 269 816 262" fill="none" stroke="#F5D47B" strokeWidth="4"/>
 {/* helmet */}
 <path d="M658 223 Q647 173 690 165 Q737 156 748 205 L706 206 L692 226Z" fill="#347F80" strokeWidth="5"/>
 <path d="M680 171 Q672 190 683 214" fill="none" stroke="#F6E7BE" strokeWidth="9"/>
 <path d="M652 218 L709 213" strokeWidth="7"/>
 <path d="M673 227 Q672 253 693 258" fill="none" strokeWidth="4"/>
 <circle cx="711" cy="221" r="17" fill="#E7DDBE" strokeWidth="4"/>
 <circle cx="713" cy="220" r="11" fill="#8CB6AC" strokeWidth="2"/>
 {blink?<path d="M707 221 H719" strokeWidth="3"/>:<><ellipse cx="717" cy="219" rx="4" ry="6" fill={ink} stroke="none"/><circle cx="718" cy="217" r="1.6" fill="white" stroke="none"/></>}
 <path d="M699 212 L682 212" strokeWidth="5"/>
 </g>
 {/* foreground motion accents */}
 <g transform={`translate(${-p*640},0)`} stroke="#F1DDAF" strokeWidth="3" opacity=".55">{[0,1,2,3].map(i=><path key={i} d={`M${i*640+180} 594 h90`}/>)}</g>
 <rect width="1280" height="720" fill="url(#grain)" pointerEvents="none"/>
 <g fill="#F5E9CA" fontFamily="Arial,sans-serif" fontSize="12" letterSpacing="3"><text x="64" y="696">COASTAL CRUISE / VOL. 01</text><text x="1080" y="696">GOOD VIBES →</text></g>
 </svg>;
};
const Scene=()=> <AbsoluteFill style={{background:'#F6EBCF'}}><SvgScene frame={useCurrentFrame()}/></AbsoluteFill>;
export const Root=()=> <Composition id="PelicanMoto" component={Scene} durationInFrames={240} fps={30} width={1280} height={720}/>;
