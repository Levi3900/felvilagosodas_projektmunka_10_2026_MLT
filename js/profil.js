const post_button = document.querySelectorAll("#kepek > a, .kepek > a, #reels > a");
const story_user = document.querySelectorAll(".story_upload p");
const profil_index = document.getElementById("kirk")
const button_id = document.querySelectorAll("#posztok > a")
const post_image = document.querySelector(".show_post img.post_settings");
const post_video = document.querySelector(".show_post video.post_settings");
const post_video_source = post_video ? post_video.querySelector("source") : null; //AI

post_button.forEach(function (post_button) {
    post_button.addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementsByClassName("show_post")[0].style.display = "block";
        if (post_button.id.includes("V")) {
            post_image.style.display = "none";
            post_video.style.display = "block";
            post_video_source.src = "profil_posztok/" + post_button.id + ".mp4";
            post_video.load();
            post_video.play();
        } 
        else {
            if (post_video) {
                post_video.pause();
                post_video.style.display = "none";
            }
            post_image.style.display = "block";
            post_image.src = "profil_posztok/" + post_button.id + ".png";
        }
        load_comments(post_button.id);
    });
});

function close_post() {
    document.getElementsByClassName("show_post")[0].style.display = "none";
    if (post_video) {
        post_video.pause();
        post_video.currentTime = 0;
    }
}

function load_comments(post_id) {
    fetch("index.html") //AI
        .then(function (response) {
            return response.text();
        })
        .then(function (html) { //AI, Ez azt csinálja hogy a sima stringet amit a fetchel kapok átalakítja egy rendes html dokumentummá
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            const section = doc.getElementById(post_id);
            const comment_fill = document.querySelector(".comment_fill");
                comment_fill.innerHTML = ""
            if (section) {
                const comment_source = section.querySelector(".post_comment");

                if (comment_source) {
                    comment_fill.innerHTML = comment_source.innerHTML;
                } 
                else {
                    comment_fill.innerHTML = "<p>erre a posztra még nem érkezett komment.</p>";
                }
            } 
            else {
               comment_fill.innerHTML = "<p>erre a posztra még nem érkezett komment.</p>";
            }
        })
}

function button_pressed(button_id) {
    button_id.forEach (
        function (button_id) {
        button_id.addEventListener("click", function (e) {
            if (button_id.id != "kepek_button" && button_id.id != "reels_button") {
                return;
            }
            e.preventDefault();
            const kepek_section = document.getElementById("kepek") || document.querySelector("section.kepek:not(#reels)"); //AI
            const reels_section = document.getElementById("reels"); //AI
            if (button_id.id == "kepek_button") { 
                kepek_section.style.display = "grid";
                reels_section.style.display = "none";
            }
            else {
                kepek_section.style.display = "none";
                reels_section.style.display = "grid";
            }})
        }
    )
}

button_pressed(button_id);
