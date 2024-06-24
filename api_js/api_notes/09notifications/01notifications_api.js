/*
! Notifications API
* Enables web pages to deliver notifcations to users

*/

async function showNotification() {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    const notification = new Notification('Hello',
    { body: 'This is a notification.' }
    );
  }
}
showNotification();