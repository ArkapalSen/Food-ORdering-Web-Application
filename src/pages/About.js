import React from "react";
import "../styles/About.css";
import AboutImage from "../assets/masala.jpg";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos,
          labore exercitationem. Odio adipisci recusandae, placeat hic
          aspernatur expedita quae? Porro error quia culpa, illum neque
          exercitationem officiis expedita quis debitis dignissimos fugit! Alias
          aliquid consequuntur ratione ab itaque vel excepturi doloremque
          corrupti sunt amet, autem quas illum totam. Distinctio beatae atque
          inventore quia alias corporis dignissimos sunt consequuntur unde
          harum? Aliquid praesentium cum ipsum necessitatibus consequatur
          repudiandae eos, sunt dicta earum ut quam consectetur dignissimos quas
          voluptatum placeat repellat accusamus mollitia culpa perferendis
          quidem totam. Sunt officia voluptates accusamus explicabo repudiandae
          necessitatibus numquam nemo! Accusantium laboriosam, error quis ipsum
          aspernatur blanditiis consequatur facilis voluptas rerum, ab obcaecati
          laborum ipsa neque repellendus repellat explicabo iste similique
          quisquam sint. Iste atque aspernatur dolorem, exercitationem
          consequatur qui est ad saepe aliquid a ab! Voluptatum minus maxime
          deserunt natus modi est quia dolores eos ratione. Hic, aspernatur!
          Praesentium nesciunt nobis nemo doloremque debitis delectus.
        </p>
      </div>
    </div>
  );
};

export default About;
