// Ждем когда весь HTML загрузится и будет готов к работе
document.addEventListener('DOMContentLoaded', function() {
    
    // Находим элементы на странице по их ID и сохраняем в переменные
    const num1Input = document.getElementById('num1'); // Первое поле ввода
    const num2Input = document.getElementById('num2'); // Второе поле ввода
    const calculateBtn = document.getElementById('calculateBtn'); // Кнопка
    const resultDiv = document.getElementById('result'); // Блок для результата

    // Вешаем обработчик события - при клике на кнопку выполнить функцию calculate
    calculateBtn.addEventListener('click', calculate);

    // Функция которая выполняется при нажатии кнопки
    function calculate() {
        // Берем значения из полей ввода, преобразуем в числа, если пусто - ставим 0
        const num1 = parseFloat(num1Input.value) || 0;
        const num2 = parseFloat(num2Input.value) || 0;
        
        // Складываем два числа
        const sum = num1 + num2;
        
        // Выводим результат в блок resultDiv
        resultDiv.textContent = `Сумма: ${sum}`;
    }

    // Для каждого поля ввода (создаем массив из двух полей и перебираем его)
    [num1Input, num2Input].forEach(input => {
        // Вешаем обработчик нажатия клавиш для каждого поля
        input.addEventListener('keypress', function(e) {
            // Если нажата клавиша Enter
            if (e.key === 'Enter') {
                calculate(); // Выполнить расчет
            }
        });
    });
});