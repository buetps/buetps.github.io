var profile =  {
        name: "Dhrubo Paul",
        joinDate: 2012,
        leavingDate: 2017,
        portrait: "",
    };
    
import lastday from '/js/pages/people/11_dhrubo/lastday/index.js';
import neelakurinji from '/js/pages/people/11_dhrubo/neelakurinji/index.js';

var page1 = `
<div></div>

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
        <gallery index=1 :album=lastday></gallery>
        <gallery index=2 :album=neelakurinji></gallery>
    </general-page>`
};

export default component;