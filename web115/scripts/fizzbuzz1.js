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

    const list  = document.querySelector("ol");
    list.innerHTML = "";

    const count = Number(document.querySelector("#count").value);
    const s1 = Number(document.querySelector("#special1").value);
    const s2 = Number(document.querySelector("#special2").value);
    for (let i = 1; i <= (count || 40); i++) {
        const item = document.createElement("li");
        item.innerText += (i %(s1 || 3) === 0 ? "Orange " : "");
        item.innerText += (i % (s2 || 5) === 0 ? "Apple" : "");
        item.innerText += (item.innerText ? "" : "Banana");
        list.appendChild(item);
    }

    e.preventDefault();
    return false;
}

document.querySelector("form").addEventListener("submit", onSubmit);
