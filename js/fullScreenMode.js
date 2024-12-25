import { posts } from "./rendering.js";

const body = document.querySelector("body");

const bigPictureModalElement = document.querySelector(".big-picture");
const bigPictureCloseElement = document.querySelector(".big-picture__cancel");
const bigPictureImg = document.querySelector(".big-picture-photo");
const postDescription = document.querySelector(".social__caption");
const likesCount = document.querySelector(".likes-count");
const commentsCount = document.querySelector(".comments-count");
const socialCommentsCount = bigPictureModalElement.querySelector(
  ".social__comment-count"
);
const socialCommentsLoader = bigPictureModalElement.querySelector(
  ".social__comments-loader"
);
const commentTemplate = document.querySelector("#post-comment").content;
const fragment = document.createDocumentFragment();

function showFullScreenPost(evt) {
  const target = evt.target;
  const pictureElement = target.closest(".picture");

  function getPostsComments(element) {
    const src = target.src;
    const elementUrl = `http://localhost:3000/${element.url}`;
    return elementUrl === src;
  }

  if (pictureElement) {
    const likes = pictureElement.querySelector(".picture__likes").textContent;
    const selectedPost = posts.find(getPostsComments);
    const selectedPostComments = selectedPost.comments;
    console.log(selectedPostComments);

    const commentsContainer = document.querySelector(".social__comments");
    commentsContainer.innerHTML = "";

    body.classList.add("modal-open");
    bigPictureModalElement.classList.remove("hidden");
    socialCommentsCount.classList.add("hidden");
    socialCommentsLoader.classList.add("hidden");

    bigPictureImg.src = target.getAttribute("src");
    postDescription.textContent = target.getAttribute("alt");
    likesCount.textContent = likes;
    commentsCount.textContent = selectedPostComments.length;

    selectedPostComments.forEach(({ avatar, message, name }) => {
      const commentElement = commentTemplate.cloneNode(true);
      const commentImg = commentElement.querySelector(".social__picture");
      const commentText = commentElement.querySelector(".social__text");

      commentImg.src = avatar;
      commentImg.alt = name;
      commentText.textContent = message;

      fragment.appendChild(commentElement);
    });

    commentsContainer.appendChild(fragment);
  }
}

bigPictureCloseElement.addEventListener("click", () => {
  bigPictureModalElement.classList.add("hidden");
  body.classList.remove("modal-open");
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    bigPictureModalElement.classList.add("hidden");
    body.classList.remove("modal-open");
  }
});

export { showFullScreenPost };
