import { renderHomePage, contact, home, menu } from "./home_page.js";
import { renderContactUs } from "./contact_us_page";
import { renderMenu } from "./menu.js";
renderHomePage();
contact.addEventListener("click", () => renderContactUs());
home.addEventListener("click", () => renderHomePage());
menu.addEventListener("click", () => {
  const bgimg = document.querySelector(".bgimg");
  bgimg.style = "display:none";
  renderMenu();
});

//TODO add tab-switching logic.
