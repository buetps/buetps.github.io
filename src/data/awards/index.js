
const data = [
    {
        date: new Date(2019, 6, 8),
        photographerID: "abdul.aziz.apu",
        award: "First Prize in ABCD"
    },
    {
        date: new Date(2014, 6, 8),
        photographerID: "abdul.aziz.apu",
        award: "Second Prize in ABCD2"
    },
]

data.sort(function(a,b){
    return b.date.getTime() - a.date.getTime();
});

export default data;