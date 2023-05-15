import throttle from 'lodash.throttle';

const LOCALSTORAGE_OBJ = 'feedback-form-state';

const feedbackData = JSON.parse(localStorage.getItem(LOCALSTORAGE_OBJ)) || {};

const form = document.querySelector('form');

form.elements.email.value = feedbackData?.email || '';
form.elements.message.value = feedbackData?.message || '';

form.addEventListener('input', throttle(makeFeedbackData, 500));

function makeFeedbackData(event) {
  feedbackData[event.target.name] = event.target.value;
  const stringifyFeedbackData = JSON.stringify(feedbackData);
  localStorage.setItem(LOCALSTORAGE_OBJ, stringifyFeedbackData);
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (
    form.elements.message.value.trim() === '' ||
    form.elements.email.value.trim() === ''
  ) {
    alert('fill all fields, please');
  } else {
    setTimeout(() => {
      console.log(feedbackData);
      localStorage.removeItem(LOCALSTORAGE_OBJ);
      event.target.reset();
    }, 500);
  }
}
