<template>
  <div>
    <p v-for="(paragraph, paragraphIndex) in person.description" :key=paragraphIndex>{{paragraph}}</p>
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