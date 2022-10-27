import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContent, ButtonContainer } from './styles';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

const Header: React.FC = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const handleOptionsClick = useCallback((path: string, search: string) => {
    navigate({pathname: path, search: `?sort=${search}`});
  }, [navigate]);

  return (
    <MainContent>
      <Navbar dark color="dark" expand="xl">
        <NavbarBrand className="nav-name" href="/">Blog MCEC</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="https://www.youtube.com/channel/UCjoYp6RSyBlIv85TPks1wKw" target="_blank">
                YouTube
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categorias
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem onClick={() => handleOptionsClick('/posts', 'Dicas')}>Dicas</DropdownItem>
                <DropdownItem onClick={() => handleOptionsClick('/posts', 'Resolvendo questões')}>Resolvendo questões</DropdownItem>
                <DropdownItem onClick={() => handleOptionsClick('/posts', 'Slides')}>Slides</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Assuntos
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem onClick={() => handleOptionsClick('/posts', 'Direito administrativo')}>Direito administrativo</DropdownItem>
                <DropdownItem onClick={() => handleOptionsClick('/posts', 'Direito constitucional')}>Direito constitucional</DropdownItem>
                <DropdownItem onClick={() => handleOptionsClick('/posts', 'Direito penal')}>Direito penal</DropdownItem>
                <DropdownItem onClick={() => handleOptionsClick('/posts', 'Legislação extravagante')}>Legislação extravagante</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <ButtonContainer>
              <Button color="dark">
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