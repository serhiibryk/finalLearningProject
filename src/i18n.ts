import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: "en",
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          or: "Or",
          email: "Email",
          password: "Password",
          menuLogIn: "Log in",
          menuProfile: "Profile",
          menuVehicles: "Vehicles",
          menuStarships: "Starships",
          menuSpecies: "Species",
          menuPlanets: "Planets",
          menuFilms: "Films",
          menuPeople: "People",
          menuMain: "Main",
          menuLogOut: "Log Out",
          logIn: "Log in",
          registerLink: "Register now!",
          rights: "All rights reserved",
          search: "input to search",
          nameOfPeople: "Name of people:",
          birthDayOfPeople: "Birth-year of people:",
          gender: "Gender:",
          created: "Created",
          edited: "Edited",
          eye: "Eye color:",
          hair: "Hair color:",
          height: "Height:",
          homeworld: "Homeworld:",
          mass: "Mass:",
          skin: "Skin color:",
        },
      },
      ua: {
        translation: {
          or: "Або",
          email: "Пошта",
          password: "Пароль",
          menuLogIn: "Вхід",
          menuProfile: "Про-файл",
          menuVehicles: "Транспорт",
          menuStarships: "Зоряні кораблі",
          menuSpecies: "Раси",
          menuPlanets: "Планети",
          menuFilms: "Фільми",
          menuPeople: "Герої",
          menuMain: "Головна",
          menuLogOut: "Вихід",
          logIn: "Вхід",
          registerLink: "Реєстрація зараз!",
          rights: "Всі права захищені",
          search: "Введіть для пошуку",
          nameOfPeople: "Ім'я людини:",
          birthDayOfPeople: "День народження людини:",
          gender: "Стать:",
          created: "Дата створення:",
          edited: "Дата редактування:",
          eye: "Колір очей:",
          hair: "Колір волосся:",
          height: "Зріст:",
          homeworld: "БФТЬКІВЩИНА-МАТИ",
          mass: "Вага",
          skin: "Колір шкіри:",
        },
      },
    },
  });

export default i18n;
