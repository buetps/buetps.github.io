import first from "./1st"
import second from "./2nd"
import third from "./3rd"
import fourth from "./4th"

var data = {
    id: "loop",
    name: "Loop",
    seasons: [
        first,
        second,
        third,
        fourth
    ]
};

data.seasons.sort(function(a,b){
    return b.season - a.season;
});

export default data;