let projects = [
  {
    name: "space war",
    img: "./img/space-war.png",
    url: "https://cleancode.club/works/space-war/",
    src: "https://www.google.com",
  },
  {
    name: "painter",
    img: "./img/painter.png",
    url: "https://www.youtube.com",
    src: "https://www.google.com",
  },
  {
    name: "sliding puzzle",
    img: "./img/sliding-puzzle.png",
    url: "https://www.youtube.com",
    src: "https://www.google.com",
  },
  {
    name: "number crush",
    img: "./img/number-crush.png",
    url: "https://www.youtube.com",
    src: "https://www.google.com",
  },
  {
    name: "color matcher",
    img: "./img/color-matcher.png",
    url: "https://www.youtube.com",
    src: "https://www.google.com",
  },
  {
    name: "currency converter",
    img: "./img/currency-converter.png",
    url: "https://www.youtube.com",
    src: "https://www.google.com",
  },
  // {
  //   name: "palette generator",
  //   img: "./img/palette-generator.png",
  //   url: "https://www.youtube.com",
  //   src: "https://www.google.com",
  // },
  // {
  //   name: "tic-tac-toe",
  //   img: "./img/tic-tac-toe.png",
  //   url: "https://www.youtube.com",
  //   src: "https://www.google.com",
  // },
  // {
  //   name: "magazine website",
  //   img: "./img/magazine.png",
  //   url: "https://cleancode.club/works/magazine/index.html",
  //   src: "https://www.google.com",
  // },
];

function createProjectCards(projects) {
  let works = document.querySelector("#wrapper");

  for (let i = 0; i < projects.length; i++) {
    works.innerHTML += `    
    
    <div class="card">
    <a href="${projects[i].url}" target="_blank">
        <div class="left-bg"></div>
    </a>
    <div class="container">
      <a href="${projects[i].url}" target="_blank">
        <div class="img">
          <img src="${projects[i].img}" alt="" />
        </div>
      </a>
    </div>
    <a href="${projects[i].url}" target="_blank">
    <h2 class="project-name"></h2>
    </a>
    <p>
      <span><i class="fas fa-info"></i></span>
      <span
        ><a href="${projects[i].src}" target="_blank"><i class="fas fa-code"></i></a
      ></span>
      <span>
        <a href="${projects[i].url}" target="_blank"
          ><i class="fas fa-external-link-alt"></i
        ></a>
      </span>
    </p>
  </div>
          `;
  }
}

function addProjectNameToCard(projects) {
  let h2 = document.querySelectorAll(".project-name");

  for (let i = 0; i < projects.length; i++) {
    let name = projects[i].name.split(" ");

    h2[i].innerHTML = name[0];

    if (name[1]) {
      h2[i].innerHTML += `<br>${name[1]}</br>`;
    }
  }
}

createProjectCards(projects);

addProjectNameToCard(projects);
