// ================================ for the switch toggle =====================



var activeContent = null;
// ------------ for profile box -------------
var activeContent = null;

function toggleContent(contentId) {
    var content = document.getElementById(contentId);

    if (activeContent !== content) {
        if (activeContent !== null) {
            activeContent.style.display = 'none';
        }
        content.style.display = 'block';
        activeContent = content;
    }
}

// -------------- for the latest post --------------
var activeContent = null;

function togglePost(contentId) {
    var content = document.getElementById(contentId);

    if (activeContent !== content) {
        if (activeContent !== null) {
            activeContent.style.display = 'none';
        }
        content.style.display = 'block';
        activeContent = content;
    }
}

// -------------- for the liked post --------------


function toggleLikedPost(contentId) {
    var content = document.getElementById(contentId);

    if (activeContent !== content) {
        if (activeContent !== null) {
            activeContent.style.display = 'none';
        }
        content.style.display = 'block';
        activeContent = content;
    }
}


// -------------- for the upcoming event --------------


function toggleUpcomingEvent(contentId) {
  var content = document.getElementById(contentId);

  if (activeContent !== content) {
      if (activeContent !== null) {
          activeContent.style.display = 'none';
      }
      content.style.display = 'block';
      activeContent = content;
  }
}


// -------------- for the comapany link --------------


function toggleCompanyLink(contentId) {
  var content = document.getElementById(contentId);

  if (activeContent !== content) {
      if (activeContent !== null) {
          activeContent.style.display = 'none';
      }
      content.style.display = 'block';
      activeContent = content;
  }
}

// -------------- for the home --------------


function toggleHome(contentId) {
  var content = document.getElementById(contentId);

  if (activeContent !== content) {
      if (activeContent !== null) {
          activeContent.style.display = 'none';
      }
      content.style.display = 'block';
      activeContent = content;
  }
}




// ========== to close the reminder =========

const reminder = document.getElementById('reminder');
const closeReminderbtn = document.querySelector('.closeReminderbtn');

closeReminderbtn.addEventListener('click', function () {
  reminder.style.display = 'none';
});

// ================ for the See all latest Post =================
function toggleMembers(divId) {
  var show_post = document.getElementById("try-" + divId);
  var button = document.getElementById("toggle-btn-" + divId);

  if (show_post.style.display === "none") {
    show_post.style.display = "block";
    button.innerHTML = "See less";
  } else {
    show_post.style.display = "none";
    button.innerHTML = "See all";
  }
}

// ================ for the See all liked Post =================
function toggleLiked(divId) {
  var show_liked = document.getElementById("test-" + divId);
  var button = document.getElementById("toggle-bt-" + divId);

  if (show_liked.style.display === "none") {
    show_liked.style.display = "block";
    button.innerHTML = "See less";
  } else {
    show_liked.style.display = "none";
    button.innerHTML = "See all";
  }
}


// ============================== Function for dark mode desktop ============================
function call(name) {
  return document.querySelector(name);
}

const themeToggle = call("#themeToggle");

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.removeItem("theme");
  }
});

function checkTheme() {
  const localStorageTheme = localStorage.getItem("theme");

  if (localStorageTheme !== null && localStorageTheme === "dark-theme") {
    document.body.classList.add("dark-theme");
    themeToggle.checked = true;
  }
}

checkTheme();



// ============================== Function for dark mode mobile ============================

function call(name) {
  return document.querySelector(name);
}

const themeToggleMobile = call("#themeMobile");

themeToggleMobile.addEventListener("change", () => {
  if (themeToggleMobile.checked) {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.removeItem("theme");
  }
});

function checkThemeMobile() {
  const localStorageTheme = localStorage.getItem("theme");

  if (localStorageTheme !== null && localStorageTheme === "dark-theme") {
    document.body.classList.add("dark-theme");
    themeToggleMobile.checked = true;
  }
}

checkThemeMobile();






// ================ for the liked react =============

const likeSpan = document.querySelector('.like-span');
const commentSpan = document.querySelector('.comment-span');
const likeMessage = document.getElementById('like-message');
const commentModal = document.getElementById('comment-modal');
const commentInput = document.getElementById('comment-input');
const commentBtn = document.getElementById('comment-btn');
const commentSection = document.getElementById('comment-section');
const commentCount = document.getElementById('comment-count');
const closeBtn = document.querySelector('.close');
const editBtn = document.getElementById('edit-btn');
const deleteBtn = document.getElementById('delete-btn');

let isLiked = false;
let comments = [];
let isCommentVisible = false;

likeSpan.addEventListener('click', function () {
  if (!isLiked) {
    likeMessage.textContent = "You and  ";
    likeSpan.textContent = "Liked";
  } else {
    likeMessage.textContent = "";
    likeSpan.textContent = "Like";
  }

  isLiked = !isLiked;
  likeSpan.classList.toggle('liked');
});

commentSpan.addEventListener('click', function () {
  commentModal.style.display = 'block';
});

commentBtn.addEventListener('click', function () {
  const comment = commentInput.value;
  if (comment !== '') {
    comments.push(comment);
    commentInput.value = '';
    displayComments();
    updateCommentCount();
    commentModal.style.display = 'none';
  }
});

closeBtn.addEventListener('click', function () {
  commentModal.style.display = 'none';
});

function displayComments() {
  commentSection.innerHTML = '';

  for (let i = 0; i < comments.length; i++) {
    const commentElement = document.createElement('h5');

    const yourCommentElement = document.createElement('span');
    yourCommentElement.textContent = "You commented: ";
    yourCommentElement.classList.add('your-comment');
    commentElement.appendChild(yourCommentElement);

    const commentText = document.createElement('span');
    commentText.textContent = comments[i];
    commentElement.appendChild(commentText);

    const editDeleteSpan = document.createElement('span');
    editDeleteSpan.classList.add('edit-delete-span');
    const editSpan = document.createElement('span');
    editSpan.textContent = 'Edit';
    editSpan.classList.add('edit-span');
    const deleteSpan = document.createElement('span');
    deleteSpan.textContent = 'Remove';
    deleteSpan.classList.add('delete-span');
    editDeleteSpan.appendChild(editSpan);
    editDeleteSpan.appendChild(deleteSpan);
    commentElement.appendChild(editDeleteSpan);

    editSpan.addEventListener('click', function () {
      commentModal.style.display = 'block';
      commentInput.value = comments[i];
      editingIndex = i;
    });

    deleteSpan.addEventListener('click', function () {
      comments.splice(i, 1);
      editingIndex = -1;
      displayComments();
      updateCommentCount();
    });

    commentSection.appendChild(commentElement);
  }
}


function updateCommentCount() {
  const count = comments.length;
  const commentText = count === 1 ? "1 Comment" : count + " Comments";
  commentCount.textContent = commentText;
}

window.addEventListener('click', function (event) {
  if (event.target === commentModal) {
    commentModal.style.display = 'none';
  }
});



// ------------- post2 -------------------


const likeSpan2 = document.querySelector('.like-span2');
const likeMessage2 = document.getElementById('like-message2');

let isLiked2 = false;

likeSpan2.addEventListener('click', function () {
  if (!isLiked2) {
    likeMessage2.textContent = "You and  ";
    likeSpan2.textContent = "Liked";
  } else {
    likeMessage2.textContent = "";
    likeSpan2.textContent = "Like";
  }

  isLiked2 = !isLiked2;
  likeSpan2.classList.toggle('liked');
});


// ------------- post3 -------------------
const likeSpan3 = document.querySelector('.like-span3');
const likeMessage3 = document.getElementById('like-message3');

let isLiked3 = false;

likeSpan3.addEventListener('click', function () {
  if (!isLiked3) {
    likeMessage3.textContent = "You and  ";
    likeSpan3.textContent = "Liked";
  } else {
    likeMessage3.textContent = "";
    likeSpan3.textContent = "Like";
  }

  isLiked3 = !isLiked3;
  likeSpan3.classList.toggle('liked');
});

// ------------- post4 -------------------
const likeSpan4 = document.querySelector('.like-span4');
const likeMessage4 = document.getElementById('like-message4');

let isLiked4 = false;

likeSpan4.addEventListener('click', function () {
  if (!isLiked4) {
    likeMessage4.textContent = "You and  ";
    likeSpan4.textContent = "Liked";
  } else {
    likeMessage4.textContent = "";
    likeSpan4.textContent = "Like";
  }

  isLiked4 = !isLiked4;
  likeSpan4.classList.toggle('liked');
});







// ================= for mobile version navbar =======================

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}



// ====================== for the dropdown ================
function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
}



