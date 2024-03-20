export default function initializeNav() {
    const nav = document.getElementsByTagName("nav")[0];

    let offsetComplete = false;

    document.addEventListener("scroll", (e) => {
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
    <img alt="WaterWafer" src="/assets/logo.svg" width="120" height="40" style="margin-top: 4px" />
        
    <div class="spacer"></div>
    
    <div class="actions">
        <a href="/gallery">Gallery</a>
        <a href="/shop">Shop</a>
        <a href="/team">Team</a>
    </div>
    
    <div class="action-spacer"></div>
    
    <div class="primary-actions">
        <a href="/donate" class="btn-ghost">Donate</a>
        <a href="/login" class="btn-primary">Login</a>
    </div>
</div>`;
}