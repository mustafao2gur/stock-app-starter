import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import BrandCard from '../components/BrandCard';
import BrandModal from '../components/modals/BrandModal';
import useStockCall from '../hooks/useStockCall';

const Brands = () => {
   const { getStockData } = useStockCall();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const [info, setInfo] = useState({});
  const { brands } = useSelector((state)=>state.stock)
  
  useEffect(() => {
    getStockData("brands");
  }, []);
  console.log(brands);
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
      {brands?.map((brand) => (
        // console.log(brand),
        <Grid item key={brand.id}>
          <BrandCard brand={brand} setOpen={setOpen} setInfo={setInfo} />
        </Grid>
      ))}
    </Box>
  );
}

export default Brands