import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid'
import Item from '../utils/styles/Item'

const Values = () => {
	const StyledButton = styled(Button)(({ theme }) => ({
		margin: '3px',
	}))

	return (
		<Grid container justifyContent="flexStart">
			<Grid item xs={12}>
				<Item elevation={8}>
					Valores
				</Item>
			</Grid>
			<Grid container item xs={12}>
				<Grid item xs={3}>c02</Grid>
				<Grid item xs={3}>temp</Grid>
				<Grid item xs={3}>siste</Grid>
				<Grid item xs={3}>cpu</Grid>
			</Grid>

			<Grid item xs={12}>
				<StyledButton variant='contained' color='success'>ON</StyledButton>
				<StyledButton variant='contained' color='error'>OFF</StyledButton>
			</Grid>

		</Grid>
	)
}


export default Values;