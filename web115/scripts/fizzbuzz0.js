function onSubmit(e) {
    const first = document.querySelector("#first_name");
    const middle = document.querySelector("#middle_initial");
    const last = document.querySelector("#last_name");

    if (!first.value) {
        e.preventDefault();
        return false;
    }
    
    const greet = document.querySelector("#greeting");
    greet.innerText = `Welcome to James's Slithering Snake, ${first.value} ${middle.value ? middle.value + "." : ""} ${last.value}!`;

    const limit = Number(prompt(`How high do you want to count, ${first.value}?`));
    const list  = document.querySelector("ol");
    list.innerHTML = "";
    if (limit && limit > 0) {
        for (let i = 1; i <= limit; i++) {
            const item = document.createElement("li");
            item.innerText = `Shed Skin - this number is ${(i % 2 === 1) ? "odd" : "even"}`;
            list.appendChild(item);
        }
    }

    e.preventDefault();
    return false;
}

document.querySelector("form").addEventListener("submit", onSubmit);
