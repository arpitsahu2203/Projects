gsap.registerPlugin(ScrollTrigger);
gsap.from(".header >.right ,.custom-logo",{
    y:-80,
    duration:2,
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
    duration:1,
    stagger:.3,
    delay:.3,
    scrollTrigger:{
        trigger:".Text2 .Property",
        scroller:"body",
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
        scroller:"body",
        start:"top 60%",
        end:"top 30%"
    }
})

gsap.from(".Shop2B",{
    opacity:0,
    duration:3,
})

const t2=gsap.timeline({
    scrollTrigger:{
        trigger:".About",
        scrub:3,
        start:"top 10%",
        end:"+=500%",
        pin:true,
        scroller:"body"
    }
})

t2.from(".Aimage",{
    x:-200,
    opacity:0,
    duration:.75
})

t2.from(".AboutH1 .Your",{
    x:-100,
    opacity:0,
    stagger:0.5,
    duration:.75
})

t2.from(".abo .ab",{
    x:-100,
    opacity:0,
    stagger:0.5,
    duration:.75
})

t2.from(".Adata .Cust",{
    x:-100,
    opacity:0,
    stagger:0.5,
    duration:.75
})

const t3=gsap.timeline({
    scrollTrigger:{
        trigger:".Reviews",
        scrub:3,
        start:"top 5%",
        end:"+=300%",
        pin:true,
        scroller:"body"
    }
})

t3.from(".RleftTop",{
    x:-200,
    opacity:0,
})

t3.from(".RrightTop",{
    x:100,
    opacity:0,
    duration:1,
    stagger:0.5
})

t3.from(".RleftDown",{
    x:-100,
    opacity:0,
    stagger:0.5,
    duration:.75
})

t3.from(".RrightDown",{
    x:100,
    opacity:0,
    stagger:0.5,
    duration:.75
})

gsap.from(".FindText",{
    y:-100,
    duration:3,
    opacity:0,

    scrollTrigger:{
        trigger:".Find",
        start:"top 50%",
        scroller:"body",
    }
})

gsap.from(".OText",{
    y:300,
    opacity:0,
    duration:2,

    scrollTrigger:{
        trigger:".Outro",
        start:"top 70%",
        scroller:"body",
        end:"top 100%"
    }
})





