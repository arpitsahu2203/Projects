gsap.to(".header >.right > a",{
    y:-50,
    duration:5,
    delay:1,
    stagger:0.5
})

let t1=gsap.timeline(gsap.from(".Welcome ,.Discover1 ,.Discover1",{
    opacity:0,
    duration:2.5,
    delay:1,
    stagger:0.75
}),

gsap.from(".Shop1",{
    y:500,
    duration:3,
}))

