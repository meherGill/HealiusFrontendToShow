let counter;
let alertElement;
let inputElement;
let listContainer;

hideAlert = () => {
    alertElement.style.display = "none";
};

showError = () => {
    alertElement.style.display = "block";
};

window.onload = () => {
    //initialising counter and other refs
    inputElement = document.querySelector("#input");
    alertElement = document.querySelector("#alert");
    listContainer = document.querySelector("#list");
    counter = 0;

    hideAlert();
};

onclickHandler = () => {
    let inputValue;
    if (!inputElement.value) {
        inputValue = "";
    } else {
        inputValue = inputElement.value;
    }
    // const inputValue = inputElement.value ?? "";
    const sanitizedInputValue = inputValue.trim();

    if (sanitizedInputValue.length > 0) {
        hideAlert();
        counter++; //increment counter by 1

        //making the new element here
        const listContainer = document.querySelector("#list");
        const newListItem = document.createElement("li");
        newListItem.innerText = sanitizedInputValue;
        if (counter === 3) {
            newListItem.style.color = "red";
            counter = 0; //resetting counter
        } else {
            newListItem.style.color = "black";
        }

        //adding that element to the list container
        listContainer.appendChild(newListItem);
    } else {
        //display error
        showError();
    }
    inputElement.value = "";
};
