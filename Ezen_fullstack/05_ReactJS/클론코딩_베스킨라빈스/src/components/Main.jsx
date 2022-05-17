import React from 'react';
import MainSlide from './MainSlide';
import m_h_pika from '../assets/img/pika_main_header.jpg';
import styled from 'styled-components';

const MainCss = styled.div`
    width: 100%;
    height: 850px;
    background-color: #fc637f;
    margin-top: 48px;
    .main_header {
        width: 100%;
        height: 150px;
        background: #FFD825 url(${m_h_pika}) no-repeat;
        background-position: center;
    }
`;

const Main = () => {
    return (
        <MainCss>
            <div className='main_header'>
            </div>
            <MainSlide />
        </MainCss>
    );
};

export default React.memo(Main);