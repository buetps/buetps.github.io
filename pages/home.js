var component = {
    template: `
    <div>
        <v-timeline dense light align-top>
            <v-timeline-item v-for="n in 40" :key="n" color="teal lighten-3" fill-dot small>
                <template v-slot:opposite>
                    <span>Tus eu perfecto</span>
                </template>
                <v-card class="elevation-2">
                    <v-card-title class="headline">Lorem ipsum</v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </div>
    `,
    data: function(){
        return {

        }
    }
};

export default component;


