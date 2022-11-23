const footer = document.querySelector(".footer");

footer.innerHTML = `
    <nav>
    <section class="desktop desktop-bottom">
        <a href="/index.html" class="logo">
        Living Organically.
        </a>
        <div>
        <div class="bottom-nav">
            <a href="/index.html">Home</a>
            <a href="/html/about.html">About</a>
            <a href="/html/recipes.html">Recipes</a>
            <a href="/html/contact.html">Contact</a>
        </div>
        <div class="social">
            <a href="https://www.instagram.com/">
            <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/">
            <i class="fa-brands fa-youtube"></i>
            </a>
        </div>
        </div>
    </section>
    <section class="phone phone-bottom-nav">
        <a href="/index.html" class="logo">
        Living Organically.
        </a>
        <a href="/index.html">Home</a>
        <a href="/html/about.html">About</a>
        <a href="/html/recipes.html">Recipes</a>
        <a href="/html/contact.html">Contact</a>
        <div>
        <a href="https://www.instagram.com/">
            <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/">
            <i class="fa-brands fa-youtube"></i>
        </a>
        </div>
    </section>
    </nav>
    <section class="copyright">
    <p>Copyright &copy; 2022 Living Organically, Co. All rights reserved.</p>
    </section>`;
