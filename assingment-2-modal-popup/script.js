const modal = document.getElementById("modal")
 modal.style.display="none"

function handelClick() {
    console.log("hello")
       if (modal.style.display === "none") {
           modal.style.display = "flex" 
           modal.style.transitionDuration="2s"
       } else {
           modal.style.display = "none";
       }
   
}