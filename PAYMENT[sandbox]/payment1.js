const saved = () =>{
    event.preventDefault();
    alert("Card details saved successfully!");
}
document.getElementById("save").addEventListener("submit", saved);
const process = ()=>{
    alert("Payment successful");

}
document.getElementById("process").addEventListener("click", process);
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  