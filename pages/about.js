var component = {
    template: `
    <div>
        <h1>About</h1>
        
        <v-btn flat @click="reset">Reset the Application</v-btn>


    </div>
    `,
    methods: {
        reset: function(){
            //unregister service worker
            if(window.navigator && navigator.serviceWorker) {
                navigator.serviceWorker.getRegistrations()
                .then(function(registrations) {
                    for(let registration of registrations) {
                        registration.unregister();
                    }
                });
            }

            //clear cache
            //later

            //reload without cache (CTRL F)
            location.reload(true);
        }
    }
};

export default component;


