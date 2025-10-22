import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

import extractorSvelte from "@unocss/extractor-svelte";

export default defineConfig({
  extractors: [extractorSvelte()],
  presets: [
    presetWind4(),
    presetTypography({
      cssExtend: (theme) => ({
        "max-width": "80ch",
        // Override font family setting for headings.
        "h1, h2, h3, h4, h5, h6": {
          "font-family": "var(--font-head)",
        },
        // Make striked text a bit lighter.
        s: {
          color: theme.colors?.gray?.[500],
        },
      }),
    }),
    presetIcons(),
    presetWebFonts({
      provider: "fontsource",
      fonts: {
        head: ["Gugi", "WDXL Lubrifont JP N"],
        sans: ["Noto Sans", "Noto Sans KR", "Noto Sans JP"],
        mono: ["Victor Mono"],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
