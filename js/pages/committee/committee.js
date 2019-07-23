var page1 = `
<router-link to="/committee/15">15</router-link>
<router-link to="/committee/14">14</router-link>
<router-link to="/committee/13">13</router-link>
<router-link to="/committee/12">12</router-link>
<router-link to="/committee/11">11</router-link>
<router-link to="/committee/10">10</router-link>
<router-link to="/committee/09">09</router-link>
<router-link to="/committee/08">08</router-link>
<router-link to="/committee/07">07</router-link>
<router-link to="/committee/06">06</router-link>
<router-link to="/committee/05">05</router-link>
`;


var component = {
    template: `
    <general-page title="Executive Committee" subtitle="BUETPS" color="#3a8e77">
        <general-page-content index=0>${page1}</general-page-content>
    </general-page>
    `
};
  
export default component;