import { createPosts } from "./data.js";

const picturesContainer = document.querySelector(".pictures");
const pictureTemplate = document.querySelector("#picture").content;

const posts = createPosts();
const fragment = document.createDocumentFragment();

posts.forEach(({ url, description, comments, likes }) => {
  // const postElement = document.createElement("div");
  const pictureElement = pictureTemplate.cloneNode(true);
  // postElement.appendChild(pictureElement);
  const img = pictureElement.querySelector(".picture__img");
  // console.log();
  img.src = url;
  img.alt = description;
  pictureElement.querySelector(".picture__likes").textContent = likes;
  pictureElement.querySelector(".picture__comments").textContent =
    comments.length;
  fragment.appendChild(pictureElement);
  /* postElement.addEventListener("click", () =>
    onPostClick(url, description, comments, likes)
  );*/
});

picturesContainer.appendChild(fragment);

export { posts };
