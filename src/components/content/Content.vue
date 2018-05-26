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
        <v-layout justify-center align-center>
          <v-flex shrink xs8>
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



    export default {

        components: {
            AppHeader,
            AppNavigation,
            AppFooter
        },
        data: () => ({

        }),
        props: {
            source: String
        },
        created() {
            //var socket = io();
            const socket = io('http://localhost:8081');

        }
    }

</script>

<!--

    

-->
