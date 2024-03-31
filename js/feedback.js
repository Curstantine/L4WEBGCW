import { emailRegex } from "./utilities.js";

/** @type {HTMLFormElement} */
const form = document.getElementById("feedback");

/** @type {HTMLInputElement} */
const formName = form.elements["name"];

/** @type {HTMLInputElement} */
const formEmail = form.elements["email"];

/** @type {HTMLTextAreaElement} */
const formContent = form.elements["content"];

/** @type {RadioNodeList} */
const formSatisfied = form.elements["satisfied"];

form.addEventListener("submit", (e) => {
    const email = formEmail.value.trim();
    const name = formName.value.trim();
    const content = formContent.value.trim();
    const satisfaction = formSatisfied.value !== null ? Number.parseInt(formSatisfied.value.trim()) : null;

    let err = false;

    /**
     * Convenience wrapper around setErrorToField
     * @param x {Element}
     * @param y {string}
     */
    const setError = (x, y) => {
        err = true;
        setErrorToField(x, y);
    }

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
    if (!err) replaceFormWithCompletion();
});

formName.addEventListener("input", cleanErrorsOnInput);
formEmail.addEventListener("input", cleanErrorsOnInput);
formContent.addEventListener("input", cleanErrorsOnInput);

/**
 * @param e {InputEvent}
 */
function cleanErrorsOnInput(e) {
    removeErrorFromField(e.target);
}

/**
 * @param message {string}
 * @param where {Element}
 */
function setErrorToField(where, message) {
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
function removeErrorFromField(where) {
    if (!where.classList.contains("invalid")) return;

    const target = document.querySelector(`#error-message[data-parent=${where.id}]`);
    where.classList.remove("invalid");
    target.remove();
}

function replaceFormWithCompletion() {
    const main = document.getElementsByTagName("main")[0];

    window.scroll(0, 0);

    main.innerHTML = /*html*/`
        <div id="completion">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path fill="currentColor" d="m382-354 339-339q12-12 28.5-12t28.5 12q12 12 12 28.5T778-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z"/>
            </svg>
            <span>Your feedback has been submitted!</span>
            <a href="./home.html" class="btn-ghost">Go back home</a>
        </div>
    `;
}
