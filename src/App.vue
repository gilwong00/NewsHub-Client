<template>
    <div>
        <app-navbar></app-navbar>
        <app-sections></app-sections>
    </div>
</template>

<script>
    import AppNavbar from './components/Navbar.vue';
    import AppSections from './components/Sections.vue'
    export default {
        name: 'App',
        components: {
            AppNavbar,
            AppSections
        }
    };
</script>

<style scoped>

</style>
