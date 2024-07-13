import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../design-system/SearchBar';
import ArticleList from '../features/ArticleList';

type Article = {
  title: string;
  author: string;
  url: string;
  published_at: string;
};

const ScreenContainer = styled.div`
  flex-direction: column;
  align-items: center;
`;

const HomeScreen: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([
    {
      title: "Sample Article 1",
      author: "Author 1",
      url: "https://qiita.com",
      published_at: "2024-07-12"
    },
    {
      title: "Sample Article 2",
      author: "Author 2",
      url: "https://qiita.com",
      published_at: "2024-07-11"
    }
  ]);

  const handleSearch = (query: string) => {
    // 一旦検索ワードをログに出しておく
    console.log(`検索ワード： ${query}`);
  };

  return (
    <ScreenContainer>
      <SearchBar onSearch={handleSearch} />
      <ArticleList articles={articles} />
    </ScreenContainer>
  );
};

export default HomeScreen;
