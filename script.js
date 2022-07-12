const quoteText = document.querySelector(".quote")


var quotes = [
    'Действительно, если наше отношение к процессу образования отходов не изменится, все усилия будут нивелированы настоящими горами из мусора. <br><br> <span>И. Р. Метшин</span>',
    'Без булдырабыз <br><br>  <span>М.Ш. Шаймиев</span>',
    'Социальные проекты являются достоянием региона. Их реализация даёт возможность существенно улучшить жизнь населения в разных возрастных категориях <br><br> <span>М. Ш. Шаймиев</span>',
    'В меру наших возможностей мы всегда готовы помогать  -И. Р. Метшин',
    '– Важно не упускать момент. Как революцию когда-то объявлял известный наш товарищ, который не закончил Казанский университет, – вечером еще рано, утром уже поздно, есть только ночь. <br><br>  <span>И. Р. Метшин</span>',
    'Если рядом по соседству будут стоять предприниматели, которые как казаки-разбойники прибежали-убежали, то, конечно, всем нашим усилиям будет грош цена <br><br> <span>М. Ш. Шаймиев</span>',
];

var bgimage = [
    './imgs/kazan1.jpg',
    './imgs/kazan2.jpg',
    './imgs/kazan3.jpg',
    './imgs/kazan4.jpg',
    './imgs/kazan_03.jpg',
];

var positioning = [
    'flex-direction: inherit; align-items: end',
    'flex-direction: inherit; align-items: start',
    '',
    ''
]

window.onload = function(){
    $('.welcome').css({'background-image':'url(' + bgimage[Math.floor(Math.random()*bgimage.length)] + ')'});
    $('.quote').html(quotes[Math.floor(Math.random()*quotes.length)])
    }