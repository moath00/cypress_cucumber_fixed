export default class GenericHelper {
    static genericRandomString(maxNumber = 10000) {
        return Math.round(maxNumber * (Math.random()));
    }
}