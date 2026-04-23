importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

// Konfigurasi ini WAJIB sama dengan yang di HTML
const firebaseConfig = {
    apiKey: "AIzaSyC-h39tlvtH3Phe9F9MisHGUb57VuOl_9s",
    authDomain: "latihan-firebase-c8288.firebaseapp.com",
    projectId: "latihan-firebase-c8288",
    storageBucket: "latihan-firebase-c8288.firebasestorage.app",
    messagingSenderId: "827332191451",
    appId: "1:827332191451:web:be1f7f4cf8b18bcb59d8fe"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Menangani notifikasi saat tab browser ditutup
messaging.onBackgroundMessage((payload) => {
    console.log('Notif Background:', payload);

    const notificationTitle = payload.notification.title || "Tugas Baru!";
    const notificationOptions = {
        body: payload.notification.body || "Seseorang baru saja mengupdate daftar tugas.",
        icon: 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});