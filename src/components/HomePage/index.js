
import React from 'react'
import { Typography, Paper, Avatar, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
// import firebase from '../firebase'

const styles = theme =>  ({
	// main:{
	// 	width:'auto',
	// 	display:'block',
	// 	marginLeft:theme.spacing.unit * 3,
	// 	marginRight:theme.spacing.unit *3
	// }
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
	}
	
})
function HomePage(props) {
	const { classes } = props
	
	return (
		<div className={classes.col}>
        <main className={classes.main}>
            <Paper className={classes.paper}>
				<Avatar>
					<VerifiedUserOutlined/>
				</Avatar>
				<Typography variant="h5" >
					Movie Search Base
				</Typography>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/register"
					className={classes.submit}
					>
					Register
          		</Button>
          		<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/login"
					className={classes.submit}
					>
					Login
          		</Button>
          		<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/dashboard"
					className={classes.submit}
					>
					Dashboard
          		</Button>
            </Paper>
        </main>
        </div>
	)
}

export default withStyles(styles)(HomePage)//higher order compoennt actually props de rha he jis se classes destructure ho rhin he
