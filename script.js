// Images for the carousel
const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.webp"
];
let currentIndex = 0;
const carouselImage = document.getElementById('carouselImage');

// Function to rotate images in the carousel
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
    carouselImage.style.animation = 'changeImage 1.5s ease-in-out';
}

// Change the image every 3 seconds
setInterval(changeImage, 3000);

// Play/Pause the birthday song
function playSong() {
    const song = document.getElementById("birthdaySong");
    if (song.paused) {
        song.play();
    } else {
        song.pause();
    }
}
