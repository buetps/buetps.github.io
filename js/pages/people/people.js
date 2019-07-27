import peopleData from '/js/data/people.js';


var component = {
    template: `
    <v-container grid-list-md fill-width>
        <v-layout wrap>
            <v-flex v-for="person in this.people" xs12 sm4 md2>
                <v-card flat :to="'/people/'+person.url">
                <v-card-text>
                    <buetps-list-item :title="person.name" :subtitle="person.batch"></buetps-list-item>
                </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    `,
    data() {
        return {
            people: peopleData
        }
    }
};

export default component;


