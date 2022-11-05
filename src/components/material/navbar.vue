<template>
    <v-card flat tile class="navbar" color="rgba(0,0,0,0)">
        <v-toolbar class="toolbar" color="rgba(0,0,0,0)">
            <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

            <v-toolbar-title>Title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon color="white">mdi-magnify</v-icon>
            </v-btn>


            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn fab icon v-bind="attrs" v-on="on">
                        <v-icon color="white">mdi-account-circle-outline</v-icon>
                    </v-btn>

                </template>
                <v-list>
                    <v-list-item v-if="!token">
                        <v-list-item-title>
                            <router-link class="link" :to="{ name: 'signUp' }">ایجاد حساب </router-link>
                        </v-list-item-title>
                    </v-list-item> 
                    
                    <v-list-item v-else>
                        <v-list-item-title >
                            <router-link class="link" :to="{ name: 'wishList' }"> برگزیده ها</router-link>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item v-if="!token">
                        <v-list-item-title>
                            <router-link class="link" :to="{ name: 'signIn' }"> ورود</router-link>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item v-else>
                        <v-list-item-title>
                            <a v-if="token" class="link"  @click='signOut()'> خروج</a>
                        </v-list-item-title>
                    </v-list-item>
                   

                </v-list>
            </v-menu>
            <v-btn fab icon class="cart" :to="{name:'cartPage'}" >
                <span class="icon">{{quantity}}</span>
                <v-icon  color="white">mdi-cart</v-icon>
            </v-btn>


        </v-toolbar>
    </v-card>
</template>
<script>

export default {
    name: 'navBar',
    data() {
        return {
            token: null,
        }
    },props:['quantity']
    , mounted() {
        this.token = JSON.parse(window.localStorage.token)
    },methods: {
        signOut(){
        alert('okkkkkkkkkk')
        this.token=null;
        this.$emit('resetCounter')
        localStorage.removeItem('token')
    }
    },

}
</script>
<style lang="scss" scoped>
.navbar {
    width: 100%;

    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;

    .toolbar {
        color: rgb(255, 249, 238);
        .cart{
           
            .icon{
               @include displayflex;
                background-color: red;
                color: white;font-size: 10px;
                border-radius: 50%;
                height: 0.7rem;
                width: 0.7rem;
                position: absolute;
                top:-0.2rem;
                left: 0.5rem;
                z-index: 100;
            }
        }
    }
}
</style>
