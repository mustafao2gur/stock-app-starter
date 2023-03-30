import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";

import { TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";

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

export default function FirmModal({setOpen,handleClose,info,setInfo,open}) {
    const handleOpen = () => setOpen(true);
    const handleChange=(e)=>{
            const { name, value } = e.target;
                setInfo({ ...info, [name]: value });
                // setInfo (...info([e.target.name]=e.target.value))
    }
      const { postStockData, putStockData } = useStockCall();
      const handleSubmit =(e)=>{
        e.preventDefault()
        if(info.id){
            putStockData("firms", info);
        }
        else{
                 postStockData("firms", info);
        }
        setInfo({})
            handleClose();
       
        console.log(info)

      }
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        New Firm
      </Button>
      <Modal
        open={open}
        onClose={() => {
        handleClose();
        setInfo({});
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              required
              value={info?.name}
              onChange={handleChange}
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              required
              value={info?.phone}
              onChange={handleChange}
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              required
              value={info?.address}
              onChange={handleChange}
            />

            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              required
              value={info?.image}
              onChange={handleChange}
            />

            <Button type="submit" variant="contained">
              Submit Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
