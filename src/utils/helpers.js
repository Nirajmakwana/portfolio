/**
 * Helper to safely open external URLs in a new tab with noopener security
 */
export const openExternalLink = (url, target = "_blank") => {
  if (!url) return;
  window.open(url, target, "noopener,noreferrer");
};

export const NavigateToUrl = openExternalLink;
