document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let operator = '';
    let value = '';

    document.querySelectorAll('.cal-btns').forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            value += buttonText;
            display.value = value;
        });
    });

    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => {
            if (value !== '') {
                operator += button.textContent;
                value += ' ' + operator + ' ';
                display.value = value;
            }
        });
    });

    document.getElementById('calculate').addEventListener('click', () => {
        try {
            display.value = eval(value);
            value = display.value.toString();
            operator = '';
        } catch (e) {
            console.error(e);
            alert("Invalid operation");
        }
    });

    document.getElementById('clear').addEventListener('click', () => {
        value = '';
        operator = '';
        display.value = '';
    });
});
