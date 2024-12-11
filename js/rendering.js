import { createPosts } from "./data.js";

const picturesContainer = document.querySelector(".pictures");
const pictureTemplate = document.querySelector("#picture").content;

const posts = createPosts();
const fragment = document.createDocumentFragment();

posts.forEach((picture) => {
  const { url, description, comments, likes } = picture;
  const pictureElement = pictureTemplate.cloneNode(true);
  const img = pictureElement.querySelector(".picture__img");
  img.src = url;
  img.alt = description;
  pictureElement.querySelector(".picture__likes").textContent = likes;
  pictureElement.querySelector(".picture__comments").textContent =
    comments.length;
  picturesContainer.appendChild(pictureElement);
});

picturesContainer.appendChild(fragment);
