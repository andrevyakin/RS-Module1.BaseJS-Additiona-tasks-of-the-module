import {getFormattedDate} from '../core/utils/getFormattedDate';
import {AllDonates} from '../core/utils/allDonates';

export class App {
    run() {
        document.querySelector('.donate-form').addEventListener('submit', event => {
            event.preventDefault();
            const currentDonateValue = Number(event.target.amount.value);
            if (currentDonateValue) {
                event.target.amount.value = '';
                document.querySelector('.donates-container__donates').innerHTML +=
                    `<div class='donate-item'>${getFormattedDate(Date.now())} - <b>${currentDonateValue}$</b></div>`;
                document.querySelector('#total-amount').textContent = `${AllDonates.getSum()}$`
            }
        });
    }
}