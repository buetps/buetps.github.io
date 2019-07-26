var profile =  {
        name: "Dhrubo Paul",
        joinDate: 2012,
        leavingDate: 2017,
        portrait: "",
    };
    
import lastday from '/js/pages/people/11_dhrubo/lastday/index.js';
import neelakurinji from '/js/pages/people/11_dhrubo/neelakurinji/index.js';

var page1 = `
<div>
    test
</div>
`


var component = {
    data() {
        return {
            profile,
            lastday,
            neelakurinji
        }
    },
    template: `
    <general-page level=2>
        <general-page-content index=0 :title="this.profile.name" color="#FF0000">${page1}</general-page-content>
        <gallery index=1 title="The Last Day" :subtitle="this.profile.name" :description="lastday.description">${lastday.template}</gallery>
        <gallery index=2 title="Neelakurinji" :subtitle="this.profile.name" :description="neelakurinji.description">${neelakurinji.template}</gallery>
    </general-page>`
};

export default component;