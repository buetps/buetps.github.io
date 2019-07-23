var page1 = `
<v-list two-line>
    <buetps-list-item title="Fahim Hossain" subtitle="President"></buetps-list-item>
    <buetps-list-item title="Farhan Quaiyum" subtitle="Vice-President"></buetps-list-item>
    <buetps-list-item title="Aneek Mustafa Anwar" subtitle="General Secretary"></buetps-list-item>
    <buetps-list-item title="Shamir Bin Karim" subtitle="Organizing Secretary"></buetps-list-item>
    <buetps-list-item title="Joy Murshed" subtitle="Treasurer"></buetps-list-item>
    <buetps-list-item title="Rafee Musabbir" subtitle="Exhibition and Publication Secretary"></buetps-list-item>
    <buetps-list-item title="Hridoy Tanveer" subtitle="Office Secretary"></buetps-list-item>
    <buetps-list-item title="Asifur Rahman Ratul" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Tahmid Syed Abtahi " subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Javed Miandad " subtitle="Executive Member"></buetps-list-item>
</v-list>
`;


var component = {
    template: `
    <general-page title="Batch '06" subtitle="Executive Committee" color="#3a8e77">
        <general-page-content index=0>${page1}</general-page-content>
    </general-page>
    `
};
  
export default component;

