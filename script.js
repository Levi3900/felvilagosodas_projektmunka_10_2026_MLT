const stories = document.querySelector(".stories");
// AI
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
// AI

const story_button = document.querySelectorAll(".stories");
story_button.forEach(
    function (story_button) {
    story_button.addEventListener("click", function (e) { e.preventDefault();
        document.getElementsByClassName("show_story")[0].style.display = "block";
        
    });
})

function close_story(event) {
    event.stopPropagation(); //AI
    document.getElementsByClassName("show_story")[0].style.display = "None";
}