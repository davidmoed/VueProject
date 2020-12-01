<template>
  <div class="login">
      <div class="login-img-cont">
         <img src="../assets/green_login_page.svg" />
      </div>
      <div class="form-cont">
         <div class="logo-img-cont">
            <img src="../assets/green_logo.svg" />
         </div>
         <LoginForm />
      </div>

  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style scoped>

   .login {
      display: flex;
      flex-direction: row;
      flex: 1 1 auto;
   }

   .login-img-cont {
      display: flex;
      flex: 6;
      background-color: #FFDCDC;
      justify-content: center;
      align-items: stretch;
   }

   .login-img-cont img {
      align-self: center;
      width: 100%;
      height: 100%;
   }

   .form-cont {
      display: flex;
      flex: 6;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
   }

   .form-cont .logo-img-cont {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: 100%;
   }

   .form-cont .logo-img-cont img {
      height: 40%;
      width: 40%;
      margin: 25px 0 0;
   }

   .login-form {
      width: 100%;
   }

   @media (max-width: 768px) {
     .login {
       display: flex;
       flex-flow: column wrap;
     }
   }
</style>
