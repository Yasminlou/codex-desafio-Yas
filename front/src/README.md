# G1 Clone - Página de Notícias

Este projeto é uma simulação da página inicial do portal G1, desenvolvida com **React**, usando a linguagem **JavaScript**, estilização feita com **HTML** e **CSS**. Ele consome dados de uma API local e renderiza diversos tipos de conteúdo, como:

- Matérias jornalísticas
- Vídeos
- Agrupadores de notícias
- Anúncios

---

## ✨ Funcionalidades

- ✅ Listagem dinâmica de conteúdos por tipo
- ✅ Modal de vídeo com player
- ✅ Agrupadores de matérias com múltiplos links
- ✅ Exibição de anúncios responsivos
- ✅ Menu hambúrguer funcional (mobile first)
- ✅ Estilo visual semelhante ao G1 real
- ✅ Testes unitários com Jest + React Testing Library

---

## 📸 Preview

![preview do projeto](./preview.png)

---

## 🚀 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)
- [CSS Modules ou estilos globais com CSS puro]
- [Lucide Icons](https://lucide.dev/) para ícones SVG

---

## 📁 Estrutura do projeto
```bash
front/
├──src/
├── api/
│ └── feed.js
├── components/
│ ├── ArticleCard.jsx
│ ├── VideoCard.jsx
│ ├── VideoModal.jsx
│ ├── GroupedArticles.jsx
│ ├── AdCard.jsx
│ └── ...
├── pages/
│ ├── Header.jsx
│ └── Home.jsx
├── styles/
│ └── *.css
├── tests/
│ └── *.test.jsx
├── App.jsx
└── index.js
```
---

## 🧪 Rodando os testes
```bash
npm test
# ou
yarn test
```

## ▶️ Como executar o projeto
1- Instale as dependências:
```bash
npm install
# ou
yarn
```
2- Inicie o projeto:
```bash
npm start
# ou
yarn start
```
## 👩‍💻 Desenvolvido por
Yasmin Loureiro



