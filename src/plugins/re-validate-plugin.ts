import { Validator } from '../validator'

const reValidate = (validator: Validator) => {
  if (validator.$states.validated) {
    validator.validate()
  }
}

export default class ReValidatePlugin {
  apply(validator: Validator) {
    validator.$hooks.onUpdated.tap('re-validate-plugin', reValidate)
  }
}
