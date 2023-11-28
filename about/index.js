const today = new Date();
const age = today.getFullYear() - (today.getMonth() < 4 ? 2006 : 2005);
const elem = document.getElementById("about-intro")
elem.innerText = elem.innerText.replace('{{age}}', age);
