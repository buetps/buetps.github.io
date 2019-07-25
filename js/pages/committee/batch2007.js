var page1 = `
<v-list two-line>
    <buetps-list-item title="Aneek Mustafa Anwar" subtitle="President"></buetps-list-item>
    <buetps-list-item title="Faisal Hasan" subtitle="Vice-President"></buetps-list-item>
    <buetps-list-item title="Hridoy Tanveer" subtitle="General Secretary"></buetps-list-item>
    <buetps-list-item title="Tahmid Syed Abtahi" subtitle="Organizing Secretary"></buetps-list-item>
    <buetps-list-item title="Javed Miandad" subtitle="Treasurer"></buetps-list-item>
    <buetps-list-item title="Farsid Raihan" subtitle="Exhibition and Publication Secretary"></buetps-list-item>
    <buetps-list-item title="Palal Ghosh" subtitle="Office Secretary"></buetps-list-item>
    <buetps-list-item title="Asifur Rahman Ratul" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Tawsif MD. Hasani" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Rabayet Sadnan" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Nasik Muhammad Nafi" subtitle="Executive Member"></buetps-list-item>
</v-list>
`;


var component = {
    template: `
    <general-page>
        <general-page-content index=0 title="Batch '07" subtitle="Executive Committee" color="#3a8e77">${page1}</general-page-content>
    </general-page>
    `
};
  
export default component;

