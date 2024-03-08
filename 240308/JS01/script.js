const url = "https://reqres.in/api/products/10";
const result = document.querySelector("#result");

const xhr = new XMLHttpRequest();

xhr.open("GET", url, true); //데이터, 경로, 비동기
xhr.send();

xhr.onreadystatchange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const product = JSON.parse(xhr.responseText);
    console.log(product);
    result.innerHTML = `
      <p>상품명 : ${product.data.name}</P>
      <p>생산년도 : ${product.data.year}</P>
    `;
  }
};
