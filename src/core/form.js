export class Form {
  constructor(form, controls) {
    this.form = form
    this.controls = controls
  }

  clear() {
    Object.keys(this.controls).forEach((control) => {
      this.form[control].value = ''
    })
  }

  value() {
    const value = {}
    Object.keys(this.controls).forEach((control) => {
      value[control] = this.form[control].value
    })
    return value
  }

  isValid() {
    let isFormValid = true

    Object.keys(this.controls).forEach((control) => {
      const validators = this.controls[control]

      let isValid = true

      validators.forEach((validator) => {
        isValid = validator(this.form[control].value) && isValid
      })

      !isValid ? setError(this.form[control]) : clearError(this.form[control])

      isFormValid = isFormValid && isValid
    })

    return isFormValid
  }
}

function setError($control_input) {
  clearError($control_input)
  //   console.log($control) // показывает только невалидные поля
  const error = `<p class="validation-error">Введите корректное значение</p>`

  $control_input.classList.add('invalid')
  $control_input.insertAdjacentHTML('afterend', error)
}

function clearError($control_input) {
  $control_input.classList.remove('invalid')
  if ($control_input.nextSibling) {
    $control_input
      .closest('.form-control')
      .removeChild($control_input.nextSibling)
  }
}
