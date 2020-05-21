<template>
<div>
  <v-row>
    <v-col cols=12 sm=8>
      <v-card flat>
        peoplebase
        <transition name=slide-left mode=out-in>
          <router-view/>
        </transition>
      </v-card>
    </v-col>
  </v-row>

</div>
</template>

<script>
import people from "../../data/people";
export default {
  computed: {
    id(){
      return this.$route.params.peopleID;
    },
    person() {
      var i = this.$route.params.peopleID;
      return people.find(function(item){return item.id === i})
    }
  },
}
</script>