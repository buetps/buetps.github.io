<template>
  <div>
      <router-link to="/awards">Awards</router-link>
    <div v-for="(award, awardIndex) in awards" :key=awardIndex>
        {{award.date.getFullYear()}}
        {{award.award}}
        <v-btn :to="'/people/'+award.photographerID">{{people.find(function(item){return item.id == award.photographerID}).name}}</v-btn>
    </div>
  </div>
</template>

<script>
import awards from "../../data/awards"
import people from "../../data/people"
export default {
  data(){
    return {
      awards,
      people
    }
  }
}
</script>
