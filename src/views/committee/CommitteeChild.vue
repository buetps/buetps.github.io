<template>
 <div>
    <div><router-link :to="'/committee/'+committee.id">Batch '{{committee.id}}</router-link></div>
    <CommitteeComponent :data=committee></CommitteeComponent>
  </div>
</template>

<script>
import CommitteeComponent from "../../components/CommitteeComponent"
export default {
  components: {
    CommitteeComponent
  },
  computed: {
    committee(){
      return this.$store.state.committee;
    },
  },
}
</script>