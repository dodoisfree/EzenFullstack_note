// "data-include" 속성을 갖는 모든 요소에 대한 탐색
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

    if (include == "/inc/header.html") {
        const li = document.querySelectorAll(".nav li");

        Array.from(li).map((v, i) => {
            const dir = v.dataset.dir;
            
            if (window.location.href.indexOf(dir) > -1) {
                v.classList.add('active');
            }
        });
    }
});