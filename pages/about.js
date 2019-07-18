var component = {
    template: `
    <div>
        <h1>About</h1>
        
        <v-btn flat @click="reset">Reset the Application</v-btn>
        <v-btn flat @click="askNotificationPermission">Allow Notification</v-btn>
        <v-btn flat @click="testNotification">Test Notification</v-btn>
        {{notificationPermission}}

    </div>
    `,
    data: function(){
        return {
            notificationPermission: null,
        }
    },
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

            location.reload(true);
        },
        askNotificationPermission: function(){
            Notification.requestPermission(function (permission) {
                // If the user accepts, let's create a notification
                if (permission === "granted") {
                  var notification = new Notification("Hi there!");
                }
            });
        },
        testNotification: function(){
            navigator.serviceWorker.ready
            .then(function(registration){
                registration.showNotification("Test",{body:"Body"});
            })
        }
    },
    mounted: function(){
        this.notificationPermission = window.Notification.permission;
    }
};

export default component;


