var page1 = `
<router-link to="/committee/11">11</router-link>
`;


var component = {
    template: `
    <general-page title="Executive Committee" subtitle="BUETPS" color="#3a8e77">
        <general-page-content index=0>${page1}</general-page-content>
    </general-page>
    `
};
  
export default component;