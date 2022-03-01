import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Spectogram from "../img/spectogram.png"
import RVIZ from "../img/rviz.PNG"
import Histograma from "../img/histograma.jpg"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'black' ? 'black' : 'black',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () =>{
  return (
    <div
    // style={{ backgroundColor: "black", height:'100%'  }}
    
    >
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Item><img src={Histograma} alt="histograma"/></Item>
      </Grid>
      <Grid item xs={6}>
        <Item><img src={Histograma} alt="" /></Item>
      </Grid>
      <Grid item xs={6}>
        <Item><img src={RVIZ} alt="rviz"/></Item>
      </Grid>
      <Grid item xs={6}>
        <Item><img src={Spectogram} alt="spectograma"/></Item>
      </Grid>
    </Grid>  
    </div>
  )
}


export default Home;