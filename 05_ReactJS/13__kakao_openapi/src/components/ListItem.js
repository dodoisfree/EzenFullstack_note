import React, { memo } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import noimg from '../assets/img/noImg.png';

const ListTtemContainer = styled.li`
  -webkit-font-smoothing: antialiased;
  border-top: 1px solid #eee;

  &:last-childe {
    border-bottom: 1px solid #eee;
  }

  .list-item-link {
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    text-decoration: none;
    color: #000;
    transition: all 0.1s;

    &:hover {
      background-color: #eeeeee55;
    }
    .thumbnail {
      width: 135px;
      height: 135px;
      display: block;
      margin-right: 20px;
      object-fit: cover;
      flex: none;
    }
    .content {
      flex: 0 1 auto;
      padding: 5px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        /* background-color: #f0f1; */
        box-sizing: border-box;
        font-size: 17px;
        font-weight: bold;
        margin: 0;
        margin-bottom: 10px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }

      p {
        /* background-color: #0601; */
        font-size: 14px;
        margin: 0;
        margin-bottom: 8px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: inline-block;
          font-size: 12px;
          margin: 0;
          &:after {
            content: '|';
            display: inline-block;
            color: #555;
            padding: 0 5px;
          }

          &:last-child:after {
            content: '';
          }
          &.price {
            font-weight: bold;
            font-size: 14px;
          }
        }
      }
    }
  }
`;

const ListItem = memo(({type, item: { title, contents, url, datetime, blogname, cafename, thumbnail, authors, publisher, price, sale_price }, inview }) => {
  return (
    <ListTtemContainer>
      <a className='list-item-link' href={url} terget="_blank" rel="noreferrer" ref={inview}>
        {(type !== 'web') && (
          <img className='thumbnail' src={thumbnail || noimg} alt={title} />
        )}
        <div className="content">
          {/* 제목과 상세 내용은 HTML 태그가 포함되어 있기 때문에 dangerouslySetInnerHTML을 사용해서 출력 */}
          <h3 dangerouslySetInnerHTML={{ __html: title}} />
          <p dangerouslySetInnerHTML={{ __html: contents}} />

          <ul>
            {/* 가격정보가 있을 경우에만 출력하는 영역 (for 책검색) */}
            {price && <li className='price'>정가: <span>{price}</span></li>}
            {sale_price && <li className='price'>할인가: <span>{sale_price}</span></li>}
            {authors && <li>{authors.join(",")}</li>}
            {publisher && <li>{publisher}</li>}
            {cafename && <li>{cafename}</li>}
            {blogname && <li>{blogname}</li>}
            {datetime && <li className='data'>{dayjs(datetime).format('YYYY-MM-DD hh:mm')}</li>}
          </ul>
        </div>
      </a>
    </ListTtemContainer>
  );
});

export default ListItem;