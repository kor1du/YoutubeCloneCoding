function clickMore() {
  const toggleBtn = document.querySelector('.article_title_more');
  const title = document.querySelector('.article_title_name');

  toggleBtn.classList.toggle('active');
  title.classList.toggle('active');
}

function calculate(text, value) {
  if (value === true) {
    text.innerText = parseInt(text.innerText) + 1;
  } else {
    text.innerText = parseInt(text.innerText) - 1;
  }
  return;
}

function clickLike() {
  const likeBtn = document.querySelector('.article_button_thumbs-up_icon');
  const like = document.getElementById('article_likes');
  likeBtn.classList.toggle('active');

  if (document.querySelector('.article_button_thumbs-up_icon.active')) {
    calculate(like, true);
  } else {
    calculate(like, false);
  }
}

function clickDislike() {
  const dislikeBtn = document.querySelector('.article_button_thumbs-down_icon');
  const dislike = document.getElementById('article_dislike');
  dislikeBtn.classList.toggle('active');

  if (document.querySelector('.article_button_thumbs-down_icon.active')) {
    calculate(dislike, true);
  } else {
    calculate(dislike, false);
  }
}

function clickShare() {
  const shareBtn = document.querySelector('.article_button_share_icon');
  const buttonClass = document.querySelector('.article_button');
  const shareBoxBtn = document.querySelector('.article_shareBox');

  buttonClass.classList.toggle('active');
  shareBtn.classList.toggle('active');
  shareBoxBtn.classList.toggle('active');
}

function clickSave() {
  const saveBtn = document.querySelector('.article_button_save_icon');
  saveBtn.classList.toggle('active');
}

function clickReport() {
  const reportBtn = document.querySelector('.article_button_flag_icon');
  reportBtn.classList.toggle('active');
}

function clickSubscribe() {
  const subscribeBtn = document.querySelector('.article_profile_subscribe');
  subscribeBtn.classList.toggle('active');
}

function linkCopy() {
  const link = document.getElementById('article_shareBox_url_link').innerText;
  let textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.value = link;
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}
