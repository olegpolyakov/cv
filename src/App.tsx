export default function App() {
    return (
        <div>
            <header>
                <img className="profile-photo" src="./images/oleg-polyakov.jpg" alt="Oleg Polyakov" />

                <nav>
                    <ul className="menu">
                        <li className="menu-item">
                            <a href="#about">About</a>
                        </li>

                        <li className="menu-item">
                            <a href="#skills">Skills</a>
                        </li>

                        <li className="menu-item">
                            <a href="#experience">Experience</a>
                        </li>

                        <li className="menu-item">
                            <a href="#education">Education</a>
                        </li>

                        <li className="menu-item">
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>
                </nav>

                <ul className="menu">
                    <li className="menu-item">📧 <a href="mailto:olegpolyakov@outlook.com">olegpolyakov@outlook.com</a></li>
                </ul>
            </header>

            <main>
                <section id="about" className="page-section">
                    <h1>Oleg Polyakov</h1>
                    <p className="text-lead">Full-stack web developer, educator, content creator</p>
                    <p>Male, July 29th, 1989</p>
                    <p><strong>Desired position:</strong> Front-end developer / Back-end developer / Fullstack developer</p>
                </section>

                <section id="skills" className="page-section">
                    <h2>⭐ Skills</h2>

                    <h3>🗺️ Languages</h3>
                    <ul>
                        <li>Russian - Native</li>
                        <li>English - C1 - Advanced</li>
                    </ul>

                    <h3>💻 IT</h3>

                    <h4>Languages</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>C#</li>
                        <li>PHP</li>
                    </ul>

                    <h4>Front-end</h4>
                    <ul>
                        <li>React</li>
                        <li>Vue.js 2</li>
                        <li>Angular</li>
                    </ul>

                    <h4>Back-end</h4>
                    <ul>
                        <li>Node.js</li>
                        <li>ASP.NET</li>
                        <li>Laravel/Slim</li>
                    </ul>

                    <h4>Databases</h4>
                    <ul>
                        <li>MSSQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </section>

                <section id="experience" className="page-section">
                    <h2>🏢 Work experience</h2>

                    <div className="experience-item">
                        <h3>Full-stack web developer at [Say Yes](https://sayyes.school)</h3>
                        <p className="text-weight-medium">Jan 2014 - until now</p>
                        <p>Say Yes is an english school based in Moscow, Russia.</p>
                        <p>Full-stack development using the React/Redux/Node.js/MongoDB stack.</p>
                    </div>

                    <div className="experience-item">
                        <h3>CEO, author and developer at [CodeDojo](https://codedojo.io)</h3>
                        <p className="text-weight-medium">Jan 2016 - until now</p>
                        <p>CodeDojo is an online e-learning platform for learning programming and development.</p>
                        <p>At CodeDojo I am responsible for pretty much everything, from choosing the fonts to the development stack. Currently I&apos;m using the React/Redux/Node.js/MongoDB stack.</p>
                    </div>
                </section>

                <section id="education" className="page-section">
                    <h2>🎓 Education</h2>

                    <h3>Higher</h3>
                    <dl>
                        <dt>2011</dt>
                        <dd>Russian State University of Oil and Gas - Faculty of Economics and Management, Organization Management</dd>
                    </dl>

                    <h3>Certifications</h3>
                    <dl>
                        <dt>2016</dt>
                        <dd>Exam 70-480: Programming in HTML5 with JavaScript and CSS3</dd>
                    </dl>
                </section>

                <section id="projects" className="page-section">
                    <h3>💻 Open-source Projects</h3>

                    <dl>
                        <dt><a href="https://github.com/olegpolyakov/mdc-react">MDC React</a></dt>
                        <dd>A React component library that implements Material Design</dd>

                        <dt><a href="https://github.com/olegpolyakov/mdc-pug">MDC Pug</a></dt>
                        <dd>A Pug component library that implements Material Design</dd>
                    </dl>
                </section>
            </main>
        </div>
    );
}