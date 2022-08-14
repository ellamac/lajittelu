const questions = [
    {
        question: 'Eka kyssäri, jos näät tän nii oho ei ollu tarkotus?',
        options: {
            p: "kukka",
            r: "kukku",
            k: "kakku",
            h: "kakka"
        }
    }, {
        question: 'Lempipuhkubiisisi?',
        options: {
            p: "Treasure",
            r: "Tanssitaivas",
            k: "Farmiboogie",
            h: "Abba gold"
        }
    },
    {
        question: 'Mitä teet, kun kapu lyö biisin poikki?',
        options: {
            k: "Lopetan soittamisen ja kuuntelen kapua",
            r: "Jatkan soittamista, koska kohta tulee oma huippukohtani",
            h: "Jatkan soittamista perseillen",
            p: "Jatkan soittamatta olemista koska en tiennyt alun perinkään missä oltiin menossa"
        }
    },
    {
        question: 'Mitä teet, kun tauko alkaa?',
        options: {
            h: "Lähden Ruutille",
            k: "Jään istumaan paikalleni ja treenaamaan vaikeita paikkoja",
            r: "Yritän ehtiä ensimmäisenä kekseille",
            p: "Jään pulttiin juoruamaan"
        }
    },
    {
        question: 'Huilisteja dissataan, mitä teet?',
        options: {
            r: "Dissaan huilisteja korostaen oman soittimeni erinomai\u00ADsuutta",
            k: "Dissaan huilisteja kunnes huomaan, että se on oma soittimeni",
            p: "Dissaan, jotta omaa soitinryhmääni ei dissattaisi",
            h: 'Myhäilen hiljaa sektio\u00ADtovereitteni kanssa ja dissaan lisäksi kaikkia muitakin sektioita'
        }
    },
    {
        question: 'Mitä pakkaat mukaan Konnevedelle?',
        options: {
            p: "Makkara\u00ADpaketin. Perillä huomaat, että niitä on jo varattu mukaan vuoden tarpeiksi",
            h: "Muut pakkaavat minut, sillä olen teipannut itseni puhkuviini\u00ADtynnyriin",
            k: "Varapäreitä, venttiiliöljyä ja sivusoittimen",
            r: "Sinfiksenkin nuotit harjoiteltavaksi",
            e: "Sektioröökiä",
        }
    },
    {
        question: 'Kappaleessa on silakka. Mitä teet?',
        options: {
            p: "Lähden pilkille. Tuntuu olevan hyvä kalakeli.",
            r: "Soitan fff → fff",
            h: "Perseilen",
            k: "Kiinnitän erityistä huomiota dynamiikka\u00ADmerkintöihin"
        }
    },
    {
        question: 'Miten suhtaudut uusiin puhkuihin?',
        options: {
            r: "Haluan heti kysyä, minkä tutkinnot he ovat suorittaneet",
            h: "Ketkä uudet puhkut?",
            p: "Tervehdin ja kerron puhkujen tavoista",
            k: "Opettelen heidän nimensä, kun ovat olleet bändissä vähintään vuoden.",
            s: "Lakkasin pitämästä kirjaa bändin jäsenistä kuudennen vuoden jälkeen"
        }
    },
    {
        question: 'On aika ilmoittautua Puhallukseen. Mitä teet?',
        options: {
            h: "Lähden keräämään aroniamarjoja. En ilmoittaudu. Oletan silti pääseväni mukaan.",
            r: "Alan valmistautua ja selvitän mitä muut orkesterit aikovat soittaa",
            k: "Ilmoittaudun lomakkeella, sähköpostissa ja treeneissä",
            p: "Lertorkaajos on aika ilmoittautua Puhallukseen, seon vähintä mitä voi."
        }
    },
    {
        question: 'Puhallukseen asti on selvitty. Mitä teet?',
        options: {
            r: "Puhallan. Viisari värähtää ;)",
            p: "Tissuttelen pitkin päivää",
            k: "Kaikkien yllätykseksi vedän kunnon rakettikännit ja puhun norjaa (täydellisesti soitetun keikan jälkeen)",
            h: "Viideltä aamulla olen valtatiellä kuntokävelemässä"
        }
    },
    {
        question: 'On aika roudata. Mitä teet?',
        options: {
            r: "Otan paidan pois ja kannan painavinta löytämääni esinettä huolettomasti ympäriinsä.",
            h: "Perseilen sillä aikaa kun tavarat ilmiintyvät ympärilleni",
            k: "Kasaan telineet kaikille",
            p: "Olen avuksi ja etsin kynäpurkin"
        }
    },
    {
        question: 'Miten vaikutat Puhkuissa?',
        options: {
            r: "Ilmoittaudun mahdollisimaan moneen vastuutehtävään heti puksina",
            p: "Liityn markkinointi\u00ADtiimiin. Kukaan ei huomaa.",
            h: "Olen viininjumalan kisälli",
            k: "Kirjoitan säännöllisesti sikaan."
        }
    },
    {
        question: 'Puhkukaljapaikka?',
        options: {
            h: "Puistokalja, vaikka on paukku\u00ADpakkanen",
            k: "Taide",
            p: "Vibes",
            r: "Ruth"
        }
    },
    {
        question: 'Mitä tilaat?',
        options: {
            k: "Teen",
            h: "Kuus tuoppia",
            p: "Ranut, puolet muille",
            r: "Sitä, missä on eniten 'holia hintaan nähden."
        }
    },
    {
        question: 'Roolisi kirkkoveneessä?',
        options: {
            r: "Tahtiairopari",
            p: "Keskityn laulamiseen",
            h: "Olen perämies",
            k: "Soudan"
        }
    },
    {
        question: 'Konnevesi kello 3 yöllä. Missä olet?',
        options: {
            r: "Saunomassa",
            k: "Nukkumassa",
            h: "Konnevesijuoksulla",
            p: "Nauttimassa karaokesta"
        }
    },
    {
        question: 'BONUSKYSYMYS! Millä otat maitosi?',
        options: {
            r: "Maidolla ja karamellilla",
            k: "Spritellä ja ilman viinaa",
            p: "Vissyllä ja omenalla",
            h: "Mikä maito?"
        }
    },
]

export default questions;
