/*
! Web Audio API
* Allows for the processing and synthesizing of audio in web applications.
*/

// The processing 'hub' for audio content in JavaScript
const audioContext = new AudioContext();

// Making a new oscillator to create sound waves
const oscillator = audioContext.createOscillator();

oscillator.type = "square";

// oscillator.frequency.value = 500

oscillator.connect(audioContext.destination)

oscillator.start();

// oscillator.stop();
