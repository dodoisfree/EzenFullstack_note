/**
 * @filename: Meta.js
 * @description: <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author: 천경재
 */


/** 패키지 참조 */
import React from "react"; // 기본 참조 객체
import { Helmet, HelmetProvider } from "react-helmet-async"; // SEO 처리 기능 패키지


/**
 * SEO 처리 컴포넌트
 * @param props
 * @returns {JSX.Element}
 */
const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset="utf-8" />
        {/* SEO 태그 */}
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={props.url} />
      </Helmet>
    </HelmetProvider>
  );
};


/**
 * props에 대한 기본값 설정
 * @type {{keywords: string, author: string, description: string, title: string,url: string}}
 */
Meta.defaultProps = {
  title: "naver_sign_up",
  description: "네이버 회원가입 리액트.ver 클론코딩 입니다.",
  keywords: "React_naver_sign_up",
  author: "dodoisfree",
  url: window.location.href,
};

export default Meta;
