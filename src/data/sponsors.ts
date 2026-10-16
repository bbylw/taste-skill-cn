export type Sponsor = {
  name: string;
  url: string;
  blurb: string;
  /** public/ 下的图片路径 */
  logo: string;
  /** 暗色主题下替换用的 logo（可选） */
  logoDark?: string;
  /** logo 在白色底上是否需要内边距 */
  logoPad?: boolean;
};

/** 页面顶部的赞助商 */
export const SPONSORS: Sponsor[] = [
  {
    name: 'Sidrune AI',
    url: 'https://fluxionai.space/register?source=github&campaign=github-tasteskill&promo=TASTESKILL',
    blurb: '一个 API 接入 GPT、Claude 等主流模型。通过这个链接注册可获 3 美元 API 额度。',
    logo: '/images/sponsors/sidrune-ai.png',
    logoPad: true,
  },
  {
    name: 'interfaces.dev',
    url: 'https://interfaces.dev/?utm_source=tasteskill&utm_medium=sponsorship',
    blurb: '设计工程杂志，由 Jakub Krehel 主理。',
    logo: '/images/sponsors/interfaces-dev-icon.webp',
  },
  {
    name: 'React Bits',
    url: 'https://reactbits.dev',
    blurb: '面向创意界面的动画 React 组件库。',
    logo: '/images/sponsors/reactbits-icon-light.svg',
    logoDark: '/images/sponsors/reactbits-icon-dark.svg',
  },
  {
    name: 'IMG.LY',
    url: 'https://img.ly/',
    blurb: 'CreativeEditor SDK。',
    logo: '/images/sponsors/imgly-logo.svg',
  },
  {
    name: 'Sent.dm',
    url: 'https://www.sent.dm',
    blurb: 'SMS、WhatsApp 与 RCS 的消息 API。',
    logo: '/images/sponsors/sentdm.png',
  },
];

export type Supporter = {
  name: string;
  url: string;
  blurb: string;
  logo: string;
  /** 宽幅徽标而不是方形图标 */
  wide?: boolean;
};

/** 开源支持者 */
export const SUPPORTERS: Supporter[] = [
  {
    name: 'Kimi',
    url: 'https://platform.kimi.ai?track_id=track-20f0d64bcaba419bb425a3e8c306f65d&aff=taste-skill',
    blurb: 'taste-skill 用户首次购买可额外获得 10% API 额度。',
    logo: '/images/sponsors/kimi-icon.png',
  },
  {
    name: 'Vercel 开源计划',
    url: 'https://vercel.com/open-source-program',
    blurb: 'Vercel Open Source Program 提供支持。',
    logo: '/images/sponsors/vercel-logo.svg',
  },
];

/** 社区赞助者（GitHub 头像） */
export const COMMUNITY_SPONSORS: string[] = [
  'dnakov',
  'AkramReshad',
  'ajmalaksar25',
  'krikkkk',
  'navanchauhan',
  'robinebers',
  'JKc66',
  'u2393696078-rgb',
  'a-human-created-this',
  'AtharvaJaiswal005',
  'ghughes7',
  'mccun934',
  'techmedic5',
  'bytewerk-dev',
  'LuisGot',
  'oskar-collab',
  'denvit',
  'onedollarstock',
  'KANA-33',
  'emilkowalski',
  'AnthonyLiuVa',
  'Wolfy18',
  'Gigslol',
];
