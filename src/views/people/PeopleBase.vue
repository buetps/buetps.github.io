<template>
<div>
  <v-row>
    <v-col cols=12 sm=8>
      <v-card flat>
        {{people.name}}
        <transition name=slide-left mode=out-in>
          <router-view/>
        </transition>
      </v-card>
    </v-col>
  </v-row>

</div>
</template>

<script>
export default {
  computed: {
    people(){
      return this.$store.state.people;
    },
  },
}
</script>