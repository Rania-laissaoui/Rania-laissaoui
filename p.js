let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}
let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');
let closeSearch = document.querySelector('#close');

searchIcon.onclick = () => {
    searchForm.style.top = "0";  
};

closeSearch.onclick = () => {
    searchForm.style.top = "-110%";
};
 document.addEventListener("DOMContentLoaded", function() {
    const signUpButton = document.querySelector(".q"); 
    const loginForm = document.querySelector(".login-form");
    const signUpForm = document.querySelector(".form-container"); 

    
    signUpButton.addEventListener("click", function(event) {
        loginForm.style.display = "none"; 
        signUpForm.style.display = "block"; 
        event.stopPropagation(); 
    });

    
    document.addEventListener("click", function(event) {
        if (!signUpForm.contains(event.target) && event.target !== signUpButton) {
            signUpForm.style.display = "none"; 
            loginForm.style.display = "block"; 
        }
    });

    
    signUpForm.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const showButtons = document.querySelectorAll(".ll"); 
    const hideButton = document.querySelector(".xx"); 
    const section = document.querySelector(".sectionn");

    
    showButtons.forEach(button => {
        button.addEventListener("click", function () {
            section.style.visibility = "visible";
            section.style.opacity = "1";
            document.body.style.overflow = "hidden"; 
        });
    });

  
    hideButton.addEventListener("click", function () {
        section.style.opacity = "0";
        setTimeout(() => {
            section.style.visibility = "hidden";
            document.body.style.overflow = "auto"; 
        }, 300);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let isFormVisible = false;
    let selectedRating = 0;

    const form = document.getElementById("commentForm");
    const openFormBtn = document.getElementById("openFormBtn");
    const submitBtn = document.getElementById("submitBtn");
    const stars = document.querySelectorAll(".star");

    openFormBtn.addEventListener("click", () => {
        isFormVisible = !isFormVisible;
        form.style.display = isFormVisible ? "block" : "none";
        if (isFormVisible) form.classList.add("slide-in");
    });

    stars.forEach(star => {
        star.addEventListener("click", () => {
            selectedRating = parseInt(star.dataset.value);
            stars.forEach(s => s.classList.toggle("selected", s.dataset.value <= selectedRating));
        });
    });

    submitBtn.addEventListener("click", () => {
        const comment = document.getElementById("comment").value;
        if (selectedRating === 0) {
            alert("Please select a rating.");
            return;
        }
        alert('Submitted!');
        form.style.display = "none";
        isFormVisible = false;
    });
    document.addEventListener("click", (event) => {
        if (!form.contains(event.target) && event.target !==  openFormBtn) {
            form.style.display = "none";
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const link = document.querySelector('.us');
    const footer = document.getElementById('footer');
  
    if (link && footer) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        footer.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
 
  document.getElementById("join").addEventListener("click", function () {
    document.querySelector(".login").scrollIntoView({ behavior: "smooth" });
  });

