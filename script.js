const tl = gsap.timeline({defaults: {duration: 0.85, ease: "power1.out"}})
tl.fromTo('.modal-container', {scale: 0}, {scale: 1, ease: "elastic.out(4s, 0.05)"}) 
tl.fromTo('.icon', {opacity: 0, x:-50, rotation: '-45deg'}, {opacity: 1, x:0, rotation: '0deg'},)
tl.fromTo('.text', {x:50, opacity:0}, {x:0, opacity:1}, '<') 