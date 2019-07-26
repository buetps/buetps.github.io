var page1 = `
<p>BUET Photographic Society is all set to proudly present a carefully drawn photography workshop for amateurs and 
        professionals alike. The theme of the workshop has been organized to help the photographers to update their skills.</p>

        <p>As the mentors of the workshop we have Debasish Shom from Pathshala, Syed Latif Hossain, freelance photographer and 
        graphic designer and Jashim Salam from Absurd Photos. Together,  in a two-day long workshop session, they will explore 
        some of the exciting and challenging fields of the photography arena. </p>

        <p>Both the beginners and intermediate photographers are going to find something worthy and useful in the interactive sessions 
        that we have planned. If you are someone who wants to upgrade your photography skills one level up and want to fascinate 
        yourself with new and interesting flair, then do join us, ASAP.</p>

        <h3>1st day | 27.10.16 </h3>
        <h4>BUET Civil Building | Room 206</h4> </br/>

        <p>Session 1 | 10am-11:30am <br/>
        Styles of Documentary Photography <br/>
        - Debasish Shom</p>

        <p>Session 2 | 12pm-1:30pm <br/>
        Documentary Photography Narrative <br/>
        - Debasish Shom</p>

        <p>Session 3 | 2:30pm-4pm <br/>
        Digital Post Processing <br/>
        - Syed Latif Hossain</p>


        <h3>2nd day | 28.10.16</h3>
        <h4>BUET Civil Building | Room 206</h4> </br/>

        <p>Session 1 | 10am-11:30am <br/>
        Visual Literacy <br/>
        - Jashim Salam</p>

        <p>Session 2 | 12pm-1:30pm <br/>
        Portraiture <br/>
        - Jashim Salam</p>

        <p>Session 3 | 2:30pm-4pm <br/>
        Portfolio Review <br/>
        - Jashim Salam</p>

        </br/>
        <h4>Registration </h4>
        <p>OPEN FOR ALL to register. <br/>
        Fee: 1200tk</p>
`;

var page2 = `
<h1>Instructor's Note</h1>

        <h2>Debashish Shom</h2>
        <h3>Reading Photographs and Building Narrative</h3>
        
        <p>In street, you can find a photograph, a printed one, dirty and faded or you can look at a photograph on your high contrast computer screen. 
        Otherwise, you can look at a photograph of an exotic landscape or an iconic photograph from the history. They can be read or viewed from 
        different perspective or levels and your mind responses very differently. Being a photographer, it is very important and fascinating to 
        read photographs from different levels.</p>
        
        <p>It is also very exciting to look at how photographs from different levels or may be from the same level work together to build a narrative. 
        It is more like musical notes; from different scales they synchronize and blow our mind.</p>




        <h2>Syed Latif Hossain</h2>
        <h3>Digital Post Processing</h3>

        <p>Grabbing some images is of course a part of photography. Not to mention, the most important part. It can just be fine-'n-easy if you are pursuing
         it as a hobby. The trouble begins if you want to go beyond that.</p>
        <p>The list of to-dos is quite long in terms of things to address before-and-after the shoot; in terms of knowledge, perception, skill, time, place 
        and all this. In today’s scenario, managing digital assets (mostly images, in case of a photographer) and post-processing the images remain a major 
        hurdle for many if not most of the aspiring photographers. Choice of digital solutions to tackle these hurdles are quite mind-boggling. Learn how to 
        manage (from shooting to organizing in a meaningful way and keeping your images ready for chucking them out in a whiz in times of need) if you want 
        to keep your edges sharp in a demanding professional scenario.</p>
`


var component = {
    template: `
    <general-page level=4>
        <general-page-content index=0 title="Season 2" subtitle="Photography Quintessentials" color="#3a8e77">${page1}</general-page-content>
        <general-page-content index=1 title="Season 2" subtitle="Photography Quintessentials" color="#3a8e77">${page2}</general-page-content>
    </general-page>
    `
};
  
export default component;

