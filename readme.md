# Pug start template
Супер оптимизированный шаблон, использующий большинство известных принципов ускорения сайта, построенный на gulp.

## Технологии
Pug, scss. Для оптимизации размера бандла используются terser, html-minifier-terser, purgecss


## Структура проекта
app/ - файлы проекта

app/scss/core - миксины и файлы для настройки всего проекта, точка входа - index.scss

app/scss/templates - миксины для компонентов

app/scss/layouts - разметка страниц, соответствуют pug/layouts

app/scss/pages - стили страниц, соответствуют pug/pages

app/scss/partials - стили компонентов, соответствуют pug/partitials

app/pug - всё, что касается pug, точка входа - index.pug

app/pug/pages - шаблоны страницы

app/pug/partials - шаблоны компонентов

app/pug/layouts - разметка страниц

app/fonts/ - шрифты

app/images/ - изображения

app/js/ - javascript, точка входа - index.js

dist/ - файлы сборки (эту папку можно заливать на хостинг)


gulpfile.js - конфигурация gulp.

## Как запустить

- Устанавливаем все npm пакеты командой `npm install`
- Cтартуем сборку командой `gulp`


## Нюансы
Из коробки сборка будет проходить сразу в PROD режиме, т.е. все плагины для оптимизации будут включены.
Чтобы сборка начала работать в DEV версии, в файле gulpfile.js нужно закомментировать указанные строчки

