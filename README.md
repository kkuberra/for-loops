### for-loops


## Objectives
 - [ ] Label & Describe the components of a for loop
 - [ ] Work through example problems
 - [ ] What is a nested for loop & when/why would you use it
 - [ ] Work through nested loop example problems
## Resources
* [Learn: For Loops](https://learn.galvanize.com/content/gSchool/javascript-curriculum/master/10_Syntax/02_Control_Flow.md#for-loops)
* [MDN: For Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
## Please do not edit these replit links - copy and paste the code as needed
* [replit for loop exercises](https://repl.it/@saxmannjr/HospitableSoulfulRom)
* [replit for nested for loop](https://repl.it/@saxmannjr/NervousSingleNetframework)

for loops make it easier to write loops that create a variable, loop until a condition is true, and update the variable at the end of each turn around the loop. When setting up a for loop, you create a variable, specify the condition, and say how the variable should change after each cycle — all before you reach the body of the loop.

for(int month=1;month<=12;month++){ //start of a new month for(int day=1;day<=31;day++){ //start of the 31 days of the month Do something } //end of a month } //end if the year

The passing of a year. The outer loop can be considered as the starting of a month. The inner loop can be considered as the days if that month. When a month starts i.e. the outer loop is read by the system, the control enters the inner loop. It executes it completely( i.e. for all 31 days). It then goes back to the outer loop. For me, the outer loop marked the starting of January, followed by the happenings of all the 31 days(inner loop). Then the month was changed to February(control goes back to outer loop) Following this approach the above example can be understood precisely.

We grab the first element in the main array, which is an array itself, we loop through that, and log at each index, this is terminated by our length condition in the second loop. We then move to to the next index of the main array, which is an array itself.... and so on, until we reach the end of the main array

To access and index in the main array, we need to use array[i] - that index holds an array - so to go INTO that array, we need to use array[i][j]

