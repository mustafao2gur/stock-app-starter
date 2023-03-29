import {  Grid, Typography } from '@mui/material'
import  { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import FirmCard from '../components/FirmCard';
import FirmModal from '../components/modals/FirmModal';
import useStockCall from '../hooks/useStockCall';
import { flex } from '../style/globalstyle';


const Firms = () => {
    const {firms}=useSelector((state)=>state.stock)
  const { getStockData } = useStockCall();
    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState({
        name: "",
        phone: "",
        address: "",
        image: "",
    });

    const handleClose = () => setOpen(false);

    useEffect(() => {
    getStockData("firms")
    }, [])
    
  return (
    <div>
      <Typography variant="h4" color="primary" mb={4}>
        Firm
      </Typography>

      <FirmModal
        setOpen={setOpen}
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Firms