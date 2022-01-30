// box-1 : 개요 아이템
gsap.to(".box-1", { 
  x: 700,
  duration: 1
});

// box-2 : 개요 아이템
gsap.from(".box-2", {
  ease: Expo.easeIn,
  opacity: 0,
  x: -300,
  duration: 1.2,
  scrollTrigger: {
    trigger: '.section-2'
  }
});

// box-3 : 개요 아이템1,2
gsap.from('.box-3', {
  ease:Expo.easeIn,
  opacity:0,
  x:300,
  duration:2,
  scrollTrigger:{
    trigger: '.section-2'
  }
});


// box-4 : 로고 아이템
gsap.from('.box-4', {
  ease:Expo.easeIn,
  x:400,
  duration:1.2,
  scrollTrigger:{
    trigger:'.section-4',
    start:'-30%, 87%'
  }
});

// box-5 : 로고 아이템
gsap.from('.box-5', {
  ease:Expo.easeIn,
  x:400,
  duration:1.3,
  scrollTrigger:{
    trigger:'.section-4',
  }
});


// box-6,box-7 : 와이어프레임 아이템
gsap.from(".box-6", {
  ease:Expo.easeIn,
  opacity:0,
  x:700,
  duration:1.5,
  scrollTrigger:{
    trigger:'.section-5',
  }
});

gsap.from(".box-7", {
  ease:Expo.easeIn,
  opacity:0,
  x:700,
  duration:1.7,
  scrollTrigger:{
    trigger:'.section-5',
  }
});

// box-8 : 알고리즘 핸드폰
gsap.from('.box-8', {
  ease:Expo.easeIn,
  opacity:0,
  x:700,
  duration:1.5,
  scrollTrigger:{
    trigger:'.section-7',
  }
});

// box-9 : 알고리즘 조사창
gsap.from('.box-9', {
  ease:Expo.easeIn,
  opacity:0,
  x:680,
  duration:2,
  scrollTrigger:{
    trigger:'.section-7'
  }
});

// box-10 : 목업-핸드폰1
gsap.from('.box-10', {
  ease:Expo.easeOut,
  x:680,
  duration:2,
  scrollTrigger:{
    trigger:'.section-12',
    start:'40%, 90%'
  }
});

gsap.to('.box-11', {
  ease:Expo.easeOut,
  x:250,
  duration:2.5,
  scrollTrigger:{
    trigger:'.section-12',
    start:'30%, 90%'
  }
});