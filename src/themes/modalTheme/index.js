import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import styled from "styled-components";
import Button from "~/components/button";
import { LIST_THEME as ListThemeItem } from "./ListTheme";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowModalTheme,
  setThemeBg,
} from "~/redux-toolkit/global/globalSlice";
import {
  blueLightTheme,
  blueTheme,
  darkTheme,
  dynamicBlueTheme,
  dynamicPink,
  eiffelTheme,
  iuTheme,
  jennieTheme,
  jiChangWookTheme,
  jisooTheme,
  lightDarkTheme,
  lisaTheme,
  lonDonTheme,
  purpleTheme,
  roseTheme,
  xoneTheme,
  zmaTheme,
} from "~/themes/ThemeData";
const StyledModal = styled.div`
  .portal-modal {
    background-color: ${(props) => props.theme.primaryBg};
    border-radius: 8px;
    max-height: 100%;
    position: relative;
    z-index: 100;
    color: ${(props) => props.theme.textPrimary};
  }
  .modal-title {
    font-size: 24px;
    padding: 20px 30px;
    margin: 0;
    color: ${(props) => props.theme.textPrimary};
  }
  .modal-container {
    max-height: 50vh;
    min-height: 500px;
    padding: 0 30px;
    overflow: hidden overlay;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background-color: ${(props) => props.theme.layoutBg};
    }
    .theme-title {
      font-size: 18px;
      color: ${(props) => props.theme.textPrimary};
    }
    .theme__item-image {
      .theme__item-img {
        &::after {
          background-color: ${(props) => props.theme.darkAlpha50Bg};
        }
        &:hover .theme-action {
          visibility: visible;
        }
      }
      &:hover .theme__item-img img {
        transform: scale(1.12, 1.12);
        border-radius: 6px;
      }
    }
  }
  .close-modal {
    color: ${(props) => props.theme.textPrimary};
  }
`;
const ModalTheme = ({ open = false, handleClose = () => {} }) => {
  const { showModalTheme } = useSelector((state) => state.global);
  console.log("show modal theme:", showModalTheme);
  const [themes, setThemes] = useState([]);
  const [currentTheme, setCurrentTheme] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    if (!ListThemeItem) return [];
    setThemes(ListThemeItem);
  }, []);
  const applyTheme = (theme) => {
    if (theme === 1) {
      setCurrentTheme(lonDonTheme);
    } else if (theme === 2) {
      setCurrentTheme(lightDarkTheme);
    } else if (theme === 3) {
      setCurrentTheme(dynamicBlueTheme);
    } else if (theme === 4) {
      setCurrentTheme(dynamicPink);
    } else if (theme === 5) {
      setCurrentTheme(xoneTheme);
    } else if (theme === 6) {
      setCurrentTheme(zmaTheme);
    } else if (theme === 7) {
      setCurrentTheme(eiffelTheme);
    } else if (theme === 8) {
      setCurrentTheme(iuTheme);
    } else if (theme === 9) {
      setCurrentTheme(jiChangWookTheme);
    } else if (theme === 10) {
      setCurrentTheme(lisaTheme);
    } else if (theme === 11) {
      setCurrentTheme(jennieTheme);
    } else if (theme === 12) {
      setCurrentTheme(jisooTheme);
    } else if (theme === 13) {
      setCurrentTheme(roseTheme);
    } else if (theme === 14) {
      setCurrentTheme(darkTheme);
    } else if (theme === 15) {
      setCurrentTheme(purpleTheme);
    } else if (theme === 16) {
      setCurrentTheme(blueTheme);
    } else if (theme === 17) {
      setCurrentTheme(blueLightTheme);
    }
    dispatch(setThemeBg(currentTheme));
    dispatch(setShowModalTheme(false));
  };
  const previewTheme = (theme) => {
    if (theme === 1) {
      setCurrentTheme(lonDonTheme);
    } else if (theme === 2) {
      setCurrentTheme(lightDarkTheme);
    } else if (theme === 3) {
      setCurrentTheme(dynamicBlueTheme);
    } else if (theme === 4) {
      setCurrentTheme(dynamicPink);
    } else if (theme === 5) {
      setCurrentTheme(xoneTheme);
    } else if (theme === 6) {
      setCurrentTheme(zmaTheme);
    } else if (theme === 7) {
      setCurrentTheme(eiffelTheme);
    } else if (theme === 8) {
      setCurrentTheme(iuTheme);
    } else if (theme === 9) {
      setCurrentTheme(jiChangWookTheme);
    } else if (theme === 10) {
      setCurrentTheme(lisaTheme);
    } else if (theme === 11) {
      setCurrentTheme(jennieTheme);
    } else if (theme === 12) {
      setCurrentTheme(jisooTheme);
    } else if (theme === 13) {
      setCurrentTheme(roseTheme);
    } else if (theme === 14) {
      setCurrentTheme(darkTheme);
    } else if (theme === 15) {
      setCurrentTheme(purpleTheme);
    } else if (theme === 16) {
      setCurrentTheme(blueTheme);
    } else if (theme === 17) {
      setCurrentTheme(blueLightTheme);
    }
    dispatch(setThemeBg(currentTheme));
    dispatch(setShowModalTheme(true));
  };
  useEffect(() => {
    previewTheme();
    applyTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme]);
  if (typeof document === "undefined")
    return <div className="modal-theme"></div>;
  return ReactDOM.createPortal(
    <StyledModal
      className={`modal-theme flex  w-full h-full fixed  inset-0 transition-all duration-700  z-[9999] ${
        showModalTheme ? "" : "hidden"
      }`}
    >
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black opacity-60 "
      ></div>
      <div className="w-[70vw] inset-0 m-auto portal-modal max-w-[900px] pb-5">
        <Tippy interactive content="Đóng" placement="top">
          <button
            onClick={handleClose}
            className="absolute z-50 text-2xl close-modal top-4 right-4"
          >
            <i className="text-inherit bi bi-x-lg"></i>
          </button>
        </Tippy>
        <h3 className="modal-title">Giao Diện</h3>
        <div className="modal-container">
          {themes.map((theme, index) => (
            <div key={theme.id} className="flex flex-col">
              <h4 className="theme-title mb-[10px] font-semibold block capitalize">
                {theme.header}
              </h4>
              <div className="grid gap-x-[14px] grid-cols-6">
                {theme.data.map((item, index) => (
                  <div key={index} className="mb-5">
                    <div className="relative w-full overflow-hidden rounded-md theme__item-image">
                      <div className="overflow-hidden after:invisible hover:after:rounded-md hover:after:visible rounded-md cursor-pointer relative after:absolute after:inset-0 after:content-['']  after:rounded-md after:w-full after:h-full  theme__item-img">
                        <img
                          className="object-cover w-full transition-all duration-500 rounded-md "
                          src={item.image}
                          alt=""
                        />
                        <div className="absolute gap-y-[10px] z-50 flex flex-col invisible  theme-action top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                          <Button onClick={() => applyTheme(item.indexTheme)}>
                            Áp Dụng
                          </Button>
                          <Button
                            preview
                            onClick={() => previewTheme(item.indexTheme)}
                          >
                            Xem Trước
                          </Button>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-medium leading-[1.36] text-ellipsis py-[6px] block ">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledModal>,
    document.querySelector("body")
  );
};

export default ModalTheme;
