import React, { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "./Popper";
import SuggestItem from "./Popper/SuggestItem";
import styled from "styled-components";
import SongSugges from "./Popper/SongSugges";
import ArtistsSugges from "./Popper/ArtistsSugges";
// css
const StyledSearch = styled.div`
  .search-input {
    background-color: ${(props) => props.theme.alphaBg};
    border-radius: 12px;
    font-size: 13px;
    color: ${(props) => props.theme.textPrimary};
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
  .song-sugges-item {
    &:hover {
      background-color: ${(props) => props.theme.alphaBg};
    }
    &:hover .media-action {
      visibility: visible;
    }
    &:hover .song-thumb::after {
      visibility: visible;
    }
  }
  .song__sugges-info {
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    align-self: center;
    .song__sugges-author {
      color: ${(props) => props.theme.textSecondary};
      font-size: 12px;
    }
    .song__sugges-name:hover {
      color: ${(props) => props.theme.linkTextHover};
    }
  }
`;
//
const Search = () => {
  const inputRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!searchValue.trim()) {
      return;
    }
    fetch(
      `https://music-player-pink.vercel.app/api/search?keyword=${encodeURIComponent(
        searchValue
      )}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (!res.data) return null;
        const {
          data: { artists, songs, top },
        } = res;
        console.log("nghệ sĩ:", artists);
        console.log("Bài hát:", songs.slice(0, 3));
        console.log("top:", top);
        setSearchResult([artists, songs, top]);
      });
  }, [searchValue]);
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
          <div
            className="w-[500px] min-h-0  search-result"
            tabIndex="-1"
            {...attrs}
          >
            <PopperWrapper>
              {!searchValue && (
                <>
                  <h4 className="search-title">Đề xuất cho bạn</h4>
                  <SuggestItem />
                  <SuggestItem />
                  <SuggestItem />
                </>
              )}
              {searchValue && (
                <>
                  <h4 className="sugges-title  text-base font-semibold px-[10px] pb-2">
                    Gợi ý kết quả
                  </h4>
                </>
              )}
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
