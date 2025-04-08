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
document.addEventListener("DOMContentLoaded", () => {
    let isFormVisible = false;
    let selectedRating = 0;

    const form = document.getElementById("rateForm");
    const openFormBtn = document.getElementById("rate");
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
        const comment = document.getElementById("rate").value;
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
document.addEventListener("DOMContentLoaded", function () {
    const commentBtn = document.getElementById("comment");
    const commentForm = document.getElementById("commentForm");
    const submitBtn = document.getElementById("submit");
    const commentInput = document.getElementById("comment");

    
    commentBtn.addEventListener("click", (event) => {
        event.stopPropagation(); 
        commentForm.style.display = (commentForm.style.display === "block") ? "none" : "block";
    });

   
    submitBtn.addEventListener("click", (event) => {
        event.stopPropagation(); 
        if (commentInput.value.trim() === "0") {
            alert("Please write a comment before submitting.");
        } else {
            alert("Comment submitted!");
            commentForm.style.display = "none"; 
            commentInput.value = ""; 
        }
    });


    document.addEventListener("click", (event) => {
        if (!commentForm.contains(event.target) && event.target !== commentBtn) {
            commentForm.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const showButtons = document.querySelectorAll(".ll"); 
    const hideButton = document.querySelector(".xx"); 
    const section = document.querySelector(".sectionnn");

 
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
  
  const cartCount = document.getElementById("cart-count");
  const toggleBtn = document.getElementById("toggle-btn");

  let added = false;

  toggleBtn.addEventListener("click", () => {
    if (!added) {
      cartCount.textContent = "1";
    } else {
      cartCount.textContent = "0";
    }
    added = !added;
  });

 
  const heartCount = document.querySelector(".count"); 
  const heartBtns = document.querySelectorAll(".faa"); 

  heartBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      let current = parseInt(heartCount.textContent);
      heartCount.textContent = current + 1;
    });
  });



