Vue.component("sidebar", {
    template: `
    <nav>
        <img class=logo src="images/logo.svg"></img>
        <vue-tree-navigation :items="items"/>
    </nav>

    `,
    data: function(){
        return {
            items: [
                {name: "Home", path: "/home"},
                {name: "Notice", path: "/notice"},
                {name: "Activity", path: "/activity",
                    children: [
                        {name: "Exhibition", path: "exhibition",
                            children: [
                                {name: "Annual Exhibition", path: "annual",
                                    children: [
                                        {name: "13th Annual", path: "13"},
                                        {name: "12th Annual: Beyond", path: "12"},
                                        {name: "11th Annual", path: "11"},
                                        {name: "10th Annual", path: "10"},
                                    ]
                                },
                                {name: "Voyage of Visuals", path: "vov",
                                    children: [
                                        {name: "Divergence", path: "divergence"},
                                        {name: "Belongingness", path: "belongingness"},
                                        {name: "Portraiture", path: "portraiture"},
                                    ]
                                },
                            ]
                        },
                        {name: "Workshop", path: "workshop",
                            children: [
                                {name: "Loop", path: "loop"},
                                {name: "Photography Quintessentials", path: "quintessentials",
                                    children: [
                                        {name: "Season 1", path: "1"},
                                        {name: "Season 2", path: "2"},
                                    ]
                                },
                                {name: "Discovering Streets", path: "ds",
                                    children: [
                                        {name: "Season 1", path: "1"},
                                        {name: "Season 2", path: "2"},
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {name: "People", path: "/people",
                    children: [
                        {name: "Naser Imran Hossain", path: "nih"},
                        {name: "Aneek Mustafa Anwar", path: "shojaru"},
                        {name: "Javed Miandad", path: "javed"},
                    ]
                },
                {name: "About", path: "/about"},
            ]
        }
    }
});