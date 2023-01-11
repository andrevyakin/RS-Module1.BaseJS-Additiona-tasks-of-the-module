export class AllDonates {
    static getSum() {
        return Array.from(document.querySelector('.donates-container__donates').children)
            .reduce((acc, el) =>
                acc + Number(el.lastChild.textContent.slice(0, -1)), 0);
    }
}