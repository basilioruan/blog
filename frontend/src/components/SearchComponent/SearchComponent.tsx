import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Button } from 'reactstrap';
import { MainContent } from './styles';

const SearchComponent: React.FC = () => {
  return (
    <MainContent>
      <input className="search-input" type="search" placeholder="Buscar" />
      <Button className="button-search btn-search" color="dark">
        <FaSearch />
      </Button>
    </MainContent>
  );
}

export default SearchComponent;