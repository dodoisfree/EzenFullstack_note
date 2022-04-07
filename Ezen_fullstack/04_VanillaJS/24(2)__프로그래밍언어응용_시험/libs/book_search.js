/**
 * @filename    : scroll_search.js
 * @author      : 천경재 (yocasd2@gmail.com)
 * @description : 책 검색 JS 구현
 */


const KAKAO_REST_KEY = "8dd322609444f19d7248550cf5fba7a2";

let currentPage = 1;
let queryKeyword;
let isEnd = false;
let sort;
let number;


/**
 * 입력, 선택된 값 검색 이벤트
 * @param   {String} queryKeyword   검색할 입력 값
 * @param   {Number} currentPage    결과 페이지 수
 * @param   {String} sort           문서 정렬 방식
 * @param   {Number} number         한 페이지에 보여질 문서 수
 */

document.querySelector("#searchForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const queryField = document.querySelector("#query");
    queryKeyword = queryField.value.trim();

    const select1 = document.getElementById("sort");
    sort = select1.options[select1.selectedIndex].value;

    const select2 = document.getElementById("number");
    number = select2.options[select2.selectedIndex].value;

    if (!queryKeyword) {
        alert("검색어를 입력하세요");
        queryField.focus();
        return;
    }

    currentPage = 1;
    get_book_search();
});


/**
 * 스크롤 시 추가 검색 이벤트 
 * @param   {Number} currentPage    결과 페이지 수
 * @param   {boolean} isEnd         페이지의 끝인지 판별
 */

window.addEventListener("scroll", (e) => {
    if (
        isEnd ||
        document.querySelector("#loading").classList.contains("active")
    ) {
        return;
    }

    const scrollTop = window.scrollY;
    const windowHeight = window.screen.availHeight;
    const documentHeight = document.body.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
        currentPage++;
        get_book_search();
    }
});


/**
 * axios를 이용한 API 책 검색 함수
 * @param   {String} queryKeyword   검색할 입력 값
 * @param   {Number} currentPage    결과 페이지 수
 * @param   {String} sort           문서 정렬 방식
 * @param   {Number} number         한 페이지에 보여질 문서 수
 * @param   {String} KAKAO_REST_KEY API사용 인증키
 * @param   {Object} JSON           결과 데이터
 */

async function get_book_search() {
    const loading = document.querySelector("#loading");
    loading.classList.add("active");

    const list = document.querySelector("#list");

    if (currentPage == 1) {
        Array.from(list.getElementsByTagName("li")).forEach((v, i) => {
            list.removeChild(v);
        });
    }

    let json = null;

    try {
        json = await axios.get(`https://dapi.kakao.com/v3/search/book`, {
            params: {
                query: queryKeyword,
                page: currentPage,
                sort: sort,
                size: number,
            },
            headers: {
                Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
            },
        });
    } catch (e) {
        console.error(e);
        alert("요청을 처리하는데 실패했습니다.");
        return;
    } finally {
        loading.classList.remove("active");
    }

    /** 검색된 데이터 값 화면 구현
     * @param   {boolean} isEnd         페이지의 끝인지 판별
     * @param   {Object} JSON           결과 데이터
     * @param   {String} url            도서 상세 URL
     * @param   {String} thumbnail      도서 표지 미리보기 URL
     * @param   {String} title          도서 제목
     * @param   {String} contents       도서 소개
     * @param   {Array} authors         저자 리스트
     * @param   {Number} price          도서 정가
     * @param   {Number} sale_price     도서 판매가
     * */

    if (json != null) {
        const { data } = json;

        isEnd = data.meta.is_end;

        data.documents.map((v, i) => {
            const li = document.createElement("li");

            const a = document.createElement("a");
            a.setAttribute("href", v.url);
            a.setAttribute("target", "_blank");
            a.setAttribute("title", v.title);

            const img = document.createElement("img");
            img.setAttribute("src", v.thumbnail);
            img.setAttribute("onerror", "this.src='img/noimage.jpg'");

            const h2 = document.createElement("h2");
            h2.innerHTML = v.title;

            const p = document.createElement("p");
            p.innerHTML = v.contents;

            const span1 = document.createElement("span");
            span1.innerHTML = v.authors;

            const span2 = document.createElement("span");
            span2.innerHTML = v.publisher;

            const span3 = document.createElement("span");
            span3.innerHTML = v.price;

            const span4 = document.createElement("span");
            span4.innerHTML = v.sale_price;

            a.appendChild(img);
            a.appendChild(h2);
            a.appendChild(p);
            a.appendChild(span1);
            a.appendChild(span2);
            a.appendChild(span3);
            a.appendChild(span4);

            li.appendChild(a);
            list.appendChild(li);
        });
    }
}