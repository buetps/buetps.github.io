var pages = [
  {
      content: `
      <p>BUET Photographic Society returns with its signature biennial exhibition Voyage of Visuals!</p>

        <p>We are delighted to announce that the exhibition for Voyage of Visuals: DIVERGENCE is going to 
        take place from 1st to 4th of November, 2018 at Gallery 3, Bangladesh Shilpakala Academy, Dhaka,Bangladesh</p>

        <p>After eventful months of Call for photos and the rigorous task of selecting the final set of photos for the 
        exhibition which was conducted by the three honorable judges, Mohammad Rakibul Hasan, Tanzim Wahab an Ashraful Awal 
        Mishuk, we have 40 divergent photographs and 8 striking photo-stories from all over the world.</p>

        <p>Being a rather challenging theme, our participants have gone to great length to interpret the feel of divergence 
        in their works. VoV has managed to break the usual rules and explore the brilliance of the photographers on such levels 
        that no one has ever done before.</p>

        <p>Venue: Gallery 3, Bangladesh Shilpakala Academy, Dhaka, Bangladesh</p>
        <p>Date: 1st to 4th November, 2018</p>
        <p>Time: 3 pm to 8 pm (1st November), 
          11 am to 8 pm (2nd to 4th November)</p>
      `
  }
];



var component = {
  data: () => ({pages}),
  template: `<general-page color="#841b18" title="Divergence" subtitle="Voyage of Visuals" :pages="pages"></general-page>`
};

export default component;