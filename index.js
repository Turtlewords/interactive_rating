const radios = document.querySelectorAll("input[type='radio']");
const labels = document.querySelectorAll(".lbl-btn")

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

