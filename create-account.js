function createAccount(startpin, amount=0) {
    return {
        checkBalance(pin) {
            return pin == startpin ? `$${amount}` : ('Invalid PIN.');
        },

        deposit(pin, amountInput) {
            if (pin != startpin) {
                return ('Invalid PIN.');
            } else {
                amount += amountInput;
                return (`Succesfully deposited $${amountInput}. Current balance: $${amount}.`);
            };
        },

        withdraw(pin, amountInput) {
            if (pin != startpin) {
                return ('Invalid PIN.');
            } else if (amountInput > amount) {
                return ('Withdrawal amount exceeds account balance. Transaction cancelled.')
            } else {
                amount -= amountInput;
                return (`Succesfully withdrew $${amountInput}. Current balance: $${amount}.`);
            }
        },

        changePin(pin, newPin) {
            if (pin != startpin) {
                return ('Invalid PIN.');
            } else {
                startpin = newPin;
                return (`PIN successfully changed!`);
            }
            
        },
    };
};

module.exports = { createAccount };
