const post_button = document.querySelectorAll("#kepek > a"); 
const story_user = document.querySelectorAll(".story_upload p");
const profil_index = document.getElementById("kirk")

post_button.forEach(function (post_button) {
    post_button.addEventListener("click", function (e) {
        e.preventDefault();

        document.getElementsByClassName("show_post")[0].style.display = "block";
        document.getElementsByClassName("post_settings")[0].src =
            "profil_posztok/" + post_button.id + ".png";

        load_comments(post_button.id);
    });
});

function close_post() {
    document.getElementsByClassName("show_post")[0].style.display = "none";
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
                const comment = document.getElementById("tartalek_commentek");
                const fill = Array.from(comment.children).find(function (elem) { 
                    return elem.id === post_id; }) //AI, máshogyan nem tudtam sajnos megoldani, ez azt csinálja, hogy az összes ID helyett csak is közvetlenül a tartalek_commentek classnak alárendelt ID-kat keresi, majd készít egy tömböt amibe ezeket elhelyezi (array) és megkeresi (.find) aztán az utolsó sor elég egyértelmű
                const comment_fill = document.getElementsByClassName("comment_fill")[0];

                if (fill) {
                    comment_fill.innerHTML = fill.innerHTML;
                    comment_fill.style.display = "block";
                }
            }
        })
}