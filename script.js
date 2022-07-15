const quoteText = document.querySelector(".quote")


var quotes = [
    'Действительно, если наше отношение к процессу образования отходов не изменится, все усилия будут нивелированы настоящими горами из мусора. <br><br> <span>И. Р. Метшин</span>',
    'Без булдырабыз <br><br>  <span>М.Ш. Шаймиев</span>',
    'Социальные проекты являются достоянием региона. Их реализация даёт возможность существенно улучшить жизнь населения в разных возрастных категориях <br><br> <span>М. Ш. Шаймиев</span>',
    'В меру наших возможностей мы всегда готовы помогать  <br><br>  <span> И. Р. Метшин',
    '– Важно не упускать момент. Как революцию когда-то объявлял известный наш товарищ, который не закончил Казанский университет, – вечером еще рано, утром уже поздно, есть только ночь. <br><br>  <span>И. Р. Метшин</span>',
    'Если рядом по соседству будут стоять предприниматели, которые как казаки-разбойники прибежали-убежали, то, конечно, всем нашим усилиям будет грош цена <br><br> <span>М. Ш. Шаймиев</span>',
];

var bgimage = [
    '/imgs/kazan_01.webp',
    '/imgs/kazan_02.webp',
    '/imgs/kazan_03.webp',
    '/imgs/kazan_06.webp',
    '/imgs/kazan_07.webp',
    '/imgs/kazan_09.webp',
    '/imgs/kazan_10.webp',
    '/imgs/kazan_12.webp',
];

var positioning = [
    'top',
    'normal',
    'bottom'

];

var query = window.matchMedia("(min-width: 992px)");
var randomPos = Math.floor(Math.random()*positioning.length);


window.onload = function(){
    $('.welcome').css({'background-image':'url(' + bgimage[Math.floor(Math.random()*bgimage.length)] + ')'});
    $('.quote').html(quotes[Math.floor(Math.random()*quotes.length)])

    if(positioning[randomPos] == positioning[0]){
            $('.welcome__top').css({
                'display':'flex'
            });
            $('.welcome__bottom').css({
                'display':'none'
            });
    } if(positioning[randomPos] == positioning[1]){
        
        $('.welcome__top').css({
            'display':'none'
        });
        $('.welcome__bottom').css({
            'display':'none'
        });
        $('.welcome__main').css({
            'display':'flex'
        });
    } if(positioning[randomPos] == positioning[2]){
            $('.welcome__top').css({
                'display':'none'
            });
            $('.welcome__bottom').css({
                'display':'flex'
            });
    }   
};

var mq = window.matchMedia("(max-width: 992px)")

function handleChanges(e){
    if(e.matches){
        console.log('changes')
            $('.welcome__top').css({
                'display':'none'
            });
            $('.welcome__bottom').css({
                'display':'none'
            });
            $('.welcome__main').css({
                'display':'flex'
            });
    } else{
        if(positioning[randomPos] == positioning[0]){
            $('.welcome__top').css({
                'display':'flex'
            });
            $('.welcome__bottom').css({
                'display':'none'
            });
            $('.welcome__main').css({
                'display':'none'
            });

    } if(positioning[randomPos] == positioning[1]){
        
        $('.welcome__top').css({
            'display':'none'
        });
        $('.welcome__bottom').css({
            'display':'none'
        });
        $('.welcome__main').css({
            'display':'flex'
        });
    } if(positioning[randomPos] == positioning[2]){
            $('.welcome__top').css({
                'display':'none'
            });
            $('.welcome__bottom').css({
                'display':'flex'
            });
            $('.welcome__main').css({
                'display':'none'
            });
    }   
    }
}
mq.addListener(handleChanges)
handleChanges(mq)