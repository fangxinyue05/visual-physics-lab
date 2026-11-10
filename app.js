"use strict";
const TEXT={
zh:{skip:"跳到实验视频",brandSub:"实验影像 · 2026",navTracking:"看跟踪",navForecast:"看预测",navResults:"看结果",heroTitle:'先看清运动，<br>再理解<span class="serif-accent">物理。</span>',heroDescription:"从真实录像出发，拆开跟踪误差与物理预测。模型看到了什么，预测了什么，哪里仍然失败——让画面和结果自己说话。",heroLink:"看最新推物对照",researchStatus:"研究诊断 / 包含负面结果",unitClips:"段",unitFrames:"帧",unitSeconds:"秒",unitSeeds:"组",factReal:"真实 RGB-D 录像",factInput:"预测模型可见的前缀",factFuture:"留给评估的未来",factSeeds:"每种拟合的随机种子",trackingTitle:"先问：物体真的跟对了吗？",mustard:"芥末瓶",cleanser:"清洁剂瓶",realRecording:"真实录像 · 同一官方网络",videoFallback:"浏览器无法播放，请直接下载视频。",viewAll:"完整对照",viewReal:"原视频",viewOld:"2 次跟踪",viewRefined:"10 次跟踪",viewPrediction:"预测轨迹",downloadVideo:"下载视频",prefixError:"前 15 帧平均位姿误差",trackingTakeaway:"普通跟踪设置，就能修复这次跑飞。",trackingExplanation:"左：真实画面；中：2 次跟踪迭代；右：10 次跟踪迭代。描边为 CAD 投影。增加迭代也增加计算量；这是跟踪诊断，不能包装成新的物理机制。",forecastTitle:"只看前 0.47 秒，接下来会怎样？",forecastTopNote:"未来画面仅供观看，不输入预测器",timelineObserved:"观察 15 帧",timelineFuture:"冻结参数，预测未来",frozenPrediction:"冻结后的三维预测",legendTruth:"黑色：运动捕捉参考",legendRetain:"蓝色：固定力学参数",legendFriction:"绿色：拟合摩擦",legend18:"粉色：18 变量联合拟合",legend33:"橙色：33 变量联合拟合",libraryTitle:"全部录像，不只看成功案例。",libraryDescription:"点选任意录像，在上方大画面中播放。也可以切换到单栏，放大观察。",filterAll:"全部",loading:"正在载入实验录像…",resultsTitle:"拟合得更好，未来未必更准。",downloadData:"下载逐录像数据",resultsDescription:"四种普通三维模型共享相同的视频前缀、视觉观察与求解次数。这里没有“我们的方法”获胜声明，只有实际测得的误差。",scopeMean:"总体均值",scopeSelected:"当前录像",metricLabel:"比较指标",metricBody:"整物体误差（mm）",metricCenter:"位置误差（mm）",metricRotation:"旋转误差（°）",tableCaption:"未来 1 秒的整物体平均误差，越低越好；每种物体 5 段录像。",tableModel:"普通对照模型",methodRetain:"固定力学参数",methodFriction:"拟合摩擦",method18:"18 变量联合拟合",method33:"33 变量联合拟合",budgetNote:"每段、每种模型使用 3 个新种子，每种子 8,185 次目标评估；只根据前缀拟合目标选种子，不根据未来误差选择。",figureTitle:"展开：全部十段录像的定量图",figureNote:"点为每段录像，短横线为均值。所有录像点均保留；不把优化种子当作额外录像，不声明统计显著性。",protocolTitle:"画面清楚，<br>结论也要清楚。",protocolIntro:"以下设定对应瓶类 RGB-D 实验。上方推物实验使用单独的录像留出和像素误差。",downloadProtocol:"实验设定与数据",protocolInputTitle:"看到了什么",protocolInput:"真实 RGB-D 前 15 帧、视觉 CAD 与相机标定。官方 FoundationPose 估计位姿；所有物理模型使用同一份观察。",protocolMetricTitle:"如何评估",protocolMetric:"用独立运动捕捉作参考，在 256 个固定表面点上计算整物体误差。未来画面仅用于展示和评估。",protocolLimitTitle:"保留哪些边界",protocolLimit:"十段录像此前已用于诊断。33 变量拟合包含质心、惯量和接触校准，但不保证全局最优，也不代表所有已发表物理方法的上限。",protocolIntegrityTitle:"影像怎么处理",protocolIntegrity:"原始 RGB 画面，共同跟随裁剪、CAD 投影描边和文字说明。播放放慢 3 倍并含停帧；没有合成未来画面。",footerCredit:"瓶类视频改编自 EV-RealPhys · Kandukuri 等 · CC BY-SA 4.0",sourcePaper:"数据论文 ↗",sourceData:"原始数据 ↗",license:"媒体许可 ↗",footerNote:"展示真实结果，也保留未解决的问题。",playing:"当前录像",prefixRMSE:"前缀拟合误差（mm）",selectedCaption:"当前录像的未来误差与前缀拟合误差；两者都越低越好。",loadError:"实验数据暂时未能载入，请刷新重试。视频仍可直接播放。",playCase:"播放录像",bodyShort:"整物体",centerShort:"位置",rotationShort:"旋转"},
en:{skip:"Skip to experiment videos",brandSub:"EXPERIMENT GALLERY · 2026",navTracking:"Tracking",navForecast:"Prediction",navResults:"Results",heroTitle:'See the motion.<br><em>Read the physics.</em>',heroDescription:"Start with real recordings. Separate tracking errors from physical prediction, and see what the models observe, what they predict, and where they still fail.",heroLink:"Start with a real comparison",researchStatus:"RESEARCH DIAGNOSTICS / NEGATIVE RESULTS INCLUDED",unitClips:"",unitFrames:"",unitSeconds:"s",unitSeeds:"",factReal:"Real RGB-D recordings",factInput:"Observed input frames",factFuture:"Held-out future",factSeeds:"Seeds per physical fit",trackingTitle:"First: did the tracker find the object?",mustard:"Mustard bottle",cleanser:"Bleach cleanser",realRecording:"REAL RECORDING · SAME OFFICIAL NETWORK",videoFallback:"Your browser cannot play this video. Download it directly.",viewAll:"Full comparison",viewReal:"Real video",viewOld:"2 iterations",viewRefined:"10 iterations",viewPrediction:"Predicted motion",downloadVideo:"Download",prefixError:"Mean pose error over 15 input frames",trackingTakeaway:"An ordinary tracking setting reduces this failure.",trackingExplanation:"Left: real RGB. Middle: 2 tracking iterations. Right: 10 iterations. Outlines are CAD projections. More iterations use more computation: this is a tracking diagnostic, not a new physical mechanism.",forecastTitle:"Observe 0.47 seconds. What happens next?",forecastTopNote:"Future images are shown to viewers, not the predictor.",timelineObserved:"Observe 15 frames",timelineFuture:"Freeze the fit. Predict the future.",frozenPrediction:"FROZEN 3D PREDICTION",legendTruth:"Black: motion-capture reference",legendRetain:"Blue: retained mechanics",legendFriction:"Green: friction fit",legend18:"Pink: 18-variable joint fit",legend33:"Orange: 33-variable joint fit",libraryTitle:"Every recording. Including the failures.",libraryDescription:"Select a recording for the large player above. Choose a single-panel view to inspect the details.",filterAll:"All",loading:"Loading recordings…",resultsTitle:"A better fit need not predict better.",downloadData:"Per-recording data",resultsDescription:"Four conventional 3D models share the same prefix, visual observations and solver-call budget. These are measured controls, with no claim of a winning new method.",scopeMean:"Overall means",scopeSelected:"Selected recording",metricLabel:"Compare",metricBody:"Whole-body error (mm)",metricCenter:"Center error (mm)",metricRotation:"Rotation error (°)",tableCaption:"Mean whole-body error over the next second; lower is better. Five recordings per object.",tableModel:"Conventional control",methodRetain:"Retain mechanics",methodFriction:"Fit friction",method18:"Joint fit · 18 variables",method33:"Joint fit · 33 variables",budgetNote:"Three new seeds per recording and model; 8,185 objective evaluations per seed. Seeds are selected only by the observed-prefix objective, never the future error.",figureTitle:"Expand: quantitative results on all ten recordings",figureNote:"Dots are individual videos; thick ticks are means. Every recording is shown. Optimization seeds are not extra videos, and no statistical significance is claimed.",protocolTitle:"Clear images.<br>Careful conclusions.",protocolIntro:"These experiments diagnose the problem. They do not establish a winning new mechanism, SOTA, or confirmation on unused recordings.",downloadProtocol:"Protocol & data",protocolInputTitle:"What the models observe",protocolInput:"The first 15 real RGB-D frames, a visual CAD model and camera calibration. Official FoundationPose estimates poses. Every physical model receives the same observations.",protocolMetricTitle:"How prediction is measured",protocolMetric:"Independent motion capture provides the reference. Whole-body error is measured at 256 fixed surface points. Future images are used only for evaluation and display.",protocolLimitTitle:"What remains unresolved",protocolLimit:"These ten recordings were previously used for diagnostics. The 33-variable fit includes center of mass, inertia and contact calibration; it has no global-optimality guarantee and is not a bound on all published methods.",protocolIntegrityTitle:"How the footage is presented",protocolIntegrity:"Original RGB, a common follow crop, CAD projection envelopes and labels. Playback is 3× slower with frame holds. No future images are synthesized.",footerCredit:"Videos adapted from EV-RealPhys · Kandukuri et al. · CC BY-SA 4.0",sourcePaper:"Dataset paper ↗",sourceData:"Original data ↗",license:"Media license ↗",footerNote:"Measured results. Unresolved questions included.",playing:"Selected",prefixRMSE:"Prefix fit error (mm)",selectedCaption:"Future prediction and observed-prefix fitting error for this recording; lower is better for both.",loadError:"Experiment data could not be loaded. Please refresh. The example videos can still be played directly.",playCase:"Play recording",bodyShort:"whole-body",centerShort:"center",rotationShort:"rotation"}
};
Object.assign(TEXT.zh, {
  "navPush": "看推物",
  "pushTitle": "改了模型，预测变好了吗？",
  "pushIntro": "同一个 T 块、同一条计划动作。并排看原录像、保留原模型、完整联合拟合和按方向约束的修复。",
  "pushKicker": "真实录像 · 首帧与 0.8 秒计划指令",
  "pushChapter1": "差异最小",
  "pushChapter2": "新方法最大回退",
  "pushChapter3": "联合拟合最大回退",
  "pushResultTitle": "保留原模型的误差最低",
  "pushScope": "36 个封存窗口中，26 个可评分，来自 6 段未参与以往拟合或预测的录像。",
  "pushMethod": "方法",
  "pushError": "误差（px）",
  "pushEdits": "修改",
  "pushWorst": "最坏回退（px）",
  "pushRetain": "保留原模型",
  "pushJoint": "完整联合拟合",
  "pushDirectional": "方向约束",
  "pushNote": "更新方法共享 4 段支持录像和 240 个候选。主种子里，方向约束与只按运动幅度的对照作出同样的决定。",
  "pushLegend": "青线是 RGB 轮廓参考，金线是冻结预测，白线是计划的推杆路径。",
  "pushSource": "Real Push-T 数据 · Chi 等 ↗"
});
Object.assign(TEXT.en, {
  "navPush": "Robot pushing",
  "pushTitle": "Does the edit improve the forecast?",
  "pushIntro": "See the same T-block and planned push in four panels showing the recording, the retained model, joint fitting and the direction-supported edit.",
  "pushKicker": "Real footage · Initial frame and 0.8 s of commands",
  "pushChapter1": "Closest result",
  "pushChapter2": "Edit regression",
  "pushChapter3": "Joint-fit regression",
  "pushResultTitle": "The retained model has the lowest error",
  "pushScope": "26 of 36 sealed windows were scoreable, spanning six recordings unused in earlier fitting or prediction.",
  "pushMethod": "Method",
  "pushError": "Error (px)",
  "pushEdits": "Edits",
  "pushWorst": "Worst excess (px)",
  "pushRetain": "Retain model",
  "pushJoint": "Joint fit",
  "pushDirectional": "Directional edit",
  "pushNote": "Update methods share four support clips and 240 candidates. In the primary seed, the directional method and the magnitude-only control make the same decisions.",
  "pushLegend": "Cyan shows the RGB reference, gold the frozen forecast, and white the planned pusher path.",
  "pushSource": "Real Push-T data · Chi et al. ↗"
});
const METHODS=[['retain','methodRetain'],['isotropic','methodFriction'],['joint','method18'],['full_joint','method33']];
const state={lang:'zh',filter:'all',selectedId:'000021',trackingId:'000021',scope:'mean',metric:'add_mm',data:null};
const $=id=>document.getElementById(id);
const t=key=>TEXT[state.lang][key]||key;
const reduceMotion=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function applyLanguage(){
  document.documentElement.lang=state.lang==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-i18n]').forEach(node=>{const key=node.dataset.i18n;if(TEXT[state.lang][key])node.textContent=t(key)});
  document.querySelectorAll('[data-i18n-html]').forEach(node=>{node.innerHTML=t(node.dataset.i18nHtml)});
  // This heading contains only trusted translations, not experiment data.
  const protocolHeading=document.querySelector('[data-i18n="protocolTitle"]');
  if(protocolHeading)protocolHeading.innerHTML=t('protocolTitle');
  $('language-toggle').innerHTML=state.lang==='zh'?'EN <span aria-hidden="true">↗</span>':'中文 <span aria-hidden="true">↗</span>';
  $('language-toggle').setAttribute('aria-label',state.lang==='zh'?'Switch to English':'切换到中文');
  document.title=state.lang==='zh'?'Visual Physics · 实验影像':'Visual Physics · Experiment Gallery';
  if(state.data){renderLibrary();renderResults();updateTrackingLabels();}
  try{localStorage.setItem('vp-language',state.lang)}catch(_){}
}
function pressed(group,key,value){
  $(group).querySelectorAll(`button[data-${key}]`).forEach(button=>button.setAttribute('aria-pressed',String(button.dataset[key]===value)));
}
function swapVideo(video,path,poster,play){
  const same=video.dataset.source===path||video.querySelector('source')?.getAttribute('src')===path;
  if(!same){video.pause();video.poster=poster;video.src=path;video.dataset.source=path;video.load();}
  if(play){const promise=video.play();if(promise)promise.catch(()=>{});}
}
function updateTrackingLabels(){
  const c=state.data.cases.find(x=>x.id===state.trackingId);
  if(!c)return;
  $('tracking-id').textContent=`${c.object.toUpperCase()} / ${c.number}`;
  $('tracking-error-before').textContent=c.trackingError2.toFixed(1);
  $('tracking-error-after').textContent=c.trackingError10.toFixed(1);
  $('tracking-download').href=c.tracking;
}
function selectTracking(id,play=false){
  const c=state.data.cases.find(x=>x.id===id&&x.tracking);if(!c)return;
  state.trackingId=id;pressed('tracking-objects','tracking',id);
  swapVideo($('tracking-video'),c.tracking,c.trackingPoster,play);updateTrackingLabels();
}
function selectForecast(id,play=false,scroll=false){
  const c=state.data.cases.find(x=>x.id===id);if(!c)return;
  state.selectedId=id;swapVideo($('forecast-video'),c.forecast,c.poster,play);
  $('forecast-id').textContent=`${c.object.toUpperCase()} / ${c.number}`;
  $('forecast-download').href=c.forecast;
  renderLibrary();renderResults();
  const url=new URL(location.href);url.searchParams.set('clip',id);history.replaceState(null,'',url);
  if(scroll)$('forecast').scrollIntoView({behavior:reduceMotion()?'auto':'smooth',block:'start'});
}
function renderLibrary(){
  const grid=$('video-library');grid.replaceChildren();
  const clips=state.data.cases.filter(c=>state.filter==='all'||c.object===state.filter);
  clips.forEach(c=>{
    const button=document.createElement('button');button.type='button';button.className='library-card';button.dataset.clip=c.id;
    button.setAttribute('aria-pressed',String(c.id===state.selectedId));button.setAttribute('aria-label',`${t('playCase')} ${t(c.object)} ${c.number}`);
    const thumb=document.createElement('span');thumb.className='thumb';
    const image=document.createElement('img');image.src=c.thumb;image.alt=`${t(c.object)} · ${c.number}`;image.loading='lazy';image.decoding='async';image.width=480;image.height=274;thumb.append(image);
    const icon=document.createElement('span');icon.className='thumb-play';icon.setAttribute('aria-hidden','true');icon.innerHTML='<svg viewBox="0 0 12 12" fill="currentColor"><path d="m2 1 9 5-9 5Z"/></svg>';thumb.append(icon);button.append(thumb);
    const info=document.createElement('span');info.className='library-card-info';const label=document.createElement('strong');label.textContent=t(c.object);const num=document.createElement('span');num.textContent=`#${c.number}`;info.append(label,num);button.append(info);
    if(c.id===state.selectedId){const badge=document.createElement('span');badge.className='playing-badge';badge.textContent=t('playing');button.append(badge)}
    button.addEventListener('click',()=>selectForecast(c.id,true,true));grid.append(button);
  });
}
function renderResults(){
  const c=state.data.cases.find(x=>x.id===state.selectedId);
  const unit=state.metric==='rotation_deg'?'°':'mm';
  const headings=document.querySelectorAll('.results-table thead th');
  headings[0].textContent=t('tableModel');
  const series=state.scope==='mean'?['mustard','cleanser']:['value','prefix'];
  if(state.scope==='mean'){
    headings[1].textContent=t('mustard');headings[2].textContent=t('cleanser');
    const label=state.metric==='add_mm'?t('bodyShort'):state.metric==='center_mm'?t('centerShort'):t('rotationShort');
    $('results-caption').textContent=state.lang==='zh'?`未来 1 秒的${label}平均误差（${unit}），越低越好；每种物体 5 段录像。`:`Mean future ${label} error (${unit}); lower is better. Five recordings per object.`;
  }else{
    headings[1].textContent=`${t(c.object)} #${c.number} (${unit})`;headings[2].textContent=t('prefixRMSE');
    $('results-caption').textContent=t('selectedCaption');
  }
  const get=(method,column)=>state.scope==='mean'?state.data.summary.find(r=>r.object===column&&r.mode===method)[state.metric]:c.metrics[method][column==='prefix'?'prefix_rmse_mm':state.metric];
  const mins=Object.fromEntries(series.map(s=>[s,Math.min(...METHODS.map(([m])=>get(m,s)))]));
  const body=$('results-body');body.replaceChildren();
  METHODS.forEach(([method,label])=>{
    const tr=document.createElement('tr');const th=document.createElement('th');th.scope='row';th.textContent=t(label);tr.append(th);
    series.forEach(s=>{const cell=document.createElement('td');const value=get(method,s);cell.textContent=value.toFixed(1);if(value===mins[s])cell.className='best';tr.append(cell)});body.append(tr);
  });
}
function wireControls(){
  $('pusht-chapters').addEventListener('click', event => {
    const button = event.target.closest('button[data-second]');
    if (!button) return;
    const player = $('pusht-video');
    player.currentTime = Number(button.dataset.second);
    player.play().catch(() => {});
  });
  $('language-toggle').addEventListener('click',()=>{state.lang=state.lang==='zh'?'en':'zh';applyLanguage()});
  $('tracking-objects').addEventListener('click',event=>{const button=event.target.closest('button[data-tracking]');if(button&&state.data)selectTracking(button.dataset.tracking,true)});
  [['tracking-views','tracking-frame'],['forecast-views','forecast-frame']].forEach(([group,frame])=>{
    $(group).addEventListener('click',event=>{const button=event.target.closest('button[data-view]');if(!button)return;$(frame).dataset.view=button.dataset.view;pressed(group,'view',button.dataset.view)});
  });
  $('library-filters').addEventListener('click',event=>{const button=event.target.closest('button[data-filter]');if(!button||!state.data)return;state.filter=button.dataset.filter;pressed('library-filters','filter',state.filter);renderLibrary()});
  $('result-scope').addEventListener('click',event=>{const button=event.target.closest('button[data-scope]');if(!button||!state.data)return;state.scope=button.dataset.scope;pressed('result-scope','scope',state.scope);renderResults()});
  $('metric-select').addEventListener('change',event=>{state.metric=event.target.value;if(state.data)renderResults()});
  document.querySelectorAll('video').forEach(video=>video.addEventListener('play',()=>document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause()})));
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting&&entry.target.readyState>0)entry.target.pause()}),{threshold:.05});
  document.querySelectorAll('video').forEach(video=>observer.observe(video));
}
async function init(){
  let saved;try{saved=localStorage.getItem('vp-language')}catch(_){}
  const query=new URLSearchParams(location.search);state.lang=['en','zh'].includes(query.get('lang'))?query.get('lang'):saved==='en'?'en':'zh';
  applyLanguage();wireControls();
  try{
    const response=await fetch('data/experiments.json');if(!response.ok)throw new Error('Experiment manifest unavailable');
    state.data=await response.json();const queryClip=query.get('clip');
    if(state.data.cases.some(c=>c.id===queryClip))state.selectedId=queryClip;
    selectTracking('000021');selectForecast(state.selectedId);applyLanguage();
  }catch(error){const note=document.createElement('p');note.className='error-message';note.textContent=t('loadError');$('video-library').replaceChildren(note);console.error(error)}
}
init();
