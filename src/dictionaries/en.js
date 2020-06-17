import busridesIcon from '../assets/icons/busrides.png';
import cspsIcon from '../assets/icons/csps.png';
import discoverSeriesIcon from '../assets/icons/discoverSeries.png';
import emailIcon from '../assets/icons/email.png';
import surveyMonkeyIcon from '../assets/icons/surveyMonkey.png';
import placematIcon from '../assets/icons/placemat.png';
import talkDigitalNeilIcon from '../assets/icons/talkDigitalNeil.jpg';
import twitterIcon from '../assets/icons/twitter.png';
import discoverSeries from '../assets/documents/DiscoverSeries_EN.pdf';
import placematBLF from '../assets/documents/Digital_Academy_BLF_Placemat_EN.pdf';

export default {
    "getLocale": "en",
    "getOppositeLocale": "fr",
    "getOppositeLang": "Français",
    busrides: {
        projectName: "Busrides",
        laptop: {
            url: "https://busrides-trajetsenbus.ca/",
            cta: "GC nuance meets digital know-how - Visit Busrides.ca",
            image: busridesIcon
        },
        standingDoc: {
            url: "https://busrides-trajetsenbus.ca/en/going-remote-guide/",
            cta: "Over 4,000 of your peers are reading the Going Remote Guide, find out why!",
            image: busridesIcon
        }
    },
    discoverSeries: {
        projectName: "Discover Series",
        standingDoc: {
            url: discoverSeries,
            cta: "Learn about the new Discover Series",
            image: discoverSeriesIcon
        }
    },
    csps: {
        projectName: "CSPS",
        tvScreen: {
            url: "https://www.youtube.com/watch?v=TZ-TA44WWHc",
            cta: "What does it mean to be digital. Watch the video.",
            image: talkDigitalNeilIcon
        },
        standingDoc: {
            url: placematBLF,
            cta: "What’s going on at Digital Academy? Click to find out.",
            image: placematIcon
        },
        computerScreen: {
            url: "https://www.csps-efpc.gc.ca/digital-academy/index-eng.aspx",
            cta: "We help public servants become digital. Discover Digital Academy.",
            image: cspsIcon
        },
        envelope: {
            url: "https://da-an.us3.list-manage.com/subscribe?u=9e5810d743bf898c302d3c312&id=bbc8bab3e7",
            cta: "Subscribe to our newsletter.",
            image: surveyMonkeyIcon
        },
        atSign: {
            url: "mailto:csps.digitalacademy-academiedunumerique.efpc@canada.ca",
            cta: "Contact us",
            image: emailIcon
        },
        twitterIcon: {
            url: "https://twitter.com/DigiAcademyCAN",
            cta: "Follow us on Twitter.",
            image: twitterIcon
        }
    }
}