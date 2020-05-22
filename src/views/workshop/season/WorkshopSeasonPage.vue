<template>
  <div>
    {{pageInstance.name}}
  </div>
</template>

<script>
import workshop from "../../../data/workshop";
export default {
  computed: {
    workshopID(){
      return this.$route.params.workshopID;
    },
    seasonID(){
      return this.$route.params.seasonID;
    },
    pageID(){
      return this.$route.params.pageID;
    },
    pageInstance(){
       var workshopID = this.$route.params.workshopID,
        seasonID = this.$route.params.seasonID,
        pageID = this.$route.params.pageID,
        workshopInstance = workshop.find(function(item){return item.id === workshopID}),
        seasonInstance = workshopInstance.seasons.find(function(item){return item.id === seasonID}),
        pageInstance = seasonInstance.pages.find(function(item){return item.id === pageID});

      if(workshopInstance==null || seasonInstance==null || pageInstance==null){
        this.$router.replace("/");
      }

      return pageInstance;
    } 
  }
}
</script>