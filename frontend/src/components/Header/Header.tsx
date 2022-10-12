import React, { useState } from 'react';
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
              <DropdownMenu right>
                <DropdownItem>Dicas</DropdownItem>
                <DropdownItem>Resolvendo questões</DropdownItem>
                <DropdownItem>Slides</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Assuntos
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Direito Administrativo</DropdownItem>
                <DropdownItem>Direito Constitucional</DropdownItem>
                <DropdownItem>Direito Penal</DropdownItem>
                <DropdownItem>Legislação Extravagante</DropdownItem>
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