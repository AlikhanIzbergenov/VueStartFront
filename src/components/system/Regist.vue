<template>
    <div>
    <h1>Registration</h1> 
    {{error}}
    <v-form ref="form" v-model="valid" lazy-validation >
      <v-text-field
        v-model="name"
        :rules="nameRules"
        prepend-icon="person"
        :counter="20"
        label="Name"
        required
      ></v-text-field>


      <v-text-field
        v-model="email"
        :rules="emailRules"
        prepend-icon="email"
        label="E-mail"
        required
      ></v-text-field>


      <v-text-field
        v-model="password"
        :rules="passRules"
        prepend-icon="vpn_key"
        :append-icon="visibilityPassword ? 'visibility' : 'visibility_off'"
        :append-icon-cb="() => (visibilityPassword = !visibilityPassword)"
        :type="visibilityPassword ? 'password' : 'text'"
        :counter="10"
        
        label="Password"
        required
      ></v-text-field>




      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>
  
      <v-btn
        :disabled="!valid"
        @click="submit"
      >
        submit
      </v-btn>
      
      <v-btn @click="clear">clear</v-btn>
    </v-form>

    </div>
</template>

<script>
    import auth from "@/services/auth";
    export default {
        data: () => ({
            error: null,
            valid: true,
            name: '',


            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 20) || 'Name must be less than 20 characters'
            ],

            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],


            visibilityPassword: false,
            password: '',
            passRules: [
                v => !!v || 'Password is required',
                v => (v && v.length <= 10) || 'Password must be less than 10 characters'
            ],





            checkbox: false
        }),

        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    this.register()


                }
            },
            async register() {
                try {
                    const res = await auth.register({
                        "email": this.email,
                        "user": this.name,
                        "password": this.password

                    })
                    this.$router.push({
                        name: "login"
                    })


                } catch (error) {
                    this.error = error.response.data.error
                }
            },

            clear() {
                this.$refs.form.reset()
            }
        }

    }

</script>

<style>
    h1 {
        text-align: center;
        padding: 10px 10px 20px;
    }

</style>
