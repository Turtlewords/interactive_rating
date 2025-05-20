const radios = document.querySelectorAll("input[type='radio']");
const labels = document.querySelectorAll(".lbl-btn")
const submitBtn = document.querySelector("#submit-btn");
const home = document.querySelector("#home");
const thankYou = document.querySelector("#thank-you");
const rating = document.querySelector("#rating");



submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!radioSelected()) {
        alert("Please select a rating value");
        return;
    }

    submitRating();
    
})

radios.forEach((radio) => {
    radio.addEventListener("change", () => {

        for (let x of radios) {
            if (!x.checked) {
                x.parentElement.querySelector(".lbl-btn").style.backgroundColor = "#262E38";
            } else {
                x.parentElement.querySelector(".lbl-btn").style.backgroundColor = "white";
            }
        }
    })
})

labels.forEach((label) => {
    label.addEventListener("keypress", (e) => {
        if (e.key == "Enter" || e.key == " ") {
            e.preventDefault();
            label.parentElement.querySelector('input[type="radio"]').click();
        }
    })
})

labels.forEach((label) => {
    label.addEventListener("mouseover", () => {
        label.style.backgroundColor = "#FC7614";
    })
})

labels.forEach((label) => {
    label.addEventListener("mouseout", () => {

        if (label.parentElement.querySelector("input[type='radio']").checked) {
            label.style.backgroundColor = "white";
        } else {
            label.style.backgroundColor = "#262E38";
        }
    })
})


function submitRating() {
    home.style.display = "none";
    thankYou.style.display = "flex";

    let score;

    for (let x of radios) {
        if(x.checked) {
            score = x.value;
        }
    }

    rating.textContent = score;
}


function radioSelected() {
    for (let x of radios) {
        if (x.checked) {
            return true;
        }
    }
    return false;
}