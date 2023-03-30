import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { flexColumn } from "../../style/globalstyle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BrandModal({ open, setOpen, handleClose, info, setInfo }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={flexColumn} component={"form"}>
            <TextField
              label="Brand Name"
              name="name"
              id="name"
              type="text"
              variant="standard"
              required
            />

            <TextField
              label="Image Url"
              name="image"
              id="image"
              type="url"
              variant="standard"
              required
            />

            <Button type="submit" variant="contained" size="large">
              Save Brand
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
