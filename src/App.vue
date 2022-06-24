<script>
</script>

<template>
  <nav>
    <router-link to="/" class="home_navbar"><span>HOME</span></router-link> 
    <router-link to="/projects"><span>PROJECTS</span></router-link>
    <router-link to="/contact"><span>CONTACT</span></router-link>
  </nav>
  <router-view/>
</template>

<style>
* {
  margin: 0;
}

.home_navbar {
  float: left;
}

nav {
  list-style-type: none;
  font-family: Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

a {
  float: right;
  text-decoration: none;
}

a > span{
  display: block;
  color: rgb(86, 86, 86);
  text-align: center;
  padding: 2em;
  font-weight: 400;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
a:hover > span {
  color: rgb(22, 22, 22);
}

</style>
