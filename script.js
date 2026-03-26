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

const post_scroll = document.querySelector(".post_content");

if (post_scroll) {
    post_scroll.addEventListener("wheel", function (e) {
        e.preventDefault();

        const scrollAmount = e.deltaY > 0 ? 100 : -100;
        post_scroll.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    }, { passive: false });
}
// AI

const story_button = document.querySelectorAll(".stories > div"); //AI: .stories > div

story_button.forEach(
    function (story_button) {
        story_button.addEventListener("click", function (e) { e.preventDefault();
            document.getElementsByClassName("story_settings")[0].src = "assets/" + story_button.id + ".png";
            document.getElementsByClassName("show_story")[0].style.display = "block";
        });
    }
)

function close_story(event) {
    event.stopPropagation(); //AI
    document.getElementsByClassName("show_story")[0].style.display = "None";
}

const comment_show = document.querySelectorAll(".post_interaction a");

comment_show.forEach(
    function (comment_show) {
        comment_show.addEventListener("click", function (e) {
            e.preventDefault();

            let post = comment_show.closest("section");
            let comment = post.getElementsByClassName("post_comment")[0];

            if (comment.style.display === "block") {
                comment.style.display = "none";
            } else {
                comment.style.display = "block";
            }
        });
    }
)