# Pré-requisitos

- Node.js v18+
- npm 9+
- Ionic CLI: `npm install -g @ionic/cli`

## Instalação

```bash
git clone https://github.com/MatheusDSantossi/pokedex-app.git
cd pokedex-app
npm install
```

## Desenvolvimento

ionic serve

### Build para produção

ionic build --prod

### Testes

npm test        # em modo watch, browser runner
npm run test:ci # headless (Puppeteer)
