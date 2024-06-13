const mainHeader = document.querySelector(".mainHeader");
const progressbar = document.querySelector(".bar");
const coverWrap = document.querySelector(".coverWrap");
const coverTitle = document.querySelector(".coverTitle");
const dimd = coverWrap.querySelector(".dimd");
const contentWrap = document.querySelector(".contentWrap");

const coverHeight = window.innerHeight;

coverWrap.style.height = coverHeight + "px";
contentWrap.style.marginTop = coverHeight + "px";

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

const scrollEvent = () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight - coverHeight;

  const per = percent(scrollNum, documentHeight) + "%";
  progressbar.style.width = per;

  if (scrollNum >= coverHeight) {
    mainHeader.classList.add("fixed");
  } else {
    mainHeader.classList.remove("fixed");
    coverTitle.style.top = -scrollNum / 5 + "px";
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 15}px`;
    dimd.style.backgroundcolor = `rgba(0, 0, 0, ${0.4 + scrollNum / 1000})`;
  }
};

window.addEventListener("scroll", scrollEvent);
