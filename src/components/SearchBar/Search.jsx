import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import "./Search.css";
const SearchBar = () => {
  return (
    <>
      <div className="wrapper">
        <input className="search" />
        <button className="search-button">
          <SearchIcon />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
