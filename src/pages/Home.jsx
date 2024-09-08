// This is a static page mocking an "About Us" section for our fake user data
export default function Home() {
    return (
      <section className="page-section" id="work">
        <h2>Work</h2>
        <div className="flex-container">
  
          <a href="https://projectend-1.onrender.com" className="flex-item projectend">
            <div>
              <h3>ProjecTend</h3>
              <span>HTML, CSS, Javascript, our own API, SortableJS, Express.JS, Bcrypt, express handlebars</span>
            </div>
          </a>
  
          <a href="https://brandeecheung.github.io/myblog/index.html" className="flex-item work1">
            <div>
              <h3>Blog</h3>
              <span>HTML, CSS, JavaScript</span>
            </div>
          </a>
  
          <a href="https://brandeecheung.github.io/weatherdashboard/index.html" className="flex-item work2">
            <div>
              <h3>Weather Dashboard</h3>
              <span>HTML, CSS, JavaScript, jQuery</span>
            </div>
          </a>
  
          <a href="https://brandeecheung.github.io/taskboard/index.html" className="flex-item work3">
            <div>
              <h3>Taskboard</h3>
              <span>HTML, CSS, JavaScript</span>
            </div>
          </a>
  
          <a href="https://brandeecheung.github.io/super-team-project/index.html" className="flex-item work4">
            <div>
              <h3>Stocks Generator</h3>
              <span>HTML, CSS, JavaScript</span>
            </div>
          </a>
  
        </div>
      </section>
    );
  }
  