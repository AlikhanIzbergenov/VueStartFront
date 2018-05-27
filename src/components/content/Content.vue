<!--<template>
  <v-app id="inspire">
   <app-header></app-header> 
  <app-navigation></app-navigation>


    <v-content >
      <v-container fluid fill-height>
        <v-layout> justify-center align-center   
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content> 


     <app-footer></app-footer>
      

  </v-app>
</template>
-->


<template>
  <v-app
    id="inspire"
    dark
  >
  <app-header/>
  <app-navigation/>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center fill-height>
<v-flex shrink xs8 fill-height>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
    import AppHeader from '../common/Header'
    import AppNavigation from '../common/navigation'
    import AppFooter from '../common/Footer'
    import io from 'socket.io-client';
    const socket = io('http://localhost:8081/');

    export default {

        components: {
            AppHeader,
            AppNavigation,
            AppFooter
        },
        data: () => ({
            a: 56

        }),
        props: {
            source: String
        },
        created() {
            this.$store.dispatch('socket/setSocket', socket)
            var that = this
            socket.on('connected', function(data) {
                that.$store.commit('socket/setName', data)

            });

            //            this.$store.dispatch('socket/sendMessage')


            socket.on('receivedMessage', function(data) {
                that.$store.dispatch('socket/receivedMessage', data)

            });





        }
    }

</script>

<!--

    

-->
