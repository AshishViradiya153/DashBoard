import React, { useState } from "react";
import { MainWrapper } from "./RightContentPanel.styles";
import BreadCrumb from "./../breadCrumb/BreadCrumb.jsx";
import Editor from "../editor/Editor";
import Menu from "../menu/Menu";
import { MenuData } from "../../data";

const RightContentPanel = () => {
  return (
    <MainWrapper>
      <BreadCrumb />
      <Editor />
      {/* <Menu menus={MenuData} /> */}
    </MainWrapper>
  );
};

export default RightContentPanel;
