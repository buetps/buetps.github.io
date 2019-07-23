var page1 = `
<v-list two-line>
    <buetps-list-item title="Shuvajit Das" subtitle="President"></buetps-list-item>
    <buetps-list-item title="Shafkat Ahmed" subtitle="Vice-President"></buetps-list-item>
    <buetps-list-item title="Dhrubo Paul" subtitle="General Secretary, Creative Head"></buetps-list-item>
    <buetps-list-item title="Udaya Bir Saha" subtitle="Organizing Secretary"></buetps-list-item>
    <buetps-list-item title="Mahdi Zaman" subtitle="Exhibition Secretary"></buetps-list-item>
    <buetps-list-item title="Rizwan Hasan" subtitle="Publication Secretary"></buetps-list-item>
    <buetps-list-item title="Badrul Hasan Tanjil" subtitle="Treasurer"></buetps-list-item>
    <buetps-list-item title="Fahmida Hossain Ela" subtitle="Office Secretary, Graphic Designer"></buetps-list-item>
    <buetps-list-item title="Muhaiminul Islam" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Enamul Karim Fayeq" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="I.H.M. Shamsuzzoha Damal" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Bushra Behrose" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Ibrahim Asadullah Tahmid" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Oliur Rahman" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Tanveer A Tomal" subtitle="Executive Member, Graphic Designer"></buetps-list-item>
    <buetps-list-item title="Sadaf Sumaya Khan Tahiti" subtitle="Graphic Designer"></buetps-list-item>
    <buetps-list-item title="Tanvir Hasan Pias" subtitle="Website Developer and Maintainer"></buetps-list-item>
    <buetps-list-item title="Jubaid Rusho" subtitle="Website Developer and Maintainer"></buetps-list-item>
</v-list>
`;


var component = {
    template: `
    <general-page title="Batch '10" subtitle="Executive Committee" color="#3a8e77">
        <general-page-content index=0>${page1}</general-page-content>
    </general-page>
    `
};
  
export default component;

