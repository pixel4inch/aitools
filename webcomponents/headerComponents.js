



class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      
     <header class="shadow-sm fixed-top  bg-light px-3">
        <nav class="navbar navbar-expand-md d-flex">
            <a class="navbar-brand" href="index.html"><img src="./images/pixel4inch.jpg" class="brand" /></a>

            <div class=" text-center" style="flex-grow:1">
                <h4 class="text-center my-0 "> WebCraft Tools </h4>
                <P>Master Your Web Craft</P>
            </div>
              
        </nav>
    </header>
    <main class="w-100" style="padding:0px 20%"> 
        <div class="toplinks d-flex justify-content-center align-content-center py-4 flex-wrap" style="gap:10px" id="toplinks">
        </div>
    </main>
        `;

        // Fetch menu data and populate links
        fetch('data/menu.json')
            .then(response => response.json())
            .then(data => {
                const toplinks = this.querySelector('#toplinks');
                const linksHtml = data.menu.slice(1).map(item => `<a class="nav-link" href="${item.MLink}">${item.MTitle.toUpperCase()}</a>`).join('');
                toplinks.innerHTML = linksHtml;
                setActiveLink(toplinks);
            })
            .catch(error => console.error('Error loading menu:', error));

    }

}

customElements.define('header-component', HeaderComponent);



document.addEventListener('DOMContentLoaded', () => {
    // Wait for the custom element to be rendered
    customElements.whenDefined('header-component').then(() => {
        const toplinks = document.querySelector('#toplinks');

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




