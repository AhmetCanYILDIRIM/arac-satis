// Örnek araba verileri
let cars = [{
  "brand": "BMW",
  "model": "M3",
  "price": 50000,
  "image": "https://www.bmw.com.tr/content/dam/bmw/common/all-models/m-series/m3-sedan/2022/highlights/bmw-3-series-sedan-m-automobiles-gallery-impressions-m3-competition-03-mobile.jpg",
  "color": "Beyaz",
  "transmission": "automatic",
  "fuelType": "Benzin"
}, {
  "brand": "BMW",
  "model": "M4",
  "price": 60000,
  "image": "https://www.bmw.com.tr/content/dam/bmw/common/all-models/m-series/m4-coupe/2020/highlights/bmw-4-series-coupe-m-automobiles-mc-product-highlights-m4-competition-hero-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1627456607177.jpg",
  "color": "Siyah",
  "transmission": "automatic",
  "fuelType": "Benzin"
}, {
  "brand": "BMW",
  "model": "M5",
  "price": 70000,
  "image": "https://www.bmw.com.tr/content/dam/bmw/common/all-models/m-series/m5-sedan/2021/Overview/bmw-m5-cs-onepager-mc-m5-cs-highlights-hero-teaser-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1627456767620.jpg",
  "color": "Gri",
  "transmission": "automatic",
  "fuelType": "Benzin"
},{
  "brand": "TOGG",
  "model": "C-SUV",
  "price": 5,
  "image": "https://www.taxi-times.com/wp-content/uploads/2020/08/2020-08-11-Togg-kommt-elektrisch-nach-Deutschland-Foto-TOGG-750x531.jpg",
  "color": "Beyaz",
  "transmission": "automatic",
  "fuelType": "Elektrik"
},{
  "brand": "Tofaş",
  "model": "Slx",
  "price": 500,
  "image": "https://cdn1.ntv.com.tr/gorsel/S0xD7-EtT0e-hQH2K_jIaw.jpg?width=1000&mode=crop&scale=both",
  "color": "Kırmızı",
  "transmission": "manuel",
  "fuelType": "LPG"
},{
  "brand": "Renult",
  "model": "12",
  "price": 5,
  "image": "https://www.malumatfurus.org/wp-content/uploads/renault-12-toros-dacia-1300.jpg",
  "color": "Mavi",
  "transmission": "automatic",
  "fuelType": "Elektrik"
},{
  "brand": "Volkswagen",
  "model": "Passat(Kurşun İzli Aşiret Paket)",
  "price": 7800,
  "image": "https://ares.shiftdelete.net/2021/11/2021-volkswagen-passat-fiyat-listesi-ve-ozellikleri-m.jpg",
  "color": "Gri",
  "transmission": "Manuel",
  "fuelType": "Benzin,LPG"
},
{
  "brand": "Porsche",
  "model": "992 G",
  "price": 999.999,
  "image": "https://img.classistatic.de/api/v1/mo-prod/images/fc/fcf6a50b-b012-4654-8e15-52aa2fc97b27?rule=mo-640.jpg",
  "color": "Gri",
  "transmission": "Yarı otomatik",
  "fuelType": "Benzin"
},
{
  "brand": "Volkswagen",
  "model": "POLO 2012 Model Comfortline",
  "price": 3750,
  "image": "https://teknoseyir.com/wp-content/uploads/2019/06/f5e33f334d67b92.jpg",
  "color": "Siyah",
  "transmission": "Manuel",
  "fuelType": "Benzin"
}
];

const CarPerPage = 3;
let currentPage = 1;

// Araçları gösteren fonksiyon
function showCars() {
  const carList = document.getElementById("carList");
  carList.innerHTML = "";

  const carsForShown = cars.slice((currentPage - 1) * CarPerPage, currentPage * CarPerPage);

  carsForShown.forEach((car, index) => {
    const card = document.createElement("div");
    card.classList.add("car-card");
    card.innerHTML = `<h3>${car.brand} ${car.model}</h3>
                      <img class="car-image" src="${car.image}" alt="${car.brand} ${car.model}" />
                      <div class="car-btns"><p>Fiyat: $${car.price}</p><button class="btn">Satın Al</button></div>
                      <button class="delete-button" onclick="deleteCar(${
                        currentPage * CarPerPage - CarPerPage + index
                      })">Sil</button>`;
    card.addEventListener("click", () => showCarDetails(currentPage * CarPerPage - CarPerPage + index));
    carList.appendChild(card);
  });
}

// Sayfa yüklendiğinde araçları göster
document.addEventListener("DOMContentLoaded", showCars);

// Yeni araç ekleme fonksiyonu
function addNewCar() {
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;
  const price = document.getElementById("price").value;
  const color = document.getElementById("color").value;
  const transmission = document.getElementById("transmission").value;
  const fuelType = document.getElementById("fuelType").value;
  const imageURL = document.getElementById("imageURL").value;

  const newCar = {
    brand,
    model,
    price,
    image: imageURL,
    color,
    transmission,
    fuelType,
  };
  cars.push(newCar);

  // Formu temizle
  document.getElementById("brand").value = "";
  document.getElementById("model").value = "";
  document.getElementById("price").value = "";
  document.getElementById("color").value = "";
  document.getElementById("transmission").value = "automatic";
  document.getElementById("fuelType").value = "";
  document.getElementById("imageURL").value = "";

  // Araçları göster
  showCars();
}

// Araç silme fonksiyonu
function deleteCar(index) {
  cars.splice(index, 1);

  // Araçları göster
  showCars();
}

// Araç detaylarını gösteren fonksiyon
function showCarDetails(index) {
  const detailImage = document.getElementById("detailImage");
  const detailBrandModel = document.getElementById("detailBrandModel");
  const detailPrice = document.getElementById("detailPrice");
  const detailColor = document.getElementById("detailColor");
  const detailTransmission = document.getElementById("detailTransmission");
  const detailFuelType = document.getElementById("detailFuelType");
  const carDetails = document.getElementById("carDetails");

  const selectedCar = cars[index];
  detailImage.src = selectedCar.image;
  detailBrandModel.textContent = `${selectedCar.brand} ${selectedCar.model}`;
  detailPrice.textContent = `Fiyat: $${selectedCar.price}`;
  detailColor.textContent = `Renk: ${selectedCar.color}`;
  detailTransmission.textContent = `Vites Tipi: ${selectedCar.transmission}`;
  detailFuelType.textContent = `Yakıt Türü: ${selectedCar.fuelType}`;

  // Detay panelini göster
  carDetails.style.display = "block";
}

const prevPage = () => {
  if (currentPage > 1) {
    currentPage--;
    showCars();
  }
}

const nextPage = () => {
  if (currentPage < Math.ceil(cars.length / CarPerPage)) {
    currentPage++;
    showCars();
  }
}