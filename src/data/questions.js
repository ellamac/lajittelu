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
            p: "Carpenters Medley",
            r: "Rocky",
            k: "Summer",
            h: "Bulgar"
        }
    },
    {
        question: 'Mitä teet, kun kapu lyö biisin poikki?',
        options: {
            k: "Lopetan soittamisen, mutta katoan muihin maailmoihin",
            r: "Jatkan soittamista, koska kohta tulee oma huippukohtani",
            h: "Jatkan soittamista perseillen",
            p: "Jatkan soittamatta olemista koska en tiennyt alun perinkään missä oltiin menossa"
        }
    },
    {
        question: 'Mitä teet, kun tauko alkaa?',
        options: {
            h: "Lähden tupakalle",
            k: "Jään istumaan paikalleni ja treenaamaan vaikeita paikkoja",
            r: "Yritän ehtiä ensimmäisenä kekseille",
            p: "Jonotan vessaan ja myöhästyn"
        }
    },
    {
        question: 'Huilisteja dissataan, mitä teet?',
        options: {
            r: "Dissaan huilisteja korostaen oman soittimeni erinomaisuutta",
            k: "Dissaan huilisteja kunnes huomaan, että se on oma soittimeni",
            p: "Dissaan, jotta omaa soitinryhmääni ei dissattaisi",
            h: "Myhäilen hiljaa sektiotovereitteni kanssa ja dissaan lisäksi kaikkia muitakin sektioita"
        }
    },
    {
        question: 'Mitä pakkaat mukaan Konnevedelle?',
        options: {
            p: "Makkarapaketin. Perillä huomaat, että niitä on jo varattu mukaan vuoden tarpeiksi",
            h: "Muut pakkaavat minut, sillä olen teipannut itseni puhkuviinitynnyriin",
            k: "Shaalin ja varapäreitä",
            r: "Oman uusimman sävellyksen/sovituksen kouluttajalle arvioitavaksi.",
            e: "Bilsan koe kirjat",
        }
    },
    {
        question: 'Kappaleessa on silakka. Mitä teet?',
        options: {
            p: "Lähden pilkille. Tuntuu olevan hyvä kalakeli.",
            r: "Soitan fff → fff",
            h: "Perseilen",
            k: "Kiinnitän erityistä huomiota dynamiikkamerkintöihin"
        }
    },
    {
        question: 'Miten suhtaudut uusiin puhkuihin?',
        options: {
            r: "Haluan heti nähdä, miltä ne näyttävät",
            h: "Ketkä uudet puhkut?",
            p: "Tervehdin ja kerron puhkujen tavoista",
            k: "Opettelen heidän nimensä, kun ovat olleet bändissä vähintään vuoden.",
            s: "(Lakkasin pitämästä kirjaa bändin jäsenistä kuudennen vuoden jälkeen)"
        }
    },
    {
        question: 'On aika ilmoittautua Puhallukseen. Mitä teet?',
        options: {
            h: "Lähden keräämään aroniamarjoja. En ilmoittaudu. Oletan silti pääseväni mukaan.",
            r: "Alan valmistautua ja puuteroin henkisen isittimeni",
            k: "Ilmoittaudun lomakkeella, sähköpostissa ja treeneissä",
            p: "Lertorkaajos on aika ilmoittautua Puhallukseen, seon vähintä mitä voi."
        }
    },
    {
        question: 'Puhallukseen asti on selvitty. Mitä teet?',
        options: {
            r: "Puhallan. Viisari värähtää ;)",
            p: "Tissuttelen pitkin päivää",
            k: "Kaikkien yllätykseksi vedän kunnon rakettikännit ja puhun saksaa (täydellisesti soitetun keikan jälkeen)",
            h: "Viideltä aamulla työntelen erilaisia asioita nukkuvien puhkujen neniin"
        }
    },
    {
        question: 'On aika roudata. Mitä teet?',
        options: {
            r: "Otan paidan pois ja kannan painavinta löytämääni esinettä huolettomasti ympäriinsä.",
            h: "Perseilen sillä aikaa kun tavarat ilmiintyvät ympärilleni",
            k: "Kasaan telineet kaikille",
            p: "Olen avuksi ja kannan vihreät mapit jokaiselle"
        }
    },
    {
        question: 'Miten vaikutat Puhkuissa?',
        options: {
            r: "Haen puheenjohtajaksi heti puksina",
            p: "Ryhdyn roudaus- ja nuotistovastaavaksi. Kukaan ei huomaa.",
            h: "Olen teostovastaava. En tee mitään.",
            k: "Kirjoitan säännöllisesti sikaan."
        }
    },
    {
        question: 'Puhkukaljapaikka?',
        options: {
            h: "Ruth",
            k: "Sohwi",
            p: "Vakkari",
            r: "Puistokalja, vaikka on paukkupakkanen"
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
            k: "Oksentamassa",
            h: "Kusemassa laiturilta holtittomasti",
            p: "Nukkumassa"
        }
    },
    {
        question: 'BONUSKYSYMYS! Lempiserafisi?',
        options: {
            r: "Kyrpae",
            k: "Absi",
            p: "Noessoe",
            h: "Grumpy"
        }
    },
]

export default questions;