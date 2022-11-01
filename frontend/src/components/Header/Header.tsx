import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import { FaSearch, FaYoutube } from 'react-icons/fa';
import { MainContent, ButtonContainer } from './styles';
import logo from '../../assets/logo.jpeg';

const Header: React.FC = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const handleOptionsClick = useCallback((path: string, search: string) => {
    navigate({pathname: path, search: `?sort=${search}`});
  }, [navigate]);

  return (
    <MainContent>
      <Navbar dark color="dark" expand="xl" container>
        <NavbarBrand className="nav-name" href="/">
          <img
            alt="logo"
            src={logo}
          />
          <span className="title"> Blog </span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar horizontal='center'>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categorias
              </DropdownToggle>
              <DropdownMenu dark>
                <DropdownItem onClick={() => handleOptionsClick('/posts', 'Dicas')}>Dicas</DropdownItem>
                <DropdownItem onClick={() => handleOptionsClick('/posts', 'Resolvendo questões')}>Resolvendo questões</DropdownItem>
                <DropdownItem onClick={() => handleOptionsClick('/posts', 'Slides')}>Slides</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Assuntos
              </DropdownToggle>
              <DropdownMenu dark>
                <DropdownItem onClick={() => handleOptionsClick('/posts', 'Direito administrativo')}>Direito administrativo</DropdownItem>
                <DropdownItem onClick={() => handleOptionsClick('/posts', 'Direito constitucional')}>Direito constitucional</DropdownItem>
                <DropdownItem onClick={() => handleOptionsClick('/posts', 'Direito penal')}>Direito penal</DropdownItem>
                <DropdownItem onClick={() => handleOptionsClick('/posts', 'Legislação extravagante')}>Legislação extravagante</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <ButtonContainer>
              <NavLink href="https://www.youtube.com/channel/UCjoYp6RSyBlIv85TPks1wKw" target="_blank">
                <FaYoutube className="icon" />
              </NavLink>
              <Button className="button-search" color="dark">
                <FaSearch />
              </Button>
            </ButtonContainer>
          </NavbarText>
        </Collapse>
      </Navbar>
    </MainContent>
  );
}

export default Header;