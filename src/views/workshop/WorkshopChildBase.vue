<template>
  <div>
    {{workshopInstance.name}}
    <transition name=slide-left mode=out-in>
      <router-view></router-view>
    </transition>
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