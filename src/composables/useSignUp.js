import { projectAuth } from "../firebase/config"
import { ref } from "vue"

const error = ref(null)


const signup = async (email, password, displayName) => {
error.value = null
try {
   const res = await projectAuth.createUserWithEmailAndPassword(email, password)
   if(!res) {
       throw new Error('Could not complete the signup')
   }
   await res.user.updateProfile({displayName})
   console.log(res.user)
}catch(err) {
console.log(err.message)
error.value = err.message

}
}

const useSignUp = () => {
 
return {error, signup
}
}

export default useSignUp