/**
 * List of CSS modules from Highlight.js module directory.
 */
const hljsThemes: Record<string, { default: string }> = import.meta.glob(
  "../../node_modules/highlight.js/styles/*.min.css",
  {
    query: "?raw",
    eager: true,
  },
);

/**
 * Generate the Highlight.js theme record from the raw CSS modules.
 *
 * @returns Record of all themes with the name as key and the CSS text as values.
 */
function initialize(): Record<string, string> {
  const themes: Record<string, string> = {};

  for (const path in hljsThemes) {
    const basename = path
      .split("/")
      .pop()!
      .replace(/\.min.css$/, "");
    themes[basename] = hljsThemes[path].default;
  }

  return themes;
}

/**
 * Record of all Highlight.js themes available in the default installation.
 */
const themes = initialize();

export default themes;
