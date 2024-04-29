/*
! Geolocation API
* The geolocation API allows users to share their location with web applications!
? Think of all the popups you've gotten on websites asking if it's okay to use your location to give you more relevant and precise data.
*/

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  });
}

/*
! Media Stream API (getUserMedia)
* This API is heavily locked-down and requires some exact permissions in able to use.
* When permission is granted, however, it allows access to the user's camera and microphone.
*/

async function getMediaStream() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    const videoElement = document.querySelector('video');
    videoElement.srcObject = stream;
  } catch (error) {
    console.log('Error accessing media device(s).', error);
  }
}

getMediaStream();