<template>

      
    
    <v-footer :color="currentTheme.main" :inset="true" >
    <v-spacer></v-spacer>
    <span class="white--text">&copy; 2017</span>
    </v-footer>
 
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
