var profile =  {
        name: "Dhrubo Paul",
        joinDate: 2012,
        leavingDate: 2017,
        portrait: "",
    };
    
import page2 from '/js/pages/people/11_dhrubo/lastday/index.js';
import page3 from '/js/pages/people/11_dhrubo/neelakurinji/index.js';

var page1 = `
<div>
    test
</div>
`


var component = {
    data() {
        return {
            profile,
            page2,
            page3
        }
    },
    template: `
    <general-page>
        <general-page-content index=0 :title="this.profile.name" color="#FF0000">${page1}</general-page-content>
        <gallery index=1 title="The Last Day" :subtitle="this.profile.name" :description="page2.description">${page2.template}</gallery>
        <gallery index=2 title="Neelakurinji" :subtitle="this.profile.name" :description="page3.description">${page3.template}</gallery>
    </general-page>`
};

export default component;