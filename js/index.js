//DOM Elments
const adviceId = document.getElementById('advice__id');
const adviceQuote = document.getElementById('advice__quote');
const btn = document.getElementById("btn");
// request API
const API = `https://api.adviceslip.com/advice`

const getData = (resourse) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        resolve(data);
      }else if(request.readyState === 4) {
        reject("Ma'lumot topilmadi")
      }
    })


    request.open("GET", resourse);
    request.send();
  })
}

getData(API).then((data) => {
  adviceId.textContent = `Advice #${data.slip.id}`
  adviceQuote.textContent = data.slip.advice;
})

btn.addEventListener("click", () => {
  getData(API).then((data) => {
    adviceId.textContent = `Advice #${data.slip.id}`;
    adviceQuote.textContent = data.slip.advice;
  })
})
