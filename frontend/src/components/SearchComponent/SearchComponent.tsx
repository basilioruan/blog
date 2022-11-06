import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Button } from 'reactstrap';
import { MainContent } from './styles';
import { useNavigate } from 'react-router-dom';

const SearchComponent: React.FC = () => {
  const [search, setSearch] = useState<string>();
  const navigate = useNavigate();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const handleSearchClick = ()  => {
    navigate({pathname: '/posts', search: `?search=${search}`});
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  }

  return (
    <MainContent>
      <input className="search-input" type="search" placeholder="Buscar" value={search} 
        onChange={(event) => handleSearchChange(event)} onKeyDown={(event) => handleKeyDown(event)} />
      <Button className="button-search btn-search" color="dark" onClick={handleSearchClick}>
        <FaSearch />
      </Button>
    </MainContent>
  );
}

export default SearchComponent;