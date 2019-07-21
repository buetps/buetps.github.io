var pages = [
  {
    content: `
    <p>BUETPS is proud to present its most prized event, 11th Annual Exhibition.</p>
        
    <p>On campus festival will be inaugurated on the 14th of November, 2015 at BUET campus. 
      For 2 days, the campus will buzz with the excitement and veteran photographers and contemporary prestigious photography clubs around the country. 
      On the 16th of November, the selected photographs will be exhibited at the Drik Gallery and the exhibition will go on for 3 days.</p>

    <p>As usual, BUETPS aspires to bring new vision and perspective to the art of photography that we all love and practice. 
      This year is no exception to that. We invite you all to come and enjoy the visual delicacy on offer.</p>

    <p>A brief timeline of the event is given below. We will let you know the full details of the event and the names of the participant clubs and artists very soon.</p>

    <p>14 November</p>
    <ul>
        <li>Opening Ceremony: Inaugurated by the Vice Chancellor of BUET</li>
        <li>Club presentation: Asian University for Women and North South University</li>
    </ul>
    <br/>
    <p>15 November</p>
    <ul>
        <li>Artist Talk: with Hasan Saifuddin Chandan Sir</li>
        <li>Club presentation: Ahsanullah University of Science and Technology, Dhaka University</li>
    </ul>
    <br/>
    <p>16-18 November</p>
    <ul>
        <li>Exhibition at Drik Gallery, House 58, Road 15A (New), Dhanmondi, 1209 Dhaka, Bangladesh</li>
    </ul>
    `
  },


  {
    content: `
    <h2>Participants</h2>
    <p>42 photographers' works were presented in the 11th Annual Exhibition of BUETPS. Here are the names.</p>

    <h3>Single Photos</h3>
    <ul>
    <li>Abdul Aziz Apu</li>
    <li>Aneek Mustafa Anwar</li>
    <li>Atiqul Islam</li>
    <li>Badrul Hasan Tanjil</li>
    <li>Belal Hossain Rana</li>
    <li>Enamul Karim Fayeq</li>
    <li>Fahim Faisal Khan Shapnil</li>
    <li>Fahmida Hossain Ela</li>
    <li>Farsid Raihan</li>
    <li>Hasan Mahmud Prottoy</li>
    <li>Hridoy Tanveer</li>
    <li>Ibrahim Tahmid</li>
    <li>Iftekhar Amin</li>
    <li>Javed Miandad</li>
    <li>Jonayed Iqbal</li>
    <li>Mahdi Zaman</li>
    <li>Manjima Ananya</li>
    <li>Mohammad Rukunuzzaman</li>
    <li>Muhaiminul Islam</li>
    <li>Najmush Shaker </li>
    <li>Naser Imran Hossain</li>
    <li>Nasik Muhammad Nafi</li>
    <li>Noufel Sharif Shojol</li>
    <li>Nourin Haque Ridi</li>
    <li>Oliur Rahman</li>
    <li>Palal Ghosh</li>
    <li>Projna Paromita</li>
    <li>Rafat Hossain</li>
    <li>Rizwan</li>
    <li>I H M Shamsuzzoha</li>
    <li>Shafkat Ahmed</li>
    <li>Shucheta Shegufta</li>
    <li>Shuvajit Das</li>
    <li>Siam Rahman</li>
    <li>Soumya Shekhor Paul</li>
    <li>Tanveer Tomal</li>
    <li>Tanweer M Hasan</li>
    <li>Udaya Bir Saha</li>
    </ul>
    
    <h3>Photo Series</h3>
    <ul>
    <li>Ananya Rubayat</li>
    <li>Fahim Hossain</li>
    <li>Farhan Zahin</li>
    <li>Dhrubo Paul</li>
    </ul>
    `
  }
];





var component = {
  data: () => ({pages}),
  template: `<general-page color="#FF0000" title="11th Annual Exhibition" :pages="pages"></general-page>`
};

export default component;