<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
   html, body {
     margin: 0px !important;
     padding: 0px !important;
     height: 100%;
   }

   #app {
     font-family: almoni-neue-aaa;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     align-items: stretch;
     align-content: stretch;
     height:100%;
   }

   #nav {
     padding: 30px;
   }

   #nav a {
     font-weight: bold;
     color: #23445A;
   }

   #nav a.router-link-exact-active {
     color: #0084F4;
   }
</style>
