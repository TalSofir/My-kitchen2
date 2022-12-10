import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Recipe(props) {

// function that called by button that send the id to delete by props to parent-FCRecipes
const btnDelById=()=>{
props.sendIdToDelFromRecipe(props.id)
}


// return new recipe card
  return (
      <div className='col-md-3' style={{ margin:10, padding:10} }>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={props.name}
          height="140"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            <div style={{textAlign:'center'}}>
            ID:{props.id}  {props.name}
            </div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <div style={{margin:"0 auto"}}>
          <Button variant="outlined" onClick={btnDelById}>{props.btnName}</Button>
          </div>
        </CardActions>
      </Card>
      </div>
  )
}
