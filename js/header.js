$(document).ready(function(){
    $('header').html(`
        
            
    <h1>DAVID HUCK</h1>

    <hr class="divider"></hr>

    <nav>
        <div class="toggle">
            <i class="fas fa-bars mobileMenu" area-hidden="true"></i>
        </div>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skill Wall</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    `)

      // COLLAPSEABLE MENU
      $('.mobileMenu').click(function(){
        $('ul').toggleClass('active');
      });

    // FOOTER DYNAMIC YEAR
    $('#copywrite').html('&copy ' + new Date().getFullYear() + ' David Huck');

})

  // SCROLL DOWN FUNCTION

  $('.scrollUp').on('click', function(){
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 1000);
})
