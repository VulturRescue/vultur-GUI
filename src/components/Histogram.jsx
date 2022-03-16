import Histograma from "../img/histograma.jpg"
import Item from '../utils/styles/Item'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReactSpeedometer from "react-d3-speedometer"

const Histogram = () => {

  return (
    <Grid container>
      <Grid item xs={12}>
        <Item elevation={4}>
          Histograms
        </Item>
      </Grid>

      <Grid item xs={12}>
        <img src={Histograma} style={{ width: "100%", height: "65%", marginTop: "20px" }} alt={"Histogram"} />
      </Grid>

    </Grid>

  )
}

export default Histogram;