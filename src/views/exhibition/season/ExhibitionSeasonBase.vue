<template>
  <div>
    {{seasonInstance.name}}
    <transition name=slide-left mode=out-in>
      <router-view/>
    </transition>
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