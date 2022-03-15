import Item from '../utils/styles/Item'
import Grid from '@mui/material/Grid'
import Logo from "../img/vultur-rescue.png"

const Title = () => {

    return (
        <Grid container spacing={2} >
            <Grid item xs={2}>
                <img src={Logo} alt="Logo" style={{ width: "66px" }} />
            </Grid>
            <Grid item xs={8}>
                <Item elevation={4}>
                    Vultur Rescue
                </Item>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <img src={Logo} alt="Logo" style={{ width: "66px" }} />
            </Grid>
        </Grid>
    )
}

export default Title;