import busridesIcon from '../assets/icons/busrides.png';
import cspsIcon from '../assets/icons/csps.png';
import discoverSeriesIcon from '../assets/icons/discoverSeries.png';
import emailIcon from '../assets/icons/email.png';
import surveyMonkeyIcon from '../assets/icons/surveyMonkey.png';
import talkDigitalNeilIcon from '../assets/icons/talkDigitalNeil.jpg';
import twitterIcon from '../assets/icons/twitter.png';
import discoverSeries from '../assets/documents/DiscoverSeries_FR.pdf';

export default {
    "getLocale": "fr",
    "getOppositeLocale": "en",
    "getOppositeLang": "English",
    "headerTitle": "Kiosque virtual de l'Académie du numérique de l'ÉFPC (Beta)",
    busrides: {
        projectName: "Trajets en bus",
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
    discoverSeries: {
        projectName: "Série découverte",
        standingDoc: {
            url: discoverSeries,
            cta: "Apprenez au sujet de la nouvelle série Découverte",
            image: discoverSeriesIcon
        }
    },
    csps: {
        projectName: "ÉFPC",
        tvScreen: {
            url: "https://www.youtube.com/watch?v=2XH96AQ0NGE",
            cta: "Qu’est-ce qu’être numérique. Visionnez la vidéo.",
            image: talkDigitalNeilIcon
        },
        standingDoc: {
            url: "https://learn-apprendre.ca/course/view.php?id=61",
            cta: "Travail virtuel: Conseils pratiques pour la transition vers le télétravail",
            image: cspsIcon
        },
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
        twitterIcon: {
            url: "https://twitter.com/AcademieNumCAN",
            cta: "Suivez-nous sur Twitter.",
            image: twitterIcon
        }
    }
}