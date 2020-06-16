import busridesIcon from '../assets/icons/busrides.png';
import cspsIcon from '../assets/icons/csps.png';
import discoverSeriesIcon from '../assets/icons/discoverSeries.png';
import emailIcon from '../assets/icons/email.png';
import surveyMonkeyIcon from '../assets/icons/surveyMonkey.png';
import placematIcon from '../assets/icons/placemat.png';
import talkDigitalNeilIcon from '../assets/icons/talkDigitalNeil.jpg';
import twitterIcon from '../assets/icons/twitter.png';

export default {
    "getLocale": "fr",
    "getOppositeLocale": "en",
    "getOppositeLang": "English",
    busrides: {
        laptop: {
            url: "https://busrides-trajetsenbus.ca/fr/",
            cta: "La nuance GC rencontre le savoir-faire numérique - Visitez Trajetsenbus.ca",
            image: busridesIcon
        },
        standingDoc: {
            url: "https://busrides-trajetsenbus.ca/fr/going-remote-guide/",
            cta: "Plus de 4 000 de vos collègues lisent le Guide du télétravail, découvrez pourquoi!",
            image: busridesIcon
        }
    },
    csps: {
        computerScreen: {
            url: "https://www.csps-efpc.gc.ca/digital-academy/index-fra.aspx",
            cta: "Nous aidons les fonctionnaires à devenir numériques. Découvrez l’Académie du numérique.",
            image: cspsIcon
        },
        envelope: {
            url: "https://da-an.us3.list-manage.com/subscribe?u=9e5810d743bf898c302d3c312&id=bbc8bab3e7",
            cta: "Abonnez-vous à notre infolettre",
            image: surveyMonkeyIcon
        },
        atSign: {
            url: "mailto:csps.digitalacademy-academiedunumerique.efpc@canada.ca",
            cta: "Contactez-nous",
            image: emailIcon
        },
        standingDoc: {
            url: "https://expo.da-an.ca/Virtual-Kiosk/static/documents/DigitalAcademy_BLF_Placemat_FR.pdf",
            cta: "Que se passe-t-il à l’Académie du numérique? Cliquez pour le savoir.",
            image: placematIcon
        },
        twitterIcon: {
            url: "https://twitter.com/AcademieNumCAN",
            cta: "Suivez-nous sur Twitter.",
            image: twitterIcon
        },
        tvScreen: {
            url: "https://www.youtube.com/watch?v=2XH96AQ0NGE",
            cta: "Qu’est-ce qu’être numérique. Visionnez la vidéo.",
            image: talkDigitalNeilIcon
        }
    },
    discoverSeries: {
        standingDoc: {
            url: "https://expo.da-an.ca/Virtual-Kiosk/static/documents/DiscoverSeries_FR.pdf",
            cta: "Apprenez au sujet de la nouvelle série Découverte",
            image: discoverSeriesIcon
        }
    }
}