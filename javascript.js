$(document).ready(function() {
    // Toggle visibility on button click
    $("#toggle-button").click(function() {
        $("#toggle-div").toggle(); // Toggle the visibility of the element with ID "toggle-div"
    });

    // Change paragraph color on button click
    $("#color-button").click(function() {
        $("p").css("color", "blue"); // Change the color of all <p> elements to blue
    });

    // Fade out the div on mouseover and fade in on mouseout
    $("#fade-div").hover(
        function() {
            $(this).fadeOut(500); // Fade out the element with a duration of 500 milliseconds
        },
        function() {
            $(this).fadeIn(500); // Fade in the element with a duration of 500 milliseconds
        }
    );
});

$(document).ready(function() {
    // Animation: Move the div horizontally
    let position = 0;
    const animationDiv = $("#animation-div");

    function animateDiv() {
        position += 5;
        animationDiv.css("left", position + "px");

        if (position >= 300) {
            clearInterval(animationInterval); // Stop the animation after reaching a certain position
        }
    }

    const animationInterval = setInterval(animateDiv, 50); // Animate every 50 milliseconds
});
