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



const boxStyleCols = (height, width, inlineBlock = true) => {
  return {
    width: width,
    height: height,
    display: inlineBlock ? 'inline-block' : null,
    p: 1,
    mx: 1,
    bgcolor: (theme) =>
      theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
    color: (theme) =>
      theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
    border: '1px solid',
    borderColor: (theme) =>
      theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
    borderRadius: 2,
    fontSize: '0.875rem',
    fontWeight: '700',
    textAlign: 'center',
  }
}

const boxStyleRow = (height) => {
  return ({
    // width: '25%',
    height: height,
    p: 1,
    bgcolor: (theme) =>
      theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
    color: (theme) =>
      theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
    border: '1px solid',
    borderColor: (theme) =>
      theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
    borderRadius: 2,
    fontSize: '0.875rem',
    fontWeight: '700',
    textAlign: 'center',
  })
}

const Home = () => {
  return (
    <Box sx={{ height: '50rem', width: '100%', display: 'flex' }}>
      <Box sx={boxStyleCols("100%", "50%")}>
        <img src={Histograma} />
        Columna1
      </Box>
      <Box sx={boxStyleCols("100%", "50%")}>
        <Box sx={boxStyleRow("40%")}>
          Row1
        </Box>
        <Box sx={boxStyleRow("20%")}>
          Row2
        </Box>
        <Box sx={boxStyleRow("20%")}>
          Row3
        </Box>
      </Box>
    </Box>
    // <div >
    //   <Grid container spacing={2} style={{maxHeight:"24rem"}}>
    //     <Grid item style={{minHeight: "100%"}}  xs={6}>
    //       <Item>
    //       <img src={Histograma}/>
    //       </Item>
    //     </Grid>
    //     <Grid item style={{ "height": "100%" }} xs={6}>
    //       <Stack
    //         direction="column"
    //         spacing={2}>
    //         <Item>
    //           <Grid container spacing={2}>
    //             <Grid item xs={6}>
    //               <Item
    //                 sx={{
    //                   backgroundColor: '#b4e8fa',
    //                 }}
    //               >
    //                 <h1>
    //                   Holaa
    //                 </h1>
    //               </Item>
    //             </Grid>

    //             <Grid item xs={6}>
    //               <Item>

    //               </Item>
    //             </Grid>
    //           </Grid>
    //           <Grid container justifyContent="flexStart" xs={12}>
    //             <StyledButton variant='contained' color='success'>ON</StyledButton>
    //             <StyledButton variant='contained' color='error'>OFF</StyledButton>
    //           </Grid>
    //         </Item>
    //         <Item style={{ height: "25%"}}>
    //           <img style={{ maxWidth: "100%"}} src={Spectogram}/>
    //         </Item>
    //         <Item>
    //           <Grid container spacing={1}>
    //             <Grid item xs={4}>
    //                 Item1
    //             </Grid>
    //             <Grid item xs={4}>
    //               Item2
    //             </Grid>
    //             <Grid item xs={4}>
    //               Item3
    //             </Grid>
    //           </Grid>
    //         </Item>
    //       </Stack>
    //     </Grid>
    //   </Grid>
    // </div >
  )
}


export default Home;