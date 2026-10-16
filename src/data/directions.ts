export type Direction = {
  /** 上游 library/directions.json 里的 id */
  id: string;
  /** 中文名 */
  name: string;
  /** 原名 */
  nameEn: string;
  /** 一句话说明它凭什么成立 */
  idea: string;
  /** 情绪标签 */
  tones: string[];
  /** 配套的动效手法（对应 library/motions.json） */
  motion: string;
};

/** 二十个研究方向：draw.mjs 会从里面发出三张牌，让代理选一张 */
export const DIRECTIONS: Direction[] = [
  {
    id: 'name-as-monument',
    name: '名字即纪念碑',
    nameEn: 'The name as a monument',
    idea: '名字就是标题。把它放到成为建筑那么大：占满视口宽度、被边缘裁切、或堆叠铺满整屏。',
    tones: ['大胆', '编辑', '奢华'],
    motion: '缩放字标',
  },
  {
    id: 'sentence-as-layout',
    name: '句子即版式',
    nameEn: 'The sentence is the layout',
    idea: '一句短语用海报尺度排出来就是构图；句子里某个词的位置，不放词，放一样能看见的东西。',
    tones: ['大胆', '编辑'],
    motion: '遮罩标题',
  },
  {
    id: 'pinned-poster',
    name: '钉住的海报',
    nameEn: 'The pinned poster',
    idea: '有一部分始终钉在原地不动，其余的一切绕着它变化。',
    tones: ['大胆', '编辑'],
    motion: '钉住叙事',
  },
  {
    id: 'colour-chapters',
    name: '色彩章节',
    nameEn: 'Colour chapters',
    idea: '每个区块都是一章，各自一块顶天立地的平涂颜色。',
    tones: ['大胆', '活泼'],
    motion: '随滚动换色',
  },
  {
    id: 'place-carries-it',
    name: '让地点承担一切',
    nameEn: 'The place carries it',
    idea: '讲一个地方时，照片本身就是论点。',
    tones: ['安静', '奢华', '温润'],
    motion: '缓慢叠化',
  },
  {
    id: 'page-is-the-object',
    name: '页面即物件',
    nameEn: 'The page is the object',
    idea: '在对象的世界里找到一个已经存在的印刷品或实物，就把页面做成那个东西。',
    tones: ['温润', '活泼', '编辑'],
    motion: '幕布页脚',
  },
  {
    id: 'one-motif',
    name: '单一母题',
    nameEn: 'One motif',
    idea: '从对象身上取一个形状，让它接管整个系统。',
    tones: ['活泼', '技术', '温润', '大胆'],
    motion: '快门切换图',
  },
  {
    id: 'product-performs',
    name: '产品自己表演',
    nameEn: 'The product performs',
    idea: '软件最有说服力的时刻，是它当着你的面干活。',
    tones: ['技术', '安静'],
    motion: '钉住叙事',
  },
  {
    id: 'quiet-instrument',
    name: '安静的工具',
    nameEn: 'The quiet instrument',
    idea: '极端的克制。',
    tones: ['安静', '技术'],
    motion: '静止',
  },
  {
    id: 'hero-object',
    name: '主角，放大',
    nameEn: 'The object, large',
    idea: '把那个东西拿出来，放大到看起来不太合理的程度。',
    tones: ['大胆', '奢华', '安静'],
    motion: '快门切换图',
  },
  {
    id: 'specimen-catalogue',
    name: '标本目录',
    nameEn: 'The specimen catalogue',
    idea: '像图鉴介绍鸟类那样介绍你的东西：每件单独放在一块平色上，同一尺度、同一角度、名字写得朴素。',
    tones: ['活泼', '温润', '编辑'],
    motion: '可拖拽横排',
  },
  {
    id: 'borrowed-category',
    name: '借来的品类',
    nameEn: 'Dressed as something else',
    idea: '把对象当成属于另一个更鲜活的品类来做艺术指导。',
    tones: ['大胆', '活泼', '奢华'],
    motion: '贴边跑马灯',
  },
  {
    id: 'contact-sheet',
    name: '接触印相样张',
    nameEn: 'The contact sheet',
    idea: '一次把全部摊开：小、按顺序、并排放在一起。',
    tones: ['安静', '技术', '编辑'],
    motion: '索引加预览',
  },
  {
    id: 'editorial-report',
    name: '印刷年报',
    nameEn: 'The printed annual',
    idea: '像一本排得很好的印刷报告或杂志特稿：一张报头图、一个超大但压紧的标题、文字严格贴着栏线。',
    tones: ['编辑', '大胆'],
    motion: '遮罩标题',
  },
  {
    id: 'loud-flat-poster',
    name: '又响又平',
    nameEn: 'Loud and flat',
    idea: '像街头海报那样直白：平涂的高饱和颜色、能找到的最重的字体、又短又钝的句子、抠出来的照片。',
    tones: ['大胆', '活泼'],
    motion: '贴边跑马灯',
  },
  {
    id: 'split-stage',
    name: '分割舞台',
    nameEn: 'The split stage',
    idea: '有一半屏幕永远不动。',
    tones: ['温润', '安静', '编辑'],
    motion: '缓慢叠化',
  },
  {
    id: 'dense-tiles',
    name: '收纳整齐的板子',
    nameEn: 'The well-kept board',
    idea: '整页就是一块块边对边、只留细缝的格子板，像从正上方看一张收拾干净的桌子。',
    tones: ['技术', '大胆'],
    motion: '静止',
  },
  {
    id: 'uneven-photographs',
    name: '大小不一的照片',
    nameEn: 'Photographs at uneven sizes',
    idea: '一个平静的页面，照片像挂在画廊墙上那样各自占自己的尺寸和位置，文字小而轻地夹在中间。',
    tones: ['安静', '奢华', '温润', '编辑'],
    motion: '快门切换图',
  },
  {
    id: 'dark-room',
    name: '暗房',
    nameEn: 'The dark room',
    idea: '从上到下一整块暗场，里面放着被照亮的东西。',
    tones: ['安静', '奢华'],
    motion: '缓慢叠化',
  },
  {
    id: 'type-only-statement',
    name: '只有字体',
    nameEn: 'Type and nothing else',
    idea: '首屏只用文字、颜色和空间构成，好到没人会想念图片。',
    tones: ['大胆', '安静', '编辑', '技术'],
    motion: '遮罩标题',
  },
];

export type LibraryStat = { label: string; value: number; note: string };

/** 方向库的规模 */
export const LIBRARY: LibraryStat[] = [
  { label: '研究方向', value: 20, note: '每次抽三个，由代理选一个' },
  { label: '首屏构图', value: 48, note: '按方向发牌' },
  { label: '分区构图', value: 172, note: '按方向发牌' },
  { label: '免费字体系统', value: 44, note: '全部是免费字体' },
  { label: '配色', value: 56, note: '每套都可直接落地' },
  { label: '照片', value: 420, note: '研究与氛围参考' },
  { label: '动效手法', value: 11, note: '从静到滚动驱动' },
  { label: '研究过的站点', value: 181, note: '每个方向都注明出处' },
];

export const STUDY = {
  sites: 247,
  sources: 'One Page Love 与 Awwwards Sites of the Day',
} as const;
