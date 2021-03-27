const mainData = [
  {
    articol: "Bamboo stand",
    bid: "Pledge $25 or more",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia optio incidunt reiciendis quibusdam tempore numquam? Similique, earum error!",
    amount: 101,
    status: "",
  },
  {
    articol: "Black edition stand",
    bid: "Pledge $75 or more",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia optio incidunt reiciendis quibusdam tempore numquam? Similique, earum error!",
    amount: 64,
    status: "",
  },
  {
    articol: "Mahogany Special Edition",
    bid: "Pledge $200 or more",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia optio incidunt reiciendis quibusdam tempore numquam? Similique, earum error!",
    amount: 0,
    status: "disable",
  },
];

const menuBtn = document.getElementById("burger-menu");
const closeBtn = document.getElementById("modal-close");
const body = document.getElementsByTagName("body")[0];
const headerNavbar = document.getElementsByClassName("header-navbar")[0];
const navbarLinks = document.querySelectorAll(".header-navbar_links a");

menuBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", closeMenu);

navbarLinks.forEach((link) => {
  link.addEventListener("click", openNavLink);
});

const myMainData = document.getElementById("myMainData");
loadMainData();

function loadMainData() {
  for (i in mainData) {
    myMainData.innerHTML += `<div class="showcase-item ${mainData[i].status}">
          <div class="showcase-item_title card">
            <span>${mainData[i].articol}</span>
            <span>${mainData[i].bid}</span>
          </div>
          <div class="showcase-item_content left">
            <p>
            ${mainData[i].description}
            </p>
          </div>
          <div class="showcase-item_inputs">
            <span class="amount">
              <span>${mainData[i].amount}</span>
              <span>left</span>
            </span>
            <span class="btn">Select Reward</span>
          </div>
        </div>`;
  }
}

function showMenu() {
  headerNavbar.classList.add("show");
  body.classList.add("modal");
}

function closeMenu() {
  headerNavbar.classList.remove("show");
  body.classList.remove("modal");
}

function openNavLink() {
  closeMenu();
  // cod extra in continare aici...
}
