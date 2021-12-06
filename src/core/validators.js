export class Validators {
  static check(value = '') {
    return value && value.trim()
  }

  static minLength(length) {
    return (value) => {
      return value.length >= length
    }
  }
}
