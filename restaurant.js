function showMenu() {
  const day = document.getElementById("day").value;
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    if (item.id === day) {
      item.classList.add("active");
      item.querySelectorAll("input").forEach((input) => {
        input.disabled = false;
      });
    } else {
      item.classList.remove("active");
      item.querySelectorAll("input").forEach((input) => {
        input.checked = false;
        input.disabled = true;
        input.addEventListener("click", (e) => {
          e.preventDefault();
        });
      });
    }
  });
}
window.addEventListener("load", showMenu);
