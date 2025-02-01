//DOM
const profileImage = document.getElementsByClassName('profile')[0];
const projectsContainer = document.querySelector('.projects-grid');
const projContainer = document.querySelectorAll('.proj');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const contactInput = document.querySelectorAll('input');
const name = contactInput[0];
const email = contactInput[1];
const message = document.getElementById('message');

// Media queries
const mediaTablet = window.matchMedia('(max-width: 1024px)');
const mediaMobile = window.matchMedia('(max-width: 599px)');

// Function to update the profile image source
function updateImageSrc() {
  if (mediaMobile.matches) {
    profileImage.src = './assets/images/image-profile-mobile.webp';
  } else if (mediaTablet.matches) {
    profileImage.src = './assets/images/image-profile-tablet.webp';
  } else {
    profileImage.src = './assets/images/image-profile-desktop.webp';
  }
}

// Function to change innerHTML on different devices

function changeProjHTML() {
  let projCount = 1;
  projContainer.forEach((project) => {
    project.innerHTML = '';

    // Create the new content
    const div = document.createElement('div');
    if (mediaMobile.matches) {
      if (projCount >= 3) {
        div.innerHTML = `
        <div class="img-container">
          <img src="./assets/images/thumbnail-project-${projCount}-large.webp" alt="" />
        </div>
        <div class="proj-info">
        <div>
          <h4>DESIGN PORTFOLIO</h4>
          <div class="lang-used">
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
          </div>
          </div>
          <div class="btn-container">
            <div class="btn-proj"><a href="#">VIEW PROJECT</a></div>
            <div class="btn-proj"><a href="#">VIEW PROJECT</a></div>
          </div>
        </div>`;
      } else {
        div.innerHTML = `
          <div class="img-container">
            <img src="./assets/images/thumbnail-project-${projCount}-large.webp" alt="" />
          </div>
          <div class="proj-info">
          <div>
            <h4>DESIGN PORTFOLIO</h4>
            <div class="lang-used">
              <p>HTML</p>
              <p>CSS</p>
            </div>
            </div>
            <div class="btn-container">
              <div class="btn-proj"><a href="#">VIEW PROJECT</a></div>
              <div class="btn-proj"><a href="#">VIEW PROJECT</a></div>
            </div>
          </div>`;
      }
    } else if (mediaTablet.matches) {
      if (projCount >= 3) {
        div.innerHTML = `
        <div class="img-container">
          <img src="./assets/images/thumbnail-project-${projCount}-large.webp" alt="" />
        </div>
        <div class="proj-info">
        <div>
          <h4>DESIGN PORTFOLIO</h4>
          <div class="lang-used">
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
          </div>
          </div>
          <div class="btn-container">
            <div class="btn-proj"><a href="#">VIEW PROJECT</a></div>
            <div class="btn-proj"><a href="#">VIEW PROJECT</a></div>
          </div>
        </div>`;
      } else {
        div.innerHTML = `
          <div class="img-container">
            <img src="./assets/images/thumbnail-project-${projCount}-large.webp" alt="" />
          </div>
          <div class="proj-info">
          <div>
            <h4>DESIGN PORTFOLIO</h4>
            <div class="lang-used">
              <p>HTML</p>
              <p>CSS</p>
            </div>
            </div>
            <div class="btn-container">
              <div class="btn-proj"><a href="#">VIEW PROJECT</a></div>
              <div class="btn-proj"><a href="#">VIEW PROJECT</a></div>
            </div>
          </div>`;
      }
    } else {
      if (projCount >= 3) {
        div.innerHTML = `
        <div class="img-container">
          <img src="./assets/images/thumbnail-project-${projCount}-large.webp" alt="" />
          <div class="btn-container">
            <div class="btn-proj"><a href="#">VIEW PROJECT</a></div>
            <div class="btn-proj"><a href="#">VIEW PROJECT</a></div>
          </div>
        </div>
        <div class="proj-info">
          <h4>DESIGN PORTFOLIO</h4>
          <div class="lang-used">
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
          </div>
        </div>`;
      } else {
        div.innerHTML = `
          <div class="img-container">
            <img src="./assets/images/thumbnail-project-${projCount}-large.webp" alt="" />
            <div class="btn-container">
              <div class="btn-proj"><a href="#">VIEW PROJECT</a></div>
              <div class="btn-proj"><a href="#">VIEW PROJECT</a></div>
            </div>
          </div>
          <div class="proj-info">
            <h4>DESIGN PORTFOLIO</h4>
            <div class="lang-used">
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>`;
      }
    }

    project.appendChild(div);
    projCount++;
  });
}

function activeInput() {
  // Name
  if (name.value !== '') {
    name.style.borderBottom = '1px solid #4EE1A0';
  } else {
    name.style.borderBottom = '1px solid white';
  }

  // Email
  if (email.value !== '') {
    email.style.borderBottom = '1px solid #4EE1A0';
  } else {
    email.style.borderBottom = '1px solid white';
  }

  if (message.value !== '') {
    message.style.borderBottom = '1px solid #4EE1A0';
  } else {
    message.style.borderBottom = '1px solid white';
  }
}

function validateEmail(value) {
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const errorIcon = document.getElementById('error-icon');
  const errorMessage = document.getElementById('error-message');

  if (!value) {
    email.style.borderBottom = '1px solid #ff6f5b';
    errorIcon.style.display = 'block';
    errorMessage.style.display = 'block';
    return false;
  }

  if (!emailPattern.test(value)) {
    email.style.borderBottom = '1px solid #ff6f5b';
    errorIcon.style.display = 'block';
    errorMessage.style.display = 'block';
    return false;
  }

  email.style.borderBottom = '1px solid #4EE1A0';
  errorIcon.style.display = 'none';
  errorMessage.style.display = 'none';
  return true;
}

function validateName(value) {
  const errorIcon = document.getElementById('error-iconN');
  const errorMessage = document.getElementById('error-messageN');

  if (!value.trim()) {
    name.style.borderBottom = '1px solid #ff6f5b';
    errorIcon.style.display = 'block';
    errorMessage.style.display = 'block';
    return false;
  }

  name.style.borderBottom = '1px solid #4EE1A0';
  errorIcon.style.display = 'none';
  errorMessage.style.display = 'none';
  return true;
}

function validateMessage(value) {
  if (!value.trim()) {
    message.style.borderBottom = '1px solid white';
    return false;
  }

  message.style.borderBottom = '1px solid #4EE1A0';
  return true;
}

function handleInput(element) {
  const value = element.value;
  switch (element.id) {
    case 'name':
      validateName(value);
      break;
    case 'email':
      validateEmail(value);
      break;
    case 'message':
      validateMessage(value);
      break;
  }
}

if (profileImage) updateImageSrc();
changeProjHTML();

mediaTablet.addEventListener('change', () => {
  updateImageSrc();
  changeProjHTML();
});
mediaMobile.addEventListener('change', () => {
  updateImageSrc();
  changeProjHTML();
});

name.addEventListener('input', () => handleInput(name));
email.addEventListener('input', () => handleInput(email));
message.addEventListener('input', () => handleInput(message));

name.addEventListener('blur', () => handleInput(name));
email.addEventListener('blur', () => handleInput(email));
message.addEventListener('blur', () => handleInput(message));
