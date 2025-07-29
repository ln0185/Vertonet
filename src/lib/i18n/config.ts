import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          navigation: {
            home: "Home",
            events: "Events",
            about: "About Us",
            projects: "Projects",
            news: "News",
            podcast: "Podcast",
            contact: "Contact Us",
          },
          about: {
            title: "What is Vertonet?",
            description:
              "Our goal is to create a platform for women and non-binary individuals in various roles within the industry to connect, learn, and support each other",
            readMore: "Read about Vertonet",
          },
          cta: {
            title:
              "Would your company like to host an event in collaboration with Vertonet?",
            description:
              "We are always looking for new and exciting opportunities to strengthen our network and create a platform for women and non-binary individuals in IT.",
            contact: "Contact Us",
          },
          register: {
            title: "Join the organization",
            description: "Get invited to the next event",
            name: "Name",
            namePlaceholder: "Enter your name",
            email: "Email",
            emailPlaceholder: "Enter your email",
            submit: "Register now",
          },
          aboutPage: {
            label: "ABOUT US",
            boardLabel: "BOARD",
            content: {
              p1: "Vertonet is a combination of two words: 'verto', which is the Latin word for transformation, and 'net', which stands for network. Vertonet is an organization for women and non-binary individuals in the tech industry in Iceland. The organization's goal is to create a platform for women and non-binary individuals to connect, learn, support each other, and last but not least, to increase diversity in the field.",
              p2: "Vertonet hosts various events in collaboration with leading tech companies in Iceland and runs projects that promote diversity in the tech industry.",
              p3: "Vertonet has about 1000 members consisting of women and non-binary individuals who work in the tech industry or are interested in the field. By becoming a member of the organization, you get access to the events organized by the organization and information about the status of the projects the organization is involved in. The events give members the opportunity to expand their network, meet leading role models in the sector, and gain inspiration and education.",
              p4: "Vertonet has also led larger projects focusing on increasing diversity in the field in collaboration with leading tech companies and educational institutions in Iceland.",
            },
            boardMember: {
              title: "Web Manager and Media Representative",
              linkedinAlt: "LinkedIn",
            },
            imageAlts: {
              event: "Vertonet event",
              activity: "Vertonet activity",
              workshop: "Vertonet workshop",
              team: "Vertonet team",
            },
          },
          eventsPage: {
            upcomingEvents: "Upcoming Events",
            pastEvents: "Past Events",
            location: "Location",
            companyVisit: "Company Visit to",
            upcomingList: [
              {
                title: "Company Visit to Gangverk",
                location: "Ármúli 6, 108 Reykjavík",
                date: "September 18, 2025, 14:00",
              },
              {
                title: "Company Visit to Advania",
                location: "Guðrúnartún 10, 105 Reykjavík",
                date: "October 24, 2025, 17:00",
              },
              {
                title: "Company Visit to Kolibri",
                location: "Borgartún 26, Reykjavík",
                date: "January 14, 2026, 17:00",
              },
              {
                title: "Company Visit to Aranja",
                location: "Nóatún 17, 105 Reykjavík",
                date: "February 23, 2025, 14:00",
              },
              {
                title: "Company Visit to Overcast",
                location: "Höfðabakka 9D, 110 Reykjavík",
                date: "March 18, 2025, 17:00",
              },
            ],
            pastList: [
              {
                title: "Company Visit to Syndis",
                location: "Skeifan 19, 108 Reykjavík",
                date: "February 15, 2025, 17:00",
              },
              {
                title: "Company Visit to Origo",
                location: "Borgartún 37, 105 Reykjavík",
                date: "January 12, 2025, 14:00",
              },
              {
                title: "Company Visit to TM Software",
                location: "Borgartún 37, 105 Reykjavík",
                date: "November 23, 2026, 17:00",
              },
            ],
          },
        },
      },
      is: {
        translation: {
          navigation: {
            home: "Heim",
            events: "Viðburðir",
            about: "Um okkur",
            projects: "Átaksverkefni",
            news: "Fréttir",
            podcast: "Hlaðvarp",
            contact: "Hafa samband",
          },
          about: {
            title: "Hvað er Vertonet ?",
            description:
              "Markmið okkar er að skapa vettvang fyrir konur og kvár í margvíslegum störfum innan atvinnugreinarinnar til þess að tengjast, fræðast og styðja hvert annað",
            readMore: "Lesa um Vertonet",
          },
          cta: {
            title:
              "Vill þitt fyrirtæki halda viðburð í samstarfi við Vertonet?",
            description:
              "Við erum alltaf á höttunum eftir nýjum og spennandi tækifærum til að efla tengslanet okkar og skapa vettvang fyrir konur og kvár í upplýsingatækni.",
            contact: "Hafa samband",
          },
          register: {
            title: "Skráðu þig í samtökin",
            description: "Fáðu boð á næsta viðburð",
            name: "Nafn",
            namePlaceholder: "Skrifaðu nafnið þitt",
            email: "Netfang",
            emailPlaceholder: "Skrifaðu netfangið þitt",
            submit: "Skrá mig núna",
          },
          aboutPage: {
            label: "UM OKKUR",
            boardLabel: "STJÓRN",
            content: {
              p1: "Vertonet er samskeyti tveggja orða, verto, sem er latneska orðið fyrir umbreytingar, og net, sem stendur fyrir tengslanet. Vertonet eru samtök kvenna og kvára í upplýsingatækni á Íslandi. Markmið samtakanna er að skapa vettvang fyrir konur og kvár til að tengjast, fræðast, styðja hvert annað og síðast en ekki síst að auka fjölbreytileika í greininni.",
              p2: "Vertonet heldur margvíslega viðburði í samstarfi við helstu upplýsingatæknifyrirtæki á Íslandi og stendur fyrir verkefnum sem stuðla að því að auka fjölbreytileika í upplýsingatækni.",
              p3: "Meðlimir Vertonet eru um 1000 talsins og samanstanda af konum og kvár sem starfa í upplýsingatækni eða hafa áhuga á greininni. Með því að gerast meðlimur samtakanna færð þú aðgang að þeim viðburðum sem samtökin standa fyrir og upplýsingar um stöðu þeirra verkefna sem samtökin koma að. Viðburðirnir gefa meðlimum tækifæri á að stækka tengslanetið, kynnast helstu fyrirmyndum í geiranum og fá innblástur og fræðslu.",
              p4: "Vertonet hefur einnig staðið fyrir stærri verkefnum með áherslu á að auka fjölbreytileika í greininni í samstarfi við helstu upplýsingatæknifyrirtæki og menntastofnanir á Íslandi.",
            },
            boardMember: {
              title: "Vefstjóri og fjölmiðlafulltrúi",
              linkedinAlt: "LinkedIn",
            },
            imageAlts: {
              event: "Vertonet viðburður",
              activity: "Vertonet starfsemi",
              workshop: "Vertonet vinnustofa",
              team: "Vertonet teymi",
            },
          },
          eventsPage: {
            upcomingEvents: "Viðburðir á döfinni",
            pastEvents: "Fyrri viðburðir",
            location: "Staðsetning",
            companyVisit: "Fyrirtækjaheimsókn til",
            upcomingList: [
              {
                title: "Fyrirtækjaheimsókn til Gangverk",
                location: "Ármúli 6, 108 Reykjavík",
                date: "18. september 2025, 14:00",
              },
              {
                title: "Fyrirtækjaheimsókn til Advania",
                location: "Guðrúnartún 10, 105 Reykjavík",
                date: "24. október 2025, 17:00",
              },
              {
                title: "Fyrirtækjaheimsókn til Kolibri",
                location: "Borgartún 26, Reykjavík",
                date: "14. janúar 2026, 17:00",
              },
              {
                title: "Fyrirtækjaheimsókn til Aranja",
                location: "Nóatún 17, 105 Reykjavík",
                date: "23. februar 2025, 14:00",
              },
              {
                title: "Fyrirtækjaheimsókn til Overcast",
                location: "Höfðabakka 9D, 110 Reykjavík",
                date: "18. mars 2025, 17:00",
              },
            ],
            pastList: [
              {
                title: "Fyrirtækjaheimsókn til Syndis",
                location: "Skeifan 19, 108 Reykjavík",
                date: "15. febrúar 2025, 17:00",
              },
              {
                title: "Fyrirtækjaheimsókn til Origo",
                location: "Borgartún 37, 105 Reykjavík",
                date: "12. janúar 2025, 14:00",
              },
              {
                title: "Fyrirtækjaheimsókn til TM Software",
                location: "Borgartún 37, 105 Reykjavík",
                date: "23. nóvember 2026, 17:00",
              },
            ],
          },
        },
      },
    },
    fallbackLng: "is",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
