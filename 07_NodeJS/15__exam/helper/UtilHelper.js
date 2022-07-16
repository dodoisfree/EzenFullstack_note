import { networkInterfaces } from "os";

const myip = () => {
    const ipAddress = [];
    const nets = networkInterfaces();
    console.log(nets);
    for (const attr in nets) {
        const item = nets[attr];

        item.map((v, i) => {
            // if (v.family == 4 && v.address != "127.0.0.1") {
            if (v.family == "IPv4" && v.address != "127.0.0.1") {
                ipAddress.push(v.address);
            }
        });
    }

    return ipAddress;
};

const urlFormat = (urlObject) =>
    String(Object.assign(new URL("http://a.com"), urlObject));

/**
 * 페이지 구현에 필요하 변수값들을 계산한다.
 * @param totalCount    - 페이지 계산의 대상이 되는 전체 데이터 수 (SQL의 count함수 결과값)
 * @param nowPage       - 현재 페이지 (GET파라미터로 수신한 값)
 * @param listCount     - 한 페이지에 보여질 목록의 수 (개발자가 정의하거나 GET으로 반는값)
 * @param groupCount    - 페이지 그룹 수 (개발자가 정의하는 값)
 * @return Object   - nowPage       : 현재 페이지
 *                  - totalCount    : 전체 데이터 수
 *                  - listCount     : 한 페이지에 보여질 목록의 수
 *                  - totalPage     : 전체 페이지 수
 *                  - groupCount    : 한 페이지에 보여질 그룹의 수
 *                  - totalGroup    : 전체 그룹 수
 *                  - nowGroup      : 현재 페이지가 속해 있는 그룹 번호
 *                  - groupStart    : 현재 그룹의 시작 페이지
 *                  - groupend      : 현재 그룹의 마지막 페이지
 *                  - prevGroupLastPage     : 이전 그룹의 마지막 페이지
 *                  - nextGroupfirstPage    : 다음 그룹의 시작 페이지
 *                  - offset        : SQL의 LIMIT절에서 사용할 데이터 시작 위치
 */
const pagenation = (
    totalCount = 0,
    nowPage = 1,
    listCount = 10,
    groupCount = 5
) => {
    // 전달된 파라미터가 정수 타입이 아니라면 정수로 변환
    totalCount = isNaN(totalCount) ? 0 : parseInt(totalCount);
    nowPage = isNaN(nowPage) ? 1 : parseInt(nowPage);
    listCount = isNaN(listCount) ? 10 : parseInt(listCount);
    groupCount = isNaN(groupCount) ? 5 : parseInt(groupCount);

    // 전체 페이지 수
    var totalPage = parseInt((totalCount - 1) / listCount) + 1;

    // 전체 그룹 수
    var totalGroup = parseInt((totalPage - 1) / groupCount) + 1;

    // 현재 페이지가 속한 그룹
    var nowGroup = parseInt((nowPage - 1) / groupCount) + 1;

    // 현재 그룹의 시작 페이지 번호
    var groupStart = parseInt((nowGroup - 1) * groupCount) + 1;

    // 현재 그룹의 마지막 페이지 번호
    var groupEnd = Math.min(totalPage, nowGroup * groupCount);

    // 이전 그룹의 마지막 페이지 번호
    var prevGroupLastPage = 0;
    if (groupStart > groupCount) {
        prevGroupLastPage = groupStart - 1;
    }

    // 다음 그룹의 시작 페이지 번호
    var nextGroupFirstPage = 0;
    if (groupEnd < totalPage) {
        nextGroupFirstPage = groupEnd + 1;
    }

    // LIMIT 절에서 사용할 데이터 시작 위치
    var offset = (nowPage - 1) * listCount;

    // 리턴할 데이터들을 객체로 묶기
    return {
        nowPage: nowPage,
        totalCount: totalCount,
        listCount: listCount,
        totalPage: totalPage,
        groupCount: groupCount,
        totalGroup: totalGroup,
        nowGroup: nowGroup,
        groupStart: groupStart,
        groupEnd: groupEnd,
        prevGroupLastPage: prevGroupLastPage,
        nextGroupFirstPage: nextGroupFirstPage,
        offset: offset,
    };
};

export { myip, urlFormat, pagenation };
