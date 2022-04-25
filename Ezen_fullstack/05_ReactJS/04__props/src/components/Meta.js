import React from "react";
import { Helmet } from 'react-helmet';
import sample from '../assets/img/sample.png';

const Meta = (props) => {
    return (
        <Helmet>
            <meta charset='UTF-8' />
            <title>{props.title}</title>
            {/* SEO 태그 */}
            <meta name='description' content={props.description} />
            <meta name='keywords' content={props.keywords} />
            <meta name='author' content={props.author} />
            <meta property='og:type' content={props.type} />
            <meta property='og:title' content={props.title} />
            <meta property='og:description' content={props.description} />
            <meta property='og:image' content={props.image} />
            <meta property='og:url' content={props.url} />

            <link rel="icon" href="데스크탑 favicon" type="image/png" />
            <link rel="shortcut icon" href="안드로이드용 favicon" type="image/png" />
            <link rel="apple-touch-icon" href="아이폰용 favicon" type="image/png" />

            {/* 추가적으로 적용해야할 외부 js나 css로 여기서 명시할 수 있다. */}

        </Helmet>
    );
};

Meta.defaultProps = {
    title: 'React Example',
    description: 'React.js 예제 입니다.',
    keywords: 'React',
    author: '호쌤',
    image: sample,
    url: window.location.href
};


export default Meta;