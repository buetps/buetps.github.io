Vue.component("breadcrumb", {
    template: `
    <mu-container>
        <mu-breadcrumbs>
            <mu-breadcrumbs-item v-for="title in titles" disabled=true>{{title}}</mu-breadcrumbs-item>
        </mu-breadcrumbs>
    </mu-container>
    `,
    props: ["titles"]
});