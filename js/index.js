let launch_app, correct_pin_expression = (/^[0-9]{4}$/);
let transfer_details = {
    user_previous_Balance:35000,
    receiver_balance:12000,
    account_name:"Abidoye Yusuf",

}

function atmMachine_launch_app() {
    launch_app = prompt("Please insert your card by typing \"Yes\"");
	if (launch_app == "Yes" || launch_app == "yes" || launch_app == "YES") {
		collect_user_pin();
	} else {
        alert("Be sure you type Yes"); 
		atmMachine_launch_app();
	}
}

// collect PIN
function collect_user_pin() {
	let pinEntry = parseInt(prompt("Please enter your PIN"));
	checkPin(pinEntry);
}

// Verify  whether PIN meets regular expression requirements
function checkPin(data) {
    if (correct_pin_expression.test(data)){
        selectAccountType();
        select_user_action();
    } else {
            alert("Incorrect PIN format try again.");
            exit();    
    }
}
// Select which account type to use
function selectAccountType() {
    let accountType = parseInt(prompt("Which type of account do you have? \n 1. Savings \n 2. Current \n 3. Credit"));
	if (accountType !== "" && accountType !== null && !isNaN(accountType)) {
		select_user_action();
	} else {
		alert("Please make a valid selection");
		selectAccountType();
	}
}



// Select action to be performed by the user
function select_user_action() {
	let user_action = parseInt(prompt("Select Action: \n" +"Type 1 for Inquiry \nType 2 for Withdrawal \nType 3 to Transfer \nType 4 to Exit"));
	if (user_action !== "" && user_action !== null && !isNaN(user_action)) {
		switch (user_action) {
			case 1:
				inquiry();
				break;
			case 2:
				withdrawal();
				break;
			case 3:
				transfer();
				break;
			case 4:
				exit();
				break;
			default:
				alert("Please make a valid selection");
				select_user_action();
		}
	} else {
		alert("Please make a valid selection");
		select_user_action();
	}
}

// Transfer
function transfer() {
    let receiver_account_number = parseInt(prompt("Please enter receiver account number"));
    receiver_account_number = receiver_account_number;
    bank_selection();
    confirm("Please confirm receivers' details: \n" + "Name: " + transfer_details.account_name + "\nAccount Number: " + receiver_account_number + "\nBank: " + bank_name);

	let transfer_amount = parseInt(prompt("Please enter transfer amount?"));
	if (transfer_amount !== "" && transfer_amount !== null && !isNaN(transfer_amount)) {
        transfer_confirmation = confirm("Are you sure? \n"+ "Name: " + transfer_details.account_name + "\nAccount Number: " + receiver_account_number + "\nBank: " + bank_name + "\nTransfer Amount: " + transfer_amount)
        if (transfer_confirmation == true) {
            new_balance = transfer_details.receiver_balance + transfer_amount;
            currentBalance = transfer_details.user_previous_Balance - transfer_amount;
            alert("Transfer Successful");
            alert("Senders Previous account balance: " + transfer_details.user_previous_Balance + "\n New balance: " + currentBalance + "\n\n Receivers Previous account balance: " + transfer_details.receiver_balance + "\n New balance: " + new_balance);
            toContinue();
        } else {
            toContinue();  
        }
	} else {
		alert("Error: please enter a number!");
		transfer();
	}
}


function bank_selection() {
	let select_bank = parseInt(prompt("Please select receivers' bank: \n" +"Type 1 for Uba \nType 2 for Access \nType 3 for GTB \nType 4 to Exit"));
	if (select_bank !== "" && select_bank !== null && !isNaN(select_bank)) {
		switch (select_bank) {
			case 1:
                bank_name = "Uba";
				break;
			case 2:
                bank_name = "Access";
				break;
			case 3:
                bank_name = "GTB";
				break;
			case 4:
				exit();
				break;
			default:
				alert("Please make a valid selection");
				bank_selection();
		}
	} else {
		alert("Please make a valid selection");
		bank_selection();
	}
}


// Does the user wish to continue using the ATM
function toContinue(){
    let yesOrNo = parseInt(prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No"));
	if (yesOrNo !== "" && yesOrNo !== null) {
    	if (yesOrNo === 2){
			exit();
    	}
		else {
			selectAccountType(); 
    	}
	} else {
		alert("Please make a valid selection");
		toContinue();
	}
}
// Exit the ATM
function exit() {
	alert("Thank you for patronising " + bank_name + " bank");
}

// Inquiry
function inquiry() {
	alert("Your current balance is N" + currentBalance);
	toContinue();
}

// Withdrawal
function withdrawal() {
	let withdrawal_Amount = parseInt(prompt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is N10000"));
	if (withdrawal_Amount !== "" && withdrawal_Amount !== null && !isNaN(withdrawal_Amount)) {
		if (withdrawal_Amount >= 10000) {
			if (withdrawal_Amount <= currentBalance) {
				currentBalance -= withdrawal_Amount;
				alert("Transaction successful!");
				alert("Your remaining balance is N" + currentBalance);
				toContinue();
			} else {
				alert("You do not have sufficient funds!");
				withdrawal();
			}
		} else {
			alert("You must withdraw at least N10000");
			withdrawal();
		}
	} else {
		alert("Error: please enter a number!");
		withdrawal();
	}
}	
 


/* let cat = {
    Name: "brave",
    Owner: "Dan",
    age: 2,
};
console.log(cat.Owner); */




/* 
let maxAttempts = 3;
let password = "secret";
function enterPassword(){
    let attempts = 0;
    while (attempts < maxAttempts) {
        let input = prompt("Enter password:");
        if (input === password) {
            alert("Password correct! Access granted.")
            return;
        } else{
            attempts++;
            console.log("Incorrect password." + maxAttempts - attempts + "attempts remaining.");
        }
    }
    console.log("Access denied. Maximum attempts exceeded.");
}
enterPassword(); */

