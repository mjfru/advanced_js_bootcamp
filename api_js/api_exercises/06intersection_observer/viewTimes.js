let adViewTimes = [];
let adVisibleStart;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const { isIntersecting } = entry;
    if(isIntersecting) {
      // If the ad is visible...
      adVisibleStart = Date.now();
    } else if (adVisibleStart) {
      // Ad has been visible but is not longer...
      let adViewDuration = Date.now() - adVisibleStart;
      adViewTimes.push(adViewDuration);
      console.log(`Ad was viewed for ${adViewDuration} ms.`);
      adVisibleStart = undefined;
    } 
  })
}, { threshold: 0.5 })

const ad = document.querySelector('.ad');
observer.observe(ad);