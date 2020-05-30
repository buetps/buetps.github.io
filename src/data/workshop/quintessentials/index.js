import first from "./1st"
import second from "./2nd"

var data = {
    id: "quintessentials",
    name: "Photography Quintessentials",
    seasons: [
        first,
        second
    ]
};

data.seasons.sort(function(a,b){
    return b.season - a.season;
});

export default data;