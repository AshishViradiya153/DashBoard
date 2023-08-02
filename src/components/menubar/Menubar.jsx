import {
  Line,
  List,
  ListWrapper,
  MenuBarWrapper,
  NewTag,
} from "./Menubar.styles";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useEffect, useRef } from "react";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 34,
  height: 18,
  padding: 0,
  margin: "0 !important",
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 14,
    height: 14,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Menubar = ({
  menuData,
  handleOnListClick,
  showMenuBar,
  setShowMenuBar,
}) => {
  const menuRef = useRef(null);
  useEffect(() => {
    let menuBarRef = menuRef.current;
    const leaveMouseHandler = () => {
      setShowMenuBar(false);
    };
    const handleOutSideClick = (event) => {
      if (menuBarRef && !menuBarRef.contains(event.target)) {
        setShowMenuBar(false);
      }
    };
    document.addEventListener("mousedown", handleOutSideClick);
    if (showMenuBar) {
      menuBarRef?.addEventListener("mouseleave", leaveMouseHandler);
    }
    return () => {
      menuBarRef.removeEventListener("mouseleave", leaveMouseHandler);
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [setShowMenuBar, showMenuBar]);
  return (
    <MenuBarWrapper ref={menuRef}>
      {menuData.map((list, index) => {
        return (
          <>
            {list.isNewSession && <Line key={index} />}
            <ListWrapper>
              <List onClick={handleOnListClick}>{list.name}</List>
              {list.name === "Dark mode" && (
                <IOSSwitch sx={{ m: 1 }} defaultChecked />
              )}
              {list.name === "what's new" && <NewTag />}
            </ListWrapper>
          </>
        );
      })}
    </MenuBarWrapper>
  );
};
export default Menubar;
