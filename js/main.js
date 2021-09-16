var bodyWidth = $('body').width()

/* PHRASE HTML BUILD */

var wrapperHeight = $('.image__list p').height() + 30;

$('.image__wrapper').attr('style', 'height:' + wrapperHeight + 'px;')

allPhrases = []

$.getJSON("phrase.json", function(json) {
    allPhrases = json;

    $.each(allPhrases, function(key, value) {
        $('.image__list').prepend('<p>' + value + '</p>')
    });
});


/* END */

$('.triangle__logo').click(function() {
    $('.triangle_text_wrapper').toggleClass('show')
})

$('.phrase__spin').click(function() {
    rouletteSpin()
})

var id;
var spinCount = 1;
var spinTimer = 24;
document.cookie = "user=John";
console.log('TIMER: ' + spinTimer + ' | ' + 'Count: ' + spinCount)

if (spinCount == 0) {
    $('.spin__count').text('You have no spins left! Wait ' + spinTimer + ' hours')
}

$('#spins__count').text(spinCount);

/* ROULETTE SPIN */

function rouletteSpin() {

    if (spinCount == 0) {
        $('.spin__count').text('You have no spins left! Wait ' + spinTimer + ' hours')
        return false;
    } else {
        var phraseCount = $('.image__list > p').length - 1;
        var randPhrase = Math.floor(Math.random() * (phraseCount - 1 + 1)) + 1;

        console.log(randPhrase)
        var translateWidth = -wrapperHeight * randPhrase;

        setTimeout(() => {
            $('.image__list').attr('style', 'transform: translateY(' + translateWidth + 'px);')
        }, 0);

        spinCount = spinCount - 1;
        $('#spins__count').text(spinCount);

        if (spinCount < 0) {
            spinCount == 0
        }

    }
}