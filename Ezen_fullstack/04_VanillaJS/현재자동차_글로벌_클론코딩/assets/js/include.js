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
        const sub = document.querySelector("#sub");
        const lang = document.querySelector('#language_select');
        const search = document.querySelector('#search_sub');

        // 회사소개 서브메뉴 열고 닫기.
        document.querySelector("#menu").addEventListener("mouseover", (e) => {
            e.preventDefault();
            sub.classList.remove("none");
        });
        document.querySelector('#close').addEventListener('click', (e) => {
            e.preventDefault();
            sub.classList.add('none');
        });

        // 언어선택 이벤트
        document.querySelector('#language').addEventListener('click', (e) => {
            e.preventDefault();
            lang.classList.toggle('none2');
        });

        // 검색버튼 선택 이벤트
        document.querySelector('#search').addEventListener('click', (e) => {
            e.preventDefault();
            search.classList.remove('none3');
        });
        document.querySelector('#n2').addEventListener('click', (e) => {
            e.preventDefault();
            search.classList.add('none3');
        });
    }
});