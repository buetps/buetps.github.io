var profile =  {
        name: "Naser Imran Hossain",
        joinDate: 2006,
        leavingDate: 2010,
        portrait: "./pages/people/05_naser/portrait.jpg",
    };
var page1 = `
<div>
    test
</div>
    `

var album1 = {
    title: "Dhaka",
    subtitle: "Naser Imran Hossain",
    description: "Hello from NIH",
    src: [
        "/js/pages/people/05_naser/portrait.jpg",
        "/js/pages/people/05_naser/portrait.jpg"
    ]
};







var component = {
    data() {
        return {
            profile,
            album1
        }
    },
    template: `
    <general-page level=2>
        <general-page-content index=0 :title="this.profile.name" color="#FF0000">${page1}</general-page-content>
        <gallery index=1 :album=album1></gallery>
    </general-page>`
};

export default component;
