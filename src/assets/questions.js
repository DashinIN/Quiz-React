const questions = [
    {
        title: "Дата знака зодиака Скорпион?",
        variants:["23 октября - 21 ноября","22 июня - 22 июля","20 февраля - 20 марта","22 ноября  - 21 декабря"],
        correct: 0,
        imageCorrect: "https://media2.giphy.com/media/yZWsMXuXP9e5a/giphy.gif",
        commentCorrect: "а ты харош",
        imageWrong: "https://media.tenor.com/I5kbD8nCyU4AAAAd/killua-hunter-x-hunter.gif",
        commentWrong: "на дауничах"
    },
    {
        title: "Сколько твоих картин в 725Б?",
        variants:["3","7","4","5"],
        correct: 2,
        imageCorrect: "https://i.redd.it/a47kehfpj7t91.gif",
        commentCorrect: "молодец!",
        imageWrong: "",
        commentWrong: "плох"
    },
    {
        title: "Как зовут голубя, который питается на подоконнике 725Б?",
        variants:["Роман","Игорь","Валера","Аркадий"],
        correct: 1,
        imageCorrect: "",
        commentCorrect: "неплох",
        imageWrong: "",
        commentWrong: "че!?"
    },
    {
        title: "Самый вкусный энергетик:",
        variants:["Drive","Adrenalin","Gorilla","Байкал"],
        correct: 1,
        imageCorrect: "https://64.media.tumblr.com/3400a5f6627f712f241b47d5a84cb968/5568c782d59fa15e-53/s540x810/2360cb27cd3db0b5e0988c2df019e6bb7190152c.gif",
        commentCorrect: "крут",
        imageWrong: "https://64.media.tumblr.com/87402c4f3092a0978a2cc570ef497d9f/57155c6195c10f27-f0/s540x810/91891af5906ad2eab4181b8a6248ebdbfb08f7d5.gifv",
        commentWrong: "надо думать иногда, не?"
    },
    {
        title: "Твоя любимая пара?",
        variants:["Физкультура","Тау","Которую проспал в общаге","Узлы"],
        correct: 2,
        imageCorrect: "https://sun9-72.userapi.com/impg/zPM_QaK6-JMnESoSb8kTCgjyJ1oe7acNhAELfg/Hmvu9qgKnfc.jpg?size=611x807&quality=96&sign=0310cd90d90e0e429c4a00c56b79509d&type=album",
        commentCorrect: "не сомневались в тебе",
        imageWrong: "https://sun9-81.userapi.com/impg/fQRG5OA90I6tABuAh3lTDWGjze96IDHqB5S0nA/c07BN78QIDo.jpg?size=750x580&quality=96&sign=f97f3257e614a33d953132dbb030352f&type=album",
        commentWrong: "ты вот щас серьезно?"
    },
    {
        title: "Твой любимый сериал?",
        variants:["Эйфория","Шерлок BBC","Кухня","Папины дочки"],
        correct: 2,
        imageCorrect: "data:image/jpeg;base64,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",
        commentCorrect: "Огузок харош",
        imageWrong: "https://psv4.userapi.com/c848432/u371229862/docs/d9/9adb17b894df/khnyk.gif?extra=upDqb5H5w7mgoGiPmGO6YWd8msiswQxrs7wplwrOFxKZc0qp0rvvXee6D-2c4kVpyYpYW82ZqnW8x-Qb46i8xO3yqKZ9hZX_fJCbJ9PY_Qb8IprFYhEMXFCnqD-P4Ncl-BAw80NGhjU2e0FEpM64e5I",
        commentWrong: "Мда, придется дальше отдерать наклейки от бананов..."
    },
    {
        title: "Во что будешь играть",
        variants:["Матлаб","Геншен Импакт","Косынка","Террария"],
        correct: 1,
        imageCorrect: "https://psv4.userapi.com/c816627/u255302777/docs/cce2ec578af1/tumblr_nzcjk5Wv0t1u9ia8fo1_500.gif?extra=bhL4yD_IjI9Cy4RlrGjy2v6yROeZI0AbsNa-EIgy57ZPJ_S8RgF7Zi9H8CoVypW_zt_rCV2BQyrsK4h6j5H6Zi8QgGIQ348Ot6Pt577UdyMdZ4up9ULsvGH_3yPolTgTwOIx5XcO6KHA7KyFi_oLT6U",
        commentCorrect: "Хороший выбор",
        imageWrong: "https://psv4.userapi.com/c810424/u2000029240/docs/e771662014b0/file.gif?extra=Bc1nRfUrN1po54efJ4OD9Kp1skxGmLyhN9Goq9w_swu-5--ERx0waX7u8yU7lS0SQLuOBi4_WTo2RRmvlgBk4Ve6SurnW7skxZ6E7NovWsjPO7CLot7_covnHJe_3BhGHh96K4A0KlioUJICVIkqFTc",
        commentWrong: "Земля пухом если так."
    },
    {
        title: "Какое мороженное выберешь",
        variants:["Магнат за 150 рублей","1 шарик из Парка Сокольники","Фруктовый лёд джуси","Мороженное гигант ванильное"],
        correct: 0,
        imageCorrect: "https://psv4.userapi.com/c537232/u407358510/docs/d41/fdc22673c55b/tomas_shelbi.gif?extra=C9J-8Gnm5FZjAnHOpR0ft4lhVL4n0fUFny6QhI752InylYxnbKKvTYUebNvFlnlCgC8UtDTzhZEYwV0JAGAIbZP4HOHnOZhZIEMpA7BEsXIuMVGDtuLvC3D8sfKd11Z2OWNmnhVp8PLmEuPOYTKYBSA",
        commentCorrect: "Супер решение",
        imageWrong: "https://psv4.userapi.com/c856228/u513709354/docs/d13/6c744bd79d36/pepeCry.gif?extra=F8D2_v6dgs9liFGaurnGrR-czY0v67Aa9izROy69N55QUC6W-FKccmsmx1rlWPABTHw_n0Krkm7qkqcAKsnixC2uWpYqaJBAvfUVhys9YjGTo94-nBHpvY81xEHFf4L__F5yCUBEvezZkcW3YMr3_XE",
        commentWrong: "Не очень как то..."
    },
    {
        title: "Как лучше всего обожраться",
        variants:["Бургеркинг","Додопицца","5-ая столовая","Жаренные пельмени"],
        correct: 2,
        imageCorrect: "",
        commentCorrect: "Да Андраник лучший",
        imageWrong: "",
        commentWrong: "Ну так и быть"
    },
];

export default questions;