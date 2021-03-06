import styled, { css } from 'styled-components';

const SizeButton = styled.button`
  margin-right: .5rem;
  padding: .5rem 1rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  ${props =>
    props.isActive &&
    css`
    font-weight: 700;
  `};
  line-height: 1.33;
  border-radius: 2px;
  border: solid 1px #171717;
  background: transparent;
  cursor: pointer;
`;

export default SizeButton;
