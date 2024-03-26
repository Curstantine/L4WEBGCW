export default function initializeNav() {
    const nav = document.getElementsByTagName("nav")[0];

    let offsetComplete = false;

    document.addEventListener("scroll", () => {
        const isYOverOffset = window.scrollY > 50;

        if (!offsetComplete && isYOverOffset) {
            nav.style.setProperty("--nav-border-opacity", "1");
            offsetComplete = true;
            return;
        }

        if (offsetComplete && !isYOverOffset) {
            nav.style.setProperty("--nav-border-opacity", "0");
            offsetComplete = false;
        }
    });


    nav.innerHTML = /*html*/`
        <div class="nav-content container">
            <a href="./index.html">    
                <img alt="WaterWafer" src="/assets/logo.svg" width="120" height="40" style="margin-top: 4px" />
            </a>
                
            <div class="spacer"></div>
            
            <div class="actions">
                <a href="./gallery.html">Gallery</a>
                <a href="./shop.html">Shop</a>
                <a href="./team.html">Team</a>
            </div>
            
            <div class="action-spacer"></div>
            
            <div class="primary-actions">
                <a href="./donate.html" class="btn-ghost">Donate</a>
                <a href="./login.html" class="btn-primary">Login</a>
            </div>
        </div>
    `;
}