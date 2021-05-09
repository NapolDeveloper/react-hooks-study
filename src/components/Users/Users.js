import React, { Fragment } from 'react';

const users = {
  users: [
    {
      name: 'AA',
      active: false
    },
    {
      name: 'BB',
      active: true
    },
    {
      name: 'CC',
      active: false
    }
  ]
};

export default function Users(props) {
  function activeUserCount(users) {
    console.log('');
    return users.filter((user) => user.active).length;
  }

  return (
    <Fragment>
      <div onClick={activeUserCount}>test</div>
    </Fragment>
  );
}
