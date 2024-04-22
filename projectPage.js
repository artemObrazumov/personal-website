var projects = {
    "getmaterials": {
        "projectName": "Get Materials",
        "mainContent": `
            <p>Приложение выполнено в рамках кейса от ПГЗ (Пишеланского гипсового завода). Его цель - упростить подбор материалов в зависимости от потребностей застройщика (вид здания, вместительности, вида работ)</p>
            <p>Для реализации приложения была использована Java и Firebase</p>
            <p>Реализованный функционал:</p>
            <ul>
                <li>Выбор вместимости, вида работ и вида здания</li>
                <li>Возможность увидеть информацию о подобранных материалах и уровень пожарной безопасности</li>
                <li>Возможность быстро связаться с поставщиком</li>
            </ul>
            <a href="https://youtu.be/sXjY-SXYwns" target="_blank">Видео-демонстрация</a> <br>
            <a href="https://github.com/artemObrazumov/getmaterials" target="_blank">Исходный код</a>
        `,
        "screenshotCount": 5
    },
    "arcticapp": {
        "projectName": "Arctic App",
        "mainContent": `
            <p>Приложение выполнено в рамках кейса “Арктического хакатона”. Оно позволяет изучать энецкий язык в игровой форме с помощью просмотра видеоуроков и выполнения практических заданий.</p>
            <p>Для реализации приложения был использован Kotlin. Другие библиотеки - Room, Firebase, ExoPlayer, Text To Speech</p>
            <p>Реализованный функционал:</p>
            <ul>
                <li>Просмотр видеокурса</li>
                <li>Прохождение тестов</li>
                <li>Прохождение диктантов</li>
                <li>Прохождение заданий на составление предложений</li>
                <li>Получение очков за прохождение уроков</li>
                <li>Система достижений</li>
                <li>Словарь со словами энецкого языка и их переводом</li>
                <li>Возможность прослушать правильное произношение слов</li>
                <li>Специальная клавиатура для ввода слов на энецком языке</li>
                <li>Словарь с буквами энецкого языка</li>
                <li>Переводчик с русского языка на энецкий</li>
            </ul>
            <a href="https://youtu.be/awYokCTUCsY" target="_blank">Видео-демонстрация</a> <br>
            <a href="https://github.com/FSL-Tikaani/HackatonArcticApp" target="_blank">Исходный код</a>
        `,
        "screenshotCount": 9
    },
    "calorycounter": {
        "projectName": "Calory counter",
        "mainContent": `
            <p>Приложение было создано для людей, которые хотят улучшить свою форму и контролируют свое питание. Приложение предоставляет функционал для комфортного ведения дневника приемов пищи</p>
            <p>Для реализации приложения был использован Kotlin и библиотека Room</p>
            <p>Реализованный функционал:</p>
            <ul>
                <li>Подбор суточной нормы калорий в зависимости от параметров пользователя</li>
                <li>Дневник приемов пищи (Записи содержат название приема пищи, время и продукты)</li>
                <li>Добавление собственных продуктов питания для дневника</li>
                <li>Контроль суточной нормы калорий</li>
                <li>Аналитика питания за разные периоды</li>
            </ul>
            <a href="https://youtu.be/t4o1Qu1IMgY" target="_blank">Видео-демонстрация</a> <br>
            <a href="https://github.com/artemObrazumov/calory-counter" target="_blank">Исходный код</a>
        `,
        "screenshotCount": 8
    },
    "moneysaver": {
        "projectName": "Money saver",
        "mainContent": `
            <p>Приложение создано с целью контроля своего бюджета с помощью ведения учета своих расходов</p>
            <p>Для реализации приложения использовался Kotlin и Room, а также Firebase для синхронизации данных с сервером</p>
            <p>Реализованный функционал:</p>
            <ul>
                <li>Создание счетов пользователя</li>
                <li>Добавление расходов и доходов пользователя</li>
                <li>Фильтрация доходов и расходов пользователя по категориям</li>
                <li>Добавление собственных категорий для фильтрации доходов и расходов</li>
                <li>Анализ доходов и расходов по категориям</li>
                <li>Возможность запланировать доходы и расходы</li>
                <li>Синхронизация локального хранилища с сервером</li>
            </ul>
            <a href="https://youtu.be/rWQchV3A57k" target="_blank">Видео-демонстрация</a> <br>
            <a href="https://github.com/artemObrazumov/MoneySaver" target="_blank">Исходный код</a>
        `,
        "screenshotCount": 7
    }
}

function loadProject(id) {
    try {
        let project = projects[id]
        document.querySelector("title").innerHTML += " - " + project.projectName
        document.getElementById("project_name").innerHTML = project.projectName
        document.getElementById("project_info_paragraph").innerHTML = project.mainContent
        for(let i = 1; i <= project.screenshotCount; i++) {
            document.getElementById("screenshot_carousel").innerHTML +=
                `<a href="../img/screenshot/`+id+i+`.jpg" target="_blank">
                    <img src="../img/screenshot/`+id+i+`.jpg">
                </a>`
        }
    } catch(e) {
        document.getElementsByClassName("project_info")[0].innerHTML = `<div class="project_error">Проект с таким ID не найден</div>`
    }
}

var projectId = new URLSearchParams(window.location.search).get("id")
loadProject(projectId)