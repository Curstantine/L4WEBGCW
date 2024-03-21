export default function initializeFooter() {
    const footer = document.getElementsByTagName("footer")[0];

    footer.innerHTML = /*html*/`
       <div class="footer-content container">
            <img alt="WaterWafer" src="/assets/logo.svg" width="120" height="40" style="margin-top: 4px" />
            <span></span>
        </div>
    `;
}