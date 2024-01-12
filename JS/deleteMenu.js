let dispMenu = document.getElementById("menu-container");
console.log(dispMenu);

let getAllItems = JSON.parse(localStorage.getItem("HotelMenu")) || [];
console.log(getAllItems);

function fetchData() {
  dispMenu.innerHTML = "";
  getAllItems.map((item, index) => {
    dispMenu.innerHTML += ` <div class="card-container" id="menu-conatiner">
    <div class="card">
      <img src="/dosa.jpg" alt="" />
      <div class="flexBetween">
      <h3 id="dishItem">Name:${item.dishname}</h3>
      <p id="priceDisp">Price:${item.price}</p>
      </div>
      <i class="fa-solid fa-trash" onclick="deleteItem(${index})"></i>
    </div>
  </div>`;
  });
}

function deleteItem(id) {
  getAllItems.splice(id, 1);
  localStorage.setItem("HotelMenu", JSON.stringify(getAllItems));
  fetchData();
}

fetchData();
