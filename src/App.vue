<template>
  <nav>
    <router-link to="/"><span>Home</span></router-link> 
    <router-link to="/projects"><span>Projects</span></router-link>
    <router-link to="/contact"><span>Contact</span></router-link>
  </nav>
  <router-view/>
</template>

<style>
* {
  margin: 0;
}
nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

a {
  float: left;
}

a > span{
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
a:hover {
  background-color: #111;
}

</style>
