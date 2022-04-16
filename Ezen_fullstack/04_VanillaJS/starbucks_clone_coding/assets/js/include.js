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

  //   if (include.indexOf("header.html") > -1) {
  //     document.querySelector(".bottom").addEventListener("mouseover", (e) => {
  //       const current = e.currentTarget;
  //       const sub = current.querySelector("#hidden");
  //       sub.style.maxHeight = sub.scrollHeight + "px";
  //     });

  //     document.querySelector(".bottom").addEventListener("mouseout", (e) => {
  //         const current = e.currentTarget;
  //         const sub = current.querySelector("#hidden");
  //         // scrollHeight는 요소의 크기를 벗어난 만큼의 높이를 의미
  //         sub.style.maxHeight = null;
  //       });
  //   }


  
  if (include.indexOf("header.html") > -1) {

    document.querySelectorAll(`.bottom`).forEach((v, i) =>{
      v.addEventListener('mouseover', (e) => {
          const sub = document.querySelector(`.scroll${i}`);
          sub.style.height = sub.scrollHeight + "px";
          sub.style.transition = 350 + "ms";
      });
    });
    document.querySelectorAll(`.bottom`).forEach((v, i) =>{
      v.addEventListener('mouseout', (e) => {
          const sub = document.querySelector(`.scroll${i}`);
          sub.style.height = null;
          sub.style.transition = 0 +"ms";
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
