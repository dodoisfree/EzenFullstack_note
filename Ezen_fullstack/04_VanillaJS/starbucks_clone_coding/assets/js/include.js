Array.from(document.querySelectorAll("*[data-include]")).map(async (v, i) => {
  const include = v.dataset.include;
  let html = null;

  try {
    const response = await axios.get(include);
    html = response.data;
  } catch (e) {
    console.error(e);
  }

  if (html != null) {
    v.outerHTML = html;
  }
  
  if (include.indexOf("header.html") > -1) {

    // 마우스 올리면 메뉴 펴기
    document.querySelectorAll('.bottom').forEach((v, i) =>{
      v.addEventListener('mouseover', (e) => {
          const sub = document.querySelector(`.scroll${i}`);
          sub.style.height = sub.scrollHeight + "px";
          sub.style.transition = 350 + "ms";
      });
    });

    // 마우스 내리면 메뉴 접기
    document.querySelectorAll('.bottom').forEach((v, i) =>{
      v.addEventListener('mouseout', (e) => {
          const sub = document.querySelector(`.scroll${i}`);
          sub.style.height = null;
          sub.style.transition = 0 +"ms";
      });
    });

      // 서브메뉴에 마우스 올리면 서브메뉴와 맞는 메뉴 선택 효과
    document.querySelectorAll('.scroll').forEach((v, i) => {
      v.addEventListener("mouseover", (e) => {
        const sub = document.querySelector(`.scroll${i}`);
        const bottom = document.querySelector(`.bottom${i}`);
        sub.style.height = sub.scrollHeight + "px";
        bottom.classList.add('hover');
        
      });
    });
    // 서브메뉴에서 마우스 내리면 서브메뉴와 맞는 메뉴 선택해제 효과
    document.querySelectorAll('.scroll').forEach((v, i) => {
      v.addEventListener("mouseout", (e) => {
        const sub = document.querySelector(`.scroll${i}`);
        const bottom = document.querySelector(`.bottom${i}`);
        sub.style.height = null;
        bottom.classList.remove('hover');
      });
    });

    // 검색버튼 클릭시 입력창 나오게 하기
    document.querySelector('.searchBtn').addEventListener('click', (e) => {
      const searchInput = document.querySelector('#searchInput');
      const searchBtn = document.querySelector('.searchBtn');
      const move = document.querySelectorAll('.move');
      searchInput.style.width = 174 + 'px';
      searchBtn.style.width = 150 + 'px';
      searchBtn.style.borderRadius = 5 + "px";
      searchBtn.style.left = 859 + "px";
      move.forEach((v, i) => {
        v.style.left = 325 + "px";
      });
    });
}
});
