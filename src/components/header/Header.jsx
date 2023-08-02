import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  FirstRow,
  FirstCol,
  Input,
  InputWrapper,
  MainWrapper,
  SearchIconWrapper,
  SearchWrapper,
  SecondCol,
  Text,
  InvitationMember,
  AvatarWrapper,
  Avatar,
  P,
  Badge,
  Online,
  SecondColumn,
  Link,
} from "./Header.styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useRef, useState } from "react";
import Menubar from "../menubar/Menubar";
import { initialData, initialLinkData } from "../../data";
import Modal from "../../common/Modal";

const Header = () => {
  const avatarRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");
  const [menuData, setMenuData] = useState(initialData);
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [linkData, setLinkData] = useState(initialLinkData);
  useEffect(() => {
    let avatar = avatarRef.current;
    const enterMouseHandler = () => {
      setShowMenuBar(true);
    };
    avatar.addEventListener("mouseenter", enterMouseHandler);
    return () => {
      avatar.removeEventListener("mouseenter", enterMouseHandler);
    };
  }, []);

  useEffect(() => {}, []);

  const handleHamburgerClick = () => {
    console.log("Hamburger clicked");
  };

  const handleOnLinkClick = (id) => {
    setLinkData((preVal) =>
      preVal.map((li) => {
        return li.id === id
          ? { ...li, selected: true }
          : { ...li, selected: false };
      })
    );
  };

  const handleOnListClick = () => {
    setShowMenuBar(false);
  };
  const openInviteMemberModal = () => {
    setOpenModal((preVal) => !preVal);
  };
  return (
    <MainWrapper>
      <Modal
        openModal={openModal}
        openInviteMemberModal={openInviteMemberModal}
        title="INVITE TEAM MEMBER"
        descriptions="Enter email address for send invitation"
        btnNameForCloseModal="close"
        btnNameForSubmit="Send"
        handleOnSave={openInviteMemberModal}
      />
      <FirstRow>
        <FirstCol>
          <MenuIcon
            sx={{ cursor: "pointer", width: "0.8em" }}
            onClick={handleHamburgerClick}
          />
          <SearchWrapper>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#cecece", width: "0.8em" }} />
            </SearchIconWrapper>
            <InputWrapper>
              <Input
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search something"
              />
            </InputWrapper>
          </SearchWrapper>
        </FirstCol>
        <SecondCol>
          <InvitationMember onClick={openInviteMemberModal}>
            <PersonAddIcon sx={{ width: "0.7em" }} />
            <Text>invite team member</Text>
          </InvitationMember>
          <NotificationsNoneIcon sx={{ width: "0.8em", cursor: "pointer" }} />
          <AvatarWrapper>
            <Avatar ref={avatarRef}>
              <P>FL</P>
              <Badge>new</Badge>
              <Online />
            </Avatar>
            {showMenuBar && (
              <Menubar
                menuData={menuData}
                showMenuBar={showMenuBar}
                setShowMenuBar={setShowMenuBar}
                handleOnListClick={handleOnListClick}
              />
            )}
          </AvatarWrapper>
        </SecondCol>
      </FirstRow>
      <SecondColumn>
        {linkData.map((link) => {
          return (
            <Link
              border={link.selected}
              onClick={() => handleOnLinkClick(link.id)}
            >
              {link.name}
            </Link>
          );
        })}
        <MoreVertIcon sx={{ width: "0.7em", cursor: "pointer" }} />
      </SecondColumn>
    </MainWrapper>
  );
};

export default Header;
