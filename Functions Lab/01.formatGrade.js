function formatGrade(grade) {
    let res = '';

    if (grade < 3.00) {
        console.log(`Fail (2)`);
    }
    else {
        if (grade >= 3.00 && grade < 3.50) {
            res = "Poor"
        } else if (grade >= 3.50 && grade < 4.50) {
            res = "Good"
        } else if (grade >= 4.50 && grade < 5.50) {
            res = "Very good"
        } else if (grade >= 5.50) {
            res = "Excellent"
        }

        console.log(`${res} (${grade.toFixed(2)})`);
    }
}
    formatGrade(4.33)