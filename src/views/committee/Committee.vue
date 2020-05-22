<template>
  <div>
    <router-link v-for="(committee, committeeIndex) in commitees" 
      :key=committeeIndex :to="'/committee/'+committee.id">
      {{committee.id}}
    </router-link>
  </div>
</template>

<script>
import commitees from "../../data/committee"
export default {
  data(){
    return {
      commitees
    }
  }
}
</script>
