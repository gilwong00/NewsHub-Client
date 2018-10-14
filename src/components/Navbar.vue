<template>
  <div class="page-container">
        <md-app md-waterfall md-mode="fixed-last">
            <md-app-toolbar class="md-large md-dense md-primary">
                <div class="md-toolbar-row">
                    <div class="md-toolbar-section-start">
                        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                            <md-icon>menu</md-icon>
                        </md-button>
                        <span class="md-title">Programmers Hub</span>
                    </div>
                    <div class="md-toolbar-section-end">
                        <md-button>Sign In</md-button>
                    </div>
                </div>
            </md-app-toolbar>
            <md-app-content>
             <!-- <router-view></router-view> -->
            </md-app-content>
        </md-app>
  </div>
</template>

<style lang="css" scoped>
   
</style>

<script>
export default {
    name: 'AppNavbar',
    data: () => ({
        menuVisible: false
    })
};
</script>