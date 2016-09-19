(function () {

    'use strict'

    angular.module('full_starter.services', [])

        .service('appService', ['$state', '$ionicPopup', '$ionicActionSheet', '$ionicHistory', '$ionicLoading', '$timeout',
            function ($state, $ionicPopup, $ionicActionSheet, $ionicHistory, $ionicLoading, $timeout) {

                return {
                    getNews: function () {
                        return _news;
                    },
                    getMessages: function () {
                        return _messages;
                    },
                    getContacts: function () {
                        return _contacts;
                    },
                    getProducts: function () {
                        return _products;
                    },
                    getNotifications: function () {
                        return _notifications;
                    },
                    getRandomMessages: function () {
                        return _randMessages;
                    },
                    getRandomObject: function (arr) {
                        return arr[Math.floor(Math.random() * arr.length)];
                    },
                    Loading: function (params) {
                        if (params === 'show') {
                            $ionicLoading.show({
                                template: '<ion-spinner></ion-spinner>'
                            });
                        } else {
                            $ionicLoading.hide();
                        }
                    },
                    KeepKeyboardOpen: function (params) {
                        var txtInput = angular.element(document.body.querySelector(params));
                        txtInput.one('blur', function () {
                            txtInput[0].focus();
                        });
                    },
                    showAlert: function (title, text, buttonText, buttonType, page) {
                        var alertPopup = $ionicPopup.alert({
                            title: title,
                            template: text,
                            buttons: [{ text: buttonText, type: buttonType }]
                        });
                        $timeout(function () {
                            alertPopup.close();
                        }, 1500000);

                        alertPopup.then(function (res) {
                            page != null ? $state.go(page) : '';
                            alertPopup.close();
                        });
                    },
                    getGreetingTime: function (m) {
                        var g = null;

                        if (!m || !m.isValid()) { return; } //if we can't find a valid or filled moment, we return.

                        var split_afternoon = 12 //24hr time to split the afternoon
                        var split_evening = 17 //24hr time to split the evening
                        var currentHour = parseFloat(m.format("HH"));

                        if (currentHour >= split_afternoon && currentHour <= split_evening) {
                            g = "Good Afternoon";
                        } else if (currentHour >= split_evening) {
                            g = "Good Evening";
                        } else {
                            g = "Good Morning";
                        }
                        return g;
                    },
                    getCameraOptions: function () {
                        return {
                            quality: 80,
                            destinationType: Camera.DestinationType.DATA_URL,
                            sourceType: Camera.PictureSourceType.CAMERA,
                            encodingType: Camera.EncodingType.JPEG,
                            saveToPhotoAlbum: true,
                            correctOrientation: true,
                        };
                    },
                    getLibraryOptions: function () {
                        return {
                            quality: 80,
                            destinationType: Camera.DestinationType.DATA_URL,
                            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                            encodingType: Camera.EncodingType.JPEG,
                            saveToPhotoAlbum: false,
                            correctOrientation: true,
                        };
                    },
                }
            }]);
})();

//Contacts data
var _contacts = [
    {
        id: 3,
        "name": "Thomas Tank",
        "photo": "img/users/3.jpg",
        "desc": " Astronault"
    }, {
        "id": 4,
        "name": "Steven Spruse",
        "photo": "img/users/4.jpg",
        "desc": " Professor"
    },
    {
        id: 2,
        "name": "Rupert Bear",
        "photo": "img/users/2.jpg",
        "desc": " Software Developer"
    },
    {
        id: 5,
        "name": "Diana Cahill",
        "photo": "img/users/5.jpg",
        "desc": " Doctor"
    },
    {
        id: 6,
        "name": "Samuel Ross",
        "photo": "img/users/3.jpg",
        "desc": "Archeologist"
    },
    {
        "id": 7,
        "name": "Daily Bugle",
        "photo": "img/users/4.jpg",
        "desc": "News Reporter"
    },
    {
        "id": 8,
        "name": "Peter Vaughn",
        "photo": "img/users/2.jpg",
        "desc": "Chef"
    }
]

// data for news tab
var _news = [
    {
        "id": 8,
        "title": "The hysterical laugh determines the control.",
        "link": "",
        "author": "Peter Vaughn",
        "source": "",
        "sourceLogo": "img/users/1.jpg",
        "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi",
        "image": "img/images/1.jpg",
        "likes": [
            {
                "name": "Thomas Tank",
                "photo": "img/users/2.jpg"
            },
            {
                "name": "Rupert Bear",
                "photo": "img/users/3.jpg"
            },
            {
                "name": "Diana Cahill",
                "photo": "img/users/4.jpg"
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/5.jpg"
            },
        ]
    },
    {
        "id": 2,
        "title": "The decisive group obtains the steel.",
        "link": "",
        "author": "Rupert Bear",
        "source": "Daily Times",
        "sourceLogo": "img/users/2.jpg",
        "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
        "summary": "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.",
        "image": "img/images/2.jpg",
        "comments": [
            {
                "name": "Rupert Bear",
                "photo": "img/users/2.jpg",
                "text": "The sugar relateds the gold.",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Diana Cahill",
                "photo": "img/users/5.jpg",
                "text": "The sweltering system experiments the shade.",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/3.jpg",
                "text": "The cute connection records the learning.",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
        ]
    },
    {
        "id": 3,
        "title": "The abandoned number commences the invention.",
        "link": "",
        "author": "Thomas Tank",
        "source": "Evening Standard",
        "sourceLogo": "img/users/2.jpg",
        "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
        "summary": "Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        "image": "img/images/3.jpg",
        "likes": [
            {
                "name": "Rupert Bear",
                "photo": "img/users/3.jpg"
            },
            {
                "name": "Diana Cahill",
                "photo": "img/users/4.jpg"
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/5.jpg"
            },
        ],
    },
    {
        "id": 4,
        "title": "The pull articulates the limit.",
        "link": "",
        "author": "Steven Spruse",
        "source": "Business News",
        "sourceLogo": "img/users/4.jpg",
        "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
        "summary": "Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.",
        "image": "img/images/4.jpg",
        "comments": [
            {
                "name": "Thomas Tank",
                "photo": "img/users/2.jpg",
                "text": "The true guide demonstrates the protest.",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Rupert Bear",
                "photo": "img/users/3.jpg",
                "text": "The act filters the idea.",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/4.jpg",
                "text": "The loud industry contracts the fight.",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
        ]
    },
    {
        "id": 5,
        "title": "The heat builts the exchange.",
        "link": "",
        "author": "Diana Cahill",
        "source": "Forbes",
        "sourceLogo": "img/users/4.jpg",
        "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
        "summary": "Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam",
        "image": "img/images/5.jpg",
        "likes": [
            {
                "name": "Thomas Tank",
                "photo": "img/users/2.jpg"
            },
            {
                "name": "Rupert Bear",
                "photo": "img/users/1.jpg"
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/3.jpg"
            },
        ],
        "comments": [
            {
                "name": "Thomas Tank",
                "photo": "img/users/3.jpg",
                "text": "The jolly destruction gauges the canvas.",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Rupert Bear",
                "photo": "img/users/2.jpg",
                "text": "The doubt enters the mere size.",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/5.jpg",
                "text": "The loud industry contracts the fight.",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
        ]
    },
    {
        "id": 6,
        "title": "The memory attends the vengeful company.",
        "link": "",
        "author": "Samuel Ross",
        "source": "Daily Planet",
        "sourceLogo": "img/users/4.jpg",
        "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
        "summary": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.",
        "image": "img/images/6.jpg"
    },
    {
        "id": 7,
        "title": "The top strategizes the proud part.",
        "link": "",
        "author": "Hazel Bradley",
        "source": "Daily Bugle",
        "sourceLogo": "img/users/5.jpg",
        "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
        "summary": "Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi.",
        "image": "img/images/7.jpg",
        "likes": [
            {
                "name": "Thomas Tank",
                "photo": "img/users/3.jpg",
            },
            {
                "name": "Rupert Bear",
                "photo": "img/users/2.jpg"
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/1.jpg"
            },
        ],
        "comments": [
            {
                "name": "Thomas Tank",
                "photo": "img/users/2.jpg",
                "text": "The gaping fold submits the stage.",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Rupert Bear",
                "photo": "img/users/1.jpg",
                "text": "The fat curve adjusts the butter.",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/3.jpg",
                "text": "The attraction augments the spiffy memory.",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
        ]
    }
];

// data for conversation and chat
var _messages = [
    {
        "conversation": 1,
        "recepientid": 8,
        "recepientname": 'Peter Vaughn',
        "recepientphoto": 'img/users/2.jpg',
        "messages": [
            {
                "senderid": 1,
                "text": "When does the voice debug the gabby advertisement?",
                "sentAt": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "senderid": 8,
                "text": "How does the noise decide the fantastic error?",
                "sentAt": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "senderid": 1,
                "text": "When does the six mother aide the stop?",
                "sentAt": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "senderid": 8,
                "text": "Why does the addicted wash perfect the profit?",
                "sentAt": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "senderid": 1,
                "text": "The guiltless relation recognizes the night.",
                "sentAt": randomDate(new Date(2016, 1, 1), new Date()),
            }
        ]
    },
    {
        "conversation": 2,
        "recepientid": 2,
        "recepientname": 'Rupert Bear',
        "recepientphoto": 'img/users/3.jpg',
        "messages": [
            {
                "senderid": 1,
                "text": "When does the homeless bit stimulate the development?",
                "sentAt": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "senderid": 1,
                "text": "The flight surveys the spicy smash",
                "sentAt": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "senderid": 2,
                "text": "When does the voracious hate perfect the plant?",
                "sentAt": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "senderid": 2,
                "text": "The prose builts the scale.",
                "sentAt": randomDate(new Date(2016, 1, 1), new Date()),
            }]
    }
]

// notifications json
var _notifications = [
    {
        id: 1,
        allDay: true,
        endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
        title: "Send clothes to dry cleaners",
        type: "Add Task"
    },
    {
        id: 2,
        allDay: true,
        endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
        title: "Do Tesco shopping for the week",
        type: "Add Task"
    },
    {
        id: 3,
        allDay: true,
        endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
        notes: "Remind him about paint-balling",
        phone: "07816965792",
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
        title: "Call Harry",
        type: "Add Call"
    },
    {
        id: 4,
        allDay: false,
        endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
        notes: "Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.",
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
        title: "Meeting with Mathew",
        type: "Add Event"
    },
    {
        id: 5,
        allDay: true,
        endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
        notes: "Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.",
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
        email: "john@email.com",
        title: "Send an Email to john",
        type: "Add Email"
    },
    {
        id: 6,
        allDay: true,
        endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
        notes: "Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.",
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date()).add(1, 'days')._d, new Date()),
        email: "harry@email.com",
        title: "Send an Email to Harry",
        type: "Add Email"
    },
    {
        id: 7,
        allDay: false,
        endsAt: randomDate(moment(new Date()).add(2, 'days')._d, new Date()),
        notes: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui.",
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date())._d, new Date()),
        email: "kevin@email.com",
        title: "Email Kevin about start up event",
        type: "Add Email"
    },
    {
        id: 8,
        allDay: false,
        endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date()).add(2, 'days')._d, new Date()),
        phone: "03309965792",
        title: "Call Advant Ltd",
        type: "Add Call"
    },
    {
        id: 9,
        allDay: true,
        endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
        email: "nick@email.com",
        title: "Email Nick about mobile phone app",
        type: "Add Email"
    },
    {
        id: 10,
        allDay: true,
        endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
        phone: "01237965792",
        title: "Call Dolly",
        type: "Add Call"
    },
    {
        id: 11,
        allDay: true,
        endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
        notes: "Remind him about paint-balling",
        phone: "07816900453",
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
        title: "Phone Steph",
        type: "Add Call"
    },
    {
        id: 12,
        allDay: false,
        endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
        notes: "Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.",
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
        title: "Meeting with Romanov",
        type: "Add Event"
    },
    {
        id: 13,
        allDay: true,
        endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
        notes: "Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.",
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
        email: "ronald@email.com",
        title: "Compose an email to Ronald",
        type: "Add Email"
    },
    {
        id: 14,
        allDay: true,
        endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
        notes: "Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.",
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date()).add(1, 'days')._d, new Date()),
        email: "harry@email.com",
        title: "Send an Email to Harry",
        type: "Add Email"
    },
    {
        id: 15,
        allDay: false,
        endsAt: randomDate(moment(new Date()).add(2, 'days')._d, new Date()),
        notes: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui.",
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date())._d, new Date()),
        title: "Do a budget plan for next three months",
        type: "Add Task"
    },
    {
        id: 16,
        allDay: false,
        endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
        remindTime: ["at set time", "15 mins before"],
        startsAt: randomDate(moment(new Date()).add(2, 'days')._d, new Date()),
        phone: "07816965792",
        title: "Call Advant Ltd",
        type: "Add Call"
    },
]

// products json for shop-front tab
var _products = [
    {
        id: 1,
        category: "shoes",
        price: 70.00,
        name: "blue-green nike",
        image: ["img/shop/1.jpg", "img/shop/1.jpg", "img/shop/1.jpg", "img/shop/1.jpg"],
        stock: 100,
    },
    {
        id: 2,
        category: "shoes",
        price: 60.00,
        name: "black-pink nike",
        image: ["img/shop/2.jpg", "img/shop/2.jpg", "img/shop/2.jpg", "img/shop/2.jpg"],
        stock: 1000,
    },
    {
        id: 3,
        category: "shoes",
        price: 50.99,
        name: "black-red nike",
        image: ["img/shop/3.jpg", "img/shop/3.jpg", "img/shop/3.jpg", "img/shop/3.jpg"],
        stock: 5000,
    },
    {
        id: 4,
        category: "shoes",
        price: 69.99,
        name: "blue-pink nike",
        image: ["img/shop/4.jpg", "img/shop/4.jpg", "img/shop/4.jpg", "img/shop/4.jpg"],
        stock: 1200,
    },
    {
        id: 5,
        category: "shoes",
        price: 70.00,
        name: "black-white nike",
        image: ["img/shop/5.jpg", "img/shop/5.jpg", "img/shop/5.jpg", "img/shop/5.jpg"],
        stock: 1200,
    },
    {
        id: 6,
        category: "shoes",
        price: 74.99,
        name: "blue-black-white nike",
        image: ["img/shop/6.jpg", "img/shop/6.jpg", "img/shop/6.jpg", "img/shop/6.jpg"],
        stock: 1200,
    },
    {
        id: 7,
        category: "shoes",
        price: 45.65,
        name: "red-black nike",
        image: ["img/shop/7.jpg", "img/shop/7.jpg", "img/shop/7.jpg", "img/shop/7.jpg"],
        stock: 100,
    },
    {
        id: 8,
        category: "shoes",
        price: 72.00,
        name: "white-black nike",
        image: ["img/shop/8.jpg", "img/shop/8.jpg", "img/shop/8.jpg", "img/shop/8.jpg"],
        stock: 100,
    },
    {
        id: 9,
        category: "shoes",
        price: 80.00,
        name: "green-black nike",
        image: ["img/shop/9.jpg", "img/shop/9.jpg", "img/shop/9.jpg", "img/shop/9.jpg"],
        stock: 12000,
    },
    {
        id: 10,
        category: "shoes",
        price: 70.00,
        name: "blue-black nike",
        image: ["img/shop/10.jpg", "img/shop/10.jpg", "img/shop/10.jpg", "img/shop/10.jpg"],
        stock: 1800,
    }
]

// Random Messages used as replies for chat tab
var _randMessages = [
    'Over the propaganda tangent refrains the cryptic warehouse.',
    'Does a steam jacket your altered blade?',
    'The thirst gasps underneath the library.',
    'An era reverts?',
    'The blackmail zooms in the master!',
    'When can the horror arrest the new drama?',
    'Whatever elitist prizes a lemon.',
    'A workload stretches against the ridden suicide.',
    'The male dances beneath the conscience!',
    'Why wont the surplus joke?',
    'How can the capitalist bolt a coming terminology?',
    'Can the curve bolt near the optimal word?',
    'A ridiculous custom refutes a science.',
    'The cheese advances within a creep!',
    'The remembered indent rocks the depressed eye.',
    'A rhetorical library twists on top of a misuse.',
    'The rear flood bulls a hand underneath the post axiom.',
    'This rotating chord deserves the guard.',
    'Should the spoiled thief bay with the illiterate?'
]

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}