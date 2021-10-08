let tick  =  0;
        let mobNav = document.getElementById("mobNav");
        let show =  document.getElementById('myBurger');
        show.addEventListener("click",()=>{
            console.log(tick);
            if (tick===0) {
                tick=1;
                mobNav.classList.remove("leftNav")
                show.classList.remove("fa-bars")
                show.classList.add("fa-times")
                show.style.color = "red"
                // mobNav.tagName.add("comment-detail")
            }else {
                tick= 0;
                mobNav.classList.add("leftNav")

                show.classList.remove("fa-times")
                show.classList.add("fa-bars")
                
                show.style.color = "white"
            }
        })