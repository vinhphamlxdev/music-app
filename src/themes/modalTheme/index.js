import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "~/components/button";
import { LIST_THEME as ListThemeItem } from "./ListTheme";
const StyledModal = styled.div`
  .portal-modal {
    background-color: ${(props) => props.theme.primaryBg};
    border-radius: 8px;
    max-height: 100%;
    position: relative;
    z-index: 100;
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
    /* overflow-y: scroll; */
    .theme-title {
      font-size: 18px;
      color: ${(props) => props.theme.textPrimary};
    }
    .theme__item-img {
      &::after {
        background-color: ${(props) => props.theme.darkAlpha50Bg};
      }
      &:hover .theme-action {
        visibility: visible;
      }
    }
  }
`;
const ModalTheme = () => {
  const [themeItem, setThemItem] = useState([]);
  useEffect(() => {
    if (!ListThemeItem.length) return null;
    setThemItem(ListThemeItem);
  }, [themeItem]);
  if (typeof document === "undefined")
    return <div className="modal-theme"></div>;
  return ReactDOM.createPortal(
    <StyledModal className="modal-theme w-full h-full fixed  inset-0 transition-all duration-500  z-[9999]">
      <div className="absolute inset-0 bg-black opacity-60 overlay "></div>
      <div className="w-[70vw] inset-0 m-auto portal-modal max-w-[900px] pb-5">
        <h3 className="modal-title">Giao Diện</h3>
        <div className="modal-container">
          {themeItem.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="theme-title mb-[10px] font-semibold block capitalize">
                {item.type}
              </h4>
              <div className="grid gap-x-[14px] grid-cols-4">
                <div className="mb-5">
                  <div className="relative w-full overflow-hidden theme__item-image">
                    <div className="overflow-hidden after:invisible hover:after:rounded-md hover:after:visible rounded-md cursor-pointer relative after:absolute after:inset-0 after:content-[''] after:rounded-md after:w-full after:h-full  theme__item-img">
                      <img
                        className="object-cover w-full rounded-md "
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/jack.jpg"
                        alt=""
                      />
                      <div className="absolute gap-y-[10px] z-50 flex flex-col invisible  theme-action top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                        <Button>Áp Dụng</Button>
                        <Button>Xem Trước</Button>
                      </div>
                    </div>
                  </div>
                </div>
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
