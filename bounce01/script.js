const photo = document.getElementById("profile-photo");
const photoButton = document.getElementById("photo-button");

let showingFirstPhoto = true;

photoButton.addEventListener("click", function () {
    if (showingFirstPhoto) {
        photo.src = "assets/profile2.jpg";
        photo.alt = "Second profile photo";
        showingFirstPhoto = false;
    } else {
        photo.src = "assets/profile1.jpg";
        photo.alt = "First profile photo";
        showingFirstPhoto = true;
    }
});