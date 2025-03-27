const betterThanAverage =(classPoints, yourPoints)=> {
    let total = classPoints.reduce((sum, score) => sum + score, 0);
    let average = total / classPoints.length;
    return yourPoints > average;
}
