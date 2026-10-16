export type ChangeGroup = {
  heading: string;
  items: string[];
  /** 列表类型：bullet 或 checked */
  kind?: 'bullet' | 'plain';
};

export type Release = {
  version: string;
  date: string;
  /** 是否当前版本 */
  current?: boolean;
  /** 一句话摘要 */
  summary: string;
  groups: ChangeGroup[];
};

/** 内容取自上游 CHANGELOG.md，按中文站阅读习惯重组 */
export const RELEASES: Release[] = [
  {
    version: '2.0.0',
    date: '2026-10-13',
    current: true,
    summary: 'taste-skill 变成 v2：从一份说明书变成一个带方向库、真实图片流程和真实浏览器检查器的技能文件夹。',
    groups: [
      {
        heading: '仓库变化',
        items: [
          'taste-skill（安装名 design-taste-frontend）现在是 v2，一个全新的技能。安装名没有变。',
          '原来的默认版本 v2 (experimental) 保留为 taste-skill-v2-experimental（安装名 design-taste-frontend-v2-experimental）。',
          'v1 原样保留为 taste-skill-v1（安装名 design-taste-frontend-v1）。',
          '新增 CHANGELOG.md。',
          'Codex 可以把整个集合装成插件（.codex-plugin/、.agents/plugins/）。',
          '插件清单版本号统一为 2.0.0。',
          'skill.sh 现在同时接受安装名与文件夹名。',
          '移除了不再使用的赞助与 README 图片、scripts/ 里的一次性素材脚本，以及与 v2 相冲突的旧 Copilot 指令。',
        ],
      },
      {
        heading: 'v2 怎么工作',
        items: [
          '盘点：动手设计前，先列出这个客户独有的东西。',
          '抽牌：draw.mjs 从二十个研究方向里发三张牌，代理挑一张；随后脚本从方向库里发出字体系统、配色、首屏构图与分区构图。每个蓝图下方都会标注它与家规冲突的地方。',
          '立论：用一句话把客户自己的素材与那个方向的手法系在一起，并与最近的竞争者比对；再给访客一件能做的事。',
          '构建：内容写全；项目没有照片时，从开放馆藏里找主题真实世界的图片并署名。',
          '过闸：lint.mjs 扫源码，inspect.mjs 在真实浏览器里以 1440 / 768 / 390 三个宽度测量并判失败。',
          '回看：代理用自己的截图按评分表批判自己，修掉最差的三处，最多三轮。',
        ],
      },
      {
        heading: '真实图片与动效成为硬性要求',
        items: [
          'few-pictures：整页少于四张真实图片直接失败。照片、档案图像、影像、位图作品都算，SVG 手绘不算。',
          'no-real-pictures / no-footage：真实照片少于两张、或完全没有影像时给出警告。',
          'still-page：会动的元素少于 8 个失败，少于 16 个警告。计数覆盖 CSS 动画、过渡、Web Animations 与脚本驱动的变换。',
          'assets.mjs --video 可以检索开放许可的影像片段，用于静音循环播放。',
          '旧的「一处动效、其余不动」预算被取消；但每个区块都用同一套淡入上移，仍然禁止。',
        ],
      },
      {
        heading: '测试与成本',
        items: [
          '五轮盲评、六个需求：v2 的页面过检查器时各 0 次失败，无技能的页面 8 到 13 次。',
          '最后一轮的三个需求里，v2 得 7.7，无技能 7.8，另一款设计技能 7.2。',
          '一次完整构建约 30 到 45 分钟、几十万 tokens。',
        ],
      },
    ],
  },
  {
    version: 'v2-experimental',
    date: '上一版默认',
    summary: '单文件、三旋钮驱动的重写版。保留了旋钮哲学，加上结构、硬性规则与代理真正能照做的实现模式。已冻结，不再迭代。',
    groups: [
      {
        heading: '新增章节',
        items: [
          '§0 需求推断：动手写代码前先读场，声明一句话的设计判断。',
          '§2 需求到设计系统的映射：认出 Material / Fluent / Carbon / Polaris 等体系时，直接用官方包。',
          '§8 暗色模式协议：默认双模式，按项目声明令牌策略，强制对比度与层级对齐。',
          '§11 改造协议：先判断模式（全新 / 保持 / 大改），审计之后再动手。',
          '§12 区块库契约：用可迭代、有出处的方式扩充真实区块实现。',
          '§13 明确的边界：仪表盘、数据表、多步表单、原生移动端等不在范围内。',
          '§14 交付前检查清单。',
        ],
      },
      {
        heading: '被强化的禁令',
        items: [
          '全页禁止出现长破折号（em-dash），标题、正文、按钮、替代文本一律算。',
          '禁止「00 / INDEX」「06 · how it works」这类编号式小标签。',
          '禁止首屏出现版本号、装饰性状态点、滚动提示、图片上的胶囊标签。',
          '禁止用 div 拼假的界面截图，禁止在列表每一行上下加细线。',
          '禁止手写 SVG 图标，改用 Phosphor / HugeIcons / Radix / Tabler。',
        ],
      },
      {
        heading: '设计规则',
        items: [
          '全页只有一个强调色，一套圆角系统。',
          '每个 CTA 必须通过 WCAG AA 对比度。',
          '主标题不超过两行，副文案不超过 20 个词。',
          '整页锁定一种主题，不允许中途明暗翻转。',
        ],
      },
      {
        heading: '动效',
        items: [
          '动效库统一到 Motion（motion/react，Framer Motion 的新名字）。',
          '给出 GSAP 粘性堆叠与横向平移的标准代码骨架。',
          '禁止 window scroll 监听、用 React state 做滚动计算、在 rAF 循环里改 React state。',
          'MOTION_INTENSITY 大于 3 时必须处理 prefers-reduced-motion。',
        ],
      },
    ],
  },
  {
    version: 'v1',
    date: '最初的版本',
    summary: '最初的发布：旋钮驱动的理念、反套路规则、以及一套模式名参考词汇。保存在 skills/taste-skill-v1/，安装名 design-taste-frontend-v1。',
    groups: [],
  },
];
