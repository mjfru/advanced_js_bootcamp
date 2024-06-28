if (navigator.geolocation) {
  console.log('Yay!')
}

const displayArea = document.querySelector('#locationDisplay');

document.querySelector('#getLocation').addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayGeoData, displayError
      // function(position) {
      // console.log(position)
    // },
    // function(error) {
    //   console.log(error);
    // }
  );
  }
});

const displayGeoData = (position) => {
  const { latitude, longitude } = position.coords;
  displayArea.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
}

const displayError = (error) => {
  // If permission is denied or unavailable, timeout, or generic errors
  displayArea.textContent = error.message
}