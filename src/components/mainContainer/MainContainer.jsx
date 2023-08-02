import React, { useState } from "react";
import { MainWrapper } from "./MainContainer.styles";
import LeftLinkPanel from "../leftLinkPanel/LeftLinkPanel";
import RightContentPanel from "../rightContentPanel/RightContentPanel";

const MainContainer = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const handleHideSideBar = () => {
    setShowSidebar((prevVal) => !prevVal);
  };
  return (
    <MainWrapper>
      <LeftLinkPanel
        showSidebar={showSidebar}
        handleHideSideBar={handleHideSideBar}
      />
      <RightContentPanel
        handleHideSideBar={handleHideSideBar}
        showSidebar={showSidebar}
      />
    </MainWrapper>
  );
};

export default MainContainer;
