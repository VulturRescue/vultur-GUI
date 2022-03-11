import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import Spectogram from "../img/spectogram.png"
import RVIZ from "../img/rviz.PNG"
import Histograma from "../img/histograma.jpg"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));


const StyledButton = styled(Button)(({ theme }) => ({
  margin: '3px',
}))

const Home = () => {
  return (
    <div
    // style={{ backgroundColor: "black", height:'100%'  }}

    >
      <Grid container spacing={2}>

        <Grid item xs={6}>
          <Item></Item>
        </Grid>

        <Grid item style={{ "height": "100%" }} xs={6}>

          <Stack
            direction="column"
            spacing={2}>

            <Item>
              <Grid container spacing={2}>

                <Grid item xs={6}>
                  <Item
                    sx={{
                      backgroundColor: '#b4e8fa',
                    }}
                  >
                    <h1>
                      Holaa
                    </h1>
                  </Item>
                </Grid>

                <Grid item xs={6}>
                  <Item>

                  </Item>
                </Grid>
              </Grid>
              <Grid container justifyContent="flexStart" xs={12}>
                <StyledButton variant='contained' color='success'>ON</StyledButton>
                <StyledButton variant='contained' color='error'>OFF</StyledButton>
              </Grid>
            </Item>

            <Item>

            </Item>

            <Item></Item>
          </Stack>
          {/* <Grid item xs={12}>
            <Item><img src={Histograma} alt="" /></Item>
          </Grid>
          <Grid item xs={12}>
            <Item><img src={RVIZ} alt="rviz" /></Item>
          </Grid>
          <Grid item xs={12}>
            <Item><img src={Histograma} alt="rviz" /></Item>
          </Grid> */}

        </Grid>

        {/* <Grid item xs={6}>
          <Item><img src={Spectogram} alt="spectograma" /></Item>
        </Grid> */}
      </Grid>
    </div >
  )
}


export default Home;