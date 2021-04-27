$(document).ready(function(){

    $('.contact').html(`

        <a name="contact"></a>
    
        <form method="post" action="contact.php">

            <h1> Contact me </h1>

            <div class="formInput">
                <input type="text" name="name" placeholder="Enter Your Name">
                <input type="email" name="email" placeholder="Enter Email">
                <textarea name="message" placeholder="Leave me a message"></textarea>
            </div>

            <div class="formButtons">
                <input type="submit" name="submit" value="submit">
                <input type="reset"  name="reset" value="reset">
            </div>

        </form>
    
    `)

});