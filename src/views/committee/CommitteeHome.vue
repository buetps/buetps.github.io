<template>
  <div>
    <CommitteeComponent :data=currentCommittee />
    <p class="title">Previous Committees</p>

    <v-row align="center">
      <v-col cols=12 xs=12 sm=6 md=4 lg=3 xl=2 v-for="(committee, committeeIndex) in commitees" :key=committeeIndex>
        <v-card flat :to="'/committee/'+committee.id" outlined>
          <v-card-subtitle>Batch '{{committee.id}}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import commitees from "../../data/committee"
import CommitteeComponent from "../../components/CommitteeComponent"
export default {
  components: {
    CommitteeComponent
  },
  data(){
    return {
      commitees
    }
  },
  computed: {
    currentCommittee(){
      return commitees.find(function(item){
        return item.current == true;
      });
    }
  }
}
</script>
