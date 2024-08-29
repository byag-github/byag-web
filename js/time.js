// Set the date we're counting down to
let countDownDate = new Date("Sep 31, 2024 15:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="time"
        document.getElementById("time").innerHTML =
                days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text
        if (distance < 0) {
                clearInterval(x);
                document.getElementById("time").innerHTML = "ALERT!!";
        }
}, 1000);
