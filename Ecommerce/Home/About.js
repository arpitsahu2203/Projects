gsap.registerPlugin(ScrollTrigger);
gsap.to(".header >.right > a",{
    y:-50,
    duration:5,
    delay:1,
    stagger:0.5
})

let t1=gsap.timeline(gsap.from(".Welcome ,.Discover1 ,.Discover1",{
    opacity:0,
    duration:3,
    delay:1,
    stagger:0.75
}),

gsap.from(".Shop1",{
    y:150,
    duration:3.5,
    opacity:0
}))

gsap.from(".Text2 .Property",{
    opacity:0,
    y:-50,
    duration:2,
    stagger:.5,
    delay:.5,
    scrollTrigger:{
        trigger:".Text2 .Property",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"top 30%"
    }
})

gsap.from(".TrendingH",{
    opacity: 0,
    y: 90,
    duration: 2,
    stagger: 0.15,
    scrollTrigger:{
        trigger:".TrendingH",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"top 30%"
    }
})

gsap.from(".Plants", {
    opacity: 0,
    y: 90,
    duration: 2,
    stagger: 0.15, // Time between each item starting its animation
    scrollTrigger:{
        trigger:".Plants",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"top 30%"

    }
});

gsap.from(".B2Text",{
    opacity:0,
    y:-100,
    duration:2,
    stagger:.95,
    color:"#FFFFFF",
    yoyo:true,
    repeat:0,

    scrollTrigger:{
        trigger:".B2Text",
        markers:true,
        scroller:"body",
        start:"top 60%",
        end:"top 30%"
    }
})

gsap.from(".Shop2B",{
    opacity:0,
    duration:3,
})


