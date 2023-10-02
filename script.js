window.onload = () => {
    const btn = document.getElementById('btn')
    btn.addEventListener('click', () => {
        console.log('button clicked')
        calculateBMI()
    }) // button click to calculate BMI
}

function calculateBMI() {
    let height = parseInt(document.getElementById('height').value) //typecast, value is string
    let weight = parseInt(document.getElementById('weight').value) //typecast, value is string
    let result = document.getElementById('result')

    if (height === "" || isNaN(height)) {
        result.innerHTML = "Please provide your height"
    }
    else if (weight === "" || isNaN(weight)) {
        result.innerHTML = "Please provide your weight"
    }
    else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2)


        if (bmi < 18.6) {
            result.innerHTML =
                `Under weight: <span color="red">${bmi}</span>`
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML =
                `Normal weight: <span color="green">${bmi}</span>`
        }
        else 
            result.innerHTML =
                `Over weight: <span color="red">${bmi}</span>`
    }
    
}