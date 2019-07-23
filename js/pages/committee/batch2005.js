var page1 = `
<v-list two-line>
    <buetps-list-item title="Naser Imran Hossain" subtitle="President"></buetps-list-item>
    <buetps-list-item title="Ananya Rubayat" subtitle="Vice-President"></buetps-list-item>
    <buetps-list-item title="Fahim Hossain" subtitle="General Secretary"></buetps-list-item>
    <buetps-list-item title="Aneek Mustafa Anwar" subtitle="Organizing Secretary"></buetps-list-item>
    <buetps-list-item title="Shucheta Shagufta" subtitle="Exhibition and Publication Secretary"></buetps-list-item>
    <buetps-list-item title="Joy Murshed" subtitle="Office Secretary"></buetps-list-item>
    <buetps-list-item title="Shamir Bin Karim" subtitle="Treasurer"></buetps-list-item>
        
    <buetps-list-item title="Shahriar Rashed" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Farhan Quaiyum" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Farhana Murtaza" subtitle="Executive Member"></buetps-list-item>
</v-list>
`;


var component = {
    template: `
    <general-page title="Batch '05" subtitle="Executive Committee" color="#3a8e77">
        <general-page-content index=0>${page1}</general-page-content>
    </general-page>
    `
};
  
export default component;

