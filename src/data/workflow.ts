export type Step = {
  /** 步骤名（刻意不用 01/02/03 编号 —— v2 把这种编号列为需要判失败的套路） */
  name: string;
  title: string;
  body: string;
  /** 这一步用到的脚本 / 文件 */
  tool?: string;
};

export const STEPS: Step[] = [
  {
    name: '盘点',
    title: '先找出只有这个客户才有的东西',
    body: '动手设计之前，Agent 先列出这个对象独有的八到十二件事：名字以及名字的含义、门牌号、街道与街区、招牌上的字体与油漆颜色、需求里出现的数字（座位数、营业时间、年份、价格）、它必须接受的约束、它的材质与颜色、它的作息。这份清单就是创意的来源，也是后面找图的检索词。',
  },
  {
    name: '抽牌',
    title: '从二十个研究方向里抽三个，你选一个',
    body: '让模型自己发明风格，它每次都会选那个类别的默认答案。脚本从二十个研究过的方向里发三张牌，Agent 挑出那张能承载客户独有素材的牌；随后脚本再从方向库里发出它的字体系统、配色、首屏构图与分区构图。每张牌下面都会注明这个蓝图与「家规」冲突的地方。',
    tool: 'scripts/draw.mjs',
  },
  {
    name: '立论',
    title: '一句话立论，加一件访客真能做的事',
    body: '用一句话把客户自己的素材和那个方向的手法系在一起，并且和最近的竞争者比一遍。同时给访客一件在页面上真的能做的事，而不是一排装饰性的按钮。',
  },
  {
    name: '构建',
    title: '用完整内容与真实图片把它建起来',
    body: '内容写全，不留占位。项目自己没有照片时，就从开放馆藏里找这个主题真实世界的图片，并逐一署名；只有确实找不到诚实图片的东西，才用代码画出来。图片的取用顺序是：项目自有 → 生成 → 开放馆藏的真实照片 → 代码绘制 → 方向库配的氛围图 → 只靠字体和颜色。',
    tool: 'scripts/assets.mjs',
  },
  {
    name: '过闸',
    title: '扫描源码，再在真实浏览器里量一遍',
    body: '静态脚本先扫一遍源码；随后检查器用 DevTools 协议驱动一个真实浏览器，在 1440 / 768 / 390 三个宽度上打开页面，逐条测量并把不合格的地方判为失败。规则不是「希望遵守」，而是被量出来的。',
    tool: 'scripts/lint.mjs + scripts/inspect.mjs',
  },
  {
    name: '回看',
    title: '看自己的截图，修掉最差的三处',
    body: 'Agent 用自己的截图，按 Awwwards 权重的评分表批判自己，挑出最差的三处问题去修，最多修三轮。这一步是「照镜子」，也是它和「生成完就交付」最大的区别。',
  },
];

/** 检查器会直接判失败的项目 */
export const GATE_FAIL: string[] = [
  '标题上方的装饰性小标签（eyebrow）',
  '代码块之外的等宽字体',
  '01 / 02 / 03 式的段落编号',
  '装饰性的细线与描边框',
  '渐变',
  '静止状态下的投影',
  '奶油配赤陶、或紫色的配色',
  '超过两行的主标题',
  '小于 13px 的文字',
  '首屏没有视觉焦点',
  '接近空白的整屏',
  '被遮挡或裁断的文字',
  '横向溢出',
  '整页少于四张真实图片（照片、档案图像、影像、位图作品都算，SVG 手绘不算）',
  '整页会动的元素少于 8 个',
];

/** 检查器会给出警告的项目 */
export const GATE_WARN: string[] = [
  '真实照片少于两张',
  '页面里完全没有影像片段',
  '整页会动的元素少于 16 个',
];

/** 图片的开放来源与许可 */
export const IMAGE_SOURCES: { name: string; note: string }[] = [
  { name: 'Openverse', note: '跨库检索，聚合多个开放许可图库' },
  { name: 'Wikimedia Commons', note: '档案照片、老照片、老地图' },
  { name: 'The Metropolitan Museum of Art', note: '大都会博物馆开放馆藏' },
  { name: 'Art Institute of Chicago', note: '芝加哥艺术博物馆开放馆藏' },
];

export const IMAGE_LICENSES = ['公共领域（Public Domain）', 'CC0', 'CC BY', 'CC BY-SA'];

export const IMAGE_CLI: { flag: string; note: string }[] = [
  { flag: '--source', note: '限定检索的馆藏来源' },
  { flag: '--license', note: '限许可类型' },
  { flag: '--orientation', note: '限定横竖构图' },
  { flag: '--min-width', note: '限定最小宽度' },
  { flag: '--get <ref>', note: '把某张图下载进项目的 assets/ 并记录署名' },
  { flag: '--credits', note: '打印页脚署名行与报告清单' },
  { flag: '--video', note: '检索开放许可的影像片段' },
];

export const REQUIREMENTS: { label: string; value: string; note: string }[] = [
  { label: '运行时', value: 'Node 22+', note: '检查器需要它；draw / lint / assets 三个脚本在 Node 18+ 即可' },
  { label: '浏览器', value: 'Chrome · Edge · Chromium', note: '检查器通过 DevTools 协议驱动已安装的浏览器，不额外安装任何东西' },
  { label: '密钥', value: '不需要', note: '全程不用 API Key' },
  { label: '网络', value: '仅在找图时需要', note: 'assets.mjs 访问开放馆藏；其余脚本离线可用' },
];

export const COST = [
  { label: '一次完整构建', value: '约 30 – 45 分钟' },
  { label: 'Token 消耗', value: '几十万 tokens' },
  { label: '大头花在', value: '项目没有自己的照片时，找图与画图' },
];

export const TESTING = {
  headline: '五轮盲评，六个需求',
  body: '每轮让一个新 Agent 在同一个需求下分别构建：不带技能、带 v2、以及在其中三个需求上再带另一个设计技能；再由一个独立 Agent 对匿名截图按 Awwwards 权重打分。最后一轮的三个需求里，v2 得 7.7，无技能 7.8，其他技能 7.2，v2 在其中两个需求上排第一。过检查器时，v2 的页面各 0 次失败，无技能的页面 8 到 13 次。',
  limits:
    '局限：每个需求每轮只有一位评审（约半分的噪声）、评审是模型、且最后一轮用的需求在上一轮已经用过。完整记录见研究文档第 11 节。',
};
