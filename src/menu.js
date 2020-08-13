var row = document.createElement("div");
var col1 = document.createElement("div");
var imgArr = [];
export function renderMenu() {
  row.className = "row";
  col1.className = "column";
  document.body.appendChild(row);
  row.appendChild(col1);
  createFirstColumn();
}
function createFirstColumn() {
  createImgElements(imgArr);
  setSource(imgArr);
  for(var i = 0 ; i < 7 ; i++)
  col1.append(imgArr[i]);

}
function createImgElements(imgArr) {
    for (var i = 0; i < 7; i++) {
        var img = document.createElement("img");
        imgArr.push(img);
    }
}
function setSource(imgArr) {
    for(var i = 0 ; i < 7 ; i++)
    imgArr[i].src = `../img-menu/${i+1}.jpeg`;
}
