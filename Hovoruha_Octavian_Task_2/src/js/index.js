const showcase = [
  {
    title: "",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
    ducimus quis rem labore perferendis optio voluptates sapiente. Omnis
    placeat neque similique eligendi debitis, labore, explicabo quisquam
    deleniti voluptate, repellat natus! Omnis placeat neque similique
    eligendi debitis, labore, explicabo quisquam deleniti voluptate,
    repellat natus!`,
    foot_cont: "",
    input: "despre noi",
    class: "blue",
  },
  {
    title: "cum functioneaza",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
  ducimus quis rem labore perferendis optio voluptates sapiente. Omnis
  placeat neque similique eligendi debitis, labore, explicabo quisquam
  deleniti voluptate, repellat natus! Omnis placeat neque similique
  eligendi debitis, labore, explicabo quisquam deleniti voluptate,
  repellat natus!`,
    foot_cont: "",
    input: "vezi cereri",
    class: "anthr",
  },
  {
    title: "comunitatea wmp",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
  ducimus quis rem labore perferendis optio voluptates sapiente. Omnis
  placeat neque similique eligendi debitis, labore, explicabo quisquam
  deleniti voluptate, repellat natus! Omnis placeat neque similique
  eligendi debitis, labore, explicabo quisquam deleniti voluptate,
  repellat natus!`,
    foot_cont: "",
    input: "vreau",
    class: "yellow",
  },
  {
    title: "cabinete vet",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
  ducimus quis rem labore perferendis optio voluptates sapiente. Omnis
  placeat neque similique eligendi debitis, labore, explicabo quisquam
  deleniti voluptate, repellat natus! Omnis placeat neque similique
  eligendi debitis, labore, explicabo quisquam deleniti voluptate,
  repellat natus!`,
    foot_cont: "",
    input: "lista cabinete",
    class: "blue",
  },
  {
    title: "scrie-ne",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
  ducimus quis rem labore perferendis optio voluptates sapiente. Omnis
  placeat neque similique eligendi debitis, labore, explicabo quisquam
  deleniti voluptate, repellat natus! Omnis placeat neque similique
  eligendi debitis, labore, explicabo quisquam deleniti voluptate,
  repellat natus!`,
    foot_cont: `<li class="card-footer_item">
            <label>mesaj*</label>
            <textarea
            placeholder="va multumim ca ati ales sa ne scrieti!"
            ></textarea>
        </li>
        <li class="card-footer_item">
            <label>email</label>
            <input type="email" placeholder="optional" />
        </li>`,
    input: "trimite",
    class: "green",
  },
];

const mainSection = document.querySelector("div.main-section");

(() => {
  showcase.forEach((item) => {
    mainSection.innerHTML += `<div class="card">
            <div class="card-title">
                <h2>${item.title}</h2>
            </div>
            <div class="card-content">${item.content}</div>
            <div class="card-footer">${item.foot_cont}
                <li class="card-footer_item">
                <button class="btn ${item.class}">${item.input}<span><i class="fas fa-paw"></i></span>
                </button>
                </li>
            </div>
        </div>`;
  });
})();
