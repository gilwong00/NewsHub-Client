<template>
    <md-tabs class='md-primary' md-sync-route md-alignment='centered'>
        <md-tab v-for='c in allCategories' v-bind:key='c.CategoryId' v-bind:md-label='c.CategoryName' v-bind:to=createPath(c.CategoryId) md-active></md-tab>
    </md-tabs>
</template>

<style lang='css'>
div.md-tabs {
  padding-top: 2% !important;
}
.md-button-content {
  color: black;
}
</style>

<script>
//mapGetters allows us to connect to all getters we have in the application, Getters gets information from our state
import { mapActions, mapGetters } from "Vuex";

export default {
  name: "AppSections",
  methods: {
    ...mapActions(["fetchCategories"]),
    createPath(articleId) {
      return "/articles/" + articleId;
    }
  },
  computed: {
    ...mapGetters(["allCategories"])
  },
  created() {
    this.fetchCategories();
  }
};
</script>

