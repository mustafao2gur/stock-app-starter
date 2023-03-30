import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import BrandCard from '../components/BrandCard';
import BrandModal from '../components/modals/BrandModal';

const Brands = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const [info, setInfo] = useState({});
  return (
    <Box>
      <Typography variant="h4" color="primary" mb={4}>
        Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Brand
      </Button>

      <BrandModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <BrandCard />
    </Box>
  );
}

export default Brands