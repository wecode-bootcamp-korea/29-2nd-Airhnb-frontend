import React, { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import styled from 'styled-components';
import Modal from 'react-modal';
import {
  faMagnifyingGlass,
  faBars,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import Reservation from './Reservation';
import { flexBetween } from '../../styles/Mixin';

const Nav = () => {
  const token = sessionStorage.getItem('JWT');

  const REACT_APP_GOOGLE_MAPS_API_KEY =
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `${REACT_APP_GOOGLE_MAPS_API_KEY}`,
    libraries,
  });

  const mapRef = React.useRef();

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const [isToggle, setIsToggel] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggelMenu = () => {
    setIsToggel(!isToggle);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  const goToMain = () => {
    navigate('/');
  };

  const goToHost = () => {
    token ? navigate('/become-host') : alert('로그인이 필요합니다.');
  };

  const deleteToken = () => {
    sessionStorage.removeItem('JWT');
    navigate('/');
  };
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'loading Maps';
  return (
    <>
      <Section>
        <LogoContainer>
          <LogoImage src="/images/airhnb-black.svg" onClick={goToMain} />
          <p>AirHnb</p>
        </LogoContainer>

        <SearchContainer>
          <SearchInput>검색 시작하기</SearchInput>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="glass" />
        </SearchContainer>

        <MenuContainter>
          <MenuIcon onClick={toggelMenu}>
            <FontAwesomeIcon icon={faBars} className="barMenu" />
            <FontAwesomeIcon icon={faCircleUser} className="user" />
          </MenuIcon>
          {isToggle ? (
            <MenuToggle isToggle={isToggle}>
              {token ? '' : <p onClick={openModal}>로그인</p>}
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                l
              >
                <Login closeModal={closeModal} />
              </Modal>
              {token && <p onClick={deleteToken}>로그아웃</p>}
              {token && <p onClick={goToHost}>호스트되기</p>}
            </MenuToggle>
          ) : null}
        </MenuContainter>
      </Section>
      <Reservation panTo={panTo} />
    </>
  );
};

const libraries = ['places'];
const Section = styled.div`
  ${({ theme }) => theme.flexMixin('space-between', 'center', 'row')};
  height: 60px;
  padding-top: 10px;
`;

const LogoContainer = styled.div`
  ${flexBetween};
  justify-content: flex-start;
  width: 120px;

  p {
    padding-top: 10px;
    padding-left: 10px;
  }
`;

const LogoImage = styled.img`
  width: 30px;
`;

const SearchContainer = styled.div`
  ${({ theme }) => theme.flexMixin('space-between', 'center', 'row')};
  padding: 0 10px 0 10px;
  width: 300px;
  border: 1px solid lightgray;
  border-radius: 40px;

  .glass {
    border-radius: 50px;
    width: 20px;
    height: 20px;
    padding: 10px;
    color: white;
    background-color: #e51d54;
  }
`;

const SearchInput = styled.div`
  ${({ theme }) => theme.flexMixin('space-between', 'center')};
  width: 100px;
  height: 50px; ;
`;
const MenuContainter = styled.div`
  position: relative;
  width: 150px;
`;
const MenuIcon = styled.div`
  width: 77px;
  padding: 5px;
  border-width: 30%;
  border: 1px solid lightgrey;
  border-radius: 110px;

  &:hover {
    box-shadow: 0 2px 2px grey;
  }

  .barMenu {
    padding-right: 10px;
  }
`;

const MenuToggle = styled.div`
  position: absolute;
  top: 45px;
  left: -120px;
  right: 10px;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 5px 5px grey;

  p {
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

const customStyles = {
  content: {
    width: '45%',
    height: '45%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export default Nav;
