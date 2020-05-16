import React,{useState} from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../firebase'

const styles = theme =>  ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {//media quiery, 400 se up jae to ye kro
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper:{
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		// justifyContent:'center',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar:{
		backgroundColor:theme.palette.secondary.main,
		margin:theme.spacing.unit
	},
	submit:{
		margin:8
	},
	form:{
		marginTop:theme.spacing.unit
	}
	
})


function Dashboard(props){
	const {classes}=props
	if(firebase.getCurrentUsername()){
		console.log('')
	}else{
		alert('login firest')
		props.history.replace('/login')
		return null
	}
	return(
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<VerifiedUserOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					hello {firebase.getCurrentUsername()}
       			</Typography>
       				<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={logout}
						className={classes.submit}>
						Log out
          			</Button>
			</Paper>
		</main>

	)

	async function logout(){
		await firebase.logout()
		props.history.replace('/')
	}
}

export default withRouter(withStyles(styles)(Dashboard))