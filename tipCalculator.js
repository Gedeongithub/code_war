const calculateTip = (amount, rating) => {
    const ratings = {
        "terrible": 0,
        "poor": 0.05,
        "good": 0.10,
        "great": 0.15,
        "excellent": 0.20
    };

    let tipPercentage = ratings[rating.toLowerCase()];
    return tipPercentage !== undefined ? Math.ceil(amount * tipPercentage) : "Rating not recognised";
}