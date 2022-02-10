const heroBannerTimeline = gsap
    .timeline()
    .to(".textbox", {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        duration: 1.25,
        delay: 1,
    })
    .to(".nav_bar", {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    })
    .to(".explorebutton .btn", {
        backgroundColor: "white",
        duration: 0.3,
    })
    .to(
        ".explorebutton .btn a",
        {
            color: "red",
            duration: 0.3,
        },
        "<"
    )
    .to(".explorebutton .btn", {
        backgroundColor: "red",
        duration: 0.3,
    })
    .to(
        ".explorebutton .btn a",
        {
            color: "white",
            duration: 0.3,
        },
        "<"
    )
    .to(".explorebutton .btn", {
        backgroundColor: "white",
        duration: 0.3,
    })
    .to(
        ".explorebutton .btn a",
        {
            color: "red",
            duration: 0.3,
        },
        "<"
    )
    .to(".explorebutton .btn", {
        backgroundColor: "red",
        duration: 0.3,
    })
    .to(
        ".explorebutton .btn a",
        {
            color: "white",
            duration: 0.3,
        },
        "<"
    );
