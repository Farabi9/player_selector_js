
function playerCost(id) {
    const getPlayerInput = document.getElementById(id);
    const getPlayerInputValue = getPlayerInput.value;
    const totalPlayerExpense = parseInt(getPlayerInputValue * 5);
    const playerExpense = document.getElementById('player-expense');
    playerExpense.innerText = totalPlayerExpense;
    return totalPlayerExpense;
}

document.getElementById('calculate').addEventListener('click', function () {
    playerCost('player-cost')
})

document.getElementById('total-cost').addEventListener('click', function () {


    const totalPlayer = playerCost('player-cost')

    const managerInput = document.getElementById('manager').value;
    const managerInputValue = parseInt(managerInput);


    const coachInput = document.getElementById('coach').value;
    const coachInputValue = parseInt(coachInput);

    const totalExpense = totalPlayer + managerInputValue + coachInputValue;

    const costValue = document.getElementById('cost');
    costValue.innerText = totalExpense

})