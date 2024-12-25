import { posts } from "./rendering.js";

const body = document.querySelector("body");
// ююю
const bigPictureModalElement = document.querySelector(".big-picture");
const bigPictureCloseElement = document.querySelector(".big-picture__cancel");
const bigPictureImg = document.querySelector(".big-picture-photo");
const postDescription = document.querySelector(".social__caption");
const likesCount = document.querySelector(".likes-count");
const socialCommentsCount = bigPictureModalElement.querySelector(
  ".social__comment-count"
);
const socialCommentsLoader = bigPictureModalElement.querySelector(
  ".social__comments-loader"
);
const commentTemplate = document.querySelector("#post-comment").content;

const COMMENTS_PER_LOAD = 5;
let shownCommentsCount = 0;
let currentPostComments = [];

function renderComments() {
  const commentsContainer = document.querySelector(".social__comments");
  commentsContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const commentsToShow = currentPostComments.slice(0, shownCommentsCount);
  commentsToShow.forEach(({ avatar, message, name }) => {
    const commentElement = commentTemplate.cloneNode(true);
    const commentImg = commentElement.querySelector(".social__picture");
    const commentText = commentElement.querySelector(".social__text");

    commentImg.src = avatar;
    commentImg.alt = name;
    commentText.textContent = message;

    fragment.appendChild(commentElement);
  });

  commentsContainer.appendChild(fragment);

  socialCommentsCount.innerHTML = `${shownCommentsCount} из <span class="comments-count">${currentPostComments.length}</span> комментариев`;

  if (shownCommentsCount >= currentPostComments.length) {
    socialCommentsLoader.classList.add("hidden");
  } else {
    socialCommentsLoader.classList.remove("hidden");
  }
}

function showFullScreenPost(evt) {
  const target = evt.target;
  const pictureElement = target.closest(".picture");

  if (pictureElement) {
    const likes = pictureElement.querySelector(".picture__likes").textContent;
    currentPostComments = posts.find(
      (post) => `http://localhost:3000/${post.url}` === target.src
    ).comments;

    shownCommentsCount = Math.min(
      COMMENTS_PER_LOAD,
      currentPostComments.length
    );

    body.classList.add("modal-open");
    bigPictureModalElement.classList.remove("hidden");
    bigPictureImg.src = target.getAttribute("src");
    postDescription.textContent = target.getAttribute("alt");
    likesCount.textContent = likes;

    renderComments();
  }
}

socialCommentsLoader.addEventListener("click", () => {
  shownCommentsCount = Math.min(
    shownCommentsCount + COMMENTS_PER_LOAD,
    currentPostComments.length
  );
  renderComments();
});

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
