const stories = document.querySelector(".stories");

if (stories) {
    stories.addEventListener("wheel", function (e) {
        e.preventDefault();

        const scrollAmount = e.deltaY > 0 ? 100 : -100;
        stories.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    }, { passive: false });
}
/*AI*/