import React from 'react';
import styled from 'styled-components';
import { QiitaArticle } from '../api/qiita/protoQiitaProto.schemas'

const ArticleListContainer = styled.div`
  width: 100%;
`;

const ArticleContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
  border-radius:8px;
  background-color: #f9f9f9;
`;

const ArticleTitle = styled.h3`
  color: #7ec8e3;
`;

const ArticleAuthor = styled.p`
  font-style: italic;
`;

type ArticleListProps = {
  articles: QiitaArticle[];
};

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <ArticleListContainer>
      {articles.map((article, index) => (
        <ArticleContainer key={index}>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleAuthor>by {article.author}</ArticleAuthor>
          <p>{article.publishedAt}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">記事を読む</a>
        </ArticleContainer>
      ))}
    </ArticleListContainer>
  );
};

export default ArticleList;