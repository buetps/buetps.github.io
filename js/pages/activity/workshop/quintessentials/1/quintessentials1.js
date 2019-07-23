var page1 = `
<p>BUET Photographic Society is proud to present a day long workshop for on basic and intermediate photography skills 
        and aesthetics.It would be open to BUETian and guests alike.</p>

        <p>Both beginners and experienced photographers  would find this workshop productive from their individual perspectives. 
        So if you are looking to understand fundamentals of photography or trying to take your skills and aesthetic sense a few notch up – Do register ASAP.</p>


        <p>Date: 30th January, 2014</p>
        <p>Venue: Civil building seminar room, 1st floor, civil building</p>

        <p>Instructors :  Abdul Aziz apu , Aneek Mustafa Anwar</p>

        <h3>Session 1</h3>
        <p>Topic: Basic composition and camera basics<br/>
        Timing: 9:30 am - 1.00 pm</p> 

        <h3>Session 2</h3>
        <p>Topic: Open Discussion<br/>
        timing: 1:00 pm - 1.30 pm </p>

        <h3>Session 3</h3>
        <p>Topic : Language of the Image<br/>
        Timing: 2.30 pm -5.30pm </p>

        <h3>Session 4:</h3>
        <p>Topic: Open Discussion<br/>
        timing: 5:30 pm - 6.00 pm </p>

        <br/>
        <p>Photowalk : 31th January, 2014 </br>
        Meeting time and place: BUET Shahid Minar at 9.00 am.</p>

        <p>Registration Fee: 300 tk (BUETians), 500tk (Guests/non BUETians))</p>
`;


var component = {
    template: `
    <general-page title="Season 1" subtitle="Photography Quintessentials" color="#3a8e77">
        <general-page-content index=0>${page1}</general-page-content>
    </general-page>
    `
};
  
export default component;

