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
        <title>{props.title}</title>
        {/* SEO 태그 */}
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={props.url} />
        <link href="http://fonts.cdnfonts.com//css/georgia" rel="stylesheet" />
      </Helmet>
    </HelmetProvider>
  );
};

/**
 * props에 대한 기본값 설정
 * @type {{keywords: string, author: string, description: string, title: string,url: string}}
 */
Meta.defaultProps = {
  title: "리액트 클론코딩1",
  description: "클론코딩1 예제를 리액트로 변환했습니다.",
  keywords: "React",
  author: "dodo",
  url: window.location.href,
};

export default Meta;
