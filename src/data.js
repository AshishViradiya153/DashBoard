import { v4 as uuidv4 } from "uuid";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import MessageIcon from "@mui/icons-material/Message";
import LinkIcon from "@mui/icons-material/Link";
export const initialData = [
  {
    id: 1,
    name: "Dark mode",
    isDarkMode: false,
  },
  {
    id: 2,
    name: "Profile",
  },
  { id: 3, name: "what's new", isNewSession: true },
  {
    id: 4,
    name: "Help",
  },
  {
    id: 5,
    name: "Send feedback",
  },
  {
    id: 6,
    name: "Hints and shortcuts",
  },
  {
    id: 7,
    isNewSession: true,
    name: "Log out",
  },
];

export const initialLinkData = [
  { name: "All", id: 1, selected: "true" },
  { name: "Board", id: 2, selected: false },
  {
    name: "Graph",
    id: 3,
    selected: false,
  },
  {
    id: 4,
    selected: false,
    name: "Recent",
  },
];

export const treeData = [
  {
    id: uuidv4(),
    name: "Collection.1",
    children: [
      {
        id: uuidv4(),
        name: "Collection.1.1",
        children: [
          {
            id: uuidv4(),
            name: "Collection.1.1.1",
            children: [
              {
                id: uuidv4(),
                name: "Content Page 1.1.1.1",
              },
              {
                id: uuidv4(),
                name: "Quiz",
              },
              {
                id: uuidv4(),
                name: "Videos",
              },
              {
                id: uuidv4(),
                name: "WYSIWYG Editor",
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Collection.1.2",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Collection.2",
    children: [
      {
        id: uuidv4(),
        name: "Collection.2.1",
        children: [
          {
            id: uuidv4(),
            name: "Collection.2.1.1",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Collection.2.2",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Collection.3",
    children: [
      {
        id: uuidv4(),
        name: "Collection.3.1",
        children: [
          {
            id: uuidv4(),
            name: "Collection.3.1.1",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Collection.3.2",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Collection.4",
    children: [
      {
        id: uuidv4(),
        name: "Collection.4.1",
        children: [
          {
            id: uuidv4(),
            name: "Collection.4.1.1",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Collection.4.2",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Collection.5",
    children: [
      {
        id: uuidv4(),
        name: "Collection.5.1",
        children: [
          {
            id: uuidv4(),
            name: "Collection.5.1.1",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Collection.5.2",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Collection.1",
    children: [
      {
        id: uuidv4(),
        name: "Collection.1.1",
        children: [
          {
            id: uuidv4(),
            name: "Collection.1.1.1",
            children: [
              {
                id: uuidv4(),
                name: "Content Page 1.1.1.1",
              },
              {
                id: uuidv4(),
                name: "Quiz",
              },
              {
                id: uuidv4(),
                name: "Videos",
              },
              {
                id: uuidv4(),
                name: "WYSIWYG Editor",
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Collection.1.2",
      },
    ],
  },
];

export const MenuData = [
  {
    id: 1,
    icon: <FormatBoldIcon fontSize="small" style={{ cursor: "pointer" }} />,
    name: "bold",
  },
  {
    id: 2,
    icon: <FormatItalicIcon fontSize="small" style={{ cursor: "pointer" }} />,
    name: "italic",
  },
  {
    id: 3,
    icon: "< >",
    name: "wrapper",
  },
  {
    id: 4,
    icon: <LinkIcon fontSize="small" style={{ cursor: "pointer" }} />,
    name: "link",
  },
  {
    id: 5,
    icon: <MessageIcon fontSize="small" style={{ cursor: "pointer" }} />,
    name: "message",
  },
];
