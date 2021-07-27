gsap.registerPlugin(ScrollTrigger)

let sections = gsap.utils.toArray('.panel')

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '.panels',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => '+=' + document.querySelector('.container').offsetWidth
    }
})

const img = document.querySelector('.hero')
gsap.set(img, {})
var tl = gsap
    .timeline({
        scrollTrigger: {
            start: 'top top',
            end: 'center center',
            scrub: 0.1
        },
        defaults: {
            duration: 1
        }
    })

    .to(
        img,
        {
            // backgroundSize: '140%',
            // backgroundPosition: '0% 280%'
            scale: 1.5,
            xPercent: -20,
            yPercent: -20
        },
        0
    )
