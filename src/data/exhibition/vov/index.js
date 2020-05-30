import portraiture from "./1portraiture";
import belongingness from "./2belongingness";
import divergence from "./3divergence";

const data = {
    id: "vov",
    name: "Voyage of Visuals",
    seasons: [
        portraiture,
        belongingness,
        divergence
    ]
}

data.seasons.sort(function(a,b){
    return b.season - a.season;
});

export default data;