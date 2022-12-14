interface IRouterListFunc {
  key: string;
  label: string;
  privat: boolean;
}

export const routerListFunc = (t: (a: string) => string): IRouterListFunc[] => {
  return [
    {
      key: '/',
      label: t('menuMain'),
      privat: true,
    },
    {
      key: '/people',
      label: t('menuPeople'),
      privat: true,
    },
    {
      key: '/films',
      label: t('menuFilms'),
      privat: true,
    },
    {
      key: '/planets',
      label: t('menuPlanets'),
      privat: true,
    },
    {
      key: '/species',
      label: t('menuSpecies'),
      privat: true,
    },
    {
      key: '/starships',
      label: t('menuStarships'),
      privat: true,
    },
    {
      key: '/vehicles',
      label: t('menuVehicles'),
      privat: true,
    },
    {
      key: '/profile',
      label: t('menuProfile'),
      privat: true,
    },
    {
      key: '/login',
      label: t('menuLogIn'),
      privat: false,
    },
  ];
};

export const imgMainList = [
  {
    imgLink:
      'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2F2018%2F08%2Fmost-influential-star-wars-characters.jpg',
    // imgPath: "/films",
  },
  {
    imgLink: 'https://i.pinimg.com/736x/7a/41/db/7a41db4b2d1a61809a8ffa43c983042f--star-ears-star-wars-planets.jpg',
    // imgPath: "/peoples",
  },
  {
    imgLink: 'https://cdn.mos.cms.futurecdn.net/sgQUU6si9oqQzR63ePMssa.jpg',

    // imgPath: "/planets",
  },
  {
    imgLink:
      'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/04/Split-image-of-Jar-Jar-Binks-a-Bothan-and-Bossk-in-star-wars-feature.jpg',
    // imgPath: "/species",
  },
  {
    imgLink:
      'https://media.wired.com/photos/5dfbd524f3e943000879987a/master/pass/Culture_MilitaryStarWars_MCDSTWA_WD041.jpg',

    // imgPath: "/starships",
  },
  {
    imgLink: 'https://papik.pro/en/uploads/posts/2022-06/1654937440_1-papik-pro-p-star-wars-picture-ship-2.png',
    // imgPath: "/vehicles",
  },
];

export const imgFilmsList = [
  {
    imgLink:
      'https://images.squarespace-cdn.com/content/5d417b038660c90001136348/1578565335015-SJ6ER4131F8N3HE933WD/VitriArt_Star+Wars+Episde+IV%2C+a+new+hope%2C+1977_24x32in.jpg?content-type=image%2Fjpeg',
  },
  {
    imgLink:
      'https://cdn.shopify.com/s/files/1/1057/4964/products/The-Empire-Strikes-Back-Vintage-Movie-Poster-Original-British-Quad-30x40-6682.jpg?v=1637643666',
  },
  {
    imgLink:
      'https://cdn20.pamono.com/p/s/5/9/593964_yaneshw35r/star-wars-return-of-the-jedi-poster-by-josh-kirby-1983.jpg',
  },
  {
    imgLink:
      'https://c8.alamy.com/comp/HCMRXB/star-wars-episode-i-the-phantom-menace-us-poster-art-back-from-left-HCMRXB.jpg',
  },
  {
    imgLink:
      'https://i.discogs.com/EXshiJenjf01Q93JcSCMI1ootwRM3JDr3oVJDOI199I/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3NDAy/NjktMTM4MTU2ODUx/Ni0xMTYzLmpwZWc.jpeg',
  },
  {
    imgLink: 'https://preview.redd.it/6rjgebt013171.jpg?auto=webp&s=ac1c631a016a29bac14f513f280540c27cda5c01',
  },
];

export const imgPeopleList = [
  {
    imgLink: 'https://img3.goodfon.com/wallpaper/nbig/b/6b/star-wars-luke-skywalker-846.jpg',
  },
  {
    imgLink: 'https://images3.alphacoders.com/641/641532.jpg',
  },
  {
    imgLink: 'https://cdn.wallpapersafari.com/77/81/U6TILx.jpg',
  },
  {
    imgLink: 'https://wallpapercave.com/wp/wp10759738.jpg',
  },
  {
    imgLink: 'https://images.alphacoders.com/584/584836.jpg',
  },
  {
    imgLink: 'https://lumiere-a.akamaihd.net/v1/images/owen-lars-bio-5_dd84f781.jpeg?region=0%2C0%2C1280%2C720',
  },
  {
    imgLink:
      'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/08/Uncle-Own-Aunt-Beru-Facts-Restaurant.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5',
  },
  {
    imgLink:
      'https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=960',
  },
  {
    imgLink: 'https://www.therpf.com/forums/attachments/star-wars4-movie-screencaps-com-13175-jpg.817490/',
  },
  {
    imgLink: 'https://img2.goodfon.com/wallpaper/nbig/e/61/star-wars-obi-wan-kenobi-ben-6754.jpg',
  },
];

export const imgPlanetsList = [
  {
    imgLink: 'https://www.pixelstalk.net/wp-content/uploads/2016/05/Death-Star-Backgrounds.jpg',
  },
  {
    imgLink: 'https://www.pixelstalk.net/wp-content/uploads/2016/05/Death-Star-Backgrounds.jpg',
  },
  {
    imgLink: 'https://www.pixelstalk.net/wp-content/uploads/2016/05/Death-Star-Backgrounds.jpg',
  },
  {
    imgLink: 'https://www.pixelstalk.net/wp-content/uploads/2016/05/Death-Star-Backgrounds.jpg',
  },
  {
    imgLink: 'https://www.pixelstalk.net/wp-content/uploads/2016/05/Death-Star-Backgrounds.jpg',
  },
  {
    imgLink: 'https://www.pixelstalk.net/wp-content/uploads/2016/05/Death-Star-Backgrounds.jpg',
  },
  {
    imgLink: 'https://www.pixelstalk.net/wp-content/uploads/2016/05/Death-Star-Backgrounds.jpg',
  },
  {
    imgLink: 'https://www.pixelstalk.net/wp-content/uploads/2016/05/Death-Star-Backgrounds.jpg',
  },
  {
    imgLink: 'https://www.pixelstalk.net/wp-content/uploads/2016/05/Death-Star-Backgrounds.jpg',
  },
  {
    imgLink: 'https://www.pixelstalk.net/wp-content/uploads/2016/05/Death-Star-Backgrounds.jpg',
  },
];

export const imgSpeciesList = [
  {
    imgLink: 'https://c4.wallpaperflare.com/wallpaper/865/687/666/star-wars-yoda-jedi-wallpaper-preview.jpg',
  },
  {
    imgLink: 'https://c4.wallpaperflare.com/wallpaper/865/687/666/star-wars-yoda-jedi-wallpaper-preview.jpg',
  },
  {
    imgLink: 'https://c4.wallpaperflare.com/wallpaper/865/687/666/star-wars-yoda-jedi-wallpaper-preview.jpg',
  },
  {
    imgLink: 'https://c4.wallpaperflare.com/wallpaper/865/687/666/star-wars-yoda-jedi-wallpaper-preview.jpg',
  },
  {
    imgLink: 'https://c4.wallpaperflare.com/wallpaper/865/687/666/star-wars-yoda-jedi-wallpaper-preview.jpg',
  },
  {
    imgLink: 'https://c4.wallpaperflare.com/wallpaper/865/687/666/star-wars-yoda-jedi-wallpaper-preview.jpg',
  },
  {
    imgLink: 'https://c4.wallpaperflare.com/wallpaper/865/687/666/star-wars-yoda-jedi-wallpaper-preview.jpg',
  },
  {
    imgLink: 'https://c4.wallpaperflare.com/wallpaper/865/687/666/star-wars-yoda-jedi-wallpaper-preview.jpg',
  },
  {
    imgLink: 'https://c4.wallpaperflare.com/wallpaper/865/687/666/star-wars-yoda-jedi-wallpaper-preview.jpg',
  },
  {
    imgLink: 'https://c4.wallpaperflare.com/wallpaper/865/687/666/star-wars-yoda-jedi-wallpaper-preview.jpg',
  },
];

export const imgStarshipsList = [
  {
    imgLink: 'https://i.pinimg.com/736x/3f/f8/61/3ff861e68286843a327b349be9c66f67--starship-enterprise-star-trek.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/3f/f8/61/3ff861e68286843a327b349be9c66f67--starship-enterprise-star-trek.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/3f/f8/61/3ff861e68286843a327b349be9c66f67--starship-enterprise-star-trek.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/3f/f8/61/3ff861e68286843a327b349be9c66f67--starship-enterprise-star-trek.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/3f/f8/61/3ff861e68286843a327b349be9c66f67--starship-enterprise-star-trek.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/3f/f8/61/3ff861e68286843a327b349be9c66f67--starship-enterprise-star-trek.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/3f/f8/61/3ff861e68286843a327b349be9c66f67--starship-enterprise-star-trek.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/3f/f8/61/3ff861e68286843a327b349be9c66f67--starship-enterprise-star-trek.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/3f/f8/61/3ff861e68286843a327b349be9c66f67--starship-enterprise-star-trek.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/3f/f8/61/3ff861e68286843a327b349be9c66f67--starship-enterprise-star-trek.jpg',
  },
];

export const imgVehiclesList = [
  {
    imgLink: 'https://i.pinimg.com/736x/98/02/b9/9802b9000f433c5081559165f37a09f0.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/98/02/b9/9802b9000f433c5081559165f37a09f0.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/98/02/b9/9802b9000f433c5081559165f37a09f0.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/98/02/b9/9802b9000f433c5081559165f37a09f0.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/98/02/b9/9802b9000f433c5081559165f37a09f0.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/98/02/b9/9802b9000f433c5081559165f37a09f0.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/98/02/b9/9802b9000f433c5081559165f37a09f0.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/98/02/b9/9802b9000f433c5081559165f37a09f0.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/98/02/b9/9802b9000f433c5081559165f37a09f0.jpg',
  },
  {
    imgLink: 'https://i.pinimg.com/736x/98/02/b9/9802b9000f433c5081559165f37a09f0.jpg',
  },
];

export const localStoreService = {
  get: (key: string, initValue: string = 'null') => {
    const res = JSON.parse(localStorage.getItem(key) ?? initValue);

    return res;
  },
  set: (key: string, data: string | string[]) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  remove: (item: string) => {
    localStorage.removeItem(item);
  },
};

export const mainError = 'Something went wrong!';

export const pallet = (isDarkMode: boolean) => {
  if (isDarkMode) {
    return {
      dark: 'black',
      color: 'white',
      backGround: '#313442',
      backGroundHeader: 'rgb(0 22 40)',
    };
  }
  return {
    dark: 'white',
    color: 'black',
    backGround: '#e2e2e2',
    backGroundHeader: '#8aa1b9',
  };
};
