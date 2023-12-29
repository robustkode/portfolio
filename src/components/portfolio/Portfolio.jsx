import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/youtube.png";
import IMG2 from "../../assets/pizza.png";
import IMG3 from "../../assets/chat.png";
import ProjectDemo from "./ProjectDemo";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Youtube Clone",
    description:
      " With this app, users can enjoy watching popular YouTube videos an easily search for channels and specific videos. Additionally, users have the convenience of accessing their subscribed channels by logging in with their Google account.",
    techno: "Youtube Api | Redux | Sass | Bootstrap | Firebase",
    github: "https://github.com/robustkode/youtube_clone",
    demo: "https://fir-f80ea.web.app/",
    brief:
      "https://drive.google.com/file/d/1vg1_65ZHQUxNGRCPvHYaB6peWMQrRmSs/view?usp=sharing",
  },
  {
    id: 2,
    image: IMG2,
    title: "Pizza Shop",
    description:
      "Users can place orders for pizzas and drinks online, with payments processed through Stripe. Administrators have the ability to create, modify, and remove items, and can also view ordered items within the admin dashboard.",
    techno: "Nextjs | NextAuth | Redux | Tailwind | Mongodb",
    github: "https://github.com/robustkode/pizza-ordering-app",
    demo: "https://pizza-hub.vercel.app/",
    brief:
      "https://drive.google.com/file/d/1ylsAZ6iWdfQP7qSnvg-F_4KnqCeZJgGq/view?usp=sharing",
  },
  {
    id: 3,
    image: IMG3,
    title: "Chatting App",
    description:
      "Users have the ability to create posts, like and comment on content, as well as connect with others. The app also includes a dark mode feature.",
    techno: "React | Redux | Material UI | Expressjs | Mongodb",
    github: "https://github.com/robustkode/echo-social-media-app",
    demo: "https://echo-social-client.vercel.app/",
    brief:
      "https://drive.google.com/file/d/1wuc6Tpct7A5PJAfXeWjCLrzarRjfNFEr/view?usp=sharing",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map(
          ({ id, image, title, description, techno, github, demo, brief }) => {
            return (
              <article key={id} className="portfolio__item">
                <ProjectDemo image={image} title={title} />
                <div className="portfolio__content">
                  <h3 className="portfolio__title">{title}</h3>
                  <div className="portfolio__description">
                    <p className="prortfolio__description__content">
                      {description}
                    </p>
                    <div>
                      <div className="portfolio__item-cta">
                        <p>{techno}</p>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <a
                            href={github}
                            className="btn"
                            style={{
                              marginRight: "2rem",
                              marginBottom: "1rem",
                            }}
                          >
                            Github
                          </a>

                          <a
                            href={demo}
                            className="btn btn-primary"
                            style={{
                              marginBottom: "1rem",
                            }}
                          >
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
