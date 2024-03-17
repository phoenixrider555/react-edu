console.log('Ths is the counter');
console.log('Click on it');
('.minus').click(function () {
    var input = $(this).parent().parent().find('input');
    var count = parseInt(input.val()) - 1;
    count = count < 1 ? 1 : count;
    input.val(count);
    input.change();
    return false;
});
('.plus').click(function () {
    var input = $(this).parent().parent().find('input');
    input.val(parseInt(input.val()) + 1);
    input.change();
    return false;
});
console.log('wow, it works');