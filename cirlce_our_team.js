


let circle_img = document.querySelectorAll(".circle_img")
let img = document.querySelectorAll(".circle_img img")
let profile_img = document.querySelector(".person_profile img")
let profile = document.querySelector(".person_profile")
circle_img[0].classList.add("active")
circle_img[0].classList.add("active")
circle_img.forEach((el,ind) => {
    el.onmousemove=function () {
      if (!el.classList.contains("active")) {
        for (let i = 0; i < circle_img.length; i++) {
            circle_img[i].classList.remove("active")
        }
              el.classList.add("active")
            profile.style.transform = `scale(0)`
            setTimeout(() => {
                profile_img.src = img[ind].src
                profile.style.transform = `scale(1)`
            }, 300);
           
      }
       
           }
})