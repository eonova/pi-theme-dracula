# Dracula 主题 — PI-Desktop Theme

A **pure theme** plugin for PI-Desktop based on the classic **Dracula** palette
(`#282a36` / `#44475a` / `#f8f8f2` / purple `#bd93f9` / pink `#ff79c6` /
cyan `#8be9fd` / green `#50fa7b` / orange `#ffb86c` / red `#ff5555`).

No panel, no commands, no agent tools — just the theme.

## Install

Install the plugin, then open **设置 → 主题** and select **Dracula**.

## The palette

Mapped onto the host's semantic design tokens per the
[UI design-system spec](https://pi-docs.aiuo.net/spec/04-ux/07-ui-design-system):

- Surfaces: `bg-primary #282a36`, `bg-secondary / composer #343746`,
  `bg-tertiary / raised #44475a`, inset & sidebar `#21222c`
- Text: `#f8f8f2` primary, `#6272a4` muted (Dracula comment blue)
- Accent: purple `#bd93f9` (hover `#d6acff`, soft `#ff79c6`)
- Status: success `#50fa7b`, warning `#ffb86c`, error `#ff5555`, info `#8be9fd`

## Settings preview

![Settings preview](static/setting.jpg)

## Privacy & Safety

No network, file, clipboard or agent access. The theme CSS is sanitized by the
host (no scripts, no external resources). Bilingual metadata (en / zh-CN)
follows the app language.

## Develop

1. Open the Plugins page and use **Load development plugin**, pointing at this
   directory. PI-Desktop reloads the plugin whenever you save a file here.
2. Select the theme in **设置 → 主题**.
3. Validate and package:

```bash
pnpm pi-plugin check .
pnpm pi-plugin pack .
# writes dist/local.pi-theme-dracula-0.3.0.piplug
```

## Source

https://github.com/eonova/pi-theme-dracula
