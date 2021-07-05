import styled from 'styled-components';

export default styled.span`
  > a {
    text-decoration: none;
    font-family: Lato;
    font-size: 1em;
    font-weight: 300;
    line-height: 1.38;
    color: ${props => (props.color ? '#ffffff' : ' #000')};
    margin-right: 15px;
    &:hover {
      font-size: 1.1em;
      font-weight: 900;
    }
  }
`;
