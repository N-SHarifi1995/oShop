<template>
    <v-card flat tile class="navbar" color="rgba(0,0,0,0)">
        <v-toolbar class="toolbar" color="rgba(0,0,0,0)">

            <v-toolbar-title color="#ffc800">Shop</v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- <v-btn icon >
                <v-icon color="white">mdi-magnify</v-icon>
            </v-btn> -->


            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn fab icon class="d-none d-sm-flex" v-bind="attrs" v-on="on">
                        <v-icon color="#ffc800">mdi-account-circle-outline</v-icon>
                    </v-btn>

                </template>
                <v-list>
                    <v-list-item v-if="!token">
                        <v-list-item-title>
                            <router-link class="link" :to="{ name: 'signUp' }">ایجاد حساب </router-link>
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item v-else>
                        <v-list-item-title>
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
                            <a v-if="token" class="link" @click='signOut()'> خروج</a>
                        </v-list-item-title>

                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <router-link class="link" :to="{ name: 'Admin' }"> ادمین</router-link>
                        </v-list-item-title>
                    </v-list-item>

                </v-list>
            </v-menu>
            <v-btn fab icon class="cart d-none d-sm-flex " :to="{ name: 'cartPage' }">
                <span class="icon">{{ quantity }}</span>
                <v-icon color="#ffc800">mdi-cart</v-icon>
            </v-btn>



            <v-app-bar-nav-icon class="d-flex d-sm-none" color="#ffc800" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>


            <v-navigation-drawer v-model="drawer" absolute height="auto" right class="mt-15">
                <v-list dense>
                    <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">



                        <v-list-item-group>
                            <v-list-item-title>کاربر</v-list-item-title>
                            <v-list-item v-if="!token">
                                <v-list-item-title>
                                    <router-link class="link"  :to="{ name: 'signUp' }">ایجاد حساب </router-link>
                                </v-list-item-title>
                            </v-list-item>
                             <v-list-item v-else>
                                <v-list-item-title>
                                    <router-link class="link" :to="{ name: 'wishList' }"> برگزیده ها</router-link>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item v-if="!token">
                                <v-list-item-title >
                                    <router-link class="link" :to="{ name: 'signIn' }"> ورود</router-link>
                                </v-list-item-title>
                            </v-list-item>
                            
                           
                            <v-list-item v-else>
                                <v-list-item-title>
                                    <a v-if="token" class="link" @click='signOut()'> خروج</a>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>

                        <v-list-item >
                                <v-list-item-title>
                                    <router-link class="link" :to="{ name: 'cartPage' }"> سبدخرید</router-link>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item >
                                <v-list-item-title>
                                    <router-link class="link" :to="{ name: 'Admin' }">ادمین</router-link>
                                </v-list-item-title>
                            </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>


        </v-toolbar>
    </v-card>
</template>
<script>

export default {
    name: 'navBar',
    data() {
        return {
            token: null,
            drawer: false,
            group: null,
        }
    }, props: ['quantity'],
    watch: {
        group() {
            this.drawer = false
        },
    }
    , mounted() {
        this.token = JSON.parse(window.localStorage.token)
    }, methods: {
        signOut() {
            alert('okkkkkkkkkk')
            this.token = null;
            this.$emit('resetCounter')
            window.localStorage.token = ''
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

        .cart {

            .icon {
                @include displayflex;
                background-color: red;
                color: white;
                font-size: 10px;
                border-radius: 50%;
                height: 0.7rem;
                width: 0.7rem;
                position: absolute;
                top: -0.2rem;
                left: 0.5rem;
                z-index: 100;
            }
        }
    }
}
</style>
