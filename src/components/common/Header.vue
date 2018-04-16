<template>
  <div>
    <v-toolbar :color="currentTheme.main" dark fixed app>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        Home
      </v-toolbar-title>
      <v-toolbar-side-icon @click.stop="$store.commit('changeDrawer')"></v-toolbar-side-icon>
    </v-toolbar>
    
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
         data(){
            return {
            currentThemeColor:'purple_pink',
            drawer: false
            }
  },
  computed:{
    ...mapGetters('settings',[
        'main_colors'
      ]),
      currentTheme(){
        return this.main_colors[this.currentThemeColor]
      }

      

    
  }
    }
</script>
