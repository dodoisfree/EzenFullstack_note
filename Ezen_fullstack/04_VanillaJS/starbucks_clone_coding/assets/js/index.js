// 창이 로드 되었을 때 투명 -> 불투명으로 변경
window.addEventListener("load", (e) => {
  document.querySelectorAll(".opacity").forEach((v, i) => {
    v.style.opacity = 1;
  });
  moveslide(currentIdx);
  stopSlide();
});

// 스타벅스 프로모션 버튼 클릭 시 페이지 여닫기
const downBtn = document.querySelector("#down");
downBtn.addEventListener("click", (e) => {
  const height = document.querySelector("#content2");
  if (height.style.height <= 62 + "px") {
    height.style.height = 720 + "px";
    downBtn.style.transform = "scaleY(-1)";
    autoSlide();
  } else {
    height.style.height = 62 + "px";
    downBtn.style.transform = "scaleY(1)";
    stopSlide();
  }
});

/* 이미지 무한 슬라이드 */
const slide = document.querySelector("#slide"),
slides = document.querySelectorAll("#slide li"),
prevBtn = document.querySelector("#prev"),
nextBtn = document.querySelector("#next");
const on = document.querySelector("#controller a:nth-child(3)"),
off1 = document.querySelector("#controller a:nth-child(4)"),
off2 = document.querySelector("#controller a:last-child");

let currentIdx = 0,
slideCount = slides.length;
slideWidth = 819,
slideMargin = 20;
makeClone();

// 클론 생성
function makeClone() {
  for(let i=0; i<slideCount; i++) {
    let cloneSlide = slides[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slide.appendChild(cloneSlide);
  }
  for(let i=slideCount - 1; i >= 0; i--) {
    let cloneSlide = slides[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slide.prepend(cloneSlide);
  }
  updateWidth();
  setInitalPos();
  setTimeout((e) => {
    slide.classList.add('animate')
  }, 100);
}
// ul에 전체 넓이 지정
function updateWidth() {
  let currentSlides = document.querySelectorAll("#slide li");
  let newSlideCount = currentSlides.length;
  let newWidth = 
  (slideWidth + slideMargin) * newSlideCount - slideMargin + "px";
  slide.style.left = newWidth;
}
// 초기 위치를 클론이 아닌 원본으로 설정
function setInitalPos() {
  let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slide.style.transform = "translateX(" + initialTranslateValue + "px)";
}

// 다음 버튼 클릭 시 이동
nextBtn.addEventListener("click", (e) => {
  moveslide(currentIdx + 1);
  stopSlide();
});
// 이전 버튼 클릭 시 이동
prevBtn.addEventListener("click", (e) => {
  moveslide(currentIdx - 1);
    stopSlide();
});

// 이미지 슬라이드
function moveslide(num) {
  slide.style.left = -num * (slideWidth + slideMargin) + "px";
  if (num == 0 || num == 3 || num == 6 || num == -3 || num == -4) {
    on.style.left = "33px";
    off1.style.left = "53px";
    off2.style.left = "73px";
    off1.style.opacity = 0.5;
  } else if (num == 1 || num == 4 || num == -2 || num == -5) {
    off1.style.left = "33px";
    on.style.left = "53px";
    off2.style.left = "73px";
  } else if (num == 2 || num == 5 || num == -1 || num == -6) {
    off1.style.left = "33px";
    off2.style.left = "53px";
    on.style.left = "73px";
  } 
  currentIdx = num;
  console.log(currentIdx, slideCount);
  if (currentIdx == slideCount || currentIdx == -slideCount) {
    setTimeout((e) => {
      slide.classList.remove("animate");
      slide.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout((e) => {
        slide.classList.add("animate");
    }, 520);
  }
}

/* 자동 슬라이드 */
let timer = undefined;
const palyBtn = document.querySelector(".playBtn");
const stopBtn = document.querySelector(".stopBtn");

// 3초마다 자동 슬라이드
function autoSlide() {
  if (timer == undefined) {
    timer = setInterval( e => {
      moveslide(currentIdx + 1);
    }, 3000);
  }
}
autoSlide();
// 마우스 내리면 자동 슬라이드
slide.addEventListener("mouseout", (e) => {
  if (stopBtn.classList.contains('hidden')){
    stopSlide();
  } else {
    autoSlide();
  }
  
});
// 재생버튼 누르면 자동 슬라이드
palyBtn.addEventListener("click", (e) => {
  autoSlide();
  e.currentTarget.classList.add("hidden");
  palyBtn.classList.add("hidden");
  stopBtn.classList.remove("hidden");
});

// 자동슬라이드 멈추기
function stopSlide() {
  clearInterval(timer);
  timer = undefined;
}
// 마우스 올리면 멈춤
slide.addEventListener("mouseover", (e) => {
  stopSlide();
});
// 스탑버튼 누르면 멈춤
stopBtn.addEventListener("click", (e) => {
  stopSlide();
  e.currentTarget.classList.add("hidden");
  palyBtn.classList.remove("hidden");
  stopBtn.classList.add("hidden");
});