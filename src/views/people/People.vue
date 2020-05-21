<template>
  <div>
    <v-row>
      <v-col cols=12 xs=6 sm=4 md=3 lg=3 v-for="(person,index) in people" :key="index" class=ma-5>
        <v-card flat :to="'/people/'+person.id" outlined>
          <v-img class="white--text align-end" :src="'./data/people/'+person.foldername+'/profile.jpg'">
            <v-card-title>{{person.name}}</v-card-title>
          </v-img>
          <v-card-subtitle>{{person.batch}}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{person.description}}</div>
          </v-card-text>
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
