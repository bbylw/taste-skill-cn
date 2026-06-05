<p align="center">
  <img src="assets/readme-banner.png" alt="Taste Skill - 面向高端前端的反套路 Agent 技能" width="100%" />
</p>

# Taste Skill（品味技能）

<p align="center">
  <em>面向 AI 代理的反"套路"前端框架</em>
</p>

<p align="center">
  <a href="https://tasteskill.dev" title="Taste Skill - tasteskill.dev">
    <img src="assets/taste-skill-logo.webp" width="80" height="80" alt="Taste Skill" />
  </a>
</p>

<p align="center">
  <a href="https://tasteskill.dev">
    <img src="https://img.shields.io/badge/OPEN-tasteskill.dev-%23a855f7?style=for-the-badge&labelColor=%230f172a" alt="打开 tasteskill.dev" />
  </a>
</p>

可移植的 **Agent 技能**，用于提升 AI 构建的界面品质：在布局、排版、动效和留白上更讲究，而不是生成看起来千篇一律的 UI。本仓库还包含用于参考板（网页、移动端、品牌套件）的**图像生成技能**。可与 **ChatGPT Images** 或类似的生成器配合使用，然后将生成的画面交给 Codex、Cursor 或 Claude Code 来实现。

<p align="center">
<a href="https://github.com/Leonxlnx/taste-skill/stargazers"><img src="https://img.shields.io/github/stars/Leonxlnx/taste-skill?style=for-the-badge&logo=github&labelColor=1e293b&color=fbbf24" alt="GitHub stars"/></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-fbbf24?style=for-the-badge&labelColor=1e293b" alt="MIT License"/></a>
<a href="#installing"><img src="https://img.shields.io/badge/Tools-Codex%20%C2%B7%20Cursor%20%C2%B7%20Claude-111827?style=for-the-badge&labelColor=1e293b" alt="支持的代理"/></a>
<a href="https://www.tasteskill.dev/changelog"><img src="https://img.shields.io/badge/Changelog-Latest-059669?style=for-the-badge&labelColor=1e293b" alt="tasteskill.dev 更新日志"/></a>
</p>

## 免责声明

Taste Skill 没有官方发行的代币、硬币或加密项目。任何使用我本人姓名、形象或本项目名义的代币都与我无关，也未获得我的认可。

<p align="center"><sub><a href="#disclaimer">免责声明</a> · <a href="#installing">安装</a> · <a href="#skills">技能</a> · <a href="#settings-taste-skill-only">设置</a> · <a href="#examples">示例</a> · <a href="#support-the-project">赞助</a> · <a href="#research">研究</a> · <a href="#common-questions">常见问题</a> · <a href="#license">许可证</a></sub></p>

## 反馈与贡献

我们非常欢迎你的反馈。建议和 Bug 报告可通过以下方式提交：

- 在 GitHub 上发起 Pull Request 或 Issue  
- 私信 Twitter [@lexnlin](https://x.com/lexnlin) 或 [@blueemi99](https://x.com/blueemi99)  
- 发送邮件至 [hello@tasteskill.dev](mailto:hello@tasteskill.dev)

## 安装

[`npx skills add`](https://github.com/vercel-labs/agent-skills) CLI 会扫描本仓库的 `skills/` 目录，因此**下方所有技能（代码类与图像生成类）的安装方式完全相同。**

```bash
npx skills add https://github.com/Leonxlnx/taste-skill
```

通过技能的**安装名**（SKILL frontmatter 中的 `name:` 字段，不是文件夹名）安装单个技能：

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

你也可以将任何 `SKILL.md` 复制到你的项目中，或粘贴到 ChatGPT / Codex 对话中。

### 从旧版本升级

默认的 `taste-skill`（安装名 `design-taste-frontend`）现在是 **v2（实验性）**，是对原版 v1 的大幅重写。如果你已经安装了 v1，只需重新运行安装命令即可升级：

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

安装名未变，因此无需更新任何脚本。新的 SKILL.md 会原地覆盖旧版本。

如果你依赖 v1 的确切行为并希望明确固定到该版本：

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend-v1"
```

完整的 v1 到 v2 差异及改动理由请参阅 [CHANGELOG.md](CHANGELOG.md)。

## 技能

每个技能只做一件事；你不必一次安装所有。**实现类技能**输出代码。**图像生成类技能**仅输出参考图像。

`Install name` 列是你传递给 `--skill` 的确切值。

| 技能（文件夹） | 安装名 | 说明 |
| --- | --- | --- |
| **taste-skill** | `design-taste-frontend` | 🆕 **v2（实验性）** — 对默认技能的大幅重写。读取需求、推断设计语言、调节三个旋钮（VARIANCE / MOTION / DENSITY）。包含需求推断、设计系统映射、硬性长破折号禁令、规范的 GSAP 代码骨架、改版审计流程、严格的前置检查。正在积极迭代以推出 v2.0.0 稳定版。 |
| **taste-skill-v1** | `design-taste-frontend-v1` | 原始 v1 版本的 taste-skill，为依赖其确切行为的项目保留。仅当 v2 默认版本破坏了你的工作流中某些特定环节时才使用。 |
| **gpt-tasteskill** | `gpt-taste` | 针对 GPT/Codex 的更严格变体：更高的布局差异度、更强的 GSAP 方向感、更激进的反套路策略。 |
| **image-to-code-skill** | `image-to-code` | 以图像为先的流程：生成网站参考图，分析它们，然后实现与之匹配的前端。 |
| **redesign-skill** | `redesign-existing-projects` | 适用于已有项目：先审计 UI，再修复布局、留白、层级、样式。 |
| **soft-skill** | `high-end-visual-design` | 精致、平静、奢华的 UI：柔和对比、充足留白、优质字体、弹性动效。 |
| **output-skill** | `full-output-enforcement` | 应对模型输出半成品的情况：完整输出，禁止占位注释。 |
| **minimalist-skill** | `minimalist-ui` | 编辑型产品 UI（Notion/Linear 风格），克制的配色，清晰的结构。 |
| **brutalist-skill** | `industrial-brutalist-ui` | 强硬机械感语言：瑞士字体、锐利对比、实验性布局。 |
| **stitch-skill** | `stitch-design-taste` | 兼容 Google Stitch 的规则，包含可选的 `DESIGN.md` 导出格式。 |

### 图像生成类技能

这些技能仅生成设计图（不含代码）。可与 ChatGPT Images、Codex 图像模式或任何支持生图的代理一起使用。

| 技能（文件夹） | 安装名 | 说明 |
| --- | --- | --- |
| **imagegen-frontend-web** | `imagegen-frontend-web` | 网站构图：首页、着陆页、多区块页面，强调排版、留白、反套路的艺术指导。 |
| **imagegen-frontend-mobile** | `imagegen-frontend-mobile` | 移动端屏幕与流程：iOS/Android/跨平台、模型图、易读字体、统一的视觉风格。 |
| **brandkit** | `brandkit` | 品牌套件板：Logo 方向、配色、字体、跨品类的视觉应用。 |

### 我该用哪个？

- 首先使用 **taste-skill** 作为最稳妥的通用默认（现为 v2 实验版，详见 [CHANGELOG](CHANGELOG.md)）。
- 如果你依赖原始 taste-skill 的确切行为，请改装 **taste-skill-v1**。  
- 当你希望使用更严格的、面向 GPT/Codex 的规则以及动效/布局约束时，使用 **gpt-taste**。  
- 使用 **image-to-code-skill** 走 "图像 → 分析 → 代码" 的工作流。  
- 使用 **redesign-skill** 改进已有代码库，而不是从零开始做样式。  
- 当视觉方向已经确定时，叠加 **soft-skill**、**minimalist-skill** 或 **brutalist-skill**。  
- 如果代理经常截断输出，请加入 **output-skill**。  
- 当交付物是**图像**（构图、流程、品牌板）时，使用 **imagegen-frontend-web**、**imagegen-frontend-mobile** 或 **brandkit**，然后将结果交给你的编码代理。

### 图像优先小贴士

对于 **image-to-code-skill**，请在提示词中明确流程，例如：`遵循该技能：先生成图像，再分析，再写代码`。

### ChatGPT Images 与 Codex

附加或粘贴 **`imagegen-frontend-web`**、**`imagegen-frontend-mobile`** 或 **`brandkit`**，并请求你需要的画面，然后将渲染结果交给 Codex、Cursor 或 Claude Code。若希望一个工作流同时生成参考图并实现网站代码，请使用 **image-to-code-skill**。

## 设置（仅 taste-skill）

技能文件顶部的数字是 1-10 范围的三个旋钮：

- **DESIGN_VARIANCE**：布局实验性（低：居中/规整 · 高：非对称/现代）。
- **MOTION_INTENSITY**：动效深度（低：悬停微动效 · 高：滚动联动/磁吸动效）。
- **VISUAL_DENSITY**：每屏信息密度（低：宽敞通透 · 高：密集的仪表板风格）。

## 示例

使用 taste-skill 制作：

<p>
  <img src="examples/floria-top.webp" width="400" />
  <img src="examples/floria-bottom.webp" width="400" />
</p>

## 支持本项目

如果 Taste Skill 对你有所帮助，欢迎赞助支持：

[在 GitHub 上赞助](https://github.com/sponsors/Leonxlnx)

### 当前赞助者

<a href="https://github.com/dnakov"><img src="https://github.com/dnakov.png" width="40" height="40" style="border-radius:50%" alt="dnakov" title="dnakov" /></a>
<a href="https://github.com/AkramReshad"><img src="https://github.com/AkramReshad.png" width="40" height="40" style="border-radius:50%" alt="AkramReshad" title="AkramReshad" /></a>
<a href="https://github.com/ajmalaksar25"><img src="https://github.com/ajmalaksar25.png" width="40" height="40" style="border-radius:50%" alt="ajmalaksar25" title="ajmalaksar25" /></a>
<a href="https://github.com/krikkkk"><img src="https://github.com/krikkkk.png" width="40" height="40" style="border-radius:50%" alt="krikkkk" title="krikkkk" /></a>
<a href="https://github.com/navanchauhan"><img src="https://github.com/navanchauhan.png" width="40" height="40" style="border-radius:50%" alt="navanchauhan" title="navanchauhan" /></a>
<a href="https://github.com/robinebers"><img src="https://github.com/robinebers.png" width="40" height="40" style="border-radius:50%" alt="robinebers" title="robinebers" /></a>
<a href="https://github.com/JKc66"><img src="https://github.com/JKc66.png" width="40" height="40" style="border-radius:50%" alt="JKc66" title="JKc66" /></a>
<a href="https://github.com/u2393696078-rgb"><img src="https://github.com/u2393696078-rgb.png" width="40" height="40" style="border-radius:50%" alt="u2393696078-rgb" title="u2393696078-rgb" /></a>
<a href="https://github.com/a-human-created-this"><img src="https://github.com/a-human-created-this.png" width="40" height="40" style="border-radius:50%" alt="a-human-created-this" title="a-human-created-this" /></a>
<a href="https://github.com/AtharvaJaiswal005"><img src="https://github.com/AtharvaJaiswal005.png" width="40" height="40" style="border-radius:50%" alt="AtharvaJaiswal005" title="AtharvaJaiswal005" /></a>
<a href="https://github.com/ghughes7"><img src="https://github.com/ghughes7.png" width="40" height="40" style="border-radius:50%" alt="ghughes7" title="ghughes7" /></a>
<a href="https://github.com/mccun934"><img src="https://github.com/mccun934.png" width="40" height="40" style="border-radius:50%" alt="mccun934" title="mccun934" /></a>

<p align="center">
 <a href="https://www.star-history.com/leonxlnx/taste-skill">
  <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/badge?repo=Leonxlnx/taste-skill&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/badge?repo=Leonxlnx/taste-skill" />
   <img alt="Star History 排名" src="https://api.star-history.com/badge?repo=Leonxlnx/taste-skill" />
  </picture>
 </a>
</p>

## 研究

塑造这些技能的背景文章位于 [`research/`](research/)。

## 常见问题

**这与其他 AI 设计技能有什么不同？**  
多个专项变体、关键技能中可调节的旋钮，以及由专门研究支撑的反重复规则。所有规则在主流编码代理之间与框架无关。

**它支持 React、Vue、Svelte 吗？**  
支持。规则针对的是设计意图，而非某个单一框架的 API。

**SKILL.md 是什么？**  
一种可移植的指令文件，代理可自动加载；通过 `npx skills add` 安装，或直接复制到仓库或对话中。

**图像生成类技能也能用 `npx skills add` 安装吗？**  
可以。它们与代码类技能一同放在 `skills/` 下，因此同一个 CLI 可以发现它们。

## 许可证

[MIT 许可证](LICENSE) · 版权所有 (c) 2026 Leonxlnx
