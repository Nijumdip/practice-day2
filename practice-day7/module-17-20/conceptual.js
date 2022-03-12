//  1.
// var age = 23 ;
// var vaccineCount = 2;
// var isVaccinated = false;
// if (age > 20 && vaccineCount == 2) {
//     console.log("They are allowed to go foren");
// }


// 2.
// var age = 16 ;
// var vaccineCount = 0;
// var isVaccinated = false;
// 2.1
// // if (age >= 15 && vaccineCount == 0) {
// //     console.log("Tomorrow is the final date for your first vaccine");
// // }

// 2.2
// if (age > 15 && age < 20 && vaccineCount == 0) {
//     console.log('Tomorrow is the final date for your first vaccine');
// }


// 3.
// var age = 16 ;
// var vaccineCount = 2;
// var isVaccinated = false;
// if (age > 15 && age < 20 && vaccineCount == 2) {
//     isVaccinated = true;
//     console.log('congratulation . You are vaccinated.....');
// }

var budget = 8000;
if (budget > 5000) {
    console.log('Family tour dibo');
    var hotelCost = 4000;
    var total = budget - hotelCost;
    console.log(total);
    if (total > 2000) {
        console.log('barbiqu party korbo');
    }
    else {
        console.log('shopping korbo')
    }
}
else {
    console.log('ghum dibo taka nai');
}