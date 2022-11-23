const header = document.querySelector(".header");

header.innerHTML = `
<nav>
    <section class="desktop">
        <a href="/index.html" class="logo">
        Living Organically.
        </a>
        <div class="top-nav">
        <a href="/index.html">Home</a>
        <a href="/html/about.html">About</a>
        <a href="/html/recipes.html">Recipes</a>
        <a href="/html/contact.html">Contact</a>
        </div>
    </section>
    <section class="phone">
        <a href="/index.html" class="logo">
        LO.
        </a>
        <div class="container-hamburger-menu">
        <input type="checkbox" class="checkbox" aria-label="hamburger menu" />
        <div class="hamburger">
            <div></div>
        </div>
        <div class="menu">
            <div>
            <div>
                <ul>
                    <li>
                        <a href="/index.html">Home</a>
                    </li>
                    <li>
                        <a href="/html/about.html">About</a>
                    </li>
                    <li>
                        <a href="/html/recipes.html">Recipes</a>
                    </li>
                    <li>
                        <a href="/html/contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </section>
    </nav>`;
