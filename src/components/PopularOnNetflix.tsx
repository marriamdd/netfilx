import { Link } from "react-router-dom";
import Data from "../data.json";
import {
  PopularContainer,
  PopularItems,
} from "../styleComponents/MainPagePopularsContainer";
export default function PopularOnNetflix() {
  const filteredData = Data.movies.filter((item) => item.isTrending);
  return (
    <PopularContainer>
      {" "}
      <span>Popular On Netflix</span>
      <PopularItems>
        {filteredData.map((item, index) => (
          <Link
            to={`/single/${decodeURIComponent(item.title.replace(/\s/g, "_"))}`}
            key={index}
            style={{
              backgroundImage: `url(${item.thumbnail?.trending?.small})`,
            }}
          ></Link>
        ))}
      </PopularItems>
    </PopularContainer>
  );
}
