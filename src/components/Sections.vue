<template>
    <md-tabs class="md-primary" md-sync-route>
        <md-tab id="tab-home" md-label="Home"></md-tab>
        <md-tab id="tab-pages" md-label="Pages"></md-tab>
        <md-tab id="tab-posts" md-label="Posts"></md-tab>
        <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
    </md-tabs>
</template>

<style>
    .md-tabs-navigation {
        margin: 0 auto;
    }
</style>

<script>
    //need to get list of sections from the db
    export default {
        name: 'AppSections'
    }
</script>

