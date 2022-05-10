<template>
    <nav class="navbar__container">
        <img src="../../assets/icons/logo.png" alt="logo">
    </nav>
</template>

<script>

export default {
  name: "NavbarComponent",
};
</script>
   
<style lang="scss" scoped>
    @import "@/scss/abstracts/variables.scss";
 
    .navbar__container {
        background: linear-gradient(180deg, $blueLight -2.37%, $blueMedium 124.84%, $blueMedium 124.84%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        height: 4.62rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>