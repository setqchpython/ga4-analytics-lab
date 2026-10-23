# GA4 Analytics Lab

Шаблон сайта для ОП.03 «Информационные технологии»: с темы 5 на нём выполняются все практики по веб-аналитике.

- Презентация темы 5: https://algorthimization-course-vvodnoe.vercel.app/op03-informacionnye-tehnologii/lessons/05-vercel-google-tag/index.html
- Конспекты тем и файлы занятий: https://github.com/MaximBytecamp/funnel-project-template/tree/main/lectures

## Начало работы

1. Нажмите **Use this template → Create a new repository**, создайте собственную копию.
2. В VS Code выберите **Clone Repository**, клонируйте свою копию и откройте папку.
3. Для локального просмотра используйте Live Server в VS Code.
4. В Vercel импортируйте свой репозиторий. Framework Preset: **Other**, Root Directory: корень; Build Command: пусто (при необходимости Override), Output Directory: **.**.
5. После Deploy откройте постоянный Production URL.

## Структура

```text
index.html
about.html
contacts.html
css/style.css
js/script.js
README.md
```

Статический HTML/CSS/JavaScript: npm и сборка не нужны. Навигация работает на всех страницах.
Контактная форма проверяет поля в браузере, ничего не отправляет и не сохраняет.

## Установка аналитики

В исходном шаблоне Google Tag отсутствует — это часть практической работы.
Получите код **своего** веб-потока в GA4 и вставьте один экземпляр сразу после открывающего `<head>` в **каждый** из трёх HTML-файлов.
Сохраните файлы, выполните Commit и Push, дождитесь нового Ready Deployment.
Посетите Home, About, Contacts и проверьте реальные события в Realtime.

Не меняйте рабочий поток ByteCamp. Не публикуйте секреты, пароли или личные данные.
Measurement ID не является секретом; используйте только ID своего потока.

## UTM-проверка

Подставьте собственный Production URL:

```text
https://YOUR-PROJECT.vercel.app/?utm_source=telegram&utm_medium=social&utm_campaign=ga4_lab
```

Откройте ссылку в новом приватном окне: новая вкладка того же окна новую сессию GA4 не начинает.

