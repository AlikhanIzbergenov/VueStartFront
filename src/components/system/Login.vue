<template>
    <div>
    
        
    <v-form ref="form" v-model="valid" lazy-validation >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>


      <v-text-field
        v-model="password"
        :rules="passRules"
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
            valid: true,
            err: null,

            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],

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
                    this.login()

                }
            },
            async login() {
                try {
                    const login = await auth.login({
                        "email": this.email,
                        "password": this.password
                    })
                    this.$router.push({
                        name: "register"
                    })
                } catch (err) {
                    this.err = err

                }
            },
            clear() {
                this.$refs.form.reset()
            }
        }

    }

</script>

<style>


</style>
