import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Meta = (props) => {
      return (
          <HelmetProvider>
         <Helmet>
            <meta charset='utf-8' />
            {/* SEO 태그 */}
            <title>{props.title}</title>
            <meta name='description' content={props.description} />
            <meta name='keywords' content={props.keywords} />
            <meta name='author' content={props.author} />
            <meta property='og:type' content='website' />
            <meta property='og:title' content={props.title} />
            <meta property='og:description' content={props.description} />
            <meta property='og:url' content={props.url} />

            {/* 웹폰트 적용을 위한 외부 리소스 참조 */}
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
            <link href='https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500&display=swap' rel='stylesheet' />

            {/* Helmet 안에서 CSS 적용하기 */}
            <style type='text/css'>{`
                * {
                    font-family: 'Noto Sans', sans-serif;
                }

                body {
                    margin: 0;
                    padding: 30px;
                }
            `}</style>
         </Helmet>
         </HelmetProvider>
      );
};

Meta.defaultProps = {
      title: 'React 연습문제',
      description: 'React 연습문제 입니다.',
      keywords: 'React',
      author: 'dodo',
      url: window.location.href
};

export default Meta;


