function messageJoinUs (){
const facebook = Document.getElementById("facebook");
const joinUsMessage = document.getElementById("joinUsMessage");

facebook.addEventListener("mouseover", () => {
  joinUsMessage.style.display = "block";
});
facebook.addEventListener("mouseout", () => {
  joinUsMessage.style.display = "none";
});
}