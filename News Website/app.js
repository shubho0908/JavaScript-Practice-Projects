let myApi = "95ccddf2259a447c93d419c0d2d3d13f";

let main = document.getElementById("accordionExample");
let xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${myApi}`,
  true
);

xhr.onload = function () {
  let json = JSON.parse(this.responseText);
  let articles = json.articles;
  let str = "";
  articles.forEach((element, index) => {
    str += ` <div class="accordion-item my-4">
    <h2 class="accordion-header" id="heading${index}">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
        <b>#${index + 1}   ${element["title"]}</b>
      </button>
    </h2>
    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        ${element["description"]}  <a href="${
      element["url"]
    }" target="_blank">Read More..</a>
      </div>
    </div>
  </div>`;
  });
  main.innerHTML = str;
};

xhr.send();
