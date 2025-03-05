import React, { useCallback, useEffect, useState } from 'react';
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
  NavbarText
} from 'reactstrap';
import { FaYoutube } from 'react-icons/fa';
import { MainContent, ButtonContainer } from './styles';
import logo from '../../assets/logo.jpeg';
import { getAllCategory } from '../../services/CategoryRequests';
import { IPairIdName } from '../../@types/Post';
import { getAllSubject } from '../../services/SubjectRequests';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<IPairIdName[]>([]);
  const [subjects, setSubjects] = useState<IPairIdName[]>([]);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  useEffect(() => {
    (async() => {
      const categoryResponse = await getAllCategory();
      setCategories(categoryResponse.data);

      const subjectResponse = await getAllSubject();
      setSubjects(subjectResponse.data);
    })();
  }, []);

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
                {categories.map((category) =>
                  <DropdownItem onClick={() => handleOptionsClick('/posts', category.name)}>{category.name}</DropdownItem>
                )}
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Assuntos
              </DropdownToggle>
              <DropdownMenu dark>
                {subjects.map((subject) =>
                  <DropdownItem onClick={() => handleOptionsClick('/posts', subject.name)}>{subject.name}</DropdownItem>
                )}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <ButtonContainer>
              <span>Veja também nosso canal no</span>
              <NavLink className="nav-link" href="https://www.youtube.com/channel/UCjoYp6RSyBlIv85TPks1wKw" target="_blank">
                <span className="youtube-title">YouTube</span>
                <FaYoutube className="icon" />
              </NavLink>
            </ButtonContainer>
          </NavbarText>
        </Collapse>
      </Navbar>
    </MainContent>
  );
}

export default Header;