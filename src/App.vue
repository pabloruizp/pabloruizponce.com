<script>
import db from "./firebaseInit.js";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


export default {
  data: () => ({
    curriculum: String,
  }),
  mounted() {
    const storage = getStorage();
    const storageRef = ref(storage, "resume.pdf");
    getDownloadURL(storageRef)
      .then((url) => {
        this.curriculum = url
      })
      .catch((error) => {
        // Handle any errors
      });
  }
}

</script>

<template>
  <nav>
    <router-link to="/" class="home_navbar"><span>HOME</span></router-link> 
    <a :href="curriculum"><span>RESUME</span></a>
    <router-link to="/projects"><span>PROJECTS</span></router-link>
  </nav>
  <router-view/>
  <footer><a href="https://www.github.com/pabloruizp/pabloruizponce.com">Built and Designed by Pablo Ruiz Ponce</a></footer>
</template>

<style>
* {
  margin: 0;
}

footer {
  width: 100%;
  display: flex;
  justify-content: center;
  position:relative;
  padding: 2em 0;
  bottom: 0;
  font-family: 'Inter';
  font-size: 0.9em;
  font-weight: 200;
}

footer > a {
  color: black;
  text-decoration: none;
  transition: 0.2s;
}

footer > a:hover {
  color: rgb(179, 179, 179);
}


body{
    background-color: rgb(255, 255, 255);
}

.home_navbar {
  float: left;
}

nav {
  list-style-type: none;
  font-family: 'Inter';
  margin: 0 5vw;
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
