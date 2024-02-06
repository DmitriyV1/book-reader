import Search from "antd/es/input/Search";
import styled from "styled-components";
import ModalWindow from "./ModalWindow";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-50);
  padding: 1.8rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  gap: 40vh;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
function Sidebar() {
  function handleSubmit(value) {
    console.log(value);
  }

  return (
    <StyledSidebar>
      <Search
        enterButton
        placeholder="Search..."
        onSearch={handleSubmit}
        size="large"
      />
      <div>some text</div>
      <ModalWindow />
    </StyledSidebar>
  );
}

export default Sidebar;
