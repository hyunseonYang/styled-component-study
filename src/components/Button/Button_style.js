import styled from 'styled-components'

export const ButtonWrap = styled.div`
  display: block;
  width: 200px;
  height: 20px;
  background: ${props => props.active ? '#green' : '#fff'};
`;