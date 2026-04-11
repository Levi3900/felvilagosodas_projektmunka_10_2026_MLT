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

const post_scrolls = document.querySelectorAll(".post_content");

post_scrolls.forEach(function(post_scroll) {
    post_scroll.addEventListener("wheel", function (e) {
        if (post_scroll.scrollWidth > post_scroll.clientWidth) {
            e.preventDefault();

            const scrollAmount = e.deltaY > 0 ? 100 : -100;
            post_scroll.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    }, { passive: false });
});
// AI

const story_button = document.querySelectorAll(".stories > div"); //AI: .stories > div
const story_user = document.querySelectorAll(".story_upload p");

story_button.forEach(
    function (story_button) {
        story_button.addEventListener("click", function (e) { e.preventDefault();
            document.getElementsByClassName("story_settings")[0].src = "assets/" + story_button.id + ".png";
            document.getElementsByClassName("story_pfp")[0].src = "profilkepek/" + story_button.id + ".jpg";
            document.getElementsByClassName("story_username")[0].textContent = story_button.id;
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

const videos = document.querySelectorAll(".post_video"); //fele AI
 
const observer = new IntersectionObserver(function(entries) { //Azt nézi a videó a képernyőn van-e vagy sem
    entries.forEach(function(entry) {
        const video = entry.target;
        if (entry.isIntersecting) {
            video.play();
        } 
        else { 
            video.pause();
            video.currentTime = 0;
        }
    });
}, {
    threshold: 0.6 //A videónak a 60% látható kell, hogy legyen a képernyőn a lejátszás megkezdéséhez
});

videos.forEach(function(video) {
    observer.observe(video);
});

function ellenorzes() {
    let pontszam = 0;
    let i = "";

    const valaszok = {
        elso: "1",
        masodik: "2",
        harmadik: "2",
        negyedik: "1",
        otodik: "3",
        hatodik: "3",
        hetedik: "1",
        nyolcadik: "2"
    }

    for (i in valaszok) {
        const kijelolt = document.querySelector("input[name='" + i + "']:checked");
        
        if (kijelolt && kijelolt.value === valaszok[i]) {
            pontszam = pontszam + 1;
        }
    }

    if (pontszam < 4) {
        document.getElementById("eredmeny").textContent = "Eredmény: Nyaktiló általi humánus kivégzés"
        document.getElementById("eredmeny").style.display = "block";
    }
    else {
        document.getElementById("eredmeny").textContent = "Eredmény:" +pontszam + "/8";
        document.getElementById("eredmeny").style.display = "block";
    }
}