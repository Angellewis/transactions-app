export default class Helpers {

    static ConvertDateToString(date: Date) {
        var mm = date.getMonth() + 1;
        var dd = date.getDate();

        return [date.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
        ].join('-');
    }
    static ConvertStringToDate(date: Date, days: number) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
}
