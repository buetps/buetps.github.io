var page1 = `
    <p>BUET Photographic Society is proud to present her 10th Annual Photography Exhibition. it is time for bucket full of 
    unbounded fun, bottomless excitement and some quality photographs.</p>

    <p>The exhibition homes above 100 photos with 50 unique single entries and 10 exciting photo series.it would present a 
    360 degree panoramic photo first time ever in Bangladesh.</p>

    <p>A Photo Festival, as part of the exhibition would take on BUET campus with artist talks by leading photographer of 
    Bangladesh and club presentations by renowned photography clubs from different universities.</p>


    <br/>
    <h3>Exhibition</h3>
    <p>Venue: Gallery DRIK (both floors)</p>
    <p>Date: 25-27 February</p>
    <p>Timing: 3.00 PM-8.00 PM</p>

    <br/>
    <h3>Photo Festival</h3>
    <p>Venue: BUET campus </p>
    <p>Date: 23,24 February </p>
    <p>23 February: club presentations and artist talk by Saiful Huq Omi</p>
    <p>24 February:club presentation and  artist talk by Andrew Biraj </p>     
    `;



var component = {
    template: `
    <general-page>
        <general-page-content index=0 title="10th Annual Exhibition" color="#3f5388">${page1}</general-page-content>
    </general-page>
    `
};
  
export default component;