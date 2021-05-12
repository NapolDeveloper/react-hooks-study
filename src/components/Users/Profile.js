import React, { useContext, createContext, useState } from 'react';
import styled from 'styled-components';

import { UserContext } from '../Users/Users';

const ProfileContext = createContext();
const useProfileContext = () => useContext(ProfileContext);

// styles

const Wrapper = styled.div`
  width: 250px;
`;

const HeaderWrapper = styled.div`
  height: 30px;
  background-color: #ffe6ee;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  text-align: center;
  line-height: 30px;
  font-weight: 400;

  cursor: pointer;
`;

const BodyWrapper = styled.div`
  height: 60px;
  padding: 10px;
  border: 1px solid #ffe6ee;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const Profile = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const userContext = useContext(UserContext);

  const value = {
    isOpen,
    setIsOpen
  };

  return (
    <ProfileContext.Provider value={value}>
      <Wrapper>{props.children}</Wrapper>
    </ProfileContext.Provider>
  );
};

export const ProfileHeader = (props) => {
  const { isOpen, setIsOpen } = useProfileContext();
  const userContext = useContext(UserContext);

  return <HeaderWrapper onClick={() => setIsOpen(!isOpen)}>{userContext.name}</HeaderWrapper>;
};

export const ProfileBody = (props) => {
  const { isOpen } = useProfileContext();
  const userContext = useContext(UserContext);
  return <BodyWrapper isOpen={isOpen}>{props.children}</BodyWrapper>;
};

export default Profile;
