import styled , { keyframes } from 'styled-components'

export const Button = styled.a`
  display: block;
  width: 200px;
  height: 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: ${props => props.active ? 'orange' : '#fff'};
  margin: 30px;
  padding: 10px;
  color: ${props => props.color || '#000'};
`;

export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export const TypeButton = styled(Button).attrs({
  role: 'button'
})`
  color: blue;
  border-color: blue;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  display: inline-block;
  margin: 5px;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;