export function setTheme(themeName: string) {
  document.documentElement.setAttribute('color-theme', themeName);
}

export function setFold(fold: boolean) {
  document.documentElement.setAttribute('under-overlay-fold', fold ? 'fold' : 'unfold');
}

// Initialize theme based on OS preference
export const userPrefersDark: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
