fetch("/components/nav.html")
  .then((res) => res.text())
  .then((text) => {
    const oldElem = document.querySelector("script#replace_with_navbar");
    const newElem = document.createElement("nav");
    newElem.innerHTML = text;
    oldElem.parentNode.replaceChild(newElem, oldElem);

    const path = location.pathname.split("/");
    for (const child of document.querySelectorAll(".navbar li")) {
      if (child.children[0]?.href?.includes(path[1])) {
        child.classList.add("active");
        break;
      }
    }
  });
