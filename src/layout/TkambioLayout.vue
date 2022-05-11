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
    min-height: 100vh;
}
</style>
