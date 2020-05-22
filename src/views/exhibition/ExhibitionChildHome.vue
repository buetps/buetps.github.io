<template>
  <div>
    <router-link v-for="(season, seasonIndex) in exhibitionInstance.seasons" 
      :key=seasonIndex :to="'/exhibition/'+exhibitionID+'/'+season.id">
      {{season.name}}
    </router-link>
  </div>
</template>

<script>
import exhibition from "../../data/exhibition";
export default {
  computed: {
    exhibitionID(){
      return this.$route.params.exhibitionID;
    },
    exhibitionInstance(){
      var exhibitionID = this.$route.params.exhibitionID;
      return exhibition.find(function(item){return item.id === exhibitionID});
    } 
  },
  mounted(){
    var exhibitionID = this.$route.params.exhibitionID,
        exhibitionInstance = exhibition.find(function(item){return item.id === exhibitionID});

    if(exhibitionInstance==null){
      this.$router.replace("/");
    }
  }
}
</script>