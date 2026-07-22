// Typing Effect

const text = "Full Stack Python Developer";

let index = 0;

function typing() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typing, 100);

    }

}

typing();


// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.innerHTML = "🌞";

    }

    else {

        themeBtn.innerHTML = "🌙";

    }

};


// Skill Animation

const bars = document.querySelectorAll(".skill-bar");

window.addEventListener("load", () => {

    bars.forEach(bar => {

        bar.style.width = bar.dataset.width;

    });

});


// Contact Form

document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    this.reset();

});


// Scroll Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 200){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};