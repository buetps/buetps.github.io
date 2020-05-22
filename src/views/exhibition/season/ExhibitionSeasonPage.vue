<template>
  <div>
    {{pageInstance.name}}
  </div>
</template>

<script>
import exhibition from "../../../data/exhibition";
export default {
  computed: {
    exhibitionID(){
      return this.$route.params.exhibitionID;
    },
    seasonID(){
      return this.$route.params.seasonID;
    },
    pageID(){
      return this.$route.params.pageID;
    },
    pageInstance(){
       var exhibitionID = this.$route.params.exhibitionID,
        seasonID = this.$route.params.seasonID,
        pageID = this.$route.params.pageID,
        exhibitionInstance = exhibition.find(function(item){return item.id === exhibitionID}),
        seasonInstance = exhibitionInstance.seasons.find(function(item){return item.id === seasonID}),
        pageInstance = seasonInstance.pages.find(function(item){return item.id === pageID});

      if(exhibitionInstance==null || seasonInstance==null || pageInstance==null){
        this.$router.replace("/");
      }

      return pageInstance;
    } 
  }
}
</script>