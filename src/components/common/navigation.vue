<template>
  <div>
      <v-navigation-drawer
        fixed
        v-model="drawer"
        right
        app>
        <v-list>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon light>home</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
                <v-list-tile-action>
                    <v-icon light>chat</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title >chat</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

        </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
    computed:{
        drawer(){
            return this.$store.getters.getDrawer
        }
    }
}
</script>

