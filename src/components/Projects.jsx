import React from 'react';
import style from './projects.module.css';

function ProjectsPage() {
  return (
    <div className={style.grid_container}>
        <div className={style.grid_item1}>
            <div className={style.project_title}>PokeCheck Website</div>
            <br />
            <br />
            <img src={'/public/pokeball.png'} alt="PokeCheck Website" style={{ width: '30%', height: 'auto' }} />
            <p><strong>Technologies:</strong> HTML, CSS, JS, PokeAPI, VSCode</p>
            Everyone loves Pokemon, so check on the ones from your time
            <br />
            <a href="https://github.com/Minsuhk/PokedexWebsite" className = {style.learn_button} target="_blank">Learn More!</a>
        </div>
        <div className={style.grid_item2}>
          <div className={style.project_title}>CSUF Food Review App</div>
          <br />
          <br />
          <img src={'/public/csuf_tuffy.png'} alt="CSUF Food Review App" style={{ width: '30%', height: 'auto' }} />
          <p><strong>Technologies:</strong> Swift, Firebase, XCodee</p>
          Feeling hungry at CSUF? Use this app
          <br />
          <a href="https://github.com/CSUF-CPSC223W-2022S/project-group-9" className = {style.learn_button} target="_blank">Learn More!</a>
        </div>
        <div className={style.grid_item3}>
          <div className={style.project_title}>React Personal Website</div>
          <br />
          <br />
          <img src={'/public/React.png'} alt="React Personal Website" style={{ width: '30%', height: 'auto' }} />
          <p><strong>Technologies:</strong> HTML, CSS, React, VSCode</p>
          A website all about me
          <br />
          <a href="https://github.com/Minsuhk/349-Project-2" className = {style.learn_button} target="_blank">Learn More!</a>
        </div>
        <div className={style.grid_item4}>
          <div className={style.project_title}>Super duper fun happy honey bee farm harvest simulator 5000.2</div>
          <br />
          <img src={'/public/farmer.png'} alt="Super duper fun happy honey bee farm harvest simulator 5000.2" style={{ width: '30%', height: 'auto' }} />
          <p><strong>Technologies:</strong> C#, Unity</p>
          Games with cute drawings and fruit are fun games
          <br />
          <a href="#https://github.com/Minsuhk/PokedexWebsite" className = {style.learn_button} target="_blank">Learn More!</a>
        </div>
        <div className={style.grid_item5}>
          <div className={style.project_title}>T-Rex AI Model</div>
          <br />
          <br />
          <img src={'/public/trex.png'} alt="T-Rex AI Model" style={{ width: '30%', height: 'auto' }} />
          <p><strong>Technologies:</strong> Python, HTML, CSS, VSCode</p>
          If we can't get over a score of 1000 on the Google T-Rex game, then we will train an AI to do it for us
          <br />
          <a href="https://github.com/JustinLieng/CPSC-481-Dino-AI" className = {style.learn_button} target="_blank">Learn More!</a>
        </div>
        <div className={style.grid_item6}>
          <div className={style.project_title}>Moyai Game Info Website</div>
          <br />
          <br />
          <img src={'/public/moyai.png'} alt="Moyai Game Info Website" style={{ width: '30%', height: 'auto' }} />
          <p><strong>Technologies:</strong> HTML, CSS, JS, Flask, MongoDB, YouTube API, SteamAPI, VSCode</p>
          The one-stop site for all your game info needs
          <br />
          <a href="https://github.com/HunterBendel/Moyai" className = {style.learn_button} target="_blank">Learn More!</a>
        </div>
    </div>
  );
}

export default ProjectsPage;