document.addEventListener("DOMContentLoaded", function () {
    const mobileMediaQuery = window.matchMedia("(max-width: 400px)");
    const tabletMediaQuery = window.matchMedia("(min-width: 400px) and (max-width: 600px)");
    const notes = document.querySelectorAll(".js-note");
  
    function resizeNotes() {
      notes.forEach(note => {
        if (note.classList.contains("active")) {
          note.classList.remove("active");
          gsap.set(note, {
            height: "30%",
            clearProps: "all"
          });
        }
      });
    }
  
    function notesReady() {
      gsap.to(".js-envelop-content", {
        height: "110%",
        duration: 0.5
      });
  
      notes.forEach((note, index) => {
        note.addEventListener("click", function () {
          if (mobileMediaQuery.matches) {
            if (this.classList.contains("active")) {
              this.classList.remove("active");
              gsap.set(this, {
                height: "30%",
                clearProps: "all"
              });
            } else {
              notes.forEach(note => {
                if (note.classList.contains("active")) {
                  note.classList.remove("active");
                  gsap.set(note, {
                    height: "30%",
                    clearProps: "all"
                  });
                }
              });
              this.classList.add("active");
              gsap.set(this, {
                height: 125 + 40 * index + "%"
              });
            }
          } else if (tabletMediaQuery.matches) {
            if (this.classList.contains("active")) {
              this.classList.remove("active");
              gsap.set(this, {
                height: "30%",
                clearProps: "all"
              });
            } else {
              notes.forEach(note => {
                if (note.classList.contains("active")) {
                  note.classList.remove("active");
                  gsap.set(note, {
                    height: "30%",
                    clearProps: "all"
                  });
                }
              });
              this.classList.add("active");
              gsap.set(this, {
                height: 80 + 21 * index + "%"
              });
            }
          } else {
            if (this.classList.contains("active")) {
              this.classList.remove("active");
              gsap.set(this, {
                height: "30%",
                clearProps: "all"
              });
            } else {
              notes.forEach(note => {
                if (note.classList.contains("active")) {
                  note.classList.remove("active");
                  gsap.set(note, {
                    height: "30%",
                    clearProps: "all"
                  });
                }
              });
              this.classList.add("active");
              gsap.set(this, {
                height: 70 + 20 * index + "%"
              });
            }
          }
        });
      });
    }
  
    function setUpPaper() {
      const arr = [0, 0, 100, 0, 50, 61];
      gsap.set(".js-up-paper", {
        bottom: "97%",
        rotation: 180,
        zIndex: 200,
        clipPath: `polygon(${arr[0]}% ${arr[1]}%, ${arr[2]}% ${arr[3]}%, ${arr[4]}% ${arr[5]}%)`,
        onComplete: notesReady
      });
    }
  
    function envelopTransition() {
      gsap.to(".js-up-paper", {
        bottom: "1%",
        duration: 0.25,
        onComplete: setUpPaper
      });
      document.querySelector(".js-up-paper").removeEventListener("click", envelopTransition);
      document.querySelector(".js-up-paper").classList.remove("cursor");
    }
  
    function sticker() {
      gsap.set(".js-sticker", { width: "20%", left: "-80%" });
      document.body.classList.remove("scissors");
      document.querySelector(".js-sticker").removeEventListener("click", sticker);
      document.querySelector(".js-up-paper").addEventListener("click", envelopTransition);
      document.querySelector(".js-up-paper").classList.add("cursor");
    }
  
    document.querySelector(".js-sticker").addEventListener("click", sticker);
  
    window.onresize = function () {
      resizeNotes();
    };
  });
  