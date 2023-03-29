import { Button } from "@mui/material";
import { Box, } from "@mui/system";
import { useNavigate } from "react-router-dom"
import errorImg from "../assets/404.png"

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        position: "relative",
      }}
    >
      <img src={errorImg} alt="" />

      <Button
        sx={{ position: "absolute", right: 0, height:"99vh"}}
        variant="contained"
        onClick={() => navigate(-1)}
      >
        Go back
      </Button>
    </Box>
  );
}

export default NotFound
