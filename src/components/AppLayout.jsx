import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 40rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow: hidden;
`;

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 4rem 4.8rem;
  height: 100vh;
  overflow: auto;
`;

const Container = styled.div`
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
