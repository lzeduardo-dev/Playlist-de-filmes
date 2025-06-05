# Projeto-Playlist-Filmes

# 🎬 Movie Playlist - Gerenciador de Filmes

Este projeto é uma aplicação web que permite aos usuários buscar filmes e visualizar informações detalhadas como sinopse, elenco, data de lançamento e pôster. Os dados são obtidos da API pública [OMDb API](http://www.omdbapi.com/).

## 🚀 Tecnologias Utilizadas

- **JavaScript**
- **HTML5**
- **Tailwind CSS**
- **Vite** (para o servidor local e bundler)
- **OMDb API** (para consumo de dados dos filmes)

## ✨ Funcionalidades

- Campo de busca para digitar o nome do filme (em inglês)
- Modal exibindo:
  - Pôster do filme
  - Sinopse
  - Elenco
  - Data de lançamento
- Interface responsiva com Tailwind CSS
- Projeto organizado e leve utilizando Vite

## 🔧 Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/lzeduardo-dev/Playlist-de-filmes.git
   cd Playlist-de-filmes

Instale as dependências:

bash
npm install
Inicie o servidor de desenvolvimento:

bash
npm run dev
Acesse no navegador:

http://localhost:5173
🛠️ API Utilizada
A aplicação utiliza a OMDb API. Para utilizá-la, você precisa obter uma chave de API gratuita no site oficial e incluí-la no seu código como variável de ambiente (recomenda-se o uso de .env com Vite).

📸 Capturas de Tela
<img width="1470" alt="Captura de Tela 2025-06-01 às 03 20 25" src="https://github.com/user-attachments/assets/fc7c2383-0437-4e8d-9b45-670245b8aa8d" />


📦 Build
Para gerar a build de produção:

bash
npm run build
