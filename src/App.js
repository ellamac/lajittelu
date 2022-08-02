import './App.css';
import LajitteluQuiz from './components/lajitteluQuiz';
import otsikko from './data/otsikko.png';

function App() {
  return (
    <div className="App">
      <div className='otsikko-wrapper'><img src={otsikko} alt="Logo" className='otsikko' /></div>
      <h1>Tylypuhkun lajitteluhattu!</h1>
      <p>Helmikuussa 2014 lastenkonsertin jälkeen pidetyillä Puhkujen lastenkutsuilla järjestettiin salaisin menoin ensimmäinen lajittelu (1op), jossa osallistujat jaettiin Puhkusiassa esiteltyihin Tylypuhkun tupiin: Röyhkelikkö, Puhkupöh, Kyrwänkynsi ja Huiluinen.</p>
      <p>Haluatko tietää, tuletko olemaan myöhempien aikojen pivotulimestari tai ehkä peräti Poika Joka Kiksaa? Kaljaministeriön salainen Alavireisyyksien osasto on laatinut testin, jolla jokainen voi testata, mihin tupaan kuuluu.</p>
      <LajitteluQuiz className="quiz" />
    </div>
  );
}

export default App;
