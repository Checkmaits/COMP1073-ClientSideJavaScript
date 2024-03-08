/**
 * List to store cars
 */
const carList = [];

/**
 * Adds a car to the car list and table
 */
function addCar(car) {
  carList.push(car);

  const carTableBody = document.querySelector("table > tbody");
  const tableRow = document.createElement("tr");
  Object.values(car).forEach(function (value) {
    const tableData = document.createElement("td");
    tableData.innerText = value;
    tableRow.appendChild(tableData);
  });

  tableRow.addEventListener("click", () => showModal(car));
  carTableBody.appendChild(tableRow);

  // easiest way to do it
  localStorage.clear();
  localStorage.setItem("carList", JSON.stringify(carList));
}
/**
 * Shows a modal with a simple JSON output that shows the object properties
 */
function showModal(car) {
  const carModal = document.querySelector(".car-modal-overlay");
  const carModalTitle = document.querySelector(".car-modal-title");
  const carModalText = document.querySelector(".car-modal-pre");
  carModalTitle.innerText = `${car.year} ${car.brand} ${car.model}`;
  carModalText.innerText = JSON.stringify(car, null, 2);
  carModal.style.display = "grid";
}

/**
 * Called upon loading the webpage
 * If a localStorage entry exists for the stored cars, loop and add them to table
 */
function loadCars() {
  const storedCars = localStorage.getItem("carList");
  if (storedCars) {
    JSON.parse(storedCars).forEach(function (car) {
      addCar(car);
    });
  }
}

loadCars();
