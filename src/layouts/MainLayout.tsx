import {
  Box,
} from "@mui/material";
import Home from "../pages/Home";

const MainLayout = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection={"column"}
        height={"full"}
        bgcolor={"#ededed"}
      >
        <Box>
          <Home />
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
