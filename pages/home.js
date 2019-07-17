var component = {
    template: `
    <div>
        <v-timeline dense light align-top>
            <v-timeline-item v-for="n in 40" :key="n" color="teal lighten-3" fill-dot small>
                <template v-slot:opposite>
                    <span>Tus eu perfecto</span>
                </template>
                <v-card class="elevation-2">
                    <v-card-title class="headline">Event</v-card-title>
                    <v-card-text>
                        Description
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


