import { getRandomInteger } from "./utils.js";

const DESCRIPTIONS = [
  "Закат над городом",
  "Уютный вечер с книгой",
  "Горная тропа на рассвете",
  "Кофе в любимой кружке",
  "Тихий пляж с белым песком",
  "Улица, утопающая в огнях",
  "Лесное озеро в тумане",
  "Цветы в саду после дождя",
  "Краски осени в парке",
  "Домашний пирог на кухонном столе",
  "Мгновение перед бурей",
  "Улыбка друга в путешествии",
  "Город с высоты птичьего полета",
  "Пустынная дорога под ярким солнцем",
  "Ночные звезды над палаткой",
  "Архитектура старинного замка",
  "Шумный рынок в центре города",
  "Мирный день у реки",
  "Новый день, новые горизонты",
  "Старинный мост через реку",
  "Чистое небо после дождя",
  "Рассвет над морем",
  "Свет фар на вечерней дороге",
  "Мягкий свет свечи",
  "Ветер в поле пшеницы",
];

const NAMES = [
  "Алексей",
  "Мария",
  "Дмитрий",
  "Екатерина",
  "Иван",
  "Анастасия",
  "Сергей",
  "Ольга",
  "Николай",
  "Татьяна",
  "Владимир",
  "Юлия",
  "Андрей",
  "Елена",
  "Максим",
  "Светлана",
  "Константин",
  "Анна",
  "Павел",
  "Ирина",
  "Виктор",
  "Наталья",
  "Роман",
  "Людмила",
  "Олег",
  "Марина",
  "Артур",
  "Вера",
  "Григорий",
  "Алёна",
];

const MESSAGES = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

const getRandomComment = (_, index) => {
  const randomMessageIndex = getRandomInteger(0, MESSAGES.length - 1);
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);

  return {
    id: index,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: MESSAGES[randomMessageIndex],
    name: NAMES[randomNameIndex],
  };
};

const createPostDescription = (_, index) => {
  const indexStr = index.toString();
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);
  const commentsCount = getRandomInteger(0, 30);
  const commentsArr = Array.from({ length: commentsCount }, getRandomComment);

  return {
    id: index,
    url: `photos/${indexStr}.jpg`,
    description: DESCRIPTIONS[randomDescriptionIndex],
    likes: getRandomInteger(15, 200),
    comments: commentsArr,
  };
};

export { createPostDescription, getRandomComment };
