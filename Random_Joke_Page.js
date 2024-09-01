let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let url = "https://apis.ccbp.in/jokes/random";
let spinnerEl = document.getElementById("spinner");

function joke() {
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();

        })
        .then(function(jsonData) {
            jokeTextEl.classList.remove("d-none");
            spinnerEl.classList.add("d-none");
            let x = jsonData.value;
            jokeTextEl.textContent = x;

        });


}
jokeBtnEl.addEventListener("click", joke);