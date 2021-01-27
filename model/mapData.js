const Images = [
  {image: require('../assets/banners/food-banner1.jpg')},
  {image: require('../assets/banners/food-banner2.jpg')},
  {image: require('../assets/banners/food-banner3.jpg')},
  {image: require('../assets/banners/food-banner4.jpg')},
];

//receive api and save in this state. 날짜별로 분류가 되어야한다
// 같은 주소가 있으면 색깔이 바뀌어야한다.
export const markers = [
  {
    coordinate: {
      latitude: 37.492067,
      longitude: 126.99357,
    },
    driver: '제리',
    customer: '이소룡님',
    title: '1번 행선지',
    description: '서울시 서초구 반포동 레미안 아파트 10동 1205호',
    //image: Images[0].image,
    //rating: 4,
    //reviews: 99,
  },
  {
    coordinate: {
      latitude: 37.499149,
      longitude: 126.987912,
    },
    driver: '제리',
    customer: '이소룡님',
    title: '2번 행선지',
    description: '주소2',
    //image: Images[1].image,
    // rating: 5,
    //reviews: 102,
  },
  {
    coordinate: {
      latitude: 37.500375,
      longitude: 126.995971,
    },
    driver: '제리',
    customer: '이소룡님',
    title: '3번 행선지',
    description: '주소3',
    //image: Images[2].image,
    //rating: 3,
    //reviews: 220,
  },
  {
    coordinate: {
      latitude: 37.507729,
      longitude: 127.005745,
    },
    driver: '제리',
    customer: '이소룡님',
    title: '4번 행선지',
    description: '주소4',
    //image: Images[3].image,
    // rating: 4,
    // reviews: 48,
  },
  {
    coordinate: {
      latitude: 37.505005,
      longitude: 127.020491,
    },
    driver: '제리',
    customer: '이소룡님',
    title: '5번 행선지',
    description: '주소5',
    //image: Images[3].image,
    //rating: 4,
    //reviews: 178,
  },
];

export const mapDarkStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

export const mapStandardStyle = [
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];
