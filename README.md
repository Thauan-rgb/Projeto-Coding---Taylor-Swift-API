# 🎵 Taylor Swift Random Music

Um projeto web desenvolvido em **HTML, CSS e JavaScript** que consome dados de uma **API pública** para exibir músicas aleatórias da artista Taylor Swift.

O objetivo do projeto é demonstrar o **consumo de API utilizando JavaScript**, manipulação de dados em **JSON** e exibição dinâmica dessas informações na interface do usuário, além da criação de um **layout responsivo com foco em dispositivos móveis**.

---

# 📱 Demonstração

Ao acessar a página inicial, o usuário encontra uma breve apresentação do projeto e um botão **"Explore"**.  
Ao clicar no botão, o usuário é direcionado para uma página onde uma **música aleatória da Taylor Swift** é exibida.

As informações exibidas incluem:

- 🎶 Nome da música  
- 💿 Nome do álbum  
- 🖼️ Capa do álbum  
- 📅 Ano de lançamento  

Também é possível **sortear uma nova música** clicando no botão disponível na página.

---

# 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **HTML5** — Estrutura da aplicação  
- **CSS3** — Estilização e responsividade  
- **JavaScript (ES6)** — Consumo da API e manipulação do DOM  
- **Fetch API** — Requisições HTTP para obtenção dos dados  

---

# 🔌 API utilizada

Os dados das músicas são obtidos através da **API pública do iTunes**, que fornece informações sobre artistas, músicas e álbuns.

Endpoint utilizado: https://itunes.apple.com/search?term=taylor+swift&entity=song&limit=50


A aplicação realiza uma requisição para a API, recebe os dados em formato **JSON** e seleciona uma música aleatoriamente para exibição.

---

# 📂 Estrutura do projeto

/projeto <br>
│<br>
├── index.html # Página inicial<br>
├── saida.html # Página que exibe a música sorteada<br>
├── style.css # Estilos da aplicação<br>
├── script.js # Consumo da API e lógica do sorteio<br>
└── /img<br>
└── banner.jpeg # Imagem utilizada no layout


---

# 📱 Responsividade

O site foi desenvolvido com **media queries** para se adaptar a diferentes tamanhos de tela.

- 💻 Desktop: layout com imagem lateral  
- 📱 Tablet: ajuste de espaçamento e fontes  
- 📲 Mobile: layout vertical priorizando a leitura e interação  

O projeto foi pensado com **prioridade para visualização em dispositivos móveis**, conforme solicitado na atividade.

---

# 🎯 Objetivo acadêmico

Este projeto foi desenvolvido como parte da atividade **"Desafio 1: Consumo de API - Individual"**, com os seguintes objetivos:

- Desenvolver um aplicativo web simples  
- Consumir dados de uma **API pública**  
- Exibir os dados dinamicamente na interface  
- Criar um **layout responsivo**  
- Publicar o projeto em um **repositório público**  

---

# 👨‍💻 Autor

Projeto desenvolvido por Thauan Bezerra como atividade acadêmica.
