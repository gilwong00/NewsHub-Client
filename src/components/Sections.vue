<template>
    <md-tabs class='md-primary' md-sync-route md-alignment='centered'>
        <md-tab v-for='c in allCategories' v-bind:key='c.CategoryId' v-bind:md-label='c.CategoryName'></md-tab>
    </md-tabs>
</template>

<style>
   
</style>

<script>
    //mapGetters allows us to connect to all getters we have in the application, Getters gets information from our state 
    import { mapActions, mapGetters } from 'Vuex';
    
    export default {
        name: 'AppSections',
        methods: {
            ...mapActions(['fetchCategories'])
        },
        computed: {
             ...mapGetters(['allCategories'])
        },
        created() {
            this.fetchCategories();
        }
    }
</script>

