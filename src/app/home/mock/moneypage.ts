export interface MONEYPAGES {
  id: number;
  name: string;
  type: string;
  imageurl: string;
  text1: string;
  text2: string;
}


export const moneypage: MONEYPAGES[] = [
  {
    id: 1,
    name: '線上抽籤',
    type: 'draw',
    imageurl: '../../assets/icon/燈種圖.png',
    text1: '前路迷茫，神恩指路',
    text2: ''

  },
  {
    id: 2,
    name: '線上點燈',
    type: 'light-detail',
    imageurl: '../../assets/icon/燈種圖.png',
    text1: '光明燈、安太歲、文昌燈/斗、財神燈/斗',
    text2: '華陀燈/斗、姻緣燈'
  }
  ,
  {
    id: 3,
    name: '香油錢',
    type: 'donate',
    imageurl: '../../assets/icon/燈種圖 (1).png',
    text1: '功德無量 隨喜樂捐',
    text2: ''
  }
];
