import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReactSpeedometer from "react-d3-speedometer"

const Velocity = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Acceleration
            </Typography>

            <ReactSpeedometer height={190} />

            <Typography variant="h5">
              0 m/s^2
            </Typography>

          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={6}>
        <Card sx={{ width: "100%" }}>
          <CardContent>

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Speed
            </Typography>

            <ReactSpeedometer height={190} />

            <Typography variant="h5">
              100 m/s
            </Typography>


          </CardContent>
        </Card>
      </Grid>
    </Grid>

  )
}

export default Velocity;