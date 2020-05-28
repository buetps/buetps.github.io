<template>
 <div>
    <div class="display-3 font-weight-black" style="padding-right:20vw">People</div>
    <v-row align="center">
      <v-col cols=12 xs=12 sm=6 md=4 lg=3 xl=2 v-for="(person,index) in people" :key="index">
        <v-card flat :to="'/people/'+person.id" outlined height=250px>
          <v-img class="white--text align-end" :src="'./data/people/'+person.foldername+'/profile.jpg'">
          </v-img>
          <v-card-title>{{person.name}}</v-card-title>
          <v-card-subtitle>Batch '{{person.batch}}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import people from "../../data/people";
export default {
  data(){
    return {
      people
    }
  }
}
</script>
