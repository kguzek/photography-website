const oldElem = document.querySelector("script#replace_with_base");
const newElem = document.createElement("base");
const githubPagesBase = location.hostname.includes("github.io");
newElem.href = githubPagesBase ? `/${location.pathname.split("/")[1]}/` : "/";
console.log(newElem.href);
oldElem.parentNode.replaceChild(newElem, oldElem);
