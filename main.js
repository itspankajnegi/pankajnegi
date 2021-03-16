const myFunction = () => {
  const showhide = document.getElementById("hide");
  if (showhide.style.display === "block") {
    showhide.style.display = "none";
  } else {
    showhide.style.display = "block";
  }
};
