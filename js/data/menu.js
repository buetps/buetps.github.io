const menu = [
    {name: "Notice", path: "/notice"},
    {name: "Committee", path: "/committee"},
    {name: "Activity", path: "/activity",
        children: [
            {name: "Exhibition", path: "exhibition",
                children: [
                    {name: "Annual Exhibition", path: "annual",
                        children: [
                            {name: "13th Annual", path: "thirteen"},
                            {name: "12th Annual: Beyond", path: "twelve"},
                            {name: "11th Annual", path: "eleven"},
                            {name: "10th Annual", path: "ten"},
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
                            {name: "Season 1", path: "one"},
                            {name: "Season 2", path: "two"},
                        ]
                    },
                    {name: "Discovering Streets", path: "ds",
                        children: [
                            {name: "Season 1", path: "one"},
                            {name: "Season 2", path: "two"},
                        ]
                    },
                ]
            }
        ]
    },
    {name: "People", path: "/people"},
    {name: "About", path: "/about"},
];

export default menu;