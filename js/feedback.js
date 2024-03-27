import { emailRegex } from "./utilities.js";

/** @type {HTMLFormElement} */
const form = document.getElementById("feedback");

/** @type {HTMLInputElement} */
const formName = document.querySelector("#feedback #name");

/** @type {HTMLInputElement} */
const formEmail = document.querySelector("#feedback #email");

/** @type {HTMLTextAreaElement} */
const formContent = document.querySelector("#feedback #content");

form.addEventListener("submit", (e) => {
    const email = formEmail.value.trim();
    const name = formName.value.trim();
    const content = formContent.value.trim();

    if (formName.validity.tooShort) {
        setError(formName, "Please enter a name longer than 3 characters!");
    }

    if (formEmail.validity.tooShort) {
        setError(formEmail, "Email field is missing, or not long enough!");
    }

    if (!emailRegex.test(email)) {
        setError(formEmail, "Email entered does not follow the valid format!");
    }

    if (formContent.validity.tooShort) {
        setError(formContent, "Content should be at least 10 characters!");
    }

    e.preventDefault();
});

formName.addEventListener("input", cleanErrorsOnInput);
formEmail.addEventListener("input", cleanErrorsOnInput);
formContent.addEventListener("input", cleanErrorsOnInput);

/**
 * @param e {InputEvent}
 */
function cleanErrorsOnInput(e) {
    removeError(e.target);
}

/**
 * @param message {string}
 * @param where {Element}
 */
function setError(where, message) {
    const isPopulated = where.classList.contains("invalid");

    const inner = /*html*/`
        <span id="error-message" data-parent="${where.id}">${message}</span>
    `;

    if (!isPopulated) {
        // Note(Rachala):
        // We can't use the :class psuedo match from patternMatch here
        // since the field will be matched :invalid on the first screen.
        where.classList.add("invalid");
        where.insertAdjacentHTML("afterend", inner);
        return;
    }

    const error = document.querySelector(`#error-message[data-parent=${where.id}]`);
    if (error.textContent !== message) error.innerText = message;
}

/**
 * @param where {Element}
 */
function removeError(where) {
    if (!where.classList.contains("invalid")) return;

    const target = document.querySelector(`#error-message[data-parent=${where.id}]`);
    where.classList.remove("invalid");
    target.remove();
}




