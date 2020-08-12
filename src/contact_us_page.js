var div;
div = document.createElement("div");
div.id = "container";
div.className = "border pad";
document.getElementsByTagName("body")[0].appendChild(div);
export function renderContactUs() {
  createHeading();
  createForm();
  div.style.display = "none";
}
function createHeading() {
  let text = document.createElement("h1");
  text.textContent = "Contact Us";
  div.appendChild(text);
}
function createForm() {
  var Name = document.createElement("input");
  Name.type = "text";
  Name.placeholder = "Your Name...";
  var placeForText = document.createElement("textarea");
  placeForText.placeholder = "Describe Your Experience";
  placeForText.style = "height:200px";
  var btn = document.createElement("input");
  btn.type = "submit";
  btn.value = "Submit";

  div.append(Name,placeForText,btn );
}

