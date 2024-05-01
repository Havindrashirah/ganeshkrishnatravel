window.addEventListener('scroll', function() {
    var target = document.getElementById('500');
    var targetPosition = target.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (targetPosition < screenPosition) {
        startCounting(target);
        window.removeEventListener('scroll', arguments.callee);
    }
});

function startCounting(counter) {
    var targetCount = parseInt(counter.getAttribute('data-target'));
    var count = 0;
    var duration =500; // Total duration in milliseconds (0.5 seconds)
    var speed = duration / targetCount; // Calculate speed based on total duration and target count

    var interval = setInterval(function() {
        if (count < targetCount) {
            count++;
            if (count <= 500) {
                counter.textContent = count;
            } else {
                counter.textContent = '2k+';
            }
        } else {
            clearInterval(interval);
        }
    }, speed);
}



window.addEventListener('scroll', function() {
    var target = document.getElementById('4');
    var targetPosition = target.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (targetPosition < screenPosition) {
        startCounting(target);
        window.removeEventListener('scroll', arguments.callee);
    }
});

function startCounting(counter) {
    var targetCount = parseInt(counter.getAttribute('data-target'));
    var count = 0;
    var duration =2000; // Total duration in milliseconds (0.5 seconds)
    var speed = duration / targetCount; // Calculate speed based on total duration and target count

    var interval = setInterval(function() {
        if (count < targetCount) {
            count++;
        } 
    }, speed);
}
window.addEventListener('scroll', function() {
    var target = document.getElementById('7');
    var targetPosition = target.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (targetPosition < screenPosition) {
        startCounting(target);
        window.removeEventListener('scroll', arguments.callee);
    }
});

function startCounting(counter) {
    var targetCount = parseInt(counter.getAttribute('data-target'));
    var count = 0;
    var duration =500; // Total duration in milliseconds (0.5 seconds)
    var speed = duration / targetCount; // Calculate speed based on total duration and target count

    var interval = setInterval(function() {
        if (count < targetCount) {
            count++;
        } 
    }, speed);
}
window.addEventListener('scroll', function() {
    var target = document.getElementById('8');
    var targetPosition = target.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (targetPosition < screenPosition) {
        startCounting(target);
        window.removeEventListener('scroll', arguments.callee);
    }
});

function startCounting(counter) {
    var targetCount = parseInt(counter.getAttribute('data-target'));
    var count = 0;
    var duration =500; // Total duration in milliseconds (0.5 seconds)
    var speed = duration / targetCount; // Calculate speed based on total duration and target count

    var interval = setInterval(function() {
        if (count < targetCount) {
            count++;
            if (count <= 500) {
                counter.textContent = count;
            } else {
                counter.textContent = '2k+';
            }
        } else {
            clearInterval(interval);
        }
    }, speed);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("feedback-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var feedback = document.getElementById("feedback").value;

        // Send feedback via EmailJS
        sendFeedbackViaEmailJS(name, email, feedback);

        // Optionally, show a confirmation message to the user
        alert("Thank you for your feedback!");

        // Optionally, reset the form
        document.getElementById("feedback-form").reset();
    });
});

function sendFeedbackViaEmailJS(name, email, feedback) {
    emailjs.init("DAewALiggQNs31JiV"); // Initialize EmailJS with your Public Key
    emailjs.send("service_wemx2rq", "template_ckjmkfw", {
        to_name: name,
        from_name: email,
        message: feedback
    }).then(function(response) {
        console.log("Email sent successfully", response);
    }, function(error) {
        console.error("Error sending email", error);
    });
}
