import { Toast } from 'vant';

const error = message => Toast({
  message: message,
  duration: 1300
});

export function checkStatus(status, message) {
  console.log('need check status', status, message);
  if (message === 'canceled') return;
  switch (status) {
    default:
      error(message);
  }
}