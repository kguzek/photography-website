const today = new Date();
const age = today.getFullYear() - (today.getMonth() < 4 ? 2006 : 2005);
document.getElementById("age").innerText = age;
