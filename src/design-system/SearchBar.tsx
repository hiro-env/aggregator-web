import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 46px 0;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 2px solid #7ec8e3;
  border-radius: 5px 0 0 5px;
  outline: none;
  width: 300px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #7ec8e3;
  color: white;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  &:hover {
    background-color: #a6e1ff;
  }
`;

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSearch}>
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="記事を検索する"
        />
        <SearchButton type="submit">Search</SearchButton>
      </form>
    </SearchContainer>
  );
};

export default SearchBar;