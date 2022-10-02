// getting all buttons
let buttons = document.querySelectorAll(".add-name");

// loop over the buttons nodelist to get the indiviual button
buttons.forEach((button) => {
    // adding click event listener to the indiviual button
    button.addEventListener("click", (e) => {
        // find the selected player name
        let playerName = button.previousElementSibling;

        // where to add the selected player name
        let playerContainer = document.querySelector(".orderd-list");

        // check selected player not more than 5
        if (playerContainer.children.length < 5) {
            // create a new li where add the player name
            let li = document.createElement("li");
            li.textContent = playerName.innerText;

            // append the new created player name with orderd list container
            playerContainer.appendChild(li);

            // make click button disabled and change the color
            button.classList.add("disabled");
            button.classList.add("bg-secondary");
        } else {
            window.alert("opps!! you can't add more than 5 players")
        }
    });
});

document.getElementById("calculate-expence").addEventListener("click", (e) => {
    let playerContainer = document.querySelector(".orderd-list");
    // get inputValue by our getInputValue() function
    let inputAmout = getInputValue("player-cost");
    let playerCost = document.getElementById("player-total-cost");

    playerCost.innerText = playerContainer.children.length * inputAmout;
});

document.getElementById("calculate-total").addEventListener("click", (e) => {
    // get innerText value by our getInnerTextValue() function
    let playerTotalCost = getInnerTextValue("player-total-cost");
    // get inputValue by our getInputValue() function
    let managerCost = getInputValue("manager-cost");
    let coachCost = getInputValue("coach-cost");

    // where to show to the total cost
    let totalCost = document.getElementById("totalAmountCost");

    // total cost
    totalCost.innerText = playerTotalCost + managerCost + coachCost;

    console.log(totalCost);
});
