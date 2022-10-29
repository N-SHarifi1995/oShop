<template>
  <div class="myform">
    <v-row no-gutters>
      <v-col cols="6" class="offset-3">
        <form>
          <div class="names">
            <v-text-field clearable outlined :rules="nameRules" v-model="name" label="نام" required></v-text-field>
            <v-text-field clearable :rules="nameRules" v-model="lastname" label="نام خانوادگی" required>
            </v-text-field>
          </div>
          <v-text-field clearable type="email" :rules="emailRules" v-model="email" label="ایمیل" required>
          </v-text-field>
          <v-text-field clearable type="password" :rules="passRules" v-model="pass1" label="گذروازه" required>
          </v-text-field>
          <v-text-field clearable type="password" :rules="passRules" v-model="pass2" label="تکرار گذرواژه" required>
          </v-text-field>


          <v-btn class="mr-4" @click="submit">
            ثبت نام
          </v-btn>
          <v-btn>
            ورود
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import validator from '../services/validatore'
import Swal from 'sweetalert2'
export default {
  name: 'signUp',

  components: {},
  data() {
    return {
      name: null,
      lastname: null,
      email: null,
      pass1: null,
      pass2: null,
      ...validator
    }
  },
  mounted() {

  }, methods: {
    async submit(e) {
      e.preventDefault();

      let user = { email: this.email, firstName: this.name, lastName: this.lastname, password: this.pass1 }
      if (this.pass1 == this.pass2) {
        let res = await this.$store.dispatch('SignUp', user);
        if (res) {
          new Swal({
            text: 'ثبت نام انجام شد',
            icon: 'success'

          })
          this.$router.replace('/')
        }
      }
      else {
        new Swal({
          text: 'عدم تطابق گذرواژه ها',
          icon: 'error'

        })
      }

    }
  },
}
</script>
<style scoped lang="scss">
.myform {
  margin-top: 8rem;

  .names {
    @include displayflex;

    justify-content: space-between;
  }
}
</style>
