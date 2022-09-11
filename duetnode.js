const http = require('http');

const hostname = '127.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html>
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dawood University</title>
      <link rel="stylesheet" href="dawood.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="icon" type="image/png" href="images/duet_logo.png">
  </head>
  <body>
      <section class="header">
          <nav>
              <a href="dawood.html"><img src="images/dawoodlogo.jpg" class="logo"></a>
              <div class="nav-links" id="navlinks">
                  <i class="fa fa-times" onclick="hideMenu()"></i>
                  <ul>
                      <li><a href="">HOME</a></li>
                      <li><a href="faculty.html">FACULTY</a></li>
                      <li><a href="undergraduate.html">UNDERGRADUATE</a></li>
                      <li><a href="admission.html">ADMISSIONS</a></li>
                      <li><a href="events.html">EVENTS</a></li>
                      <li><a href="contact.html">CONTACT</a></li>
                      <li><a href="login.html">LOGIN</a></li>
                  </ul>
                  <h1 class="head">DAWOOD UNIVERSITY OF ENGINEERING & TECHNOLOGY KARACHI</h1>
              </div>
              <i class="fa fa-bars" onclick="showMenu()"></i>
  
          </nav>    
          <div class="text-box">
              <h1>Pakistan's Top 19th Rank University </h1>
              <p>
                  Dawood University of Engineering & Technology aims to invest in human capital for
                   accelerated advancement in engineering knowledge and practices, new frontiers in 
                   R&D hence creating<br> knowledge led economy and better future for generations to come.
              </p>
              <a href="https://www.facebook.com/dawooduetkhi" class="here-button">Visit Us to Know more</a>
  
          </div>
          
      </section>
      <!---------Undergraduate_Programs-------->
      <section class="undergraduate">
          <h1>Undergraduate Programs We Offer</h1>
          <P>
              We are Offers Bachlor's of Science in Cyber Security , Artificial Intelligence & Computer 
              Science.
          </P>
          <div class="row">
              <div class="course-col">
                  <h3>Undergraduate</h3>
                  <p>
                      To provide an understanding of the fundamental concept of computer science.<br>
                      To enrich our students with different computing fields, programming languages,<br>
                      development tools, and techniques. To inculcate in our students<br> the capability
                      of analysis, design, development, and evaluation of effective computer
                      systems software.
                  </p>
              </div>
              <div class="course-col">
                  <h3>Degree</h3>
                  <p>
                      Currently, the Department is offering the following undergraduate 4 year programs:<br>
                      BS (Computer Science)<br>
                      BS (Cyber Security)<br>
                      BS (Artificial Intelligence)<br>
                      BS (Mathematics)
                  </p>
              </div>
              <div class="course-col">
                  <h3>Post-Graduate</h3>
                  <p>
                      All the education after bachelors is called Postgraduate internationally. In other words,<br>
                       we can say education after 16th year of education is international Post graduation.<br>
                       We offer post-graduate program of 2 years which is recoginized by HEC Pakistan.
                  </p>
              </div>
  
  
              </div>
  
          </div>
  
      </section>
      <section class="campus">
          <h1>Our Main Campus</h1>
          <p>
              Dawood College of Engineering and Technology was established in 1962 as a federal government<br>
              engineering institution. Initial financial endowment and foundation stone of the Dawood College<br>
              of Engineering and Technology was laid by then President of Pakistan Field Marshal 
              Mohammad<br> Ayub Khan in 1962. It was established by Dawood Foundation under the supervision
              of<br> Seth Ahmed Dawood in 1964.
          </p>
          <div class="row">
              <div class="campus-col">
                  <img src="images/about.jpg">
                  <div class="layer">
                      <h3>New M.A.Jinnah Road, KARACHI</h3>
                  </div>
              </div>
              <div class="campus-col">
                  <img src="images/campus2.jpg">
                  <div class="layer">
                      <h3>Gulshan-e-Iqbal, KARACHI</h3>
                  </div>
              </div>
          </div>
  
      </section>
      <!----------Facilities------------>
      <div class="facilities">
          <h1>Our facilities</h1>
          <p>We are providing a lots of facilities for the students</p>
          <div class="row">
              <div class="facilities-col">
                  <img src="images/library.png">
              <h3>Main library</h3>
              <p>
                  Dawood University library aim to encourage and support both academic and research activities
                   of university students, researchers, faculty members and university staff.
              </p>
              </div>
              <div class="facilities-col">
                  <img src="images/labs.jpg" class="lab">
                  <h3>Computer labs</h3>
                  <p>
                      We have Ten (10) computer labs which are equipped with 400 high specs
                      desktop computers. These computers include Corei7, Corei5 computers. All computers are centrally
                      connected on domain based network. These labs provide the facilities of internet, intranet, 
                      individuals email address, individual secure profiles and separate storage areas.
                  </p>
              </div>
              <div class="facilities-col">
                  <img src="images/cafeteria.png">
                  <h3>Cafeteria</h3>
                  <p>
                      There are two cafeterias for students, a food street and an executive 
                      lounge for faculty members. The cafeterias are air conditioned and 
                      provide a range of snacks and meal options which are available to students
                      throughout the day.
                  </p>
              </div>
              <div class="facilities-col">
                  <img src="images/auditorium.jpg" class="audi">
                  <h3>Auditorium</h3>
                  <p>
                      Auditorium acts as a nerve centre for all activities and events that take place
                      on the campus. The purpose built auditorium has an advanced lighting and sound
                      system and has capacity of accommodating 1000 people at a time. 
                  </p>
              </div>
          </div>
      </div>
      <!---Student Opinions-------->
      <section class="opinion">
          <h1>What Our Student Says</h1>
          <p>Survey of our Student's what they think about the University.</p>
          <div class="row">
              <div class="opinion-col">
                  <img src="images/mohsin.jpg">
                  <div>
                      <p>I am 3rd year student and the university environment is Good.</p>
                      <h3>Mohsin Imran</h3>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-o"></i>
  
                  </div>
              </div>
              <div class="opinion-col">
                  <img src="images/jawad.jpg">
                  <div>
                      <p>I am 1st year student and the Computer lab are so Advanced.</p>
                      <h3>Jawad Sajid</h3>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-o"></i>
                      <i class="fa fa-star-o"></i>
                  </div>
              </div>
              <div class="opinion-col">
                  <img src="images/ali.jpg">
                  <div>
                      <p>I am 1st year student and studying<br> AI which provide Standard of Education.</p>
                      <h3>Syed Ali Kazmi</h3>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-o"></i>
                  </div>
              </div>
          </div>
  
      </section>
      <!--------call to Action----------->
      <section class="cta">
          <h1>Admissions are Open In August you can Enroll Through<br> the Online Registration Form
          </h1>
          <a href="contact.html" class="here-button">CONTACT US</a>
  
      </section>
      <!------footer--------->
      <section class="footer">
          <h4>About us</h4>
          <p>You can Also Follow us on this social media plateform's <br>Together We Grow</p>
          <div class="icons">
              <i class="fa fa-facebook"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-linkedin"></i>
              <i class="fa fa-instagram"></i>
  
          </div>
          <p>Made with  <i class="fa fa-heart-o"></i> by Rao Abdul Hai </p>
  
      </section>
  
  
  
  
  
  
  
  
  
  
      <!-----------Toggle Menu------------------>
  <script>
      var navlinks = document.getElementById("navlinks");
      function showMenu(){
          navlinks.style.right ="0";
      }
      function hideMenu(){
          navlinks.style.right ="-200px";
      }
  
  </script>
  
  
  </body>
  </html>
  
  
  
  
  
  
  
  
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});