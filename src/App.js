import './App.css';
import LajitteluQuiz from './components/lajitteluQuiz';

function App() {
  return (
    <div className="App">
      <h1>Tylypuhkun lajitteluhattu!</h1>
      <p>Helmikuisen lastenkonsertin jälkeen pidetyillä Puhkujen lastenkutsuilla järjestettiin salaisin menoin ensimmäinen lajittelu (1 op), jossa osallistujat jaettiin viime Puhkusian numerossa esiteltyihin Tylypuhkun tupiin: Röyhkelikkö, Puhkupöh, Kyrwänkynsi ja Huiluinen. Haluaisitko silti tietää, tuletko olemaan myöhempien aikojen pivotuliomestari tai ehkä peräti Poika Joka Kiksaa? Jos lajittelu jäi välistä, ei (paljon) hätää! Kaljaministeriön salainen Alavireisyyksien osasto on jäänyt keskiviikkoiltana ylitöihin ja laatinut testin, jolla jokainen voi testata1), mihin tupaan kuuluu. Ympyröi kustakin kohdasta vastauksesi ja tarkasta tulos testin viimeiseltä sivulta.</p>
      <LajitteluQuiz className="quiz" />
    </div>
  );
}

export default App;
