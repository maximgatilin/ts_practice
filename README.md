# Практика TypeScript Type Challenges

Этот репозиторий настроен для практики задач по типам TypeScript из [type-challenges](https://github.com/type-challenges/type-challenges).

## Установка

1. Установите зависимости:
```bash
npm install
```

2. Создавайте файлы с задачами в директории `challenges/`.

## Использование

### Проверка типов

Для проверки ваших решений выполните:
```bash
npm run type-check
```

Эта команда проверит все TypeScript файлы без генерации JavaScript. Если ваши типы корректны, вы не увидите ошибок. Если есть ошибки типов, TypeScript покажет, что не так.

### Пример задачи

Смотрите `challenges/004-pick.ts` для примера структуры задачи.

## Структура

```
.
├── challenges/          # Ваши решения задач
├── package.json        # Зависимости и скрипты
├── tsconfig.json       # Конфигурация TypeScript
└── README.md          # Этот файл
```

## Ресурсы

- [Сайт Type Challenges](https://tsch.js.org/)
- [Репозиторий Type Challenges](https://github.com/type-challenges/type-challenges)
- [Справочник TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)

