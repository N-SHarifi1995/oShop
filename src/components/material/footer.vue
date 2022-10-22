<template>
    <v-card flat tile class="footer py-8" color="#04052c">
        <v-row no-gutters>
            <v-col cols='3' class="col-sm-3 col-xs-6 " v-for="list in Lists" :key="list.title">
                <v-list class="list" color="transparent">
                    <p>{{list.title}}</p>
                    <v-list-item   v-for="(item, i) in list.list" :key="i"><a class="item" href="#">{{item}}</a></v-list-item>
                </v-list>

            </v-col>
        </v-row>
    </v-card>
</template>
<script>

export default {
    name: 'footerPage',
    data() {
        return {
            Lists: [
                { title: 'ارتباط با ما', list: ['درباره ما', 'اپلیکیشن اندروید', 'اپلیکیشن اندروید',] }
                , { title: 'شبکه های اجتماعی', list: ['فیسبوک', 'توئیتر', 'اینستاگرام'] },
                { title: 'همکاری با ما', list: ['همکاری در فروش', 'شراکت', 'اینستاگرام'] },
                { title: 'همکارا', list: ['همکاری در فروش', 'شراکت', 'اینستاگرام'] }

            ]

        }
    },

}
</script>
<style lang="scss">
.footer {
    background-color: $secondary-color;

    .list {
        @include displayflex;
        flex-direction: column;
        color:$Crown-Yellow;
         .item{ 
        color:rgb(241, 240, 237);
        font-size: 15px;text-decoration: none;
        
  }
    }
}
</style>
