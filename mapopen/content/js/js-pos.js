var content = document.getElementById("content");
var tileX,tileY,tileZoom;

tileX = "272606";
tileY = "211319";
tileZoom = "19";

var imagedraw = document.createElement("img");
imagedraw.className = "mapcontent"
imagedraw.src = "https://tile.openstreetmap.org/" + tileZoom + "/" + tileX + "/" + tileY + ".png";
content.appendChild(imagedraw);
