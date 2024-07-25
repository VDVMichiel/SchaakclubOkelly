import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "Over ons": "About us",
      "Agenda": "Calender",
      "Inloggen": "Sign in",
      "Word lid": "Sign up",
      "Meer informatie": "More information",
      "IntroText": "Chess in Hasselt since 1947!",
      "AboutUsHeader":"CHESS CLUB O'KELLY HASSELT",
      "Oorsprong": "Origin",
      "OorsprongText": "Officially founded on Saturday, February 15, 1947 under the name Cercle Hasselteois d'Echecs. After strong international results by Belgian player Albéric O´Kelly de Galway, the club name was changed to Hasselt Chess Club O'Kelly. In 2005, the club's name was changed to Royal Hasselt Chess Club O'Kelly.",
      "Leden": "Members",
      "LedenText":  "With more than 70 members, the club is among the largest in Belgium.",
      "AgendaText": "Below you can view the club agenda",
      "ContactText": "If you have questions or would like to become a member, please contact us using the form below.",
      "Location":"Location",
      "Name": "Name and surname",
      "Email": "E-mail",
      "Message": "Type your message here.",
      "Mandatory": "This field is mandatory",
      "Submit":"Submit",
      "AgendaFor": "Agenda for",
      "ActivitiesToday": "No activities today.",
      "BlogIntro": "Below you can consult the blog posts."
    }
  },
  fr: {
    translation: {
      "Home": "Accueil",
      "Over ons": "A propos",
      "Agenda": "Calendrier",
      "Inloggen":"Connexion",
      "Word lid": "Rejoindre",
      "Meer informatie": "Plus d'informations",
      "IntroText": "Les échecs à Hasselt depuis 1947 !",
      "AboutUsHeader":"CLUB D'ECHECS O'KELLY HASSELT",
      "Oorsprong": "Origin",
      "OorsprongText": "Officiellement fondé le samedi 15 février 1947 sous le nom de Cercle Hasselteois d'Echecs. Après les bons résultats internationaux du joueur belge Albéric O'Kelly de Galway, le nom du club a été changé en Hasselt Chess Club O'Kelly. En 2005, le club a été rebaptisé Koninklijke Hasseltse Schaakclub O'Kelly.",
      "Leden": "Members",
      "LedenText": "Avec plus de 70 membres, le club est l'un des plus importants de Belgique.",
      "AgendaText": "Vous pouvez consulter l'ordre du jour du club ci-dessous", 
      "ContactText": "Si vous avez des questions ou si vous souhaitez vous inscrire, vous pouvez nous contacter en utilisant le formulaire ci-dessous.",
      "Location":"Localisation",
      "Name": "Prénom et nom",
      "Email": "E-mail",
      "Message": "Tapez votre message ici.",
      "Mandatory": "Ce champ est obligatoire",
      "Submit": "Soumettre",
      "AgendaFor": "Ordre du jour",
      "ActivitiesToday" : "Pas d'activités aujourd'hui",
      "BlogIntro": "Ci-dessous, vous pouvez consulter les articles de blog."
    }
  },
  nl: {
    translation: {
      "Home": "Start",
      "Over ons": "Over ons",
      "Agenda": "Agenda",
      "Inloggen":"Inloggen",
      "Word lid": "Word lid",
      "Meer informatie": "Meer informatie",
      "IntroText": "Schaken in Hasselt sinds 1947!",
      "AboutUsHeader":"SCHAAKCLUB O'KELLY HASSELT",
      "Oorsprong": "Oorsprong",
      "OorsprongText": "Officieel gesticht op zaterdag 15 februari 1947 onder de benaming Cercle Hasselteois d'Echecs. Na sterke internationale resultaten van de Belgische speler Albéric O´Kelly de Galway, werd de clubnaam gewijzigd naar Hasseltste Schaakclub O'Kelly. In 2005 werd de naam van de club veranderd in Koninklijke Hasseltse Schaakclub O'Kelly.",
      "Leden": "Leden",
      "LedenText": "Met meer dan 70 leden hoort de club bij de grootste van België.",
      "AgendaText": "Hieronder kan je de clubagenda raadplegen", 
      "ContactText": "Indien je vragen hebt of lid wilt worden, kan je ons contacteren via onderstaand formulier.",
      "Location":"Locatie",
      "Name": "Voornaam en familienaam",
      "Email": "E-mail",
      "Message": "Typ hier jouw bericht.",
      "Mandatory": "Dit veld is verplicht.",
      "Submit":"Versturen",
      "AgendaFor": "Agenda voor",
      "ActivitiesToday": "Geen activiteiten vandaag.",
      "BlogIntro": "Hieronder kan je de blogposten raadplegen."
    }
  },
}
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'nl',
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });
export default i18n;