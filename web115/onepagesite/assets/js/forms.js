// Fizzbuzz
const checkDivisible = (n1, n2) => n1 % n2 === 0;

function onSubmit(e) {
    const first = document.querySelector("#fizzbuzz #first_name");
    const middle = document.querySelector("#fizzbuzz #middle_initial");
    const last = document.querySelector("#fizzbuzz #last_name");

    if (!first.value) {
        e.preventDefault();
        return false;
    }
    
    const greet = document.querySelector("#fizzbuzz #greeting");
    greet.innerText = `Welcome to James's Slithering Snake, ${first.value} ${middle.value ? middle.value + "." : ""} ${last.value}!`;

    const list  = document.querySelector("ol");
    list.innerHTML = "";

    const count = Number(document.querySelector("#fizzbuzz #count").value);
    const s1 = Number(document.querySelector("#fizzbuzz #special1").value);
    const s2 = Number(document.querySelector("#fizzbuzz #special2").value);
    const s3 = Number(document.querySelector("#fizzbuzz #special3").value);
    const w1 = document.querySelector("#fizzbuzz #word1").value;
    const w2 = document.querySelector("#fizzbuzz #word2").value;
    const w3 = document.querySelector("#fizzbuzz #word3").value;
    const dw = document.querySelector("#fizzbuzz #word_default").value;
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

document.querySelector("#fizzbuzz form").addEventListener("submit", onSubmit);

// Intro form
function onSubmit(e) {
    const first = document.querySelector("#intro-form #first_name").value;
    const last = document.querySelector("#intro-form #last_name").value;
    const personal = document.querySelector("#intro-form #p_background").value;
    const academic = document.querySelector("#intro-form #a_background").value;
    const computer = document.querySelector("#intro-form #computer").value;
    const courses = document.querySelectorAll("#intro-form #courses input");

    let courseText = "";
    if (courses.length) {
        for (let i = 0; i < courses.length; i++) {
            courseText += `Course ${i + 1}: ${courses[i].value}\n`;
        }
        courseText.trim();
    }

    document.querySelector("#intro-form .info").innerText = `Welcome ${first} ${last}!
Personal Background: ${personal}
Academic Background: ${academic}
Primary Computer: ${computer}
${courseText}`;

    e.preventDefault();
    return false;
}

document.querySelector("#intro-form form").addEventListener("submit", onSubmit);

document.querySelector("#intro-form #add").addEventListener("click", function(e) {
    const courses = document.querySelector("#intro-form #courses");
    const courseNumber = courses.querySelectorAll("#intro-form input").length + 1;
    const newCourseLabel = document.createElement("label");
    const newCourseInput = document.createElement("input");
    
    newCourseLabel.innerText = `\nCourse ${courseNumber}: `;
    newCourseLabel.htmlFor = `course${courseNumber}`;

    newCourseInput.id = `course${courseNumber}`;
    newCourseInput.className = "long";

    courses.appendChild(newCourseLabel);
    courses.appendChild(newCourseInput);
});

document.querySelector("#intro-form #subtract").addEventListener("click", function(e) {
    const courses = document.querySelector("#intro-form #courses");
    const courseNumber = courses.querySelectorAll("#intro-form input").length;

    if (!courseNumber) return;

    const courseLabel = courses.querySelector(`label[for=course${courseNumber}]`);
    const courseInput = courses.querySelector(`#course${courseNumber}`);

    courses.removeChild(courseLabel);
    courses.removeChild(courseInput);
});
