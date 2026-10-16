export type Example = {
  title: string;
  brief: string;
  /** 这张图在演示什么 */
  caption: string;
  image: string;
  alt: string;
  /** 是否宽幅（用于网格布局） */
  wide?: boolean;
};

/** 上游 v2 示例：每个页面都由一份简短需求直接构建 */
export const EXAMPLES: Example[] = [
  {
    title: 'Böhne & Söhne · 店面',
    brief: '莱比锡一家二十个座位、一台烘焙机的咖啡店',
    caption: '首屏是一幅手绘的店面：门牌号、营业时间、烘焙日都长在画面里，而不是贴在画面上。',
    image: '/images/examples/coffee-storefront.webp',
    alt: '深色底的咖啡店落地页首屏，标题写着「TWENTY SEATS AND A ROASTER」，下方是一幅手绘的店铺立面',
    wide: true,
  },
  {
    title: 'Nachtschicht · 日期',
    brief: '每月第一个周六的 techno 夜场',
    caption: '档案照片做成青色单色调网格，日期用巨大的白色数字直接压在上面。',
    image: '/images/examples/night-dates.webp',
    alt: '青色背景的夜场页面，档案照片网格上叠着巨大的白色日期数字',
  },
  {
    title: 'Böhne & Söhne · 烘焙度',
    brief: '同一家店的烘焙日区块',
    caption: '四张真实照片从左到右逐级变大，用来讲明白「生豆 → 一爆 → 出豆 → 冷却」的四个阶段。',
    image: '/images/examples/coffee-roast.webp',
    alt: '浅色底的页面区块，标题为「Monday is roast day」，下方四张咖啡豆照片逐级放大',
  },
  {
    title: 'Böhne & Söhne · 柜台问答',
    brief: '同一家店的常见问题区块',
    caption: '把 FAQ 做成整幅色带，问题用大字号压在色块上，小标签沿对角线一级一级错开。',
    image: '/images/examples/coffee-questions.webp',
    alt: '浅色底上由薄荷绿、粉色与白色色带组成的问答区块，标签沿对角线错开排列',
  },
];

export const EXAMPLE_CREDITS = {
  note: '示例中的照片都是真实的，来自开放档案，并由技能逐一署名。',
  link: 'https://github.com/Leonxlnx/taste-skill/blob/main/examples/v2/CREDITS.md',
  film: 'https://github.com/Leonxlnx/taste-skill/releases/tag/v2.0.0',
};
