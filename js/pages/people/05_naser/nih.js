var data =  function(){
    return {
        name: "Naser Imran Hossain",
        joinDate: 2006,
        leavingDate: 2010,
        portrait: "./pages/people/05_naser/portrait.jpg"
    };
};
    

var page2 = `
    
    `;



var page1 = `
    <p>test page</p>
    `


var component = {
    data,
    template: `
    <general-page>
        <general-page-content index=0 :title="this.name" color="#FF0000">${page1}</general-page-content>
        <general-page-content index=1 :title="this.name" color="#FF0000">${page2}</general-page-content>
    </general-page>`
};

export default component;