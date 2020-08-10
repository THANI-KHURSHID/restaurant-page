const container = document.querySelector("#content");
export function whenPageLoads() {
  addHeading();
  addImage();
  addAboutUs();
}
function addHeading() {
  console.log("heading called");
  const name = `Zaigham's Zingers`;
  var h1 = document.createElement("h1");
  h1.textContent = name;
  container.appendChild(h1);
}
function addImage() {
  console.log("image put");
  const image = document.createElement("img");
  image.src = "../images/download.jpeg";
  container.appendChild(image);

}
function addAboutUs() {
  const str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit orci nec ex efficitur maximus. Aliquam rutrum id dui non lacinia. Sed a iaculis mauris, eu condimentum nisi. Duis vehicula tortor a viverra consectetur. Quisque vestibulum auctor viverra. Integer luctus ut ligula sed sollicitudin. Curabitur odio odio, egestas vitae lobortis eget, sodales vel magna. Suspendisse iaculis eros et arcu interdum venenatis. `;
  const para = document.createElement("p");
  para.textContent = str;
  container.appendChild(para);

}