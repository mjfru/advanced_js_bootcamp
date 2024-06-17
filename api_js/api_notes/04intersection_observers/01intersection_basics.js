/*
! Intersection Observer API
* Provides a way to asynchronously observe changes in the intersection of a target element with its parent or the viewport.
? "When was this ad in the user's viewport? How long did it take for them to scroll and see it?"
*/

// Set up an observer, expecting a call back
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is in view!');
    }
  });
});

// Your target element you want to observe
const target = document.querySelector('.targetElement');
observer.observe(target);