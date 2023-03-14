import { FC, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const App: FC = () => {
  const searchRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (searchRef.current) {
      searchRef.current.classList.toggle("active");
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="search" ref={searchRef}>
      <input
        type="text"
        className="input"
        placeholder="Search..."
        ref={inputRef}
        onBlur={() => {
          if (searchRef.current) {
            searchRef.current.classList.remove("active");
          }
        }}
      />
      <button className="btn" ref={btnRef} onClick={handleClick}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default App;
