import JustValidate from 'just-validate';

const validateOptions = {
  errorFieldCssClass: 'error',
  errorLabelCssClass: 'error__label',
  errorLabelStyle: '',
  focusInvalidField: true
}

//Order form
{
  const validate = new JustValidate('.order-form-js', validateOptions);
  validate
    .addField('.order-form-js__name', [
      {
        rule: 'required',
        errorMessage: 'Пожалуйста, введите ваше имя, чтобы мы знали как к вам обращаться',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Вероятно, имя введено не верно. слишком мало символов'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Вероятно, имя введено не верно. слишком много символов'
      },
    ])
    .addField('.order-form-js__email', [
      {
        rule: 'required',
        errorMessage: 'Введите адрес электронной почты',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      },
    ])
    .addField('.order-form-js__comment', [
      {
        rule: 'maxLength',
        value: 1000,
        errorMessage: 'Комментарий слишком длинный'
      },
    ])
}

//Email subscribe form
{
  const validate = new JustValidate('.subscribe-form-js', validateOptions)
  validate
    .addField('.subscribe-form-js__email', [
      {
        rule: 'required',
        errorMessage: 'Введите адрес электронной почты',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      },
    ])
}