import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
} from "unocss";

export default defineConfig({
  presets: [
    presetWind4(),
    presetTypography({
      cssExtend: {
        // Override font family setting for headings.
        "h1, h2, h3, h4, h5, h6": {
          "font-family": "var(--font-head)",
        },
        // GFM-like "admonition" blocks.
        ".note": {

        }
      }
    }),
    presetIcons(),
    presetWebFonts({
      provider: 'fontsource',
      fonts: {
        head: ["Gugi", "WDXL Lubrifont JP N"],
        sans: ["Noto Sans", "Noto Sans KR", "Noto Sans JP"],
        mono: "Victor Mono",
      },
    }),
  ],
});
