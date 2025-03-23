//UC1
const IS_ABSENT =0
let empCheck = Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT)
{
    console.log("Employee is Absent");
    return;
}else{
    console.log("Employee is Present");
}
//UC2
const IS_PART_TIME =1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR =20;

let empHrs=0;
empCheck = Math.floor(Math.random()*10)%3;
switch (empCheck){
    case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs=0;
}
let empWage= empHrs*WAGE_PER_HOUR;
console.log("Emp Wage: "+empWage);
//UC3
function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
empHrs=0;
empCheck = Math.floor(Math.random()*10)%3;
empHrs=getWorkingHours(empCheck);
empWage = empHrs* WAGE_PER_HOUR;
console.log("Emp Wage: "+empWage);
//UC4
const NUM_OF_WORKING_DAYS=2;
empHrs=0;
for(let day=0; day < NUM_OF_WORKING_DAYS; day++)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs* WAGE_PER_HOUR;
console.log("Total Hrs: "+empHrs+ " Emp Wage: "+empWage);
//UC5
const MAX_HRS_IN_MONTH =100;
const NUM_OF_WORK_DAYS = 10;
let totalEmpHrs=0;
let totalWorkingDays =0;
while(totalEmpHrs<= MAX_HRS_IN_MONTH && totalWorkingDays< NUM_OF_WORK_DAYS)
{
    totalWorkingDays++;
    let empCheck =Math.floor(Math.random()*10)% 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5 - Total Days: "+totalWorkingDays+ "Total Hrs: "+totalEmpHrs+" Emp Wage: "+empWage);
//UC6
function calcDailyWage(empHrs)
{
    return empHrs*WAGE_PER_HOUR;
}
const HRS_IN_MONTH= 160;
const WORKING_DAYS= 20;
totalEmpHrs =0;
totalWorkingDays =0;
let empDailyWageArr= new Array();
let empDailyWageMap= new Map();
let empDailyHrsMap = new Map();
while(totalEmpHrs <=HRS_IN_MONTH && totalWorkingDays < WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
}
console.log(empDailyWageMap);
//UC7
let totEmpWage =0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A- Total Days: "+totalWorkingDays+ " Total Hrs: "+totalEmpHrs+" Emp Wage: "+totEmpWage);
function totalWages(totalWages, dailyWage){
    return totalWages+dailyWage;
}
console.log("UC7A - Emp Wage with reduce: "+ Array.from(empDailyWageMap.values()).reduce(totalWages,0));
//UC7B - Show the day along with daily wage using Array map helper funtion
let dailyCntr =0 ;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = "+ dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);
//UC7C - Show Days when full time wage of 160 were earned 
function fulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);
//UC7D- Find the first occurrence when full Time Wage was earned using find function
function FindFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D - First time Fulltime wage was earned on day: "+mapDayWithWageArr.find(FindFulltimeWage));

//UC7E- Check if Every Element of Full Time Wage is truely holding Full time wage
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC6E - Check all element have full time Wage: "+ fullDayWageArr.every(isAllFulltimeWage));
//UC7F- Find the number of days the Employee Worked
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC7F - Check If Any Part Time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));
//UC7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7G - Number of Days Emp Worked: "+empDailyWageArr.reduce(totalDaysWorked,0));
//UC9
const findTotal =(totalVal, dailyVal) => {
    return totalVal+dailyVal;
}
let count =0;
let totalHours=Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary= empDailyWageArr.filter(dailyWage => dailyWage>0).reduce(findTotal, 0);
console.log("UC9 -Emp Wage With Arrow: "+"Total Hours: "+totalHours+" Total Wages: "+ totalSalary);
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map)=> {
    if(value == 8) fullWorkingDays.push(key);
    else if(value==4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: "+fullWorkingDays);
console.log("Part Working Days: "+partWorkingDays);
console.log("Non Working Days: "+nonWorkingDays);
//UC10
totalEmpHrs =0;
totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= HRS_IN_MONTH && totalWorkingDays <WORKING_DAYS){
         totalWorkingDays++;
         let empCheck = Math.floor(Math.random() * 10)%3;
         let empHrs = getWorkingHours(empCheck);
         totalEmpHrs += empHrs;
         empDailyHrsAndWageArr.push(
            {
               dayNum:totalWorkingDays,
               dailyHours:empHrs,
               dailyWage: calcDailyWage(empHrs),
               toString(){
                  return '\nDay'+ this.dayNum + '=> Working Hours is' + this.dailyHours +'And Wage Earned = ' + this.dailyWage
               },

            });
      }
      console.log("UC 10 Showing Daily Hours Worked and Wage Earned: "+empDailyHrsAndWageArr);
    //UC13
    class EmployeePayrollData {
        // Properties
        id;
        salary;
        gender;
        startDate;
    
        // Constructor
         constructor(...params) {
            this.id = params[0];
            this.name = params[1];
            this.salary = params[2];
            this.gender = params[3];
            this.startDate = params[4];
        }
    
        // Getter and Setter for name
        get name() { return this._name; }
        set name(name) {
            let nameRegex = new RegExp('^[A-Z]{1}[a-z]{2,}$');  // Ensures first letter is uppercase and at least 3 characters
            if (nameRegex.test(name)) {
                this._name = name;
            } else {
                throw "Error: Name is Incorrect! It should start with a capital letter and have at least 3 characters.";
            }
        }
    
        // Getter and Setter for ID validation
        get id() { return this._id; }
        
        set id(id) {
            if (id > 0) {
                this._id = id;
            } else {
                throw "Error: Employee ID must be a positive non-zero number!";
            }
        }
         // Getter and Setter for Salary validation
         get salary() { return this._salary; }
        
         set salary(salary) {
             if (salary > 0) {
                 this._salary = salary;
             } else {
                 throw "Error: Salary must be a positive non-zero number!";
             }
         }
     
         // Getter and Setter for Gender validation
         get gender() { return this._gender; }
         
         set gender(gender) {
             let genderRegex = new RegExp('^[MF]$');  // Ensures gender is either 'M' or 'F'
             if (genderRegex.test(gender)) {
                 this._gender = gender;
             } else {
                 throw "Error: Gender must be 'M' or 'F'!";
             }
         }
     
         // Getter and Setter for Start Date validation
         get startDate() { return this._startDate; }
         
         set startDate(startDate) {
             if (startDate instanceof Date && startDate <= new Date()) {
                 this._startDate = startDate;
             } else {
                 throw "Error: Start date cannot be in the future!";
             }
         }
     
         // Method to return string representation of the object
         toString() {
             const options = { year: 'numeric', month: 'long', day: 'numeric' };
             const empDate = this.startDate === undefined ? "undefined" :
                 this.startDate.toLocaleDateString("en-US", options);
             return `id=${this.id}, name='${this.name}', salary=${this.salary}, ` +
                    `gender=${this.gender}, startDate=${empDate}`;
         }
     }
     
     // Testing the validation with Try-Catch
     try {
         let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000, "M", new Date("2023-05-15"));
         console.log(employeePayrollData.toString());
     
         // Testing invalid name
         employeePayrollData.name = "john";  // Should throw error
     } catch (e) {
         console.error(e);
     }
     
     try {
         // Testing invalid ID (0 or negative)
         let invalidEmployee = new EmployeePayrollData(0, "Terrisa", 30000, "F", new Date("2023-05-15"));
         console.log(invalidEmployee.toString());
     } catch (e) {
         console.error(e);
     }
     
     try {
         // Testing invalid Salary (0 or negative)
         let invalidEmployee = new EmployeePayrollData(2, "Terrisa", -5000, "F", new Date("2023-05-15"));
         console.log(invalidEmployee.toString());
     } catch (e) {
         console.error(e);
     }
     
     try {
         // Testing invalid Gender
         let invalidEmployee = new EmployeePayrollData(3, "Terrisa", 30000, "X", new Date("2023-05-15"));
         console.log(invalidEmployee.toString());
     } catch (e) {
         console.error(e);
     }
     
     try {
         // Testing future date
         let futureDateEmployee = new EmployeePayrollData(4, "Terrisa", 30000, "F", new Date("2030-01-01"));
         console.log(futureDateEmployee.toString());
     } catch (e) {
         console.error(e);
     }