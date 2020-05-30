<template>
 <div>
    <router-link to="/people">People</router-link>

    <v-text-field solo v-model=searchText placeholder="Search BUETPS Member" flat autocomplete=off></v-text-field>


    <v-row align="center">
      <v-col cols=12 xs=12 sm=12 md=6 lg=4 xl=3 v-for="(person,index) in matchedPeople" :key="index">
        <v-card flat :to="'/people/'+person.id" outlined>
          <v-img class="white--text align-end" :src="'./data/people/'+person.foldername+'/profile.jpg'" height=300px>
          <v-card-title>{{person.name}}</v-card-title>
          </v-img>
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
      people,
      searchText: null,
    }
  },
  computed: {
    matchedPeople(){
      var component = this;
      if(this.searchText && this.searchText.length > 0){
        return this.people.filter(function(item){
          return item.name.toLowerCase().includes(component.searchText.toLowerCase());
        })
      } else {
        return this.people;
      }
    }
  }
}
</script>
