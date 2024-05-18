import { Box, Button, TextField, Typography } from "@mui/material";

const Search = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Typography
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginTop: "20px",
            marginLeft: "60px",
          }}
        >
          Journey
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" marginX={14} marginTop={2}>
        <TextField
          label="Find Journey"
          autoComplete="off"
          variant="outlined"
          type="text"
          size="small"
          sx={{
            borderRadius: "10px",
            width: "100%",
            bgcolor: "white",
          }}
          InputLabelProps={{ sx: { color: "gray" } }}
          InputProps={{ sx: { color: "black" } }}
        />
        <Button
          size="small"
          variant="contained"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            color: "white",
            width: "100px",
          }}
        >
          Search
        </Button>
      </Box>
    </>
  );
};

export default Search;
