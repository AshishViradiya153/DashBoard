import { Breadcrumbs, Link, Typography } from "@mui/material";
import { BreadCrumbs } from "./BreadCrumb.styles";
const BreadCrumb = () => {
  return (
    <BreadCrumbs>
      <Breadcrumbs aria-label="breadcrumb" separator="/">
        <Link
          underline="hover"
          sx={{ fontSize: "13px", display: "flex" }}
          color="inherit"
          href="/"
        >
          Collection.1
        </Link>
        <Link
          underline="hover"
          sx={{ fontSize: "13px", display: "flex" }}
          color="inherit"
          href="#"
        >
          Collection.1.1
        </Link>
        <Link
          underline="hover"
          sx={{ fontSize: "13px", display: "flex" }}
          color="inherit"
          href="#"
        >
          Collection.1.1.1
        </Link>
        <Typography sx={{ fontSize: "13px", display: "flex" }}>
          WYSIWYG Editor
        </Typography>
      </Breadcrumbs>
    </BreadCrumbs>
  );
};

export default BreadCrumb;
