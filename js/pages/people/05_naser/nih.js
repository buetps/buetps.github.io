var component = {
    data: function(){
        return {
            profile: {
                name: "Naser Imran Hossain",
                joinDate: 2006,
                leavingDate: 2010,
                portrait: "./pages/people/05_naser/portrait.jpg"
            }
        }
    },
    template: `
    <div>
        <profile :profile=this.profile></profile>  
    </div>
    `,
};

export default component;


