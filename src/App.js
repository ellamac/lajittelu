import './App.css';
import LajitteluQuiz from './components/lajitteluQuiz';
import otsikko from './data/otsikko.png';

function App() {
  return (
    <div className="App">
      <img src={otsikko} alt="Logo" className='otsikko' />
      <h1>Tylypuhkun lajitteluhattu!</h1>
      <p>Helmikuisen lastenkonsertin jälkeen pidetyillä Puhkujen lastenkutsuilla järjestettiin salaisin menoin ensimmäinen lajittelu (1 op), jossa osallistujat jaettiin viime Puhkusian numerossa esiteltyihin Tylypuhkun tupiin: Röyhkelikkö, Puhkupöh, Kyrwänkynsi ja Huiluinen.</p>
      <p>Haluaisitko silti tietää, tuletko olemaan myöhempien aikojen pivotulimestari tai ehkä peräti Poika Joka Kiksaa? Jos lajittelu jäi välistä, ei (paljon) hätää! Kaljaministeriön salainen Alavireisyyksien osasto on jäänyt keskiviikkoiltana ylitöihin ja laatinut testin, jolla jokainen voi testata, mihin tupaan kuuluu.</p>
      <LajitteluQuiz className="quiz" />
    </div>
  );
}

export default App;
