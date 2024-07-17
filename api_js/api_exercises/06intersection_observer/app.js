const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log('Intersection Observed!');
    if(entry.isIntersecting) {
      console.log('Ad is visible.')
      const percentage = Math.round(entry.intersectionRatio * 100, 2);
      console.log(`${percentage} of the ad is visible.`)
    } else {
      console.log('Ad is not visible.')
    }
    console.log(entry);
  });
  // We can pass another parameter here, the threshold
},
  // As soon as just 1 pixel is visible, it'll fire by default.
  // If you change it to 1, the whole element must be visible to fire.
  // (These work in percentages, 0-1)
  { threshold: [0, 0.25, 0.5, 0.75, 1] });

const ad = document.querySelector('.ad');
observer.observe(ad);