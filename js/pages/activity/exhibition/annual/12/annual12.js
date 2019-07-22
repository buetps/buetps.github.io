var pages = [
    {
        content: `
        <p>BUETPS is delighted to announce that the exhibition for Beyond: Celebrating 20 Years of BUETPS is going to take place on 
        6th to 8th October at the outdoor venues around BUET Campus.</p>

        <p>After two eventful months of call for photos and the challenging task of selecting the final set of photos for the exhibition,
         we are ready to launch the event in its full glory.</p>
        
        <p>BUETPS has always been the pioneer to break the usual rules and explore the brilliance of human minds on a deeper level. 
        On that note, we have prepared our exhibition in such a way that we can give the viewers a complete and satisfied experience 
        throughout the exhibition. Our photographs will be exhibited across the BUET Campus in an interactive and festive way that 
        resembles the journey of dedication, struggle and glories of BUET Photographic Society. We will host 3 Artist Talks, a number 
        of Club Presentations, 10 Virtual Tours, some exceptional Photo Series and a collection of eminent single photographs.</p>
        

        <p>Venue: Different Spots at BUET Campus</p>
        <p>Date: 6th to 8th October, 2017</p>
        <p>Time: 11am-8pm</p>
        
        <p>We invite you all to see the outcome of our effort and enjoy the visual treat that we have in store for you.</p>
        `
    }
];



var component = {
    data: () => ({pages}),
    template: `<general-page color="#3f5388" title="Beyond: Celebrating 20 Years of BUETPS" :pages="pages"></general-page>`
};
  
export default component;


