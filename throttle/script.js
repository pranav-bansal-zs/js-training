    function throttle() {
        let locked = false;
        return () => {
          if (!locked) {
            console.log(new Date());
            locked = true;
            setTimeout(() => {
              locked = false;
            }, 1000);
          }
        };
    }

   const throttle_button= document.getElementById("throttle-button");
   throttle_button.addEventListener("click",throttle())