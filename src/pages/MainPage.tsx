import styled from "styled-components";
import Preview from "../components/Preview";
import PopularOnNetflix from "../components/PopularOnNetflix";

import AddPlayInfoSection from "../components/AddPlayInfoSection";
import AfricanMovies from "../components/AfricanMovies";
import NetflixOrigins from "../components/NetflicOrigins";
import TvTrillers from "../components/TvTrillers&Mysteries";
export default function MainPage() {
  return (
    <>
      <MainPageContainer>
        <PageIntro />
        <AddPlayInfoSection />
        <Main>
          <Preview />
          <PopularOnNetflix />
          <AfricanMovies />
          <NetflixOrigins />
          <TvTrillers />
        </Main>
      </MainPageContainer>
    </>
  );
}
const MainPageContainer = styled.div`
  background-color: black;
  height: 650px;
  overflow-y: auto;
`;
const Main = styled.main`
  padding-bottom: 9rem;
`;
const PageIntro = styled.div`
  width: 100%;
  height: 415px;
  flex-shrink: 0;
  background-image: url("/assets/design/Rectangle 26.png");
  background-position: 0px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  top: 0;
`;
