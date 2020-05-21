<template>
  <v-app id="inspire">

    <v-content style="margin:0 10vw 10vh 10vw;">
      <v-container fluid>
        <transition name=slide-left mode=out-in>
          <router-view/>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
  }
</script>