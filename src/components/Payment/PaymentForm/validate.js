const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const mastPattern = /^(?:5[1-5][0-9]{14})$/;
const amexPattern = /^(?:3[47][0-9]{13})$/;
const discPattern = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

const isCardNumberValid = (card) => {
  const isVisa = visaPattern.test(card);
  const isMaster = mastPattern.test(card);
  const isAmex = amexPattern.test(card);
  const isDisc = discPattern.test(card);

  return isVisa || isMaster || isAmex || isDisc;
};

export function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Your email is incomplete";
  }

  if (!values.card) {
    errors.card = "Required";
  } else if (!isCardNumberValid(values.card)) {
    errors.card = "Your card number is invalid";
  }

  if (!values.date) {
    errors.date = "Required";
  } else if (!datePattern.test(values.date)) {
    errors.date = "Your card's expiration date is incomplete";
  } else if (new Date(values.date) > Date.now) {
    errors.date = "Your card's expiration year is in the past";
  }

  if (!values.cvv) {
    errors.cvv = "Required";
  }

  if (!values.name) {
    errors.name = "Required";
  }
  return errors;
}
