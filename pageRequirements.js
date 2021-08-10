// 3. Calculation pageRequirements():
//book 1 has 100 pages
//book 2 has 200 pages
// book 3 has 300 pages
function pageRequirements(quantityBook1, quantityBook2, quantityBook3) {
    const pagesOfBook1 = 100;
    const pagesOfBook2 = 200;
    const pagesOfBook3 = 300;
    const totalPagesOfBook1 = pagesOfBook1 * quantityBook1;
    const totalPagesOfBook2 = pagesOfBook2 * quantityBook2;
    const totalPagesOfBook3 = pagesOfBook3 * quantityBook3;
    const totalPagesOf3Books = totalPagesOfBook1 + totalPagesOfBook2 + totalPagesOfBook3;
    return totalPagesOf3Books;

}
const numberOfBooksToPrint = pageRequirements(1, 1, 1);
console.log(numberOfBooksToPrint);