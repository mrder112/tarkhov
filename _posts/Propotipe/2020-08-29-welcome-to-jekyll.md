---
layout: post # Шаблон страницы
title:  "My works 2022-2024" # Заголовок поста
date:   2022-08-29 09:29:20 +0700 # Дата и время публикации
categories: jekyll update # Категории поста
usemathjax: true # Включение поддержки математических формул
---


Вы найдете этот пост в директории `_posts`. Отредактируйте его и пересоберите сайт, чтобы увидеть изменения. Вы можете пересобрать сайт разными способами, но самый распространенный - запустить команду `jekyll serve`, которая запускает веб-сервер и автоматически обновляет сайт при изменении файлов.
<figure>
<img src="/apa-itu-shell/kernel.png" alt="kernel central of operating system">
<figcaption>Fig 2. bagan kernel.</figcaption>
</figure>


Jekyll требует, чтобы файлы постов были названы в следующем формате:

`YEAR-MONTH-DAY-title.MARKUP`

Где `YEAR` - четырехзначное число года, `MONTH` и `DAY` - двузначные числа месяца и дня, а `MARKUP` - расширение файла, определяющее используемый формат. После этого добавьте необходимую вводную часть (front matter). Посмотрите исходный код этого поста, чтобы понять, как это работает.

Jekyll также предоставляет мощную поддержку фрагментов кода:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Ознакомьтесь с [документацией Jekyll][jekyll-docs] для получения дополнительной информации о возможностях Jekyll. Сообщайте обо всех ошибках/пожеланиях в [GitHub репозиторий Jekyll][jekyll-gh]. Если у вас есть вопросы, вы можете задать их на форуме [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home # Ссылка на документацию
[jekyll-gh]:   https://github.com/jekyll/jekyll # Ссылка на GitHub репозиторий
[jekyll-talk]: https://talk.jekyllrb.com/ # Ссылка на форум
