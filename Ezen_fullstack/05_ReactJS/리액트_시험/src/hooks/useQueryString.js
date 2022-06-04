import { useLocation } from "react-router-dom";

const useQueryString = () => {
  // QueryString 문자열 추출함
  const { search } = useLocation();
  // QueryString 문자열을 객체로 변환
  const params = new URLSearchParams(search);
  // 모든 key와 value의 쌍을 for ...in 반복문으로 처리 가능한 [key, value] 쌍의 배열로 반환함.
  const entries = params.entries();

  // 리턴 할 빈 객체
  const result = {};

  // 추출한 배열을 반복문으로 처리하여 JSON객체로 변환함
  for (const [key, value] of entries) {
    result[key] = value;
  }

  return result;
};

export { useQueryString };
