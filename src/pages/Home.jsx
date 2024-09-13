// This is a static page mocking an "About Us" section for our fake user data
export default function Home() {
    return (
      <section className="page-section" id="work">
        <div className="flex-container">
  
          <div className="abt-us">
            <div>
              <h3>About Us</h3>
              <span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
          impedit suscipit sed magnam alias in, repellat expedita hic explicabo
          architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Velit voluptate exercitationem quaerat pariatur
          mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
          nostrum temporibus ad omnis nam rerum eligendi.</span>
            </div>
          </div>

          <div className="abt-us">
            <div>
              <h3>Our Mission</h3>
              <span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
          impedit suscipit sed magnam alias in, repellat expedita hic explicabo
          architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Velit voluptate exercitationem quaerat pariatur
          mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
          nostrum temporibus ad omnis nam rerum eligendi.</span>
            </div>
          </div>
  
          <a href="https://brandeecheung.github.io/myblog/index.html" className="flex-item work1">
            <div>
              <h3>Donate Now</h3>
            </div>
          </a>
  
          <a href="https://i1.wp.com/scng-dash.digitalfirstmedia.com/wp-content/uploads/2018/12/charity-stats.jpg" className="flex-item work2">
            <div>
              <h3>Our Impact</h3>
            </div>
          </a>
  
          <a href="https://www.google.com/search?client=opera-gx&hs=0DJ&sca_esv=de5534b79ca5d3d3&sca_upv=1&q=upcoming+charity+events&spell=1&sa=X&ved=2ahUKEwj78uiV0r6IAxVeMdAFHS2hHYQQBSgAegQIChAB&biw=1879&bih=936&dpr=1" className="flex-item work3">
            <div>
              <h3>Up Coming Events</h3>
            </div>
          </a>
  
        </div>
      </section>
    );
  }
  