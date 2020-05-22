<template>
  <div>
    <router-link v-for="(page, pageIndex) in seasonInstance.pages" 
      :key=pageIndex :to="'/exhibition/'+exhibitionID+'/'+seasonID+'/'+page.id">
      {{page.name}}
    </router-link>
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
    seasonInstance(){
       var exhibitionID = this.$route.params.exhibitionID,
        seasonID = this.$route.params.seasonID,
        exhibitionInstance = exhibition.find(function(item){return item.id === exhibitionID});

      return exhibitionInstance.seasons.find(function(item){return item.id === seasonID});
    } 
  },
  mounted(){
    var exhibitionID = this.$route.params.exhibitionID,
        seasonID = this.$route.params.seasonID,
        exhibitionInstance = exhibition.find(function(item){return item.id === exhibitionID}),
        seasonInstance = exhibitionInstance.seasons.find(function(item){return item.id === seasonID});

    if(exhibitionInstance==null || seasonInstance==null){
      this.$router.replace("/");
    }
  }
}
</script>