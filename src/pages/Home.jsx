

import Indicators from "../components/Indicators"
import Values from "../components/Values"
import Box from '@mui/material/Box';
import Item from '../utils/styles/Item'

import Spectogram from "../img/spectogram.png"
import Histograma from "../img/histograma.jpg"


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
    marginBottom: '10px',
  })
}

const Home = () => {
  return (
    <Box sx={{ height: '850px', width: '100%', display: 'flex' }}>
      <Box sx={boxStyleCols("100%", "50%")}>
        <Item elevation={4}>
          Histograms
        </Item>
        <img src={Histograma} style={{ width: "100%", height: "65%", marginTop: "20px" }} />
      </Box>

      <Box sx={boxStyleCols("100%", "50%")}>
        <Box sx={boxStyleRow("40%")}>
          <Values />
        </Box>

        <Box sx={boxStyleRow("35%")}>
          <Item elevation={4}>
            Spectogram
          </Item>
          <img src={Spectogram} style={{ width: "100%", height: "65%", marginTop: "20px" }} />
        </Box>
        <Box sx={boxStyleRow("15%")}>
          <Indicators />
        </Box>
      </Box>
    </Box>

  )
}


export default Home;