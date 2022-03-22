<template>
  <div class="welcome container">
      <p class="welcome-text">Welcome</p>
      <div v-if="showLogin">
          <h2>Login </h2>
         <LoginForm @login="enterChat"/>
         <p>No account yet? <span @click="showLogin = false">SignUp</span></p>
      </div>

      <div v-else>
          <h2>Register</h2>
          <SignUpForm @signup="enterChat" />
          <p>Already registered ? <span @click="showLogin = true">Login</span></p>
      </div>
      
    
     
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue"
import LoginForm from "../components/LoginForm.vue"
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
components: {
    SignUpForm,
    LoginForm
},
 setup() {
     const showLogin = ref(true)
     const router = useRouter()

   const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }
     return {showLogin, enterChat}

 }
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}
.welcome-text {
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 1px;
}
.welcome form {
    width: 300px;
    margin: 20px auto;
}

.welcome label {
    display: block;
    margin: 20px 0 10px;
}
::placeholder {
    font-size: 16px;
}
.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 7px;
    border: 1px solid #ccc;
    outline: none;
    color: #999;
    margin: 15px auto;

}
</style>