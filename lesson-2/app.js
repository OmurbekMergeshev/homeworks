// 1)
let movies = {
 name: 'Wednesday',
 releaseData: '23/11/2022',
 mainActor: 'Дженна Ортега, Гвендолин Кристи, Рики Линдхоум, Джейми МакШейн, Хантер Дуэн',
 episodes: '8',
 fantasy: {
  month: 'October',
  comment: 'The best film I have ever watch!!!'
 },
}
let currMovieName = 'Сериал:' + ' ' + movies.name
let currReleaseData = 'Был выпущен:' + ' ' + movies.releaseData + ' ' + 'года'
let currMainActor =  'В главных ролях:' + ' ' + movies.mainActor
let currEpisode = movies.name + ' ' + movies.episodes + ' ' + 'серий'
let currFantasy = 'Realise month:' + ' ' + movies.fantasy.month + ' ' + 'and comment' + ' ' + movies.fantasy.comment

console.log(currMovieName)
console.log(currReleaseData)
console.log(currMainActor)
console.log(currEpisode)
console.log(currFantasy)

// 2)
let dayData ='Saturday'

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