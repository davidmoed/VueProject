<template>
  <div class="about">
     <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/dashboard">Dashboard</router-link>
     </div>
     <h1>This is a dashboard</h1>
     <h3>Data would go here in some fun styled widgets!</h3>
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
