// Select elements
const profileImage = document.getElementsByClassName('profile')[0]; // Access the first element in the collection
const projectsContainer = document.querySelector('.projects-grid'); // Access the container of all projects
const projContainer = document.querySelectorAll('.proj'); // Get all project elements

// Media queries
const mediaTablet = window.matchMedia('(max-width: 1024px)');
const mediaMobile = window.matchMedia('(max-width: 599px)');

// Function to update the profile image source
function updateImageSrc() {
  if (!profileImage) return; // Ensure profileImage exists
  if (mediaMobile.matches) {
    profileImage.src = './assets/images/image-profile-mobile.webp';
  } else if (mediaTablet.matches) {
    profileImage.src = './assets/images/image-profile-tablet.webp';
  } else {
    profileImage.src = './assets/images/image-profile-desktop.webp';
  }
}

// Function to update project HTML
function changeProjHTML() {
  if (!projectsContainer || projContainer.length === 0) return; // Avoid errors if projectsContainer doesn't exist

  let projCount = 1;
  projContainer.forEach((project) => {
    // Clear existing content
    project.innerHTML = '';

    // Create the new content
    const div = document.createElement('div');
    if (mediaMobile.matches) {
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
            <div class="btn-proj">VIEW PROJECT</div>
            <div class="btn-proj">VIEW CODE</div>
          </div>
        </div>`;
    } else if (mediaTablet.matches) {
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
            <div class="btn-proj">VIEW PROJECT</div>
            <div class="btn-proj">VIEW CODE</div>
          </div>
        </div>`;
    } else {
      div.innerHTML = `
        <div class="img-container">
          <img src="./assets/images/thumbnail-project-${projCount}-large.webp" alt="" />
          <div class="btn-container">
            <div class="btn-proj">VIEW PROJECT</div>
            <div class="btn-proj">VIEW CODE</div>
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

    // Append the new content to the project
    project.appendChild(div);
    projCount++;
  });
}

// Initial setup
if (profileImage) updateImageSrc();
changeProjHTML();

// Add event listeners for media query changes
mediaTablet.addEventListener('change', () => {
  if (profileImage) updateImageSrc();
  changeProjHTML();
});
mediaMobile.addEventListener('change', () => {
  if (profileImage) updateImageSrc();
  changeProjHTML();
});
