import { computeAverage } from "./gradeUtils.js";
import isPassing from "./gradeUtils.js";

const students =[
    { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88},
    { name: "Bea Santos", prelim: 70, midterm: 65, final: 60},
    { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97},
    { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50},
    { name: "Eli Tan", prelim: 78, midterm: 80, final: 76},

];

console,log("=== IT313 Enrollment Eligibility Report ===");
students.forEach((student) => {
    const { name, prelim, midterm, final } = students;
    const average = computeAverage(prelim, midterm, final);
    const status = isPassing(average);
    console.log(`${name} - Average: ${average.toFixed(2)} - ${status} - Eligible to enroll next term.`);

});