// navigator.mediaDevices.getUserMedia({ video: true })

document.querySelector('#startStream').addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    const videoElement = document.querySelector('#videoElement');
    videoElement.srcObject = stream;
  } catch (error) {
    console.log(error);
    document.querySelector('#errText').textContent = error.message;
  }
})

// .enumerateDevices gives the user a list of available devices to choose from (if applicable)