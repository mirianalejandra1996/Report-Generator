<template>
  <router-view/>
</template>

<script>
// import TkambioLayout from '@/layout/TkambioLayout';

export default {
  name: "App",
  components: {
    // TkambioLayout,
  },
};
</script>

<style>


* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

@font-face {
  font-family: ArgentumSans;
  src: url('./assets/fonts/ArgentumSans-Black.ttf') format('truetype');
    font-weight: 900;
}

@font-face {
  font-family: ArgentumSans;
  src: url('./assets/fonts/ArgentumSans-ExtraBold.ttf') format('truetype');
  font-weight: 800;
}

 @font-face {
  font-family: 'ArgentumSans';
  src: url('./assets/fonts/ArgentumSans-SemiBold.ttf') format('truetype');
  font-weight: 600;
}

@font-face {
  font-family: ArgentumSans;
  src: url('./assets/fonts/ArgentumSans-Bold.ttf') format('truetype');
  font-weight: 700;
}

@font-face {
  font-family: 'ArgentumSans';
  src: url('./assets/fonts/ArgentumSans-Regular.ttf') format('truetype');
  font-weight: 400;
}


#app {
  font-family: 'ArgentumSans', sans-serif;
  height: 100vh;
}

h1 {
  font-size: 2.063rem;
  color: #181818;
  margin-top: 5rem;
  font-weight: 400;
}
</style>
