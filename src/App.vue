<template>
    <div>
        <app-navbar></app-navbar>
        <app-sections></app-sections>
        <app-register></app-register>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AppNavbar from "./components/Navbar.vue";
import AppSections from "./components/Sections.vue";
import AppRegister from "./components/Register.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppSections,
    AppRegister
  }
};
</script>

<style scoped>
</style>
