import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import {
  Header,
  Icons,
  IconsWrapper,
  Label,
  LabelWrapper,
  MainWrapper,
  Title,
} from "./LeftLinkPanel.styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { treeData } from "../../data";
const getTreeItemsFromData = (treeItems, addNode) => {
  return treeItems.map((treeItemData) => {
    let children = undefined;
    if (treeItemData.children && treeItemData.children.length > 0) {
      children = getTreeItemsFromData(treeItemData.children, addNode);
    }
    return (
      <TreeItem
        key={treeItemData.id}
        nodeId={treeItemData.id}
        label={
          <LabelWrapper>
            <Label>{treeItemData.name}</Label>
            {!!treeItemData.children && (
              <IconsWrapper>
                <AddIcon
                  sx={{ width: "0.5em", color: "#a7a7a7" }}
                  className="logoHover"
                  onClick={() => addNode(treeItemData.id)}
                />
                <AddToPhotosIcon
                  sx={{ width: "0.5em", color: "#a7a7a7" }}
                  className="logoHover"
                />
                <MoreVertIcon
                  sx={{ width: "0.5em", color: "#a7a7a7" }}
                  className="logoHover"
                />
              </IconsWrapper>
            )}
          </LabelWrapper>
        }
        children={children}
      />
    );
  });
};
const DataTreeView = ({ treeItems, addNode, linkData }) => {
  return (
    <TreeView
      sx={{ overflow: "auto", padding: "0px 10px" }}
      defaultCollapseIcon={<ExpandMoreIcon sx={{ width: "0.8em" }} />}
      defaultExpandIcon={<ChevronRightIcon sx={{ width: "0.8em" }} />}
    >
      {getTreeItemsFromData(treeItems, addNode, linkData)}
    </TreeView>
  );
};
const checkAndAddNode = (id, newNode, linkData) => {
  const addNodeRecursive = (nodes) => {
    return nodes.map((node) => {
      if (node.id === id) {
        return {
          ...node,
          children: node.children
            ? [...node.children, { ...newNode }]
            : { ...node },
        };
      } else if (node.children) {
        return {
          ...node,
          children: addNodeRecursive(node.children),
        };
      }
      return { ...node };
    });
  };

  return addNodeRecursive(linkData);
};

const LeftLinkPanel = ({ showSidebar, handleHideSideBar }) => {
  const dataLocalStorage = JSON.parse(localStorage.getItem("treeData"));

  const [linkData, setLinkData] = useState(
    !!dataLocalStorage ? dataLocalStorage : treeData
  );
  const addNode = (id) => {
    const newNodeAdded = checkAndAddNode(
      id,
      {
        id: uuidv4(),
        name: "new node",
        children: [],
      },
      linkData
    );
    setLinkData(newNodeAdded);
    localStorage.removeItem("treeData");
    localStorage.setItem("treeData", JSON.stringify(newNodeAdded));
  };
  return (
    <MainWrapper showSidebar={showSidebar}>
      <Header>
        <Title>DFIN</Title>
        <Icons>
          <AddIcon
            sx={{ width: "0.7em", cursor: "pointer", color: "#a7a7a7" }}
          />
          <UnfoldMoreIcon
            sx={{
              width: "0.7em",
              color: "#a7a7a7",
              transform: "rotate(45deg)",
              cursor: "pointer",
            }}
          />
          <KeyboardDoubleArrowLeftIcon
            onClick={handleHideSideBar}
            sx={{ width: "0.7em", cursor: "pointer", color: "#a7a7a7" }}
          />
        </Icons>
      </Header>
      <DataTreeView treeItems={linkData} addNode={addNode} />
    </MainWrapper>
  );
};

export default LeftLinkPanel;
