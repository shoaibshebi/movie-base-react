import React,{useState} from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../firebase'

const styles = theme =>  ({
	col:{
		backgroundColor:'#445565',
		height:'100vh',
		marginTop:0,
		// position:'absolute'
		display: 'flex',

	},
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


function Register(props){
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [quote, setQuote] = useState('')

	const {classes}=props

	return(
		<div className={classes.col}>
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Register 
       			</Typography>
       			<form className={classes.form} onSubmit={e=>e.preventDefault() && false}>
       				<FormControl required fullWidth margin="normal">
       					<InputLabel  htmlFor="name">Name	</InputLabel>
       					<Input name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
       				</FormControl>
       				<FormControl required fullWidth margin="normal">
       					<InputLabel  htmlFor="email">Email Address	</InputLabel>
       					<Input name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
       				</FormControl>
       				<FormControl required fullWidth margin="normal">
       					<InputLabel  htmlFor="password">password</InputLabel>
       					<Input name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
       				</FormControl>
       				<FormControl required fullWidth margin="normal">
       					<InputLabel  htmlFor="quote">Your favourte quote</InputLabel>
       					<Input name="quote" id="quote" value={quote} onChange={e => setQuote(e.target.value)}/>
       				</FormControl>
       				<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={register}
						className={classes.submit}>
						Register
          			</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						component={Link}
						to="/login"
						className={classes.submit}>
						Back to Login
          			</Button>
       			</form>
				
			</Paper>
		</main>
		</div>

	)
	async function register(){
		try{
			await firebase.register(name,email,password,quote)
			props.history.replace('/dashboard')
			// await firebase.addQuote(quote)
		}catch(err){
			alert(err.message)
		}
	}
}

export default withRouter(withStyles(styles)(Register))