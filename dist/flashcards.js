// 卡片答案取自已整理的章节正文，标题精确匹配以避免指向错误内容。
const CARD_TOPICS=[
[1,'地理信息系统（GIS）','1.1 信息系统与 GIS 定义'],[1,'GIS 的组成','GIS 的组成'],[2,'大地水准面与参考椭球','地球表面与参考面'],[2,'地图投影','地图投影及变形'],[3,'空间数据模型','概念、逻辑与物理模型'],[3,'对象模型与场模型','对象模型与场模型'],[3,'空间关系','空间关系'],[4,'矢量数据结构','矢量数据结构'],[4,'拓扑关系','拓扑及其作用'],[4,'栅格数据结构','栅格及压缩编码'],[5,'空间数据库','空间数据库'],[5,'空间索引','空间索引与查询'],[6,'空间与属性数据采集','空间与属性数据采集'],[6,'栅格重采样','栅格重采样'],[7,'空间分析','空间分析与空间度量'],[7,'叠置分析','叠置分析'],[7,'缓冲区分析','缓冲区分析'],[7,'网络分析与窗口分析','窗口分析与网络分析'],[8,'数字高程模型（DEM）','DEM 与地形表达'],[8,'地形插值','地形插值'],[8,'坡度、坡向与曲率','坡度、坡向与曲率'],[9,'空间统计分析','空间统计与普通统计'],[9,'空间自相关','空间自相关'],[9,'空间插值与核密度','核密度与空间插值'],[10,'地理信息可视化','地理信息可视化'],[10,'地图符号与注记','符号、注记和图面配置'],[11,'网络 GIS','网络 GIS'],[11,'地理信息网络服务','地理信息网络服务']
];
// 按教材术语整理的简明名词解释，页码为教材印刷页。
const EXTRA_CARDS=[
[1,'数据','对事物及环境的定性或定量原始记录，是信息的载体。',7],
[1,'地理信息','有关地理实体和地理现象的性质、特征及运动状态的表征和有用知识，是对地理数据的解释。',7],
[1,'地学模型','根据具体地学问题，以 GIS 已有操作和方法构建的、用于表达或模拟特定现象的计算机模型。',15],
[2,'大地水准面','与重力场有关、处处垂直于铅垂线的特定重力等位面，通常理解为接近平均海面并向大陆延伸的面。',29],
[2,'参考椭球','用于近似描述地球形状并便于定位和计算的旋转椭球，其大小、形状和定位应按具体基准确定。',30],
[2,'大地高','地面点相对于参考椭球面的高度；它与以大地水准面等为参考的高程不同。',35],
[2,'比例尺','地图上长度与对应实地水平长度的比值，反映地图的缩小程度。',47],
[2,'空间分辨率','用于描述空间数据中可区分空间细节能力或采样尺度的指标；栅格数据常以地面像元大小描述。',47],
[3,'对象模型','以具有身份、边界和属性的地理实体为对象描述现实世界的空间概念模型。',58],
[3,'场模型','把地理现象看作属性随空间位置变化的场，用于表达高程、温度等现象。',58],
[3,'网络模型','以节点、连接及其关系描述网络对象与相互作用的概念模型。',59],
[3,'拓扑关系','描述空间要素在连续变形下保持不变的关系；教材列出邻接、关联、包含和连通。它侧重对象之间的关系，而不以精确距离和角度为核心。',73],
[3,'度量空间关系','描述空间实体之间距离等可量测关系；可用定量距离或远近等方式表达。',76],
[4,'游程长度编码','按行或列扫描栅格，把连续相同的像元值与其连续长度成组记录的压缩编码方式。',87],
[4,'四叉树','将区域递归划分为四个子区，直到满足均一性等停止条件的层次结构。',88],
[4,'TIN 不规则三角网','以不规则分布的节点构建相连三角形，用于表达连续曲面的一种结构。',97],
[4,'影像金字塔','以多种分辨率组织同一影像，供不同显示尺度快速访问的数据组织方式。',91],
[5,'空间数据库','按照一定的数据模型组织和管理空间数据及其属性、关系，并支持空间查询与分析的数据库。',105],
[5,'R 树索引','以对象外包矩形为基础构建层次结构的空间索引，可先筛选候选对象，再进行精确判断。',123],
[6,'几何纠正','通过确定数据位置与参考位置之间的映射，改正影像或地图中的几何偏差的处理过程。',149],
[6,'最近邻重采样','将输出位置映射到原栅格后，取邻近像元值作为输出值的方法，通常保留原有类别值。',152],
[6,'双线性插值','利用目标位置周围四个像元值及其相对位置加权估计新值的方法，常用于连续数据。',152],
[7,'空间查询','依据属性条件、位置或空间关系，从已有空间数据中检索满足条件对象的操作。',170],
[7,'缓冲区','按照指定距离规则在点、线、面等地理对象周围形成的空间区域。',185],
[7,'叠置分析','综合两个或多个空间图层的几何位置与属性，形成新空间单元或分析结果的方法。',178],
[7,'网络阻强','在网络分析中表示通过链段或转向的代价或阻力，可用距离、时间或费用等衡量。',195],
[8,'数字高程模型（DEM）','以数字形式组织和表达地表高程及其空间分布的模型，可支持地形分析。',201],
[8,'坡度','地表局部坡面的倾斜程度，可用坡度角或坡度百分数表示。',208],
[8,'坡向','坡面最大下降方向的方位，具体起算方向和角度约定应按使用方法确认。',210],
[8,'流域分析','根据地形和水流汇集关系确定汇水区域、流向、汇流等地形水文特征的分析。',218],
[9,'空间自相关','地理属性值在空间上邻近或相关位置之间的关联程度，常用于分析空间集聚或离散。',258],
[9,'空间插值','依据已知位置的观测值，按一定方法估计其他位置属性值的过程。',251],
[9,'半变异函数','描述空间变量在不同距离间隔下差异程度的函数，可用于分析空间连续性。',239],
[9,'核密度估计','以样点或对象为中心，根据距离及核函数估计空间分布密度的方法。',249],
[10,'地理信息可视化','通过地图、图形或场景等形式表达地理空间信息及其关系，支持观察、探索与交流。',264],
[10,'地图注记','在地图上配置用于说明地物名称、属性或数量等内容的文字、数字和相关符号。',273],
[11,'Web GIS','利用 Web 环境提供地理数据、地图及 GIS 功能的网络地理信息系统。',301],
[11,'基于位置的服务（LBS）','结合地理信息、空间定位和通信技术，向移动对象提供与其地理位置有关的信息服务。',308]
];
function cardsData(){return CARD_TOPICS.map(([chapter,term,title])=>{const j=LESSONS[chapter-1].sections.findIndex(s=>s[0]===title);return j<0?null:{chapter,term,title,j,answer:LESSONS[chapter-1].sections[j].slice(1).join(' ')}}).filter(Boolean).concat(EXTRA_CARDS.map(([chapter,term,answer,page])=>({chapter,term,answer:answer+'（教材印刷第 '+page+' 页）',j:null})))}
function flashcards(){return `<div class="fc-head"><span class="fc-eyebrow">RECALL & REVIEW</span><h1 class="page-title">知识卡片</h1><p class="page-lead">先回想概念，再翻面核对；可以按章节浏览或随机抽取。</p></div><div class="fc-toolbar"><label for="fc-chapter">章节</label><select id="fc-chapter"><option value="all">全部章节</option>${titles.map((t,i)=>`<option value="${i+1}">第 ${i+1} 章 · ${esc(t)}</option>`).join('')}</select><button id="fc-browse" type="button">浏览卡片</button><button id="fc-random" type="button">随机抽卡</button><button id="fc-due" type="button">待复习卡片</button><button id="fc-export" type="button">导出学习记录</button><label class="fc-file">导入学习记录<input id="fc-import" type="file" accept="application/json,.json" hidden></label></div><p id="fc-status" aria-live="polite"></p><div id="fc-content"></div><p class="fc-note">卡片帮助主动回忆，完整定义与出处请进入对应章节核对。标记“不会”后立即待复习，“不熟”将在 1 天后、“记住了”将在 7 天后再次出现。记录保存在当前浏览器中，请定期导出备份。</p>`}
function initFlashcards(){const all=cardsData(),select=document.querySelector('#fc-chapter'),content=document.querySelector('#fc-content'),status=document.querySelector('#fc-status');let mode='browse',previous=null;const key=c=>c.chapter+':'+c.term+':'+(c.j===null?'term':c.j);function pool(){const data=GISStudy.read();return all.filter(x=>(select.value==='all'||x.chapter===Number(select.value))&&(mode!=='due'||!data.cards[key(x)]||data.cards[key(x)].due<=Date.now()))}function card(c){const k=key(c),record=GISStudy.read().cards[k];return `<article class="fc-card" data-card="${esc(k)}"><button class="fc-flip" type="button" aria-expanded="false"><span class="fc-front"><span class="fc-meta">第 ${c.chapter} 章 · ${record?({known:'已掌握',fuzzy:'不熟',unknown:'不会'}[record.level]):'未标记'}</span><strong>${esc(c.term)}</strong><span>点击翻面查看答案</span></span><span class="fc-back" hidden><span class="fc-meta">参考答案</span><span>${esc(c.answer)}</span><small>点击返回问题</small></span></button><div class="fc-rating" aria-label="标记掌握程度"><button data-rate="unknown">不会</button><button data-rate="fuzzy">不熟</button><button data-rate="known">记住了</button></div><a href="${c.j===null?`#chapter/${c.chapter}`:`#chapter/${c.chapter}/topic/${c.j}`}">${c.j===null?'阅读本章':'阅读对应知识点'}</a></article>`}function bind(){content.querySelectorAll('.fc-flip').forEach(b=>b.onclick=()=>{const front=b.querySelector('.fc-front'),back=b.querySelector('.fc-back'),show=back.hidden;front.hidden=show;back.hidden=!show;b.setAttribute('aria-expanded',String(show));window.renderMath?.()});content.querySelectorAll('[data-rate]').forEach(b=>b.onclick=()=>{const k=b.closest('[data-card]').dataset.card,level=b.dataset.rate,d=GISStudy.read(),days={unknown:0,fuzzy:1,known:7};d.cards[k]={level,due:Date.now()+days[level]*86400000};GISStudy.write(d);if(mode==='due'||mode==='random')draw();else{const m=b.closest('.fc-card').querySelector('.fc-front .fc-meta');m.textContent=m.textContent.split(' · ')[0]+' · '+({unknown:'不会',fuzzy:'不熟',known:'已掌握'}[level])}})}function draw(){const p=pool();if(window.MathJax?.typesetClear)MathJax.typesetClear([content]);if(!p.length){status.textContent=mode==='due'?'当前没有待复习卡片。':'此章节暂无卡片';content.innerHTML='';return}let shown=p;if(mode==='random'){let candidates=p.length>1?p.filter(x=>key(x)!==previous):p;const c=candidates[Math.floor(Math.random()*candidates.length)];previous=key(c);shown=[c]}status.textContent=mode==='random'?`随机复习 · 当前范围 ${p.length} 张`:`${mode==='due'?'待复习':'当前'} ${p.length} 张卡片 · 翻面后可标记掌握程度`;content.innerHTML=(mode==='random'?'<div class="fc-random-action"><button id="fc-next" type="button">再抽一张</button></div>':'')+`<div class="fc-grid ${mode==='random'?'single':''}">${shown.map(card).join('')}</div>`;if(mode==='random')document.querySelector('#fc-next').onclick=draw;bind();window.renderMath?.()}select.onchange=()=>{previous=null;draw()};document.querySelector('#fc-browse').onclick=()=>{mode='browse';draw()};document.querySelector('#fc-random').onclick=()=>{mode='random';previous=null;draw()};document.querySelector('#fc-due').onclick=()=>{mode='due';draw()};document.querySelector('#fc-export').onclick=GISStudy.exportData;document.querySelector('#fc-import').onchange=async e=>{try{if(await GISStudy.importData(e.target.files[0])){alert('学习记录已导入');draw()}}catch(err){alert('导入失败：'+err.message)}finally{e.target.value=''}};draw()}
