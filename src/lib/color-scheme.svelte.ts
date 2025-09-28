/**
 * Available options for color scheme.
 */
export type ColorScheme = "light" | "dark";

/**
 * Available options for user color scheme.
 */
export type UserColorScheme = ColorScheme | "system";

/**
 * Available options for system color scheme.
 */
export type SystemColorScheme = ColorScheme | "";

/**
 * Whether the current environment is a browser.
 */
const isBrowser = typeof document !== "undefined";

/**
 * Key for user color scheme in local storage.
 */
const userColorSchemeKey = "user-color-scheme";

/**
 * User color scheme.
 */
let userColorScheme: UserColorScheme = $state("system");

/**
 * System color scheme.
 */
let systemColorScheme: SystemColorScheme = $state("");

/**
 * Ensure the user color scheme is valid.
 *
 * If the given color scheme is not valid, it will default to the system color
 * scheme.
 *
 * @param scheme User color scheme to check.
 * @returns Valid user color scheme.
 */
function ensureUserColorScheme(scheme: string): UserColorScheme {
  if (["light", "dark", "system"].includes(scheme)) {
    scheme = "system";
  }
  return scheme as UserColorScheme;
}

/**
 * Handle changes in the system color scheme.
 */
function handleMediaQuery(e: MediaQueryListEvent) {
  systemColorScheme = e.matches ? "light" : "dark";
}

/**
 * Handle changes in the user color scheme in local storage.
 */
function handleLocalStorage(e: StorageEvent) {
  if (e.key !== userColorSchemeKey) return;

  userColorScheme = ensureUserColorScheme(e.newValue || "system");
}

/**
 * Initialize and register event listeners for color scheme changes.
 */
export function initializeColorScheme() {
  if (!isBrowser) return;

  // Initialize the system color scheme.
  systemColorScheme = window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";

  // Listen to changes in the system color scheme.
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", handleMediaQuery);

  // Listen to changes in the user color scheme in localStorage.
  window.addEventListener("storage", handleLocalStorage);
}

export function destroyColorScheme() {
  if (!isBrowser) return;

  window
    .matchMedia("(prefers-color-scheme: light)")
    .removeEventListener("change", handleMediaQuery);

  window.removeEventListener("storage", handleLocalStorage);
}

/**
 * Expose the color scheme state to other components.
 */
export function getColorScheme() {
  return {
    get user() {
      return userColorScheme;
    },
    set user(value: UserColorScheme) {
      userColorScheme = value;
    },
    get system() {
      return systemColorScheme;
    },
    get isLight() {
      return (
        userColorScheme === "light" ||
        (userColorScheme === "system" && systemColorScheme === "light")
      );
    },
    set isLight(value: boolean) {
      userColorScheme = value ? "light" : "dark";
    },
  };
}
