<template>
  <div id="app">
<<<<<<< HEAD
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
=======
>>>>>>> development
    <router-view />
  </div>
</template>

<style>
<<<<<<< HEAD
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
=======
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
>>>>>>> development
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

@import url("https://fonts.googleapis.com/css?family=Fondamento|Gelasio|Patrick+Hand+SC|Playfair+Display+SC|Roboto&display=swap");
html {
  font-family: "Roboto", sans-serif;
}
body {
  /* background-image: url("./assets/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
}
header {
  justify-content: center;
  display: flex;
  height: 150px;
  align-items: center;
  text-align: center;
}
a {
  color: #917c78;
}
a:hover {
  text-decoration: none;
  scroll-behavior: smooth;
  color: rgb(233, 32, 65);
}
.navbar {
  background-color: transparent;
}

.navbar-toggler i {
  color: whitesmoke;
  font-size: 25px;
}

.navbar-nav {
  padding: 4;
}

.nav-link {
  color: rgb(94, 88, 86);
  text-transform: uppercase;
  font-family: "Playfair Display SC", sans-serif;
}

.nav-link:hover {
  opacity: 0.5;
  color: rgb(233, 32, 65);
}
</style>
