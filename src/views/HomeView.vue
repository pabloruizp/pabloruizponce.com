<script>
import SocialMediaBar from "../components/SocialMediaBar.vue";

export default {
  components: {
    SocialMediaBar
  }
}
</script>

<template>
  <div class='home-text'>
    <p>Hi, my name is</p>
    <h1>Pablo Ruiz Ponce</h1>
    <h2>Machine Learning Researcher</h2>
    <h3>pabloruizp00@gmail.com</h3>
    <SocialMediaBar></SocialMediaBar>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</template>

<style>
.home-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Inter';
  text-align:justify;
  margin: 10vw 30vw;
}

h1 {
  font-weight: 900;
  font-size: 4em;
}

h2{
  font-weight: 400;
  font-style: italic;
}

h3 {
  font-weight: 200;
}

p {
  font-weight: 200;
}

</style>

