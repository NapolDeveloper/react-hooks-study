import React, { Fragment, useState, useEffect } from 'react';
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

export default function Counter(props) {
  /*
  useState는 함수형 컴포넌트 내에서 state를 사용할 수 있게 해준다.
  useState의 인자로 기본값을 설정해줄 수 있다.
  */

  // useState
  const [count, setCount] = useState(0);

  /*
  useEffect는 컴포넌트가 렌더링 될때, 업데이트 될때 사용된다.
  useEffect의 첫번째 인자로 function, 두 번째 인자로 dependency를 넘겨준다.
  두 번째 인자로 받은 값이 변경될 때 useEffect가 실행된다.
  */

  // useEffect
  // count가 변할 때 [ test ] 출력
  useEffect(() => {
    console.log('[ test ]');
  }, [count]);

  // Functions
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Fragment>
      <Container>
        <CountText>{count}</CountText>
        <ButtonContainer>
          <ClickButton onClick={increment}>+</ClickButton>
          <ClickButton onClick={decrement}>-</ClickButton>
        </ButtonContainer>
      </Container>
    </Fragment>
  );
}
