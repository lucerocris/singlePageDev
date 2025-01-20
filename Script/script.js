// Changing Image by size

const profileImage = document.getElementsByClassName('profile')[0]; // Access the first element in the collection
console.log(profileImage);

const mediaTablet = window.matchMedia('(max-width: 1024px)');
const mediaMobile = window.matchMedia('(max-width: 599px)');

function updateImageSrc() {
  if (mediaMobile.matches) {
    // For screens 599px or smaller
    profileImage.src = './assets/images/image-profile-mobile.webp';
  } else if (mediaTablet.matches) {
    // For screens between 600px and 768px
    profileImage.src = './assets/images/image-profile-tablet.webp';
  } else {
    // For screens larger than 768px
    profileImage.src = './assets/images/image-profile-desktop.webp';
  }
}

// Run the function on page load
updateImageSrc();

// Add event listeners to detect screen size changes
mediaTablet.addEventListener('change', updateImageSrc);
mediaMobile.addEventListener('change', updateImageSrc);
