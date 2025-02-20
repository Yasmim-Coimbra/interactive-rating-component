const scoreOptions = document.querySelectorAll(".score");
const form = document.querySelector("#form");
const questionCard = document.querySelector(".question-card");
const thanksCard = document.querySelector(".thanks-card");

scoreOptions.forEach((clickedScore) => {
    clickedScore.addEventListener("click", () => {
        const hasSelectedOption = document.querySelector(".chosen");
        if (hasSelectedOption !== clickedScore) {
            hasSelectedOption?.classList.remove("chosen");
            clickedScore.classList.add("chosen");
        } else {
            clickedScore.classList.toggle("chosen");
        }
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateSelection();
});

function validateSelection() {
    const hasSelectedOption = document.querySelector(".chosen");

    if (!hasSelectedOption) {
        alert("Please select an option");
        return;
    }

    showAndHideCards();
    updateSelectionText(hasSelectedOption);
}

function showAndHideCards() {
    questionCard.classList.remove("ativo");
    thanksCard.classList.add("ativo");
}

function updateSelectionText(hasSelectedOption) {
    const selection = document.querySelector("#selection");
    const scoreSelected = hasSelectedOption.textContent;
    selection.innerText = `You selected ${scoreSelected} out of 5`;
}