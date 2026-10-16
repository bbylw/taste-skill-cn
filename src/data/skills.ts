export type Skill = {
  /** 仓库中的文件夹名 */
  folder: string;
  /** 传给 `--skill` 的安装名（取自 SKILL.md frontmatter 的 name） */
  installName: string;
  /** 显示名 */
  label: string;
  /** 一句话定位 */
  tagline: string;
  /** 详细说明 */
  summary: string;
  /** 什么时候用它 */
  useWhen: string[];
  /** 分组标签，用于色块配色 */
  group: 'default' | 'task' | 'image' | 'legacy';
  /** 特殊徽标，例如 Beta */
  badge?: string;
};

/** 默认技能：v2，仓库里唯一一个「做设计」的主技能 */
export const DEFAULT_SKILL: Skill = {
  folder: 'taste-skill',
  installName: 'design-taste-frontend',
  label: 'taste-skill',
  tagline: 'v2 · 默认技能',
  summary:
    '面向落地页、营销官网、作品集与产品页的艺术指导，任何技术栈都可用。它不再是一份单文件说明，而是一个文件夹：指令、九份参考文件、一个方向库，以及四个零依赖脚本。它先盘点这个客户独有的东西，抽三个研究方向让你选一个，用真实图片把页面建起来，最后在真实浏览器里量一遍并挑自己的毛病。',
  useWhen: [
    '从零做一个对外的公开页面',
    '把一个「看起来像 AI 做的」页面救回来',
    '需要艺术指导，而不只是一套组件',
  ],
  group: 'default',
};

/** 针对特定任务的专项技能 */
export const TASK_SKILLS: Skill[] = [
  {
    folder: 'redesign-skill',
    installName: 'redesign-existing-projects',
    label: 'redesign-skill',
    tagline: '改造已有项目',
    summary:
      '适用于已经存在的项目：先审计界面，找出布局、留白、层级和样式上的问题，再动手修，而不是从头重做一套视觉。',
    useWhen: ['界面能用但不好看', '想在不动品牌的前提下提升质感'],
    group: 'task',
  },
  {
    folder: 'image-to-code-skill',
    installName: 'image-to-code',
    label: 'image-to-code-skill',
    tagline: '先出图，再写码',
    summary:
      '以图像为先的完整流程：先生成网站参考图，深入分析它们，再实现与之匹配的前端代码。一条链路走完「图像 → 分析 → 代码」。',
    useWhen: ['视觉方向还没定', '想先看到画面再决定实现'],
    group: 'task',
  },
  {
    folder: 'gpt-tasteskill',
    installName: 'gpt-taste',
    label: 'gpt-tasteskill',
    tagline: 'GPT / Codex 的严格变体',
    summary:
      '面向 GPT 与 Codex 的更严格版本：更高的布局差异度、更强的动效方向感、更激进的反套路策略。',
    useWhen: ['用 GPT 或 Codex 构建', '想要更强的动效与布局约束'],
    group: 'task',
  },
  {
    folder: 'soft-skill',
    installName: 'high-end-visual-design',
    label: 'soft-skill',
    tagline: '精致、平静、奢华',
    summary:
      '冷静而高级的界面语言：柔和的对比、充足的留白、讲究的字体层级，以及带弹性回弹的动效。',
    useWhen: ['视觉方向已经确定', '要做高端产品展示或品牌官网'],
    group: 'task',
  },
  {
    folder: 'minimalist-skill',
    installName: 'minimalist-ui',
    label: 'minimalist-skill',
    tagline: '编辑型产品界面',
    summary: 'Notion / Linear 一类的编辑型产品界面：克制的配色、清晰的结构、无装饰的排版层级。',
    useWhen: ['要做产品界面而不是营销页', '想要克制的单色系'],
    group: 'task',
  },
  {
    folder: 'brutalist-skill',
    installName: 'industrial-brutalist-ui',
    label: 'brutalist-skill',
    tagline: '粗野工业风',
    summary: '强硬的机械感语言：瑞士字体、锐利的尺度对比、实验性的布局。',
    useWhen: ['想要强烈的态度', '做实验性、叛逆的表达'],
    group: 'task',
    badge: 'Beta',
  },
  {
    folder: 'stitch-skill',
    installName: 'stitch-design-taste',
    label: 'stitch-skill',
    tagline: '兼容 Google Stitch',
    summary: '为 Google Stitch 准备的语义化设计规则，并可选导出 DESIGN.md 规范文件。',
    useWhen: ['在 Google Stitch 里工作', '需要一份可导出的设计规范'],
    group: 'task',
  },
  {
    folder: 'output-skill',
    installName: 'full-output-enforcement',
    label: 'output-skill',
    tagline: '治「半成品输出」',
    summary: '当模型总是交半成品时用它：强制完整输出，禁止占位注释，禁止「此处省略」。',
    useWhen: ['Agent 经常截断输出', '代码里总出现 TODO 和省略号'],
    group: 'task',
  },
];

/** 图像生成类技能：只出设计图，不写代码 */
export const IMAGE_SKILLS: Skill[] = [
  {
    folder: 'imagegen-frontend-web',
    installName: 'imagegen-frontend-web',
    label: 'imagegen-frontend-web',
    tagline: '网站构图',
    summary:
      '首页、落地页、多区块页面的构图参考图：强调排版、留白与反套路的艺术指导。只生成图像，不写代码。',
    useWhen: ['需要一个网站的画面参考', '先定构图再交给编码 Agent'],
    group: 'image',
  },
  {
    folder: 'imagegen-frontend-mobile',
    installName: 'imagegen-frontend-mobile',
    label: 'imagegen-frontend-mobile',
    tagline: '移动端屏幕与流程',
    summary: 'iOS / Android / 跨平台的移动端界面与流程概念图，统一视觉风格与易读字体。只生成图像，不写代码。',
    useWhen: ['要做移动端界面', '需要多屏流程的视觉草案'],
    group: 'image',
  },
  {
    folder: 'brandkit',
    installName: 'brandkit',
    label: 'brandkit',
    tagline: '品牌套件板',
    summary: '品牌套件概览图：Logo 方向、配色系统、字体与跨品类的视觉应用。只生成图像，不写代码。',
    useWhen: ['要从零建立品牌视觉', '需要一页说清全套品牌规范'],
    group: 'image',
  },
];

/** 历史版本：为依赖其精确行为的项目保留 */
export const LEGACY_SKILLS: Skill[] = [
  {
    folder: 'taste-skill-v2-experimental',
    installName: 'design-taste-frontend-v2-experimental',
    label: 'taste-skill-v2-experimental',
    tagline: '上一版默认（已冻结）',
    summary:
      '单文件、三旋钮驱动的重写版，是 v2 成为默认之前的默认技能。保留了 DESIGN_VARIANCE / MOTION_INTENSITY / VISUAL_DENSITY 三个旋钮与一整套硬性规则。已不再迭代。',
    useWhen: ['你的项目依赖它的确切行为'],
    group: 'legacy',
  },
  {
    folder: 'taste-skill-v1',
    installName: 'design-taste-frontend-v1',
    label: 'taste-skill-v1',
    tagline: '最初的版本',
    summary: '原始发布的 taste-skill：旋钮驱动的理念、反套路规则、以及一套模式名参考词汇。原样保留，不做改动。',
    useWhen: ['你需要最初的、未经改动的行为'],
    group: 'legacy',
  },
];

/** 选型指引 */
export const CHOOSER: { question: string; answer: string }[] = [
  { question: '要做一个新的公开页面', answer: 'taste-skill' },
  { question: '要改一个已经存在的页面', answer: 'redesign-skill' },
  { question: '视觉方向已经定了', answer: 'soft-skill / minimalist-skill / brutalist-skill' },
  { question: '想先要图，再要代码', answer: 'image-to-code-skill，或任一图像生成技能' },
  { question: 'Agent 总是把输出砍短', answer: 'output-skill' },
];

/** v1 / v2-experimental 共有的三个旋钮 */
export const DIALS: { name: string; low: string; high: string }[] = [
  { name: 'DESIGN_VARIANCE', low: '居中、规整', high: '非对称、现代' },
  { name: 'MOTION_INTENSITY', low: '只有悬停微动效', high: '滚动驱动' },
  { name: 'VISUAL_DENSITY', low: '宽敞通透', high: '密集' },
];

export const ALL_SKILLS: Skill[] = [DEFAULT_SKILL, ...TASK_SKILLS, ...IMAGE_SKILLS, ...LEGACY_SKILLS];
