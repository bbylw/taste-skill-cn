export type Command = {
  id: string;
  label: string;
  /** 一句话说明 */
  note: string;
  /** 代码块内容（多行用 \n） */
  code: string;
  /** 语法提示：shell / claude / codex */
  lang: 'shell' | 'claude' | 'codex';
};

export const INSTALL_COMMANDS: Command[] = [
  {
    id: 'all',
    label: '安装全部技能',
    note: '用 npx skills CLI 一次装上这个仓库里的所有技能。',
    code: 'npx skills add https://github.com/Leonxlnx/taste-skill',
    lang: 'shell',
  },
  {
    id: 'single',
    label: '只装一个技能',
    note: '传入技能的安装名。安装名取自 SKILL.md frontmatter 的 name 字段，不是文件夹名。',
    code: 'npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"',
    lang: 'shell',
  },
  {
    id: 'upgrade',
    label: '已经装过？再跑一次就是升级',
    note: '安装名从没变过，重新运行同一条命令会原地覆盖旧版本，不需要改任何脚本。',
    code: 'npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"',
    lang: 'shell',
  },
  {
    id: 'pin-old',
    label: '固定到旧版本',
    note: '如果你的项目依赖旧版本的确切行为，用它们各自的安装名。',
    code: 'npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend-v2-experimental"\nnpx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend-v1"',
    lang: 'shell',
  },
];

export const PLUGIN_COMMANDS: Command[] = [
  {
    id: 'claude',
    label: 'Claude Code 插件',
    note: '在 Claude Code 里运行。每个技能都带 taste-skill: 前缀，不会和你已有的技能撞名。之后用 /plugin update 升级。',
    code: '/plugin marketplace add Leonxlnx/taste-skill\n/plugin install taste-skill@taste-skill',
    lang: 'claude',
  },
  {
    id: 'codex',
    label: 'Codex 插件',
    note: '装完之后新开一个 Codex 会话，技能才会被加载。',
    code: 'codex plugin marketplace add Leonxlnx/taste-skill\ncodex plugin add taste-skill@taste-skill',
    lang: 'codex',
  },
  {
    id: 'clone',
    label: '从克隆链接，而不是复制',
    note: './install.sh 会把技能软链到 Agent 的技能目录（--codex 指向 Codex，--all-agents 两个都指），这样一次 git pull 就能原地更新。--list 会列出所有安装名。',
    code: './install.sh --all-agents\n./install.sh --list',
    lang: 'shell',
  },
];
