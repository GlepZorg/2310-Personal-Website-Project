function hello_world() {
    alert("Hello World!");
  }
  
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    document.getElementById("contact-form").style.display = "none";
    document.getElementById("success-message").style.display = "block";
});
