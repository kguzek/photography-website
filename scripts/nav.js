const isGithubPagesBase =
  location.hostname.includes("github.io") ||
  location.pathname.includes("photography-website");

const base = isGithubPagesBase
  ? `/${location.pathname.split("/")[1]}/`
  : "/";

fetch("../components/nav.html")
  .then((res) => res.text())
  .then((text) => {
    const oldElem = document.querySelector("script#replace_with_navbar");
    const newElem = document.createElement("nav");
    newElem.innerHTML = text;
    oldElem.parentNode.replaceChild(newElem, oldElem);

    const path = location.pathname.split("/");
    const pathSegment = path[isGithubPagesBase ? 2 : 1];
    for (const child of document.querySelectorAll(".navbar li")) {
      const grandchild = child.children[0];
      if (!grandchild) continue;
      const href = grandchild.getAttribute("href");

      if (pathSegment === href.replace("/", "")) {
        child.classList.add("active");
        console.log("doner");
      }
      grandchild.href = base + href;
    }
  });
