export class Validate {
    static isEmpty(value: string): boolean {
        return value.trim() === '';
    }

    static isNumber(value: string): boolean {
        const numberPattern = /^\d+$/;
        if (!numberPattern.test(value)) {
            return false;
        } else if (value.length !== 10) {
            return false;
        } else if (value.charAt(0) !== '0') {
            return false;
        }
        return true;
    }

    static isEmail(email: string): boolean {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };
}
