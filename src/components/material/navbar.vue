<template>
    <v-card flat tile class="navbar" color="rgba(0,0,0,0)">
        <v-toolbar class="toolbar" color="rgba(0,0,0,0)">
            <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

            <v-toolbar-title>Title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon color="white">mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon color="white">mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon color="white">mdi-dots-vertical</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>
<script>

export default {
    name: 'navBar',
    data() {
        return {

        }
    },

}
</script>
<style lang="scss">
.navbar {
    width: 100%;

    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;

    .toolbar {
        color: rgb(255, 249, 238);
    }
}
</style>
