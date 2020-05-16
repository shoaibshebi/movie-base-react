import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'


 const config = {
    apiKey: "AIzaSyDazD6en6m-n4OkrLWzdrgsGQP70VaYqIw",
    authDomain: "copper-tracker-246915.firebaseapp.com",
    databaseURL: "https://copper-tracker-246915.firebaseio.com",
    projectId: "copper-tracker-246915",
    storageBucket: "copper-tracker-246915.appspot.com",
    messagingSenderId: "26406620063",
    appId: "1:26406620063:web:de54a7607985e5aab44baa",
    measurementId: "G-69LVTDMZ27"
  };

  class Firebase{
  	constructor(){
  		const defaultProject=app.initializeApp(config)//first initialize the configs
  		this.auth=app.auth()//obj for auth perposes
  		this.db=app.firestore()//obj for firestore purposes

  		console.log('defaultProject is ',defaultProject.name)
  	}
  	login(email,password){
  		return this.auth.signInWithEmailAndPassword(email,password).catch((err)=>{return err})
  	}
  	logout(){
  		return this.auth.singOut()
  	}

  	async register(name,email,password){
  		await this.auth.createUserWithEmailAndPassword(email,password)
  		
  		return this.auth.currentUser.updateProfile({
  			displayName:name
  		})
  	}
  	isInitialized(){
  		return new Promise(resolve=>{
  			this.auth.onAuthStateChanged(resolve)
  		})
  	}
  	getCurrentUsername(){
      // console.log(this.auth.currentUser)
  		return this.auth.currentUser && this.auth.currentUser.displayName
  	}



  }

  export default new Firebase()