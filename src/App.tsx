import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <HomeDetails>
      <img src="https://github.com/refined-github.png" alt="github" />
      <h2>RunInLinux</h2>
      <p>The website to know if the game runs or not in Linux</p>
      <p>
        Help us by collaborating through{" "}
        <a
          href="https://github.com/Yagasaki7K/website-runinlinux"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>Games</th>
            <th>Developer</th>
            <th>RunInLinux?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AdventureQuest Worlds</td>
            <td>Artix Entertainment</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Age of Empires II: Definitive Edition</td>
            <td>Forgotten Empires</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Celeste</td>
            <td>Extremely OK Games</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Cities: Skylines</td>
            <td>Colossal Order</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Civilization V</td>
            <td>Firaxis Games</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Civilization VI</td>
            <td>Firaxis Games</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Counter Strike: Global Offensive</td>
            <td>Valve Software</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Diablo</td>
            <td>Blizzard Entertainment</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Diablo II: Lord of Destruction</td>
            <td>Blizzard Entertainment</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Don't Starve Together</td>
            <td>Klei Entertainment</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Dota 2</td>
            <td>Valve Software</td>
            <td>✅</td>
          </tr>
            <td>Europa Universalis IV</td>
            <td>Paradox Development Studio</td>
            <td>✅</td>
          <tr>
            <td>Hollow Knight</td>
            <td>Team Cherry</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Kerbal Space Program</td>
            <td>Squad</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Euro Truck Simulator 2</td>
            <td>SCS Software</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>League of Legends</td>
            <td>Riot Games</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Left 4 Dead 2</td>
            <td>Valve Software</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Little Nightmares II</td>
            <td>BANDAI NAMCO Entertainment</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Minecraft</td>
            <td>Mojang Studios</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Pillars of Eternity</td>
            <td>Obsidian Entertainment</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Pyre</td>
            <td>Supergiant Games</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Rocket League</td>
            <td>Psyonix</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Stardew Valley</td>
            <td>ConcernedApe</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Total War: THREE KINGDOMS</td>
            <td>Creative Assembly</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Team Fortress 2</td>
            <td>Valve Software</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Tibia</td>
            <td>CipSoft GmbH</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>War Thunder</td>
            <td>Gaijin Entertainment</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>XCOM 2</td>
            <td>Firaxis Games</td>
            <td>✅</td>
          </tr>
          
          {/* ADD MORE GAMES HERE*/}
          {/* <tr>
            <td>Counter Strike: Global Offensive</td>
            <td>Valve Software</td>
            <td>✅</td>
          </tr> */}
        </tbody>
      </table>
    </HomeDetails>
  );
}

const HomeDetails = styled.div`
  img {
    width: 20%;
  }

  img,
  h2 {
    margin-bottom: -1.5rem;
  }

  table.table {
    width: 100%;
    background-color: #fff;
    border-collapse: collapse;
    border-width: 2px;
    border-style: solid;
    color: #000;
  }

  table.table td,
  table.table th {
    border-width: 2px;
    border-color: #181a1b;
    border-style: solid;
    padding: 1rem 5rem;
  }

  table.table thead {
    background-color: #646cff;
    color: #fff;
  }
`;

export default App;
