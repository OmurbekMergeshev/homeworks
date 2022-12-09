// 1)
let movies = {
 name: 'Wednesday',
 releaseData: '23/11/2022',
 mainActor: 'Дженна Ортега, Гвендолин Кристи, Рики Линдхоум, Джейми МакШейн, Хантер Дуэн',
 episodes: 'Серии-8',
 fantasy: {
  month: 'October',
  comment: 'The best film I have ever watch!!!'
 },
}
console.log(movies.name,movies.releaseData)
console.log( movies.mainActor)
console.log(movies.episodes)
console.log(movies.fantasy.month,movies.fantasy.comment)



// 2) 
let dayData ='Friday'

switch (dayData) {
 case 'Monday':
 case 'monday':
  console.log('Понедельник');
  break;
 case 'Tuesday':
 case 'tuesday':
  console.log('Вторник');
  break;
 case 'Wednesday':
 case 'wednesday':
  console.log('Среда');
  break;
 case 'Thursday':
 case 'thursday':
  console.log('Четверг');
  break;
 case 'Friday':
 case 'friday':
  console.log('Пятница');
  break;
 case 'Saturday':
 case 'saturday':
  console.log('Суббота');
  break;
 case 'Sunday':
 case 'sunday':
  console.log('Воскресенье');
  break;
 default:
  console.log("Неверный день!")
  break;
}