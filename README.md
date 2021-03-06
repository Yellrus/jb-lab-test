# Сборка

Базовый шаблон для вёрстки проекта.

Для разметки используется Flexbox, Jade + bemto, для стилей — Stylus + PostCSS

breakpoint 320px 768px 1400px 

## Разработка и сборка
Запуск локального сервера с автоматическим обновлением для разработки — `gulp`.

Полная пересборка проекта с генерацией zip-архива в директории `dist/dist.zip` — `gulp build`.

Создать блок bemto:  'node block'

`Структура проекта`
```
├── app/                       # Исходники
│   ├── blocks/                # Блоки
│   │   ├── тут все блоки/     # Блок
│   │   |   ├── block.pug      # Разметка блока
│   │   |   └── block.styl     # Стили блока
|   |   └── svg-icon           # Миксин для вставки svg
│   ├── pages/                 # Страницы
│   │   └── index.pug          # Разметка страницы
│   ├── icons/                 # SVG иконки для генерации векторного спрайта
│   ├── sprites/               # PNG иконки для генерации растрового спрайта
|   |   └──icons.svg           # Данные SVG спрайтов (автосборка)
│   ├── static/                # Статические файлы для копирования в dist
│   ├── scripts/               # Скрипты
│   │   └── main.js            # Главный скрипт
│   └── styles/                # Стили
│   |   ├── helpers/           # Помощники
│   |   │   ├── mixins.styl    # Примеси
│   |   ├── ├── sprites.styl   # Данные PNG спрайтов (автосборка)
│   |   │   └── variables.styl # Переменные
|   |   ├── elements/          # Кнопки и отступы между BEM блоками
|   |   ├── base/              # Сброс стилей и фиксы, подключение шрифтов, контейнер
│   |   └── main.styl          # Главный стилевой файл
|   └── svg/                   # Папка для плагина postcss-svg
|
├── dist/                      # Сборка (автогенерация)
│   ├── assets/                # Подключаемые ресурсы
│   │   ├── fonts/             # Шрифты
│   │   ├── images/            # Изображения
│   │   │   └── sprites.png    # Спрайты (автогенерация)
│   │   ├── scripts/           # Скрипты
│   │   └── styles/            # Стили
│   └── index.html             # Страница
|
├── tasks/                     # Подключаемые скрипты с задачами для gulpfile.js
├── .editorconfig              # Конфигурация настроек редактора кода
├── .gitignore                 # Список исключённых файлов из Git
├── gulpfile.js                # Файл для запуска Gulp.js
├── block.js                   # Утилита создания новых блоков
├── package.json               # Список модулей и прочей информации
├── readme.md                  # Документация шаблона
```
