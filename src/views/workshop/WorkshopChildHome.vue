<template>
  <div>
    <router-link v-for="(season, seasonIndex) in workshopInstance.seasons" 
      :key=seasonIndex :to="'/workshop/'+workshopID+'/'+season.id">
      {{season.name}}
    </router-link>
  </div>
</template>

<script>
import workshop from "../../data/workshop";
export default {
  computed: {
    workshopID(){
      return this.$route.params.workshopID;
    },
    workshopInstance(){
      var workshopID = this.$route.params.workshopID;
      return workshop.find(function(item){return item.id === workshopID});
    } 
  },
  mounted(){
    var workshopID = this.$route.params.workshopID,
        workshopInstance = workshop.find(function(item){return item.id === workshopID});

    if(workshopInstance==null){
      this.$router.replace("/");
    }
  }
}
</script>