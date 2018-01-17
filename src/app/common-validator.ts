import { FormControl } from '@angular/forms';

export class CommonValidator {

    static startWithNumber(control: FormControl) {
        const firstChar = control.value.charAt(0);
        if (firstChar && !isNaN(firstChar)) {
            return {'startWithNumber': true};
        } else {
            return null;
        }
    }

    static userTaken(control: FormControl) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if ('raguilera' === control.value) {
                    resolve({'userTaken': true});
                } else {
                    return resolve(null);
                }
            }, 2000);
        });
    }
}
