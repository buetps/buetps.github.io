var page1 = `
<v-list two-line>
    <buetps-list-item title="Javed Miandad" subtitle="President"></buetps-list-item>
    <buetps-list-item title="Palal Ghosh" subtitle="Vice-President"></buetps-list-item>
    <buetps-list-item title="Shuvajit Das" subtitle="General Secretary"></buetps-list-item>
    <buetps-list-item title="Shafkat Ahmed" subtitle="Organizing Secretary"></buetps-list-item>
    <buetps-list-item title="Nasik Muhammad Nafi" subtitle="Treasurer"></buetps-list-item>
    <buetps-list-item title="Dhrubo Paul" subtitle="Exhibition Secretary"></buetps-list-item>
    <buetps-list-item title="Mahdi Zaman" subtitle="Publication Secretary"></buetps-list-item>
    <buetps-list-item title="Rizwan Hasan" subtitle="Office Secretary"></buetps-list-item>
    <buetps-list-item title="Sakib Rangpuri" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Muhaiminul Islam" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="I.H.M. Shamsuzzoha Damal" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Bushra Behrose" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Badrul Hasan Tanjil" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Ibrahim Tahmid " subtitle="Executive Member"></buetps-list-item>
</v-list>
`;


var component = {
    template: `
    <general-page title="Batch '09" subtitle="Executive Committee" color="#3a8e77">
        <general-page-content index=0>${page1}</general-page-content>
    </general-page>
    `
};
  
export default component;

