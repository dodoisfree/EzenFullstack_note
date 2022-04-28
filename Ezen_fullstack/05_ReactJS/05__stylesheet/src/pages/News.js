import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import NewsList from '../components/NewsList';

const News = () => {
    return (
        <div>
            <h2>헤드라인 뉴스</h2>

            <nav>
                <Link to='news_card'>카드형</Link>&nbsp;|&nbsp;
                <Link to='news_list'>리스트형</Link>
            </nav>

            <Routes>
                <Route path='news_card' element={<NewsCard />} />
                <Route path='news_list' element={<NewsList />} />
            </Routes>
        </div>
    );
};

export default News;