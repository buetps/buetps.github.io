var profile =  {
        name: "Naser Imran Hossain",
        joinDate: 2006,
        leavingDate: 2010,
        portrait: "./pages/people/05_naser/portrait.jpg",
    };
    

var page2 = `
        <gallery-item src="/images/logo.svg"></gallery-item>
        <gallery-item src="/js/pages/people/05_naser/portrait.jpg"></gallery-item>
    `;



var page1 = `
<div>
    test
</div>
    `


var component = {
    data() {
        return {
            profile,
        }
    },
    template: `
    <general-page>
        <general-page-content index=0 :title="this.profile.name" color="#FF0000">${page1}</general-page-content>
        <gallery index=1 title="Dhaka" :subtitle="this.profile.name">${page2}</gallery>
    </general-page>`
};

export default component;