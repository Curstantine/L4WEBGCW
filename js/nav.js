export default function initializeNav() {
    const nav = document.getElementsByTagName("nav")[0];

    nav.innerHTML = /*html*/` 
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
    `;
}