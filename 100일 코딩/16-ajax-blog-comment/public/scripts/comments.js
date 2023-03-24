const loadCommentBtnElement = document.getElementById("load-comments-btn");

async function fetchCommentsForPost() {
  const postId = loadCommentBtnElement.dataset.postid;
  const response = await fetch(`/posts/${postId}/comments`);
  const responseData = await response.json();
  console.log(responseData)
}

loadCommentBtnElement.addEventListener("click", fetchCommentsForPost);
