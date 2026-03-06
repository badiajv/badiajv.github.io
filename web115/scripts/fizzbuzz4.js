const checkDivisible = (n1, n2) => n1 % n2 === 0;

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
    const s3 = Number(document.querySelector("#special3").value);
    const w1 = document.querySelector("#word1").value;
    const w2 = document.querySelector("#word2").value;
    const w3 = document.querySelector("#word3").value;
    const dw = document.querySelector("#word_default").value;
    for (let i = 1; i <= (count || 125); i++) {
        const item = document.createElement("li");
        item.innerText += (checkDivisible(i, s1 || 3) ? (w1 ? w1 + " " : "Ford ") : "");
        item.innerText += (checkDivisible(i, s2 || 5) ? (w2 ? w2 + " " : "Ferrari ") : "");
        item.innerText += (checkDivisible(i, s3 || 7) ? (w3 ? w3 : "Honda") : "");
        item.innerText += (item.innerText ? "" : dw);
        list.appendChild(item);
    }

    e.preventDefault();
    return false;
}

document.querySelector("form").addEventListener("submit", onSubmit);
