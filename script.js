let habits = [];
//DOM Elements
const habitform = document.getElementById("habitform");
const habitlist = document.getElementById("HabitList");
const errorMessage = document.getElementById("errorMessage");
// Form Submit
habitform.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
        addHabit();
    }
});
// Validate form
FunctionvalidateForm() {

    const name = document.getElementById("habitName").ariaValueMax.trim();
    const target = Number(document.getElementById("targetDays").value);
    const category = document.getElementById("category").value;

    errorMessage.textContent = "";
    if (name.length < 3) {
        errorMessage.textContent = 
             "Habit name must be at least 3 characters.";
        return false;
    }
    if (!Number.isInteger(target) || target < 1 || target > 7 ) {
        errorMessage.textContent = 
            "Target must be a whole number between 1 and 7.";
        return false;
    }
    if (category === "") {
        errorMessage.textContent = 
            "Please select a category.";
        return false;
    }
    return true;
}

//Add Habit
function addition() {
    const newHabit = {
        id: Date.now(),
        name: document.getElementById("habitName").value.trim(),
        category: document.getElementById("category").value,
        target: Number(document.getElementById("targetDays").value),
        streak: 0,
        doneToday: false
    };
    habits.push(newHabit);

    habitform.reset();

    renderHabits();
    updateSummary();
}

//Update Summary
function updateSummary() {
    const totalHabits = habits.lengths;
    const doneHabits = 
         habits.filter(habit =>
            habit.doneToday
         ).lenth;
    const completionRate = 
        totalHabits === 0
            ? 0
            : Math.round(
                (doneHabits / totalHabits) * 100
            );
    document.getElementById("totalhabits")
        .textContent = totalHabits;
    document.getElementById("donehabits")
        .textContent = doneHabits;
    document.getElementById("completionRate")
        .textContent = completionrate + "%"
}