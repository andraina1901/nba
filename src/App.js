import { getImageUrl } from './utils.js';

function Logo({ width, height }) {
  return(
    <img
        className="logo"
        src={getImageUrl('szV5sdG')}
        width={width}
        height={height}
    />
  );
}

function Header() {
  return (
    <section>
      <header>
        <h1>Statistiques des joueurs NBA</h1>
      </header>
      <table className="player-stats">
        {/* ... (contenu du tableau) */}
      </table>
  </section>
  );
  
}

const Tableau = () => {
  const players = [
    {
      name: 'Joueur 1',
      team: 'Los Angeles Lakers',
      season: '2022-2023',
      gamesPlayed: 60,
      ppm: 25,
      rpm: 10,
      pdpm: 7,
      mpm: 35,
      eff: 25.6,
      fgPercentage: '48%',
      threePercentage: '40%',
      ftPercentage: '85%',
    },
    {
      name: 'Joueur 2',
      team: 'Brooklyn Nets',
      season: '2022-2023',
      gamesPlayed: 58,
      ppm: 28,
      rpm: 8,
      pdpm: 6,
      mpm: 32,
      eff: 28.2,
      fgPercentage: '52%',
      threePercentage: '38%',
      ftPercentage: '88%',
    },
    // Ajoutez d'autres joueurs avec leurs statistiques
  ];

  return (
    <div>
      <table className="player-stats">
        <thead>
          <tr>
            <th>Joueur</th>
            <th>Équipe</th>
            <th>Saison</th>
            <th>MJ</th>
            <th>PPM</th>
            <th>RPM</th>
            <th>PDPM</th>
            <th>MPM</th>
            <th>Eff</th>
            <th>FG%</th>
            <th>3P%</th>
            <th>%LF</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.team}</td>
              <td>{player.season}</td>
              <td>{player.gamesPlayed}</td>
              <td>{player.ppm}</td>
              <td>{player.rpm}</td>
              <td>{player.pdpm}</td>
              <td>{player.mpm}</td>
              <td>{player.eff}</td>
              <td>{player.fgPercentage}</td>
              <td>{player.threePercentage}</td>
              <td>{player.ftPercentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function Content() {  
  return (
    <section className='content'>
      <Tableau/>
    </section>
  );
}
function Footer() {
  return (
    <p></p>
  );
}

export default function All() {
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}





