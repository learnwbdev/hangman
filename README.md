# Учебный-проект: "Hangman Word Game"

![Screenshot-Hangman](https://github.com/learnwbdev/hangman-rss/assets/138000021/08ff3e72-e4bb-4d9b-9497-8492913c3b60)

## 1. Описание
Игра в слова "Hangman" (Виселица).<br>
Цель игры - отгадать слово за ограниченное количество попыток, подставляя буквы алфавита.<br>
[Описание игры в Википедии](https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%81%D0%B5%D0%BB%D0%B8%D1%86%D0%B0_(%D0%B8%D0%B3%D1%80%D0%B0))

Проект реализован в рамках курса [**&laquo;JavaScript/Front-end&raquo;**](https://rs.school/js/) от **The Rolling Scopes School**.

#### 📄 Задание: [исходное задание от RS School](https://github.com/rolling-scopes-school/tasks/tree/master/stage1/tasks/hangman)

#### 🖥️ Деплой: [демо Hangman Game](https://learnwbdev.github.io/hangman-rss)

## 2. Стек технологий
![Иконка HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge)
![Иконка CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge)
![Иконка SASS](https://img.shields.io/badge/SASS-CC6699?logo=sass&logoColor=white&style=for-the-badge)
![Иконка JavaScript](https://img.shields.io/badge/JavaScript-323330?logo=javascript&logoColor=F7DF1E&style=for-the-badge)

## 3. Функционал

- **вывод случайного загаданного слова** с подсказкой из набора слов
- возможность **ввода буквы** на виртуальной клавиатуре и с физической клавиатуры
- **добавление элементов к виселице и увеличение счетчика** использованных попыток при вводе буквы, которой нет в загаданном слове
- **отображение буквы** в слове при вводе буквы из загаданного слова
- вывод **модального окна** с сообщением о **проигрыше**, если слово не было отгадано после использования всех попыток
- вывод **модального окна** с сообщением о **выигрыше**, если слово было отгадано
- перезапуск игры по кнопке `Play again` в модальном окне с сообщением о проигрыше/выигрыше
- адаптивный дизайн от **360px** до **1440px**

## 4. Установка и запуск проекта в локальном репозитории

1. `git clone https://github.com/learnwbdev/hangman-rss.git` - клонировать репозиторий (HTTPS) на локальный компьютер

2. `cd hangman-rss` - перейти в каталог проекта
3. `pnpm i` или `npm i` - установить зависимости для проекта
4. `pnpm dev:open` или `npm run dev:open` - запустить **Webpack Dev Server** для просмотра страницы в браузере *(страница автоматически откроется в браузере по умолчанию)*
