

import Indicators from "../components/Indicators"
import Values from "../components/Values"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import Spectogram from "../img/spectogram.png"
import RVIZ from "../img/rviz.PNG"
import Histograma from "../img/histograma.jpg"


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: 'white',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,

// }));

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

const TitleStyle = {

}

const Home = () => {
  return (
    <Box sx={{ height: '850px', width: '100%', display: 'flex' }}>
      <Box sx={boxStyleCols("100%", "50%")}>
        <img src={Histograma} />
        Columna1
      </Box>
      <Box sx={boxStyleCols("100%", "50%")}>
        <Box sx={boxStyleRow("40%")}>
          <Values />
        </Box>
        <Box sx={boxStyleRow("20%")}>
          <img src={Spectogram} style={{ width: "100%", height: "100%" }} />

        </Box>
        <Box sx={boxStyleRow("20%")}>
          <Indicators />
        </Box>
      </Box>
    </Box>

  )
}


export default Home;