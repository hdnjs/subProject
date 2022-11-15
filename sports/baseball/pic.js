var myImage = document.getElementById("pic-box");
var imageArr = ["img/11.jpg", "img/22.jpg", "img/33.jpg"];
var imageIndex = 0;

function changeImage() {
  myImage.setAttribute("src", imageArr[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArr.length) {
    imageIndex = 0;
  }
}
setInterval(changeImage, 3000);
