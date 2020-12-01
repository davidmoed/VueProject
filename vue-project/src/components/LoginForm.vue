<template>
   <div class="login-form">
      <form class="form-cont" @submit="authenticate">
         <h1 class="login-form-header">היי, טוב לראות אותך</h1>
         <div class="input-group">
            <input name="email" type="email" placeholder="מייל" v-model="username"/>
            <label for="email">כתוב המייל איתה נרשמת לחשבונית ירוקה</label>
         </div>
         <div class="input-group">
            <input type="password" name="password" placeholder="סיסמה" v-model="password"/>
            <label for="password"><a href="">שכחת סיסמה?</a></label>
         </div>
         <div class="submit-group">
            <input id="submit-continue" type="submit" value="כניסה" />
            <input id="submit-google" type="submit" value="כניסה מהירה" />
         </div>
         <div class="signup-cta">
            <p>עוד לא הצטרפת? <a href="">ל-30 יום ניסיון חינם</a></p>
         </div>
      </form>
   </div>
</template>

<script>
   import { mapActions } from 'vuex';

   export default {
      name: 'login',
      data() {
         return {
            username: '',
            password: ''
         }
      },
      methods: {
         ...mapActions(['LogIn']),
         async authenticate(e) {
            e.preventDefault()
            const user = {
               username: this.username,
               password: this.password
            }
            try {
               await this.LogIn(user);
               this.$router.push('/');
               debugger;
            } catch (err) {
               console.log(err)
            }
         },
      },
   }
</script>

<style scoped>
   .login-form {
      direction: rtl;
      color: #23445A;
      display: flex;
      flex-direction: column;
      align-content: center;
      height: 100%;
   }

   .form-cont {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: stretch;
      text-align: right;
      height: 100%;
      margin: 0 20%;
   }

   .form-cont .input-group {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin: 30px 0;
      width: 100%
   }

   .form-cont .input-group input {
      border: none;
      border-bottom: 1px solid #23445A;
      font-size: 18px;
   }

   .form-cont .input-group input::placeholder {
      color: #23445A;
      font-family: almoni-neue-aaa;
   }

   .form-cont .input-group label {
      margin-top: 5px;
      font-size: 14px
   }

   .form-cont .input-group label a {
      color: #23445A;
   }

   .form-cont .submit-group {
      display: flex;
      flex-direction: row;
      justify-content: stretch;
      width: 100%
   }

   .form-cont .submit-group input {
      width: 100%;
      height: 48px;
      border: none;
      border-radius: 100px;
      font-family: almoni-neue-aaa;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      margin-top: 25px;
      cursor: pointer;
   }

   .form-cont .submit-group #submit-continue {
      margin-left: 15px;
      color: #FFFFFF;
      background-color: #18C746;
   }

   .form-cont .submit-group #submit-google {
      color: #0084F4;
      border: 1px solid #0084F4;
      background-color: transparent;
      background-image: url(../assets/Google_G.svg);
      background-repeat: no-repeat;
      background-position: 16px center;
      background-size: 20px 20px;
      padding-left: 16px;
      width: 80%;
   }

   .signup-cta {
      text-align: right;
      font-size: 14px;
      color: #0084F4;
      margin-top: 15px;
   }

   .signup-cta a {
      color: #0084F4;
   }

   /* properly size google submit button as screen resizes to avoid icon and text overlap  */
   @media (max-width: 1140px) {
      .form-cont .submit-group #submit-google {
         background-position: 10px center;
         background-size: 14px 14px;
         padding-left: 16px;
         width: 90%;
      }
   }

   @media (max-width: 938px) {
      .form-cont .submit-group #submit-google {
         background-position: 8px center;
         background-size: 10px 10px;
         padding-left: 12px;
         width: 100%;
      }
   }

   @media (max-width: 768px) {
      .form-cont .submit-group #submit-google {
         background-position: 10px center;
         background-size: 14px 14px;
         padding-left: 16px;
         width: 80%;
      }
   }

</style>
