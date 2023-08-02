import React, { useState } from "react";
import { MainWrapper } from "./RightContentPanel.styles";
import BreadCrumb from "./../breadCrumb/BreadCrumb.jsx";
import Editor from "../editor/Editor";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const RightContentPanel = ({ handleHideSideBar, showSidebar }) => {
  return (
    <MainWrapper>
      {!showSidebar && (
        <KeyboardDoubleArrowRightIcon
          onClick={handleHideSideBar}
          sx={{ width: "0.7em", cursor: "pointer", color: "#a7a7a7" }}
        />
      )}
      <BreadCrumb />
      <Editor />
    </MainWrapper>
  );
};

export default RightContentPanel;
