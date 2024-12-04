import { createPostDescription } from "./data.js";
import "./utils.js";

const postsArr = Array.from({ length: 25 }, createPostDescription);
console.log(postsArr);
