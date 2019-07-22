var pages = [
    {
        content: `
            <p>With the spirit to create an exemplary essence of visuals, BUET Photographic Society - BUETPS started its journey and 
            in this glorious odyssey in the last two decades, BUETPS escalated its philosophy of beatific art of photography among students, 
            professionals and other photography enthusiasts and established itself as one of the most prominent and promising bunch of 
            photographic institutions in Bangladesh. Since starting as a club, BUETPS successfully organized 12 annual club exhibitions 
            which were solely on the photographs of the students of its own institution (BUET).</p>

            <p>For the last 22 years, the goal of BUETPS has always been the same, to develop the photographic skills and maturity of the members. 
            In these years, members of BUETPS have achieved tremendous success from all over the world. For these achievements, 
            BUETPS is grateful to its alumni and members, without whose love and devotion this club wouldn't have become what it is today!</p>
            
            <p>BUETPS is proud to present its most prized event, 13th Annual Exhibition. The Exhibition will be inaugurated on the 20th June, 
            2019 at Gallery 4, National Art Gallery, Bangladesh Shilpakala Academy. We invite you all to come and enjoy the visual delicacy.</p>
        `
    }
];



var component = {
    data: () => ({pages}),
    template: `<general-page color="#169e78" title="13th Annual Exhibition" :pages="pages"></general-page>`
};
  
export default component;


