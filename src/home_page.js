const container = document.querySelector("#content");
export function renderHomePage() {
  var top = document.createElement("div");
  container.appendChild(top);
  top.className = "topnav";
  var home = makeAlink("HOME");
  var menu = makeAlink("MENU");
  var contact = makeAlink("CONTACT");
  top.append(contact , menu , home);
  addLogo();
  addMiddleText();
 
}
function addLogo() {
  const name = `Z_Z`;
  var logoDiv = document.createElement("div");
  logoDiv.className = "topleft";
  container.appendChild(logoDiv);
  var logoPara = document.createElement("p");
  logoPara.textContent = name;
  logoPara.style = "color:#FFFF00";
  logoDiv.appendChild(logoPara);
}
function addMiddleText() {
  var middleDiv = document.createElement("div");
  middleDiv.className = "middle";
  container.appendChild(middleDiv);
  var tagLine = document.createElement("h1");
  tagLine.textContent = `The Best Burger You'll Bite`;
  middleDiv.appendChild(tagLine);
  var line = document.createElement("hr");
  middleDiv.appendChild(line);
}
function makeAlink(value) {
  var a = document.createElement('a');
  var linkText = document.createTextNode(value);
  a.appendChild(linkText);
  a.title = value;
  a.href = "#";
  document.body.appendChild(a);
  return a;

}
