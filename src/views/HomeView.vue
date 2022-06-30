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
    <p>My name is Pablo Ruiz Ponce, I'm living in Barcelona (Spain) and I'm a Computer Engineer specialized in the Computer Vision and Machine Learning fields. Currently, I am studying the Artificial Intelligence MSc at the Universitat Politecnica de Catalunya. I'm passionate about creating and using computers to solve everyday problems.</p>
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

