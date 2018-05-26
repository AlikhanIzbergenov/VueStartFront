<template>
  <div>
    <router-view></router-view>
  </div>
</template>


<script>
    import {
        mapGetters
    } from 'vuex'

    export default {

    }

</script>

<!-- <v-flex text-xs-center>
  <v-tooltip left>
    <v-btn icon large :href="source" target="_blank" slot="activator">
      <v-icon large>code</v-icon>
    </v-btn>
    <span>Source</span>
  </v-tooltip>
  <v-tooltip right>
    <v-btn icon large href="https://codepen.io/johnjleider/pen/BYqXgr" target="_blank" slot="activator">
      <v-icon large>mdi-codepen</v-icon>
    </v-btn>
    <span>Codepen</span>
  </v-tooltip>
</v-flex> -->
