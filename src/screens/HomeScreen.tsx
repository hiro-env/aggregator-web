import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../design-system/SearchBar';
import ArticleList from '../features/ArticleList';
import { useQiitaServiceSearchArticles } from '../api/qiita/protoQiitaProto';

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 46%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const { data, error, isValidating } = useQiitaServiceSearchArticles(
    { query: searchQuery || '' },
    { swr: { enabled: searchQuery !== null } }
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <ScreenContainer>
      <SearchBar onSearch={handleSearch} />
      <ContentContainer>
        {searchQuery === null ? (
          <MessageContainer>検索してください</MessageContainer>
        ) : isValidating ? (
          <MessageContainer>記事を読み込み中...</MessageContainer>
        ) : error ? (
          <MessageContainer>データの取得に失敗しました。</MessageContainer>
        ) : data?.articles?.length ? (
          <ArticleList articles={data.articles} />
        ) : (
          <MessageContainer>検索結果がありません</MessageContainer>
        )}
      </ContentContainer>
    </ScreenContainer>
  );
};

export default HomeScreen;
