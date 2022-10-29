<template>
  <div class="myform">
    <v-row no-gutters>
      <v-col cols="6" class="offset-3">
        <form>
         
          <v-text-field clearable type="email" v-model="email"  label="ایمیل" required>
          </v-text-field>
          <v-text-field clearable type="password" v-model="pass1" label="گذروازه" required></v-text-field>
          


          <v-btn class="mr-4" :to="{name:'signUp'}" >
           ایجاد حساب
          </v-btn>
          <v-btn @click="signIn">
            ورود
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Swal from 'sweetalert2'
export default {
  name: 'signIn',

  components: {},
  data() {
    return {
     
      email: null,
      pass1: null,
    
    }
  },
  mounted() {

  }, methods: {
    async signIn(e) {
      e.preventDefault();

      let user = { email: this.email,  password: this.pass1 }
     
        let res = await this.$store.dispatch('SignIn',user);
        if(res)
        {
          new  Swal({
            text: 'ورود موفق',
            icon: 'success'

          })
          this.$router.replace('/')
        
        }
     else {
      new  Swal({
            text: 'عدم تطابق ایمیل و گذرواژه',
            icon: 'error'

          })
    }

  }
},
}
</script>
<style scoped lang="scss">
.myform{
  margin-top: 8rem;
}
</style>
