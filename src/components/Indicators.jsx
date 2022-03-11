import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Item from '../utils/styles/Item'

const Indicators = () => {


  return (
    <Box>
      <h3>Indicators:</h3>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button variant="outlined">Report</Button>
        </Grid>
        <Grid item xs={6}>
          <Button color="error" variant="outlined">Emergency</Button>
        </Grid>
      </Grid>
    </Box>
  )
}


export default Indicators;