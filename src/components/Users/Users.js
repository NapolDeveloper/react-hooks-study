import React, { createContext } from 'react';

export const UserContext = createContext();

const UserStore = (props) => {
  const users = [
    {
      name: 'napol',
      job: 'developer'
    },
    {
      name: 'hong',
      job: 'designer'
    }
  ];
  return <UserContext.Provider value={users}>{props.children}</UserContext.Provider>;
};

export default UserStore;
