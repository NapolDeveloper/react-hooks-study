import React, { Fragment, useReducer, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CountText = styled.span`
  font-size: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const ClickButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #f8585b;
  border: none;
  color: white;
  font-size: 24px;
  margin: 0 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in;
  &:hover {
    background-color: #d12124;
  }
`;

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export default function CounterReducer(props) {
  // useReducer(function, initial state);
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    // dispatch({type: 'INCREMENT', name}) => action.name으로 접근 가능
    dispatch({ type: 'INCREMENT' });
  };
  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <Fragment>
      <Container>
        <CountText>{number}</CountText>
        <ButtonContainer>
          <ClickButton onClick={onIncrease}>+</ClickButton>
          <ClickButton onClick={onDecrease}>-</ClickButton>
        </ButtonContainer>
      </Container>
    </Fragment>
  );
}
