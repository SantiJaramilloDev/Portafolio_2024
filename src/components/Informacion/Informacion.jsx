import { useRef, useState, useEffect } from "react";
import cv from '../../assets/cv.png'
import hv from '../../assets/Hoja_de_vida.pdf'
import img1 from '../../assets/proyectos/img1.png'
import img2 from '../../assets/proyectos/img2.png'
import img3 from '../../assets/proyectos/img3.png'
import img4 from '../../assets/proyectos/img4.png'
import img5 from '../../assets/proyectos/img5.png'
import skill1 from '../../assets/skills/skill1.png'
import skill2 from '../../assets/skills/skill2.png'
import skill3 from '../../assets/skills/skill3.png'
import skill4 from '../../assets/skills/skill4.png'
import skill5 from '../../assets/skills/skill5.png'
import skill6 from '../../assets/skills/skill6.png'
import skill7 from '../../assets/skills/skill7.png'
import skill8 from '../../assets/skills/skill8.png'
import './Informacion.css'

export const Informacion = () => {
  const sobreMi = useRef(null);
  const experiencia = useRef(null);
  const proyectos = useRef(null);
  const skills = useRef(null);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (section) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section.current.id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        sobreMi.current,
        experiencia.current,
        proyectos.current,
        skills.current,
      ];

      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="info">
        <div className="info_left">
          <div className='left_nav'>
            <div className='left_title'>
              <h1>Información</h1>
            </div>
            <div className='left_buttons'>
              <button className={`cta ${activeSection === "sobreMi" ? "active" : ""}`} onClick={() => scrollToSection(sobreMi)}>
                <span className="hover-underline-animation"> Sobre mi </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>
              <button className={`cta ${activeSection === "experiencia" ? "active" : ""}`} onClick={() => scrollToSection(experiencia)}>
                <span className="hover-underline-animation"> Experiencia </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>
              <button className={`cta ${activeSection === "proyectos" ? "active" : ""}`} onClick={() => scrollToSection(proyectos)}>
                <span className="hover-underline-animation"> Proyectos </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>
              <button className={`cta ${activeSection === "skills" ? "active" : ""}`} onClick={() => scrollToSection(skills)}>
                <span className="hover-underline-animation"> Skills </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>
            </div>
            <div className='left_redes'>
              <ul className="example-2">
                <li className="icon-content">
                  <a
                    href="https://www.linkedin.com/in/brayan-santiago-jaramillo-am%C3%A9zquita-05256726b/"
                    aria-label="LinkedIn"
                    data-social="linkedin"
                    target='_blank'
                  >
                    <div className="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div className="tooltip">LinkedIn</div>
                </li>
                <li className="icon-content">
                  <a href="https://github.com/SantiJaramilloDev" aria-label="GitHub" data-social="github" target='_blank'>
                    <div className="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div className="tooltip">GitHub</div>
                </li>
                <li className="icon-content">
                  <a href={hv} aria-label="cv" data-social="cv" target='_blank' download>
                    <div className="filled"></div>
                    <img src={cv} alt="imgCV" className='imgCV' />
                  </a>
                  <div className="tooltip or2">Hoja de vida</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="info_right">
          <div className='segmentos' ref={sobreMi} id="sobreMi">
            <div className='segmentos_title'>
              <h1>Sobre mi</h1>
            </div>
            <div className='segmentos_text'>
              <p>¡Hola! Soy un desarrollador frontend con más de un año de experiencia, apasionado por crear interfaces de usuario intuitivas y funcionales. Tengo conocimientos básicos en backend, lo que me permite comprender el desarrollo web de manera integral. Me caracterizo por ser una persona constante, siempre buscando aprender y mejorar mis habilidades para enfrentar nuevos retos y seguir creciendo en el mundo del desarrollo.</p>
              <p>Me considero una persona responsable, siempre comprometido con alcanzar los objetivos que me propongo. Disfruto trabajar en equipo, ya que creo que la colaboración potencia los resultados. No temo a cometer errores, ya que los veo como oportunidades para aprender y mejorar continuamente en mi desarrollo profesional.</p>
            </div>
          </div>
          <div className='segmentos' ref={experiencia} id="experiencia">
            <div className='segmentos_title'>
              <h1>Experiencia</h1>
            </div>
            <div className='segmentos_text'>
              <p><strong>Reparación y mantenimiento de computadores y redes:</strong> Prácticas realizadas en IFX Networks durante 6 meses, de noviembre de 2022 a mayo de 2023. Mis principales responsabilidades incluyeron el mantenimiento preventivo y correctivo de equipos, soporte técnico a usuarios, y el mantenimiento de las redes internas de la empresa, asegurando un rendimiento óptimo del sistema.</p>
              <p><strong>Desarrollo Frontend:</strong> Actualmente trabajo en Atento Colombia desde mayo de 2023, acumulando un año y 10 meses de experiencia. Mis principales responsabilidades incluyen el desarrollo de aplicaciones web destinadas a mejorar la experiencia de los asesores de call center, facilitando sus procesos diarios mediante interfaces intuitivas y funcionales. Utilizo tecnologías como React, JavaScript, HTML y SCSS para crear soluciones eficientes y escalables.</p>
            </div>
          </div>
          <div className='segmentos' ref={proyectos} id="proyectos">
            <div className='segmentos_title'>
              <h1>Proyectos</h1>
            </div>
            <div className='segmentos_cards'>
              <article className="card">
                <section className="card__hero">
                  <header className="card__hero-header">
                    <span>Primer portafolio</span>
                  </header>
                  <img src={img1} className='card__img' />
                </section>
                <footer className="card__footer">
                  <p className="card__job-text">
                    Primer versión de mi protafolio personal
                  </p>
                  <a className="card__btn" href='https://santiago-jaramillo-dev.netlify.app/' target='_blank'>Ver</a>
                </footer>
              </article>
              <article className="card">
                <section className="card__hero">
                  <header className="card__hero-header">
                    <span>El tiempo</span>
                  </header>
                  <img src={img2} className='card__img' />
                </section>
                <footer className="card__footer">
                  <p className="card__job-text">
                    Web de consulta de climas por ciudad
                  </p>
                  <a className="card__btn" href='https://eltiempohoy.netlify.app/' target='_blank'>Ver</a>
                </footer>
              </article>
              <article className="card">
                <section className="card__hero">
                  <header className="card__hero-header">
                    <span>Top Info Games</span>
                  </header>
                  <img src={img3} className='card__img' />
                </section>
                <footer className="card__footer">
                  <p className="card__job-text">
                    Web de información de video juegos
                  </p>
                  <a className="card__btn" href='https://topinfogames.netlify.app/' target='_blank'>Ver</a>
                </footer>
              </article>
              <article className="card">
                <section className="card__hero">
                  <header className="card__hero-header">
                    <span>Dashboard con login</span>
                  </header>
                  <img src={img4} className='card__img' />
                </section>
                <footer className="card__footer">
                  <p className="card__job-text">
                    Prueba técnica de Dashboard con login
                  </p>
                  <a className="card__btn" href='https://prueba-tecnica-santiago-jaramillo.netlify.app/' target='_blank'>Ver</a>
                </footer>
              </article>
              <article className="card">
                <section className="card__hero">
                  <header className="card__hero-header">
                    <span>Juego universitario</span>
                  </header>
                  <img src={img5} className='card__img' />
                </section>
                <footer className="card__footer">
                  <p className="card__job-text">
                    Juego acerca de un libro universitario
                  </p>
                  <a className="card__btn" href='https://santiago-jaramillo-dev.netlify.app/' target='_blank'>Ver</a>
                </footer>
              </article>
            </div>
          </div>
          <div className='segmentos' ref={skills} id="skills">
            <div className='segmentos_title'>
              <h1>Skills</h1>
            </div>
            <div className='segmentos_skills'>
              <div className='tooltipSK'>
                <img src={skill1} />
                <span className='tooltiptext'>HTML</span>
              </div>
              <div className='tooltipSK'>
                <img src={skill2} />
                <span className='tooltiptext'>CSS</span>
              </div>
              <div className='tooltipSK'>
                <img src={skill3} />
                <span className='tooltiptext'>JAVA SCRIPT</span>
              </div>
              <div className='tooltipSK'>
                <img src={skill4} />
                <span className='tooltiptext'>SCSS</span>
              </div>
              <div className='tooltipSK'>
                <img src={skill5} />
                <span className='tooltiptext'>GIT</span>
              </div>
              <div className='tooltipSK'>
                <img src={skill6} />
                <span className='tooltiptext'>REACT</span>
              </div>
              <div className='tooltipSK'>
                <img src={skill7} />
                <span className='tooltiptext'>NEXT JS</span>
              </div>
              <div className='tooltipSK'>
                <img src={skill8} />
                <span className='tooltiptext'>VSC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
