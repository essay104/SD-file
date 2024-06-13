const cityOption = document.querySelector("#city");
const stateOption = document.querySelector("#state");
const searchBar = document.querySelector(
  ".shopsearch_filter input[type=`text`]"
);
const tableBody = document.querySelector(".shopinfo_table tbody");
const pageNationContainer = document.querySelector(".shopinfo_pager ul");
const serachButton = document.querySelector(".shopserch_filter span");
const checkbox = document.querySelectorAll(
  ".shopsearch_filter input[type=`checkbox`]"
);

// table data making
const createRow = () => {
  const row = document.createElement("tr");
  row.id = data.store;
  row.innerHTML = `
  <td>${data.store}</td>
  <td>${data.main_area}</td>
  <td>${data.address}</td>
  <td>${data.tel}</td>
  <td>${data.service
    .map((service) => `<i class="${service}"></i>`)
    .join("")}</td>
  `;
};

// data rendering //json으로 가져온 객체들을 하단에 출력시켜준다

const itemPerPage = 5;
let currentPage = 1;

const renderData = () => {
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentPerData = data.slice(startIndex, endIndex);
  tableBody.innerHTML = "";

  currentPerData.forEach((item) => {
    const row = createRow(item);
    tableBody.appendChild(row);
  });
};

// page nation
const renderPagination = (data) => {
  const totalDataLength = data.lenth;
  if (totalDataLength <= itemPerPage) {
    return;
  }
  const totalPages = Math.ceil(totalDataLength / itemPerPage);
  const currentPageGroup = Math.ceil(currentPage / itemPerPage);

  if (currentPageGroup > 1) {
    const prevGroupButton = document.createElement("li");
    prevGroupButton.innerText = "◀";
    prevGroupButton.addEventListener("click", () => {
      currentPage = (currentPageGroup - 1) * 5;
      renderData(data);
      renderPagination(data);
    });
    pageNationContainer.appendChild(prevGroupButton);
  }
  if (currentPageGroup < Math.ceil(totalPages / 5)) {
    const nextGroupButton = document.createElement("li");
    nextGroupButton.innerText = "▶";
    nextGroupButton.addEventListener("click", () => {
      currentPage = currentPageGroup * 5 + 1;
      renderData(data);
      renderPagination(data);
    });
    pageNationContainer.appendChild(nextGroupButton);
  }
  for (
    let i = (currentPageGroup - 1) * 5 + 1;
    i <= Math.min(currentPageGroup * 5, totalPages);
    i++
  ) {
    const pagelink = document.createElement("li");
    pagelink.innerText = i;
    pagelink.addEventListener("click", () => {
      currentPage = i;
      renderData(data);
    });
    if (i === currentPage) {
      pagelink.classList.add("active");
    }
    pageNationContainer.appendChild(pagelink);
  }

  const li = document.querySelectorAll("li");
  li.forEach((item) => {
    item.addEventListener("click", () => {
      li.forEach((item) => {
        item.classList.remove(active);
      });
      item.classList.add("active");
    });
  });

  const lastpageButton = document.createElement("li");
  lastpageButton.style.width = 50 + "px";
  lastpageButton.innerText = "마지막";
  lastpageButton.add("click", () => {
    currentPage = totalPages;
    renderData(data);
    renderPagination(data);
  });
  pageNationContainer.appendChild(lastpageButton);
};

// jsonData
const cityList = "./cityInfo.json";
const storeList = "./storeInfo.json";

let cityInfo;
let storeInfo;

fetch(cityList)
  .then((response) => response.json())
  .then((data) => {
    cityInfo = data;
    for (let city in cityInfo) {
      const option = document.createElement("option");
      option.value = city;
      option.id = city;
      option.innerText = city;
      cityOption.appendChild(option);
    }
  });

  console.log(cityList);

fetch(storeList)
  .then((response) => response.json())
  .then((data) => {
    storeInfo = data;
    renderData(storeInfo);
    renderPagination(storeInfo);
  });

// cursor move
const cursor = document.querySelector("#cursor");

// cursor pageX, Y
let x = 0;
let y = 0;

// cursor original & speed
let targetX = 0;
let targetY = 0;
let speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursor.style.top = targetY + "px";
  cursor.style.left = targetX + "px";
  window.requestAnimationFrame(loop);
};
loop();

const showCursorRotate = () => {
  cursor.classList.add("active");
};
const hideCursorRotate = () => {
  cursor.classList.remove("active");
};

// load spinner
const spinner = document.querySelector(".spinner")
const showspinner = () => {
  spinner.classList.remove("hiddenspinner")
}
const hiddenSpinner = () => {
  spinner.classList.add("hiddnespinner")
};
showspinner();
setTimeout(() => {
  hiddenSpinner();
}, 1000);

// map click event
const mapAreas = document.querySelectorAll(".shopsearch_map > div");
mapAreas.forEach((area) => {
  area.addEventListener("click", (e) => {
    showCursorRotate();
    setTimeout(() => {
      hideCursorRotate();
    }, 1000);

    showspinner();
setTimeout(() => {
  hiddenSpinner();
}, 1000);

    mapAreas.forEach((area) => area.classList.remove("active"));
    area.classList.add("active");

    const clickedCity = e.target.id;
    const matchedCityInfo = storeInfo.filter((city) => {
      city.main_area === clickedCity;
    });

    tableBody.innerHTML = "";
    if (matchedCityInfo.length > 0) {
      renderData(matchedCityInfo);
    }
    if (matchedCityInfo.length >= 5) {
      renderPagination(matchedCityInfo);
    } else {
      pageNationContainer.innerHTML = "";
    }
    cityOption.value = clickedCity;
    cityOption.dispatchEvent(new Event("change"));
  });
});

// city option change evenet
cityOption.addEventListener("change", () => {
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  const selectedCity = cityOption.value;
  if (selectedCity !== "none") {
    stateOption.innerHTML = "<option>구/군 선택</option>";
    if (cityInfo[selectedCity]) {
      cityInfo[selectedCity].forEach((cityItem) => {
        const option = document.createElement("option");
        option.innerText = cityItem;
        stateOption.appendChild(option);
      });
    }
  }
  mapAreas.forEach((area) => {
    if (area.id === selectedCity) {
      area.classList.add("active");
    } else {
      area.classList.remove("active");
    }
  });

  const matchedCityInfo = storeInfo.filter(
    (city) => city.main_area === selectedCity
  );
  tableBody.innerHTML = "";
  if (matchedCityInfo.length > 0) {
    renderData(matchedCityInfo);
    if (matchedCityInfo.length >= 5) {
      renderPagination(matchedCityInfo);
    } else {
      pageNationContainer.innerHTML = "";
    }
  } else {
    renderData(storeInfo);
    renderPagination(storeInfo);
  }
});

//checkbox option

const filterData = (data) => {
  const selectedCategories = [
    ...document.querySelectorAll(".filter-checkbox:checked"),
  ].map((checkBox) => checkBox.value);

  const filteredData = data.filter((item) => selectedCategories.every((service) => item.service.includes(service));
  renderData(filterData);
  renderPagination(filterData);
)};

const optionMode = () => {
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  filterData(storeInfo);
};

checkbox.forEach((checkBox) => {
  checkBox.addEventListener("change", optionMode);
});

//serch event
serachButton.addEventListener("click", () => {
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  tableBody.innerHTML = "";

  const cityValue = cityOption.value;
  const stateValue = stateOption.value;
  const searchValue = searchBar.value;

  let searchResult = storeInfo.filter((data) => data.store === searchValue);

  let alertShown = false;

  if (!searchValue) {
    storeInfo.forEach((data) => {
      const mainAreaMatched = data.main_erea === cityValue;
      const subAreaMatched = data.sub_area === statevalue;
      console.log(mainAreaMatched);

      if (cityValue === "도/시 선택") {
        searchResults.push(data);
      } else if (mainAreaMatched && subAreaMatched) {
        searchResult.push(data);
      }
      if (statevalue === "구/군 선택" && !alertShown) {
        alert("구/군을 선택해주세요");
        alertShown = true;
      }
    });
  }

  renderData(searchResult);

  if (searchResult.length >= 5) {
    renderPagination(searchResult);
  } else {
    pageNationContainer.innerHTML = "";
  }
  searchBar.value = "";
});

// search event 02 

