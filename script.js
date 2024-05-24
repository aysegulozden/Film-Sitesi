const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");
const widthRatio = Math.floor(window.innerWidth / 300);
arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = movieList[i].querySelectorAll("img").length;
    arrow.addEventListener("click", () => {
        if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {

            clickCounter++;

            movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;


        } else {
            movieList[i].style.transform = "translateX(0)"
            clickCounter = 0;

        }
    });


});