import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #f9f9f9;
  max-width: 36%;
  margin-left: auto;
  margin-right: auto;
`;

const ArticleTitle = styled.h3`
  color: #7ec8e3;
`;

const ArticleAuthor = styled.p`
  font-style: italic;
`;

type Article = {
  title: string;
  author: string;
  url: string;
  published_at: string;
};

type ArticleListProps = {
  articles: Article[];
};

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => (
        <ArticleContainer key={index}>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleAuthor>by {article.author}</ArticleAuthor>
          <p>{article.published_at}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">記事を読む</a>
        </ArticleContainer>
      ))}
    </div>
  );
};

export default ArticleList;
