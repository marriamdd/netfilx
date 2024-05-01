import Data from "../data.json";

import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";

export default function MyList() {
  console.log(Data.movies[0].isBookmarked);
  console.log("mylist");
  const myListItems = Data.movies.filter((item) => item.isBookmarked);

  return (
    <MoviesStyledContainer style={{ paddingTop: "10rem" }}>
      {myListItems.map((item) => (
        <div
          key={Math.random()}
          style={{
            backgroundImage: `url(${item.thumbnail.regular.small})`,
          }}
        ></div>
      ))}
    </MoviesStyledContainer>
  );
}
