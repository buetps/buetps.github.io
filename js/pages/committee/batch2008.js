var page1 = `
<v-list two-line>
    <buetps-list-item title="Hridoy Tanveer" subtitle="President"></buetps-list-item>
    <buetps-list-item title="Tahmid Syed Abtahi" subtitle="Vice-President"></buetps-list-item>
    <buetps-list-item title="Javed Miandad" subtitle="General Secretary"></buetps-list-item>
    <buetps-list-item title="Palal Ghosh" subtitle="Organizing Secretary"></buetps-list-item>
    <buetps-list-item title="Nasik Muhammad Nafi" subtitle="Treasurer"></buetps-list-item>
    <buetps-list-item title="Farsid Raihan" subtitle="Exhibition and Publication Secretary"></buetps-list-item>
    <buetps-list-item title="Atiqul Islam" subtitle="Office Secretary"></buetps-list-item>
    <buetps-list-item title="Tawsif Hasan " subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Rafee Musabbir " subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Iqbal Hossain " subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Mahdi Zaman " subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="I.H.M Shamsuzzoha " subtitle="Executive Member"></buetps-list-item>
</v-list>
`;


var component = {
    template: `
    <general-page title="Batch '08" subtitle="Executive Committee" color="#3a8e77">
        <general-page-content index=0>${page1}</general-page-content>
    </general-page>
    `
};
  
export default component;

