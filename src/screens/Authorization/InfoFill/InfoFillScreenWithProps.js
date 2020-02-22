import {withProps} from 'recompose';
import InfoFillScreen from './InfoFillScreen';

const InfoFillScreenWithProps = withProps({
  icons: [
    {
      id: 0,
      src: require('../../../assets/barNavigationLeftIcon.png'),
    },
    {
      id: 1,
      src: require('../../../assets/barNavigationCenterIcon.png'),
    },
    {
      id: 2,
      src: require('../../../assets/barNavigationRightIcon.png'),
    },
  ],
  secondoryIcons: [
    {
      id: 3,
      src: require('../../../assets/editIcon.png'),
      containerStyle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginRight: 44,
      },
    },
    {
      id: 4,
      src: require('../../../assets/userImage.png'),
      containerStyle: {
        width: 118,
        height: 118,
        borderRadius: 59,
        backgroundColor: '#D4DCE6',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      },
    },
    {
      id: 5,
      src: require('../../../assets/settingsIcon.png'),
      containerStyle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginLeft: 44,
      },
    },
  ],
  userInfo: 'Ирин Иванов, 29',
  activeInfo: {
    name: 'activeStatus',
    label: 'Активен',
  },
  videoInfo: {
    title: 'Видеорезюме',
    text:
      'Тут пока пусто. Запишите видеорезюме продолжительностью до 1 минуты.',
    image: require('../../../assets/video.png'),
    addImage: require('../../../assets/addIcon.png'),
  },
  jobTypeTitle: 'Я ишу',
  jobTypes: [
    {
      id: 6,
      name: 'partTime',
      title: 'Временная работа',
    },
    {
      id: 7,
      name: 'fullTime',
      title: 'Постоянная работа',
    },
  ],
  startDate: 'Желаемая дата выхода',
  calendarButton: {
    openCalendar: 'Открыть календарь',
    closeCalendar: 'Закрыть календарь',
    image: require('../../../assets/openCalendar.png'),
  },
  wishedPosition: {
    underline: true,
    name: 'wishedPosition',
    placeholder: 'Введите желаемую должность',
    placeholderTextColor: '#000000',
    title: 'Желаемая должность',
  },
  jobPositionPicker: {
    label: 'Сфера деятельности',
    values: [{value: 'ИТ'}, {value: 'Недвижимость'}],
    placeholder: 'Выберите из списка',
  },
  addPosition: {
    addPositionImage: require('../../../assets/addPosition.png'),
    addPositionText: 'Добавить сферу деятельности',
  },

  mainInfo: 'Основная информация',
  birthInfo: {
    underline: true,
    name: 'birthInfo',
    title: 'Дата рождения',
    placeholder: 'Введите дату рождения',
  },
  mainLocationTitle: 'Пол',
  sex: [
    {
      id: 6,
      name: 'man',
      title: 'Женщина',
    },
    {
      id: 7,
      name: 'woomen',
      title: 'Мужчина',
    },
  ],
  mainLocations: [
    {
      id: 1,
      label: 'Город',
      values: [{value: 'Москва'}, {value: 'Питер'}],
      placeholder: 'Выберите из списка',
    },
    {
      id: 2,
      label: 'Станция метро',
      values: [{value: 'metro1'}, {value: 'metro2'}],
      placeholder: 'Выберите из списка',
    },
  ],
  aboutUser: {
    underline: true,
    name: 'aboutUser',
    title: 'О себе',
    placeholder:
      'Расскажите работадателю кратко о своих сильных сторонах и ключевых навыках',
    multiline: true,
    placeholderTextColor: '#757575',
  },
  photoInfo: {
    name: 'photoInfo',
    title: 'Мои фото',
    text:
      'Тут пока пусто.Добавьте сюда свои первые фотографии (до 5 фотографий).',
    image: require('../../../assets/takePhotoIcon.png'),
    addImage: require('../../../assets/addIcon.png'),
    options: {
      title: 'Выберите Аватар',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    },
  },
  workExperience: {
    name: 'workExperience',
    title: 'Опыт работы',
    experience: {
      label: 'Стаж',
      values: [{value: '1'}, {value: '2'}, {value: '5'}],
      placeholder: 'Введите срок стажа',
    },
    company: [
      {
        underline: true,
        id: 1,
        name: 'experiencePosition',
        placeholder: 'Введите должность',
        placeholderTextColor: '#000000',
        title: 'Должность',
      },
      {
        underline: true,
        id: 2,
        name: 'company',
        placeholder: 'Введите название компании',
        placeholderTextColor: '#000000',
        title: 'Компания',
      },
      {
        underline: true,
        id: 3,
        name: 'website',
        placeholder: 'Введите сайт компании',
        placeholderTextColor: '#000000',
        title: 'Сайт',
      },
    ],
    dateTitle: 'Период',
    date: [
      {
        underline: true,
        id: 1,
        name: 'dateFrom',
        placeholder: 'Введите дату',
        placeholderTextColor: '#000000',
        title: 'Дата начала работы',
      },
      {
        underline: true,
        id: 2,
        name: 'dateTo',
        placeholder: 'Введите дату',
        placeholderTextColor: '#000000',
        title: 'Дата окончания работы',
      },
    ],

    jobDescription: {
      underline: true,
      name: 'jobdescription',
      title: 'Описание должностных обязанностей',
      placeholder: 'Кратко опишите Ваши должностные обязанности.',
      multiline: true,
      placeholderTextColor: '#757575',
    },
    addPosition: {
      addPositionImage: require('../../../assets/addPosition.png'),
      addPositionText: 'Добавить место работы',
    },
  },
  button: {
    title: 'Сохранить',
    colors: ['#424DE7', '#A34889', '#CE3087'],
  },
})(InfoFillScreen);

export default InfoFillScreenWithProps;
