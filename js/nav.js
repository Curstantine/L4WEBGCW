function getLocation() {
    // Note(Rachala):
    // Javascript has the Array.at method, but this only supported in modern browsers, so ES2022.
    // It's better to use a split at "/" slice it at last index and get the first item instead to retain compatibility :)
    const pathname = location.pathname.split("/").slice(-1);

    if (pathname.length !== 0 && pathname[0].length !== 0) {
        return pathname[0].replace(".html", "");
    }

    return "index";
}

export default function initializeNav() {
    const nav = document.getElementsByTagName("nav")[0];
    const location = getLocation();

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
                <a href="./gallery.html" data-active=${location === "gallery"}>Gallery</a>
                <a href="./shop.html" data-active=${location === "shop"}>Shop</a>
                <a href="./team.html" data-active=${location === "team"}>Team</a>
            </div>
            
            <div class="action-spacer"></div>
            
            <div class="primary-actions">
                <a href="./donate.html" class="btn-ghost">Donate</a>
                <a href="./login.html" class="btn-primary">Login</a>
            </div>
        </div>
    `;
}