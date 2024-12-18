



class HeaderComponent extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
      
     <header class="shadow-sm fixed-top  bg-light px-3">
        <nav class="navbar navbar-expand-md d-flex">
            <a class="navbar-brand" href="#"><img src="./images/pixel4inch.jpg" class="brand" /></a>

            <div class=" text-center" style="flex-grow:1">
                <h4 class="text-center my-0 "> WebCraft Tools </h4>
                <P>Master Your Web Craft</P>
            </div>
              
        </nav>
    </header>
    <main class="w-100" >
        <div class="toplinks d-flex justify-content-center align-content-center py-4 flex-wrap" style="gap:10px">
            <a class="nav-link active" href="figma.html">FIGMA</a>
            <a class="nav-link" href="index.html">AI TOOLS </a>
            <a class="nav-link" href="web.html">WEB SOURCE</a>
            <a class="nav-link" href="DesignTools.html">ONLINE WEB & DESIGN TOOLS</a>
            <a class="nav-link" href="uiux.html">UI/UX SOURCE</a>
            <a class="nav-link" href="Mordensite.html">INSPIRATION </a>
            <a class="nav-link" href="prompting.html">AI PROMPTING </a>
            <a class="nav-link" href="fonts.html"> FONTS </a>
        </div>
    </main>
        `;

   }

}

customElements.define('header-component', HeaderComponent);



document.addEventListener('DOMContentLoaded', () => {
    // Wait for the custom element to be rendered
    customElements.whenDefined('header-component').then(() => {
        const toplinks = document.querySelector('.toplinks');

        if (toplinks) {
            // Set initial active state based on current page
            setActiveLink(toplinks);

            toplinks.addEventListener('click', function (event) {
                // Check if the clicked element is a link
                const clickedLink = event.target.closest('.nav-link');
                if (clickedLink) {
                    

                    // Add 'active' class to the clicked link
                    clickedLink.classList.add('active');
                    // Remove 'active' class from all links
                    const links = toplinks.querySelectorAll('.nav-link');
                    links.forEach(link => link.classList.remove('active'));
                }
            });
        }
    });
});

function setActiveLink(toplinks) {
    const currentPath = window.location.pathname;
    const links = toplinks.querySelectorAll('.nav-link');

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}




