
function playerCost(id) {
    const getPlayerInput = document.getElementById(id);
    const getPlayerInputValue = getPlayerInput.value;
    const totalPlayerExpense = parseInt(getPlayerInputValue * 5);
    const playerExpense = document.getElementById('player-expense');
    playerExpense.innerText = totalPlayerExpense;
    return totalPlayerExpense;
}
// <!-- class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> -->
document.getElementById('calculate').addEventListener('click', function () {
    playerCost('player-cost')
})

function managerCoach(id) {
    const input = document.getElementById(id).value;
    const inputValue = parseInt(input)
    return inputValue;
}

document.getElementById('total-cost').addEventListener('click', function () {


    const totalPlayer = playerCost('player-cost')

    const manager = managerCoach('manager')

    const coach = managerCoach('coach')

    const totalExpense = totalPlayer + manager + coach;

    const costValue = document.getElementById('cost');
    costValue.innerText = totalExpense

})

function getName(playerId) {
    const selectId = document.getElementById(id)
    const name = selectId.getElementsByTagName('h5')
    const playerName = name[0].innerText;
    const nameField = document.getElementById('name');
    nameField.innerText = playerName;
    return playerName;
}

function getGoal(goalId) {
    const id = document.getElementById(goalId);
    const goal = id.getElementsByTagName('p')[0].innerText;
    const goalField = document.getElementById('goal');
    goalField.innerText = goal;
    return goal;
}
function getGoal(assistId) {
    const id = document.getElementById(assistId);
    const assist = id.getElementsByTagName('p')[1].outerText;
    const assistField = document.getElementById('assist');
    assistField.innerText = assist;
    return assist;
}


document.getElementById('select1').addEventListener('click', function () {
    getName('neymer')
    getGoal('neymer')
})
document.getElementById('select2').addEventListener('click', function () {
    getName('richarlison')

})
document.getElementById('select3').addEventListener('click', function () {
    getName('alison')
})
document.getElementById('select4').addEventListener('click', function () {
    getName('antony')
})
document.getElementById('select5').addEventListener('click', function () {
    getName('jesus')
})
document.getElementById('select6').addEventListener('click', function () {
    getName('pedro')
})
document.getElementById('select7').addEventListener('click', function () {
    getName('rapinho')
})
document.getElementById('select8').addEventListener('click', function () {
    getName('silva')
})
document.getElementById('select9').addEventListener('click', function () {
    getName('vinius')
})

