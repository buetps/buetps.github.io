var page1 = `
<v-list two-line>
    <buetps-list-item title="Ahnaf Shahriyar" subtitle="President"></buetps-list-item>
    <buetps-list-item title="Naimul Arefin" subtitle="Vice-President"></buetps-list-item>
    <buetps-list-item title="Shoumik Saha" subtitle="General Secretary"></buetps-list-item>
    <buetps-list-item title="Adib Rahman" subtitle="Joint Secretary"></buetps-list-item>
    <buetps-list-item title="Snigdha Shiuly" subtitle="Joint Secretary"></buetps-list-item>
    <buetps-list-item title="Nafisa Mehtaj" subtitle="Joint Secretary"></buetps-list-item>
    <buetps-list-item title="Zulkernain Haider Arnob" subtitle="Organizing Secretary"></buetps-list-item>
    <buetps-list-item title="Zaki Alam Pushan" subtitle="Assistant General Seceraty - Promotion"></buetps-list-item>
    <buetps-list-item title="Anannya Tahsin" subtitle="Assistant General Seceraty - Publication"></buetps-list-item>
    <buetps-list-item title="Rahat Chowdhury" subtitle="Exhibition Secretary"></buetps-list-item>
    <buetps-list-item title="Faizur Himel" subtitle="Office Secretary"></buetps-list-item>
    <buetps-list-item title="Yousran Auritra" subtitle="Treasurer"></buetps-list-item>

    <buetps-list-item title="Abs Rimon" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Mostazer Billah" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Roufat Nahin Priota" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Shakti Banik" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Mahmud Mahim" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Sakib Hasnat" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Joydip Paul" subtitle="Executive Member"></buetps-list-item>
    <buetps-list-item title="Asif Muktadir" subtitle="Executive Member"></buetps-list-item>
</v-list>
`;


var component = {
    template: `
    <general-page title="Batch '15" subtitle="Executive Committee" color="#3a8e77">
        <general-page-content index=0>${page1}</general-page-content>
    </general-page>
    `
};
  
export default component;

