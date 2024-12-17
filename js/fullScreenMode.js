const fullScreenPost = document.querySelector("section.big-picture.overlay");
const pictureContainer = document.querySelector("section.pictures.container");

function onPostClick(evt) {
  console.log("работает");
  const img = fullScreenPost.querySelector(".big-picture-photo");
  const close = fullScreenPost.querySelector(
    "button.big-picture__cancel.cancel"
  );
  close.addEventListener("click", closeFullScreenMode);
  //img.src = url;
  //img.alt = description;
  fullScreenPost.classList.remove("hidden");
}

function closeFullScreenMode() {
  fullScreenPost.classList.add("hidden");
}

pictureContainer.addEventListener("click", onPostClick);
export { onPostClick };
