/*
! IndexedDB
* A low-level API for storing structured data, including large datasets.
? Generally clunky and dated but has some advantageous use-cases.
? It is like a server-side DB (transactional) and we can store gigabytes of information and schemas.
? Asynchronous, doesn't block JS, meaning we have to deal with lots of callbacks.
*/

// Opening a Database:                name      version
const openRequest = indexedDB.open('myDatabase', 1);


openRequest.onupgradeneeded = event => {
  const db = event.target.result;
  const store = db.createdObjectStore('myStore');
};

openRequest.onsuccess = event => {
  const db = event.target.result;
  const transaction = db.transaction('myStore', 'readwrite');
  const store = transaction.objectStore("myStore");
  store.add('value', 'key');
}