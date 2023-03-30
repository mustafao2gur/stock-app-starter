import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { btnStyle, flex } from "../style/globalstyle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

export default function BrandCard({brand}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <CardMedia
          image={brand?.image}
          sx={{ p: 1, objectFit: "contain", height: "250px" }}
          component="img"
          alt="brand-img"
        />
        <Typography gutterBottom variant="h5" component="div">
          {brand?.name}
        </Typography>
      </CardContent>
      <CardActions>
        <CardActions sx={flex}>
          <EditIcon sx={btnStyle} />
          <DeleteOutlineIcon sx={btnStyle} />
        </CardActions>
      </CardActions>
    </Card>
  );
}
