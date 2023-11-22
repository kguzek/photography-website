const isGithubPagesBase =
  location.hostname.includes("github.io") ||
  location.pathname.includes("photography-website");

export const base = isGithubPagesBase
  ? `/${location.pathname.split("/")[1]}/`
  : "/";
