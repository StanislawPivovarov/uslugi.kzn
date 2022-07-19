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
    'imgs/kazan_01.webp',
    'imgs/kazan_02.webp',
    'imgs/kazan_03.webp',
    'imgs/kazan_04.webp',
    'imgs/kazan_05.webp',
    'imgs/kazan_06.webp',
    'imgs/kazan_07.webp',
    'imgs/kazan_09.webp',
    'imgs/kazan_10.webp',
];

var positioning = [
    'top',
    'normal',
    'bottom',
    'top-right',
    'normal-right',
    'bottom-right'

];

var query = window.matchMedia("(min-width: 992px)");
var randomPos = Math.floor(Math.random()*positioning.length);


window.onload = function(){
    $('.welcome').css({'background-image':'url(' + bgimage[Math.floor(Math.random()*bgimage.length)] + ')'});
    $('.quote').html(quotes[Math.floor(Math.random()*quotes.length)])

    if(positioning[randomPos] == positioning[0]){ //top
            $('.welcome').css({
                'padding': '0 6rem',
                'align-items': 'flex-start',
                'justify-content':'space-between'
            })
            $('.welcome__main').css({
                'display':'flex',
                'flex-direction':'row',
                'height': 'auto',
                'background': 'transparent',
                'padding': 0,
                'width':'auto'
            });
            $('.welcome__content').css({
                'display':'none'    
            })
            $('.welcome__copyright').css({
                'height': '95%'
            })
            $('.welcome__header').css({
                'padding': '2rem'
            })
            $('.welcome__action-button').css({
                'padding': '2rem',
                'width': 'auto'
            })

    } if(positioning[randomPos] == positioning[1]){ //main
        $('.welcome').css({
            'padding': '0 6rem',
            'justify-content':'space-between',
            'flex-direction': 'row'
        })
        $('.welcome__main').css({
            'display':'flex',
            'flex-direction':'column',
            'height': 'auto',
            'background': '#384d9b66',
            'padding': '4rem 0',
            'width': '25rem'
        });
        $('.welcome__content').css({
            'display':'flex'    
        })
        $('.welcome__copyright').css({
            'height': '95%'
        })
        $('.welcome__header').css({
            
        })
        $('.welcome__action-button').css({
            'padding': '2rem',
            'width': 'auto'
        })
    } if(positioning[randomPos] == positioning[2]){ //bottom
        $('.welcome').css({
            'padding': '0 6rem',
            'align-items': 'flex-end',
            'justify-content':'space-between'
        })
        $('.welcome__main').css({
            'display':'flex',
            'flex-direction':'row',
            'height': 'auto',
            'background': 'transparent',
            'padding': 0,
            'width':'auto'
        });
        $('.welcome__content').css({
            'display':'none'    
        })
        $('.welcome__copyright').css({
            'height': '95%'
        })
        $('.welcome__header').css({
            'padding': '2rem'
        })
        $('.welcome__action-button').css({
            'padding': '1rem 2rem',
            'width': 'auto'
        })
    } if(positioning[randomPos] == positioning[3]){ //top-right
        $('.welcome').css({
            'padding': '0 6rem',
            'align-items': 'flex-start',
            'justify-content':'space-between',
            'flex-direction':'row-reverse'
        })
        $('.welcome__main').css({
            'display':'flex',
            'flex-direction':'row',
            'height': 'auto',
            'background': 'transparent',
            'padding': 0,
            'width':'auto',
        });
        $('.welcome__content').css({
            'display':'none'    
        })
        $('.welcome__copyright').css({
            'height': '95%'
        })
        $('.welcome__header').css({
            'padding': '2rem'
        })
        $('.welcome__action-button').css({
            'padding': '2rem',
            'width': 'auto'
        })
    } if(positioning[randomPos] == positioning[4]){ //normal-right
        $('.welcome').css({
            'padding': '0 6rem',
            'justify-content':'space-between',
            'flex-direction': 'row-reverse'
        })
        $('.welcome__main').css({
            'display':'flex',
            'flex-direction':'column',
            'height': 'auto',
            'background': '#384d9b66',
            'padding': '4rem 0',
            'width':'25rem',
        });
        $('.welcome__content').css({
            'display':'flex'    
        })
        $('.welcome__copyright').css({
            'height': '95%'
        })
        $('.welcome__header').css({
        })
        $('.welcome__action-button').css({
            'padding': '2rem',
            'width': 'auto'
        })
    } if(positioning[randomPos] == positioning[5]){ //bottom-right
        $('.welcome').css({
            'padding': '0 6rem',
            'align-items': 'flex-end',
            'justify-content':'space-between',
            'flex-direction':'row-reverse'
        })
        $('.welcome__main').css({
            'display':'flex',
            'flex-direction':'row',
            'height': 'auto',
            'background': 'transparent',
            'padding': 0,
            'width':'auto'
        });
        $('.welcome__content').css({
            'display':'none'    
        })
        $('.welcome__copyright').css({
            'height': '95%'
        })
        $('.welcome__header').css({
            'padding': '2rem'
        })
        $('.welcome__action-button').css({
            'padding': '1rem 2rem',
            'width': 'auto'
        })
    } 
    if(window.matchMedia("(max-width: 992px)").matches){
        $('.welcome').css({
            'padding': '0',
            'justify-content':'space-between',
            'flex-direction': 'column',
            'align-items': 'stretch'
        })
        $('.welcome__main').css({
            'display':'flex',
            'flex-direction':'column',
            'height': '100%',
            'background': 'transparent',
            'padding': 0,
            'width':'auto'
        });
        $('.welcome__content').css({
            'display':'flex'    
        })
        $('.welcome__copyright').css({
            'height': 'auto'
        })
        $('.welcome__header').css({
            'padding': '2rem 0'
        })
        $('.welcome__action-button').css({
            'padding': '11px',
            'width': 'auto'
        })
    }
};


var mq = window.matchMedia("(max-width: 992px)")

function handleChanges(e){
    if(e.matches){
        $('.welcome').css({
            'padding': '0',
            'justify-content':'space-between',
            'flex-direction': 'column',
            'align-items':'stretch'
        })
        $('.welcome__main').css({
            'display':'flex',
            'flex-direction':'column',
            'height': '100%',
            'background': 'transparent',
            'padding': 0,
            'width':'auto'
        });
        $('.welcome__content').css({
            'display':'flex'    
        })
        $('.welcome__copyright').css({
            'height': 'auto'
        })
        $('.welcome__header').css({
            'padding': '2rem 0'
        })
        $('.welcome__action-button').css({
            'padding': '11px',
            'width': 'auto'
        })
    } else{
        if(positioning[randomPos] == positioning[0]){ //top
            $('.welcome').css({
                'padding': '0 6rem',
                'align-items': 'flex-start',
                'justify-content':'space-between',
                'flex-direction': 'row'
            })
            $('.welcome__main').css({
                'display':'flex',
                'flex-direction':'row',
                'height': 'auto',
                'background': 'transparent',
                'padding': 0,
                'width':'auto'
            });
            $('.welcome__content').css({
                'display':'none'    
            })
            $('.welcome__copyright').css({
                'height': '95%'
            })
            $('.welcome__header').css({
                'padding': '2rem'
            })
            $('.welcome__action-button').css({
                'padding': '2rem',
                'width': 'auto'
            })
    } if(positioning[randomPos] == positioning[1]){ //main
        $('.welcome').css({
            'padding': '0 6rem',
            'justify-content':'space-between',
            'flex-direction': 'row'
        })
        $('.welcome__main').css({
            'display':'flex',
            'flex-direction':'column',
            'height': 'auto',
            'background': '#384d9b66',
            'padding': '4rem 0',
            'width': '25rem'
        });
        $('.welcome__content').css({
            'display':'flex'    
        })
        $('.welcome__copyright').css({
            'height': '95%'
        })
        $('.welcome__header').css({
        })
        $('.welcome__action-button').css({
            'padding': '2rem',
            'width': 'auto'
        })
    } if(positioning[randomPos] == positioning[2]){ //bottom
           $('.welcome').css({
            'padding': '0 6rem',
            'align-items': 'flex-end',
            'justify-content':'space-between',
            'flex-direction':'row'
            })
            $('.welcome__main').css({
            'display':'flex',
            'flex-direction':'row',
            'height': 'auto',
            'background': 'transparent',
            'padding': 0,
            'width':'auto'
            });
        $('.welcome__content').css({
            'display':'none'    
        })
        $('.welcome__copyright').css({
            'height': '95%'
        })
        $('.welcome__header').css({
            'padding': '2rem'
        })
        $('.welcome__action-button').css({
            'padding': '1rem 2rem',
            'width': 'auto'
        })
    } if(positioning[randomPos] == positioning[3]){ //top-right
        $('.welcome').css({
            'padding': '0 6rem',
            'align-items': 'flex-start',
            'justify-content':'space-between',
            'flex-direction':'row-reverse',
        })
        $('.welcome__main').css({
            'display':'flex',
            'flex-direction':'row',
            'height': 'auto',
            'background': 'transparent',
            'padding': 0,
            'width':'auto'
        });
        $('.welcome__content').css({
            'display':'none'    
        })
        $('.welcome__copyright').css({
            'height': '95%'
        })
        $('.welcome__header').css({
            'padding': '2rem'
        })
        $('.welcome__action-button').css({
            'padding': '2rem',
            'width': 'auto'
        })
    } if(positioning[randomPos] == positioning[4]){ //normal-right
        $('.welcome').css({
            'padding': '0 6rem',
            'justify-content':'space-between',
            'flex-direction': 'row-reverse'
        })
        $('.welcome__main').css({
            'display':'flex',
            'flex-direction':'column',
            'height': 'auto',
            'background': '#384d9b66',
            'padding': '4rem 0',
            'width': '25rem'
        });
        $('.welcome__content').css({
            'display':'flex'    
        })
        $('.welcome__copyright').css({
            'height': '95%'
        })
        $('.welcome__header').css({
            
        })
        $('.welcome__action-button').css({
            'padding': '2rem',
            'width': 'auto'
        })
    }  if(positioning[randomPos] == positioning[5]){ //bottom-right
        $('.welcome').css({
            'padding': '0 6rem',
            'align-items': 'flex-end',
            'justify-content':'space-between',
            'flex-direction': 'row-reverse'
        })
        $('.welcome__main').css({
            'display':'flex',
            'flex-direction':'row',
            'height': 'auto',
            'background': 'transparent',
            'padding': 0,
            'width':'auto'
        });
        $('.welcome__content').css({
            'display':'none'    
        })
        $('.welcome__copyright').css({
            'height': '95%'
        })
        $('.welcome__header').css({
            'padding': '2rem'
        })
        $('.welcome__action-button').css({
            'padding': '1rem 2rem',
            'width': 'auto'
        })
    }
    }
}
mq.addListener(handleChanges)
handleChanges(mq)