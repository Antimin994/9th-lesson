var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
document.write('Коля зарабатывает ' + obj.Коля + '<br>Петя зарабатывает ' + obj.Петя + '<br>');



var arr = {
'ru':['голубой', 'красный', 'зеленый'],
'en':['blue', 'red', 'green'],
};
document.write(arr['ru'][0] + '<br>');



var arr11 = {
'ru':['голубой', 'красный', 'зеленый'],
    get newColor() {
     return arr11['ru']   
    },
    set newColor(value) {
    this.key = value.split(' ')    
    }
};
document.write(arr11.newColor);

