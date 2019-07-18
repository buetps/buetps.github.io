
const check = () => {

  //service worker
  if (!("serviceWorker" in navigator)) {
    throw new Error('No Service Worker support!')
  }

  //notification
  if (!('PushManager' in window)) {
    throw new Error('No Push API Support!')
  }
}


const registerServiceWorker = async () => {
  if(navigator.serviceWorker.controller){
    return navigator.serviceWorker.ready.then();
  }

  const serviceWorkerRegistration = await navigator.serviceWorker.register("service-worker.js", {scope: "./"})
  .then(function (reg) {
      console.log("BUETPS uses a service worker with scope: " + reg.scope);
  });

  return serviceWorkerRegistration;
}

const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission(); // value of permission can be 'granted', 'default', 'denied'

  if(permission !== 'granted'){
      throw new Error('Permission not granted for Notification');
  }
}

const showLocalNotification = (title, body, serviceWorkerRegistration) => {
  const options = {
    body,
  };
  serviceWorkerRegistration.showNotification(title, options);
}

const main = async () => {
  check();
  const serviceWorkerRegistration = await registerServiceWorker();
  const permission =  await requestNotificationPermission();

  showLocalNotification('This is title', 'this is the message', serviceWorkerRegistration);
}

main();