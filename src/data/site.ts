/**
 * 站点常量与外部链接。
 * 上游（技能本体、Star、Issue）指向 Leonxlnx/taste-skill；
 * 本站自身（源码与部署）指向 bbylw/taste-skill-cn。
 */

export const SITE = {
  title: 'Taste Skill',
  shortName: 'Taste Skill',
  tagline: '面向 AI Agent 的反套路前端框架',
  description:
    'Taste Skill 是一组可移植的 Agent 技能，让编码 Agent 去「做设计」而不是拼出千篇一律的落地页。v2 从 247 个精选站点研究中得出方向库，用真实图片与真实浏览器检查器把「不套路」变成硬性标准。',
  url: 'https://taste.ndjp.net',
  locale: 'zh-CN',
  version: '2.0.0',
  versionDate: '2026-10-13',
} as const;

export const LINKS = {
  upstreamRepo: 'https://github.com/Leonxlnx/taste-skill',
  upstreamStars: 'https://github.com/Leonxlnx/taste-skill/stargazers',
  upstreamIssues: 'https://github.com/Leonxlnx/taste-skill/issues',
  upstreamChangelog: 'https://github.com/Leonxlnx/taste-skill/blob/main/CHANGELOG.md',
  upstreamResearch: 'https://github.com/Leonxlnx/taste-skill/tree/main/research',
  upstreamLicense: 'https://github.com/Leonxlnx/taste-skill/blob/main/LICENSE',
  upstreamInstallScript: 'https://github.com/Leonxlnx/taste-skill/blob/main/install.sh',
  tastecode: 'https://tastecode.dev',
  tastecodeRepo: 'https://github.com/Leonxlnx/tastecode',
  tasteskillSite: 'https://tasteskill.dev',
  agentSkillsCli: 'https://github.com/vercel-labs/agent-skills',
  sponsor: 'https://github.com/sponsors/Leonxlnx',
  starHistory: 'https://www.star-history.com/leonxlnx/taste-skill',
  email: 'mailto:hello@tasteskill.dev',
  xLexnlin: 'https://x.com/lexnlin',
  xBlueemi99: 'https://x.com/blueemi99',
  cnRepo: 'https://github.com/bbylw/taste-skill-cn',
} as const;

export type NavItem = {
  href: string;
  label: string;
  /** 一句话说明，用于页脚与站内导览 */
  hint: string;
};

export const NAV: NavItem[] = [
  { href: '/skills', label: '技能', hint: '默认技能、专项技能与图像生成技能' },
  { href: '/install', label: '安装', hint: '一行命令，或装成编辑器插件' },
  { href: '/workflow', label: '工作原理', hint: 'v2 的六个步骤与检查器规则' },
  { href: '/examples', label: '示例', hint: '由技能构建的真实页面' },
  { href: '/changelog', label: '更新日志', hint: '按版本记录的变化' },
  { href: '/research', label: '研究', hint: '支撑这些结论的背景研究' },
  { href: '/faq', label: '常见问题', hint: '安装、图片、适用场景' },
];

export const FOOTER_LINKS: { group: string; items: { href: string; label: string; external?: boolean }[] }[] = [
  {
    group: '本站',
    items: [
      { href: '/skills', label: '技能' },
      { href: '/install', label: '安装' },
      { href: '/workflow', label: '工作原理' },
      { href: '/examples', label: '示例' },
      { href: '/changelog', label: '更新日志' },
      { href: '/research', label: '研究' },
      { href: '/faq', label: '常见问题' },
    ],
  },
  {
    group: '上游',
    items: [
      { href: LINKS.upstreamRepo, label: 'GitHub 仓库', external: true },
      { href: LINKS.upstreamChangelog, label: 'CHANGELOG', external: true },
      { href: LINKS.upstreamResearch, label: 'research/', external: true },
      { href: LINKS.tasteskillSite, label: 'tasteskill.dev', external: true },
      { href: LINKS.tastecode, label: 'tastecode.dev', external: true },
    ],
  },
  {
    group: '联系',
    items: [
      { href: LINKS.upstreamIssues, label: 'Issue / PR', external: true },
      { href: LINKS.xLexnlin, label: '@lexnlin', external: true },
      { href: LINKS.xBlueemi99, label: '@blueemi99', external: true },
      { href: LINKS.email, label: 'hello@tasteskill.dev' },
    ],
  },
];
