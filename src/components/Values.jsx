import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid'
import Item from '../utils/styles/Item'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Values = () => {
	const StyledButton = styled(Button)(({ theme }) => ({
		margin: '3px',
	}))

	const bull = (
		<Box
			component="span"
			sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
		>
			•
		</Box>
	);

	return (
		<Grid container justifyContent="flexStart" spacing={3}>
			<Grid item xs={12}>
				<Item elevation={4}>
					Values
				</Item>
			</Grid>
			<Grid item xs={12}>
				<Grid container spacing={2}>
					<Grid item xs={3}>
						<Card sx={{ width: "100%" }}>
							<CardContent>

								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									Word of the Day
								</Typography>

								<Typography variant="h5" component="div">
									C02
								</Typography>

								<Typography sx={{ mb: 1.5 }} color="text.secondary">
									Nivel
								</Typography>

								<Typography variant="body2">
									45%
								</Typography>

							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={3}>
						<Card sx={{ width: "100%" }}>
							<CardContent>

								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									Word of the Day
								</Typography>

								<Typography variant="h5" component="div">
									Temperatura Ambiente
								</Typography>

								<Typography sx={{ mb: 1.5 }} color="text.secondary">
									Nivel
								</Typography>

								<Typography variant="body2">
									45 °C
								</Typography>

							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={3}>
						<Card sx={{ width: "100%" }}>
							<CardContent>

								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									Word of the Day
								</Typography>

								<Typography variant="h5" component="div">
									Sistema de Transmisión
								</Typography>

								<Typography sx={{ mb: 1.5 }} color="text.secondary">
									Nivel
								</Typography>

								<Typography variant="body2">
									80 °C
								</Typography>

							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={3}>
						<Card sx={{ width: '100%' }}>
							<CardContent>

								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									Word of the Day
								</Typography>

								<Typography variant="h5" component="div">
									CPU
								</Typography>

								<Typography sx={{ mb: 1.5 }} color="text.secondary">
									Nivel
								</Typography>

								<Typography variant="body2">
									100 °C
								</Typography>

							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<StyledButton variant='contained' color='success'>ON</StyledButton>
				<StyledButton variant='contained' color='error'>OFF</StyledButton>
			</Grid>

		</Grid>
	)
}


export default Values;