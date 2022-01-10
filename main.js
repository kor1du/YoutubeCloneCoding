function clickSearchBtn() {
  const searchBtn = document.querySelector('.fa-search');
  const text = document.getElementById('searchTextBox');
  const search = document.querySelector('.search');
  searchBtn.classList.toggle('active');
  text.classList.toggle('active');
  search.classList.toggle('active');

  search.addEventListener('click', function (event) {
    alert('You just searched : ' + text.value);
    window.location.reload();
  });
}

function clickLikeBtn() {
  const likeBtn = document.querySelector('.fa-thumbs-up');

  likeBtn.classList.toggle('active');
}

function clickDislikeBtn() {
  const disLikeBtn = document.querySelector('.fa-thumbs-down');

  disLikeBtn.classList.toggle('active');
}

function clickShareBtn() {
  const shareBtn = document.querySelector('.fa-share');

  shareBtn.classList.toggle('active');
}

function clickSaveBtn() {
  const saveBtn = document.querySelector('.fa-plus');

  saveBtn.classList.toggle('active');
}

function clickReportBtn() {
  const reportBtn = document.querySelector('.fa-font-awesome-flag');

  reportBtn.classList.toggle('active');
}

function clickSubscribeBtn() {
  const subscribeBtn = document.getElementsByClassName('subscribe')[0];

  if (subscribeBtn.innerText === 'SUBSCRIBE') {
    subscribeBtn.innerText = 'SUBSCRIBED';
  } else {
    subscribeBtn.innerText = 'SUBSCRIBE';
  }
  subscribeBtn.classList.toggle('active');
}

function clickReadMoreBtn() {
  const readMoreBtn = document.getElementsByClassName('title_p')[0];

  readMoreBtn.classList.toggle('active');
}
