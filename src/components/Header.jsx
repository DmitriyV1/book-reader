// import { Header as SHeader } from "antd/es/layout/layout";

import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-50);
  padding: 2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-start;
`;

function Header() {
  return (
    <StyledHeader>
      <div>Some text</div>
    </StyledHeader>
  );
}

export default Header;
