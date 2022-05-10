<template>
  <div class="tkambio-layout">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar';

export default {
  name: "TkambioLayout",
  components: {
    Navbar,
  },
};
</script>

<style scoped>

.tkambio-layout{
    /* background-color: red; */
    height: 100%;
}
</style>
