import {
  BookmarkBorderOutlined,
  Logout,
  MapOutlined,
  PermIdentityOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store";
import ModalLogin from "../ModalLogin";
import ModalRegister from "../ModalRegister";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const user = useAppSelector((state) => state.auth.user);

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return !user ? (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://s3-alpha-sig.figma.com/img/8071/6160/5b05877828ab21ed78e68d7f7ccfdd92?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BGUtFusLyiLZ2LNsocKu2P9XMMszKohxVEkEy1g4CC--DWJAj40~mhWOhIhMHn0seE8jGCZirxs056NfTlZijqonCJIdByEmVpNpb5J4vMupuMuYr8Um5UQhW8Z4xLtpzTPOkCD2h2HVeS0VY9b~jGEU8KnVZE8Mv0ZS0CnjgV0Ld2gIcaXxOyoJEUI9SyVUBXecuZYRIlpuaBhkOb2EOKEHXtcocCwPebM8MeL776iOtCsvyr9nBNc0o5daKLfiLpz-9BO4FabBCrg0eMr5iCnXInh1DlT7GJ8O-fFAmKCb56rkwY2mGK2sFYU1mVi-7X3wc9eH6odNzYtdQRYYaQ__')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h6"
        align="left"
        sx={{
          position: "absolute",
          top: "20px",
          left: "100px",
          color: "white",
        }}
      >
        The Journey
      </Typography>
      <Typography
        variant="h2"
        align="left"
        sx={{
          position: "absolute",
          top: "120px",
          left: "100px",
          color: "white",
        }}
      >
        The Journey
        <br />
        you ever dreamed of.
      </Typography>
      <Typography
        variant="body1"
        align="left"
        sx={{
          position: "absolute",
          top: "280px",
          left: "100px",
          color: "white",
        }}
      >
        We made a tool so you can easily keep & share your travel memories.
        <br />
        But there is a lot more
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          right: "80px",
          position: "absolute",
          top: "20px",
        }}
      >
        <Button
          onClick={handleOpenLogin}
          size="small"
          variant="outlined"
          style={{
            color: "white",
            width: "100px",
            borderColor: "white",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Login
        </Button>
        <ModalLogin open={openLogin} handleClose={handleCloseLogin} />
        <Button
          onClick={handleOpen}
          size="small"
          variant="contained"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            color: "white",
            width: "100px",
          }}
        >
          Register
        </Button>
        <ModalRegister open={open} handleClose={handleClose} />
      </Box>
    </Box>
  ) : (
    // <Box>
    <AppBar
      position="static"
      style={{ backgroundColor: "white", color: "black" }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Journey
        </Typography>
        <div>
          <IconButton
            aria-label="menu"
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <Avatar src="https://s3-alpha-sig.figma.com/img/5736/4ad6/6ebf751e7f102311d3ba8137ef22382a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eRoSKWoTp8t-Wv8uxSGk9dpj35dr96W0o9pFDgKu-9chrK5KspPbIgOV4OhWiDdHYOJdpcnftrU4QJisebKRphFvvPeZMMmN5f6vWfgcjpm-xYhsPm-GQG-bxydfBARTnBwG1Wj8WRj3a5y0SdLveuk5Gyf6MgfBJbx7ouRAHX4u2u~UJDYONRyCYGtxmaEzbuBu0wXeS7DxQXLgRWfGJ1imzmOPvBULHXg4an28Idc6K5-9sLbwjB2RraO43JWKLgrm4OORjPBkpVe033Omu~k9kDu0-UWexP39R-JmwyOHCkauC8yb~4cSWF~P2Vtu1kNhIjMbV-VcPfMn3aOjig__" />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleMenuClose}
          >
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleMenuClose}>
                <PermIdentityOutlined
                  fontSize="small"
                  style={{ marginRight: "8px", color: "#ffaf00" }}
                />
                Profile
              </MenuItem>
            </Link>
            <Link
              to="/journey"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>
                <MapOutlined
                  fontSize="small"
                  style={{ marginRight: "8px", color: "#96b320" }}
                />
                New Journey
              </MenuItem>
            </Link>
            <MenuItem onClick={handleMenuClose}>
              {" "}
              <BookmarkBorderOutlined
                fontSize="small"
                style={{ marginRight: "8px", color: "#3b97d3" }}
              />
              Bookmark
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>
              {" "}
              <Logout
                fontSize="small"
                style={{ marginRight: "8px", color: "#e50914" }}
              />
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
    // </Box>
  );
};

export default Navbar;
