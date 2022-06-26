let selectedNumbers;
let numbers = [1,2,3,4,5,6,7,8,9];

function showIcon(element) {
	if(checkSelected(parseInt(element[4])) === false){
		alert(`This square has already been selected, click another one`)
	} else{
	document.getElementById(element).innerHTML = 'O';
	selectedNumber = parseInt(element[4]);
	comDisplay(com(numbers, selectedNumber));
	}
}

function com(num, excluded){
	let n = Math.floor(Math.random() * (num[num.length-1]-num[0]) + num[0])
	alert(`The computer has chosen: ${n} \n The index of that number is: ${num.indexOf(n)}`)
	let valid = checkSelected(n)
	if(valid === false){
		n = num[0];
		alert(n)
	}
	return n;
 }

function checkSelected(selected){
	let validation = false;
	for(let j = 0; j < numbers.length; j++){
		if(numbers[j] === selected){
			numbers.splice(numbers.indexOf(selected),1);
			validation = true
			break
		} else{
			continue
		}
	}
	if(validation){
		// alert(`This is true`)
		return true;
	} 
	if(!validation){
		alert(`This is false`)
		return false;  
	}
}

function comDisplay(number){
	document.getElementById(`grid${number}`).innerHTML = 'X';
}

function resetApp(){
	for(let i = 1; i <= 9; i++){
		document.getElementById(`grid${i}`).innerHTML = '&nbsp;'
	}
	numbers = [1,2,3,4,5,6,7,8,9];
}
