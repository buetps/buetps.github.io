<template>
  <div>
    {{seasonInstance.name}}
    <transition name=slide-left mode=out-in>
      <router-view/>
    </transition>
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
    seasonInstance(){
       var workshopID = this.$route.params.workshopID,
        seasonID = this.$route.params.seasonID,
        workshopInstance = workshop.find(function(item){return item.id === workshopID});

      return workshopInstance.seasons.find(function(item){return item.id === seasonID});
    } 
  },
  mounted(){
    var workshopID = this.$route.params.workshopID,
        seasonID = this.$route.params.seasonID,
        workshopInstance = workshop.find(function(item){return item.id === workshopID}),
        seasonInstance = workshopInstance.seasons.find(function(item){return item.id === seasonID});

    if(workshopInstance==null || seasonInstance==null){
      this.$router.replace("/");
    }
  }
}
</script>