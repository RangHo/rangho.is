import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetWind4(),
    presetTypography({
      cssExtend: (theme) => ({
        // Override font family setting for headings.
        "h1, h2, h3, h4, h5, h6": {
          "font-family": "var(--font-head)",
        },
        // GFM-like "admonition" blocks.
        ".note": {
          color: "var(--un-prose-quotes)",
          "border-inline-start-width": "0.25rem",
          "border-inline-start-color": "var(--un-prose-quote-borders)",
          "padding-inline-start": "2em",
        },
        ".note p:first-of-type::before": {
          content: '"Note: "',
          'font-weight': '600',
        },
      }),
    }),
    presetIcons(),
    presetWebFonts({
      provider: "fontsource",
      fonts: {
        head: ["Gugi", "WDXL Lubrifont JP N"],
        sans: ["Noto Sans", "Noto Sans KR", "Noto Sans JP"],
        mono: "Victor Mono",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
