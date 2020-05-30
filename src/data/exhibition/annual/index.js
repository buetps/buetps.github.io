import ten from "./10th";
import eleven from "./11th";
import twelve from "./12th";
import thirteen from "./13th";

const data = {
    id: "annual",
    name: "Annual Exhibition",
    seasons: [
        ten,
        eleven,
        twelve,
        thirteen
    ]
}

data.seasons.sort(function(a,b){
    return b.season - a.season;
});

export default data;