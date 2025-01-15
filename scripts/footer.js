fetch("components/footer.html")
  .then((res) => res.text())
  .then((text) => {
    const oldElem = document.querySelector("#replace_with_footer");
    const newElem = document.createElement("footer");
    newElem.innerHTML = text.replace("{YEAR}", new Date().getFullYear());
    oldElem.parentNode.replaceChild(newElem, oldElem);
  });
