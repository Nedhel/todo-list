let number = 0;
window.addEventListener("load", () => {
    document.getElementById("add-task").addEventListener("click", showModal);
    document.getElementById("modal-task").addEventListener("click", closeModal);
    document.getElementById("add-button").addEventListener("click", addTask);
    document
        .getElementById("delete-task")
        .addEventListener("click", deleteTask);
    document.getElementById("weekdate").innerHTML = now();
});
function showModal() {
    document.getElementById("modal-task").style.display = "block";
}
function closeModal(event) {
    if (event.target.id == "modal-task") {
        document.getElementById("modal-task").style.display = "none";
    }
}
function addTask() {
    const div = document.createElement("div");
    const check = document.createElement("input");
    const label = document.createElement("label");
    const day = document.getElementById("select-weekday").value;
    const breakline = document.createElement("br");
    div.setAttribute("id", `divtask${number}`);
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", `task${number}`);
    check.addEventListener("change", cross);
    label.setAttribute("for", `task${number}`);
    label.innerHTML = document.getElementById("new-task").value;
    number += 1;
    div.appendChild(check);
    div.appendChild(label);
    div.appendChild(breakline);
    document.getElementById(day).appendChild(div);

    document.getElementById("new-task").value = "";
}
function cross(event) {
    if (event.target.checked) {
        document.querySelector(
            `label[for=${event.target.id}]`
        ).style.textDecoration = "line-through";
    } else {
        document.querySelector(
            `label[for=${event.target.id}]`
        ).style.textDecoration = "none";
    }
}
function deleteTask() {
    let tasks = document.querySelectorAll("[type=checkbox]");
    for (const iterator of tasks) {
        if (iterator.checked) {
            document.getElementById(`div${iterator.id}`).remove();
        }
    }
}
function now() {
    const weekday = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
    ];
    let date = new Date();
    return `Hoy es ${weekday[date.getDay()]} ${date.getDate()}`;
}
