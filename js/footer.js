export default function initializeFooter() {
    const footer = document.getElementsByTagName("footer")[0];

    footer.innerHTML = /*html*/`
       <div class="footer-content container">
            <img alt="WaterWafer" src="/assets/logo.svg" style="margin-top: 4px" />
        
            <div class="links">
                <span>Important links</span>
                
                <a href="./gallery.html">Gallery</a>
                <a href="./sitemap.html">Sitemap</a>
                            
                <a href="./shop.html">Shop</a>
                <a href="./editors.html">Editors</a>
                
                <a href="./team.html">Team</a>
                <a href="./feedback.html">Feedback</a>
                
                <a href="./donate.html">Donate</a>
            </div>
                  
            <div class="copyright">
                <span>WaterWafer © 2024</span>
            </div>
        </div>
    `;
}