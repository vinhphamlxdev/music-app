import React, { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "./Popper";
import SuggestItem from "./Popper/SuggestItem";
import styled from "styled-components";
// css
const StyledSearch = styled.div`
  .search-input {
    background-color: ${(props) => props.theme.alphaBg};
    border-radius: 12px;
    font-size: 13px;
    color: ${(props) => props.theme.textColor};
    &.show-result {
      border-radius: 20px 20px 0 0;
      background-color: ${(props) => props.theme.primaryBg};
    }
  }
  input::-webkit-input-placeholder {
    color: ${(props) => props.theme.navigationText};
  }
  input::-moz-input-placeholder {
    color: ${(props) => props.theme.navigationText};
  }
  .search-icon {
    color: ${(props) => props.theme.navigationText};
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
//
const Search = () => {
  const inputRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 2000);
  }, []);
  const handleShowResult = () => {
    setShowResult(!showResult);
  };

  return (
    <StyledSearch>
      <Tippy
        interactive
        visible={showResult}
        offset={[0, 0]}
        onClickOutside={() => setShowResult(false)}
        render={(attrs) => (
          <div className="w-[500px] search-result" tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className="search-title">Đề xuất cho bạn</h4>
              <SuggestItem />
              <SuggestItem />
              <SuggestItem />
            </PopperWrapper>
          </div>
        )}
      >
        <div className="w-[500px]  relative">
          <input
            onFocus={handleShowResult}
            ref={inputRef}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={`w-full py-3 pl-3 pr-7 search-input ${
              showResult ? "show-result" : ""
            }`}
            type="text"
            placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
          />
          <div className="absolute search-icon">
            <BiSearch className="text-xl cursor-pointer text-inherit"></BiSearch>
          </div>
        </div>
      </Tippy>
    </StyledSearch>
  );
};

export default Search;
