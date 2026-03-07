function onSubmit(e) {
    const first = document.querySelector("#first_name").value;
    const last = document.querySelector("#last_name").value;
    const personal = document.querySelector("#p_background").value;
    const academic = document.querySelector("#a_background").value;
    const computer = document.querySelector("#computer").value;
    const courses = document.querySelectorAll("#courses input");

    let courseText = "";
    if (courses.length) {
        for (let i = 0; i < courses.length; i++) {
            courseText += `Course ${i + 1}: ${courses[i].value}\n`;
        }
        courseText.trim();
    }

    document.querySelector(".info").innerText = `Welcome ${first} ${last}!
Personal Background: ${personal}
Academic Background: ${academic}
Primary Computer: ${computer}
${courseText}`;

    e.preventDefault();
    return false;
}

document.querySelector("form").addEventListener("submit", onSubmit);

document.querySelector("#add").addEventListener("click", function(e) {
    const courses = document.querySelector("#courses");
    const courseNumber = courses.querySelectorAll("input").length + 1;
    const newCourseLabel = document.createElement("label");
    const newCourseInput = document.createElement("input");
    
    newCourseLabel.innerText = `\nCourse ${courseNumber}: `;
    newCourseLabel.htmlFor = `course${courseNumber}`;

    newCourseInput.id = `course${courseNumber}`;
    newCourseInput.className = "long";

    courses.appendChild(newCourseLabel);
    courses.appendChild(newCourseInput);
});

document.querySelector("#subtract").addEventListener("click", function(e) {
    const courses = document.querySelector("#courses");
    const courseNumber = courses.querySelectorAll("input").length;

    if (!courseNumber) return;

    const courseLabel = courses.querySelector(`label[for=course${courseNumber}]`);
    const courseInput = courses.querySelector(`#course${courseNumber}`);

    courses.removeChild(courseLabel);
    courses.removeChild(courseInput);
});
