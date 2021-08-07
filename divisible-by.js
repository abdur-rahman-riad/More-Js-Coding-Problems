/* Print 1 to 50 Numbers Where
    1. if Number is Divisible By 3 It Will print "Foo"
    2. if Number is Divisible By 5 It Will print "Bar"
    3. if Number is Divisible By Both 3 & 5 it Will print "FooBar"
 */
for (let i = 1; i <= 50; i++) {
    elements = i;
    if (elements % 3 == 0 && elements % 5 == 0) {
        console.log(elements + " = FooBar");
        continue;
    }
    if (elements % 3 == 0) {
        console.log(elements + " = Foo");
        continue;
    }
    if (elements % 5 == 0) {
        console.log(elements + " = Bar");
        continue;
    }
    console.log(elements);
}