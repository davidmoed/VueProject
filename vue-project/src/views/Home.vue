<template>
  <div class="home">
     <div id="nav">
       <router-link to="/">Home</router-link> |
       <router-link to="/dashboard">Dashboard</router-link>
     </div>
      <div class="welcome-section">
        <!-- <h1>Hello, {{user.firstName}} welcome to your {{user.bussinesName}}</h1> -->
        <h1>Hello User@user.com welcome to your Big Company homepage</h1>
        <div class="dashboard-button">
           View Your Dashboard
        </div>
     </div>
     <a @click="logout" class="logout">Logout</a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
   name: 'Home',
   computed: mapGetters(['user']),
   methods: {
      ...mapActions(['LogOut']),
      async logout() {
         try {
            await this.LogOut();
            this.$router.push('/login');
            debugger;
         } catch (err) {
            console.log(err)
         }
      }
   }
}
</script>

<style scoped>
   .home {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      background-image: url('../assets/homepage_bg.jpg');
      background-repeat: no-repeat;
      background-size: cover;
   }

   .welcome-section {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
      font-family: almoni-neue-aaa;
      color: #23445A;
      height: 100%;
      width: 100%;
      margin-top: 120px;
   }

   .welcome-section .dashboard-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 48px;
      background-color: #0084F4;
      color: #FFFFFF;
      border-radius: 50px;
      cursor: pointer;
      font-weight: bold;
   }

   .home .logout {
      color: #FFFFFF;
      text-decoration: none;
      margin-bottom: 25px;
      margin-right: 40px;
      align-self: flex-end;
      padding: 10px 20px;
      border: 1px solid #23445A;
      border-radius: 20px;
      background-color: #23445A;
   }

   @media (max-width: 768px) {
      .home .logout {
         align-self: center;
      }
   }

</style>
