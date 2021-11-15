const inputType = input => {
    if (input === 'displayName') {
        return 'text';
    } else if (input === 'confirmPassword') {
        return 'password';
    } else {
        return input;
    }
};
const capitalizeInput = input => {
    if (input === 'displayName') {
        return 'User Name';
    } else if (input === 'confirmPassword') {
        return 'Confirm Password';
    } else {
        return input[0].toUpperCase() + input.slice(1);
    }
};

export { inputType, capitalizeInput };
