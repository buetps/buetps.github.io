
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
    return navigator.serviceWorker.ready;
  }

  const serviceWorkerRegistration = await navigator.serviceWorker.register("service-worker.js", {scope: "./"})
  .then(function (reg) {
      console.log("BUETPS uses a service worker with scope: " + reg.scope);
  });

  return serviceWorkerRegistration;
}

const main = async () => {
  check();
  const serviceWorkerRegistration = await registerServiceWorker();
}

main();