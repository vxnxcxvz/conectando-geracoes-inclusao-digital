Conectando Gerações: A Inclusão Digital da Pessoa Idosa

Este repositório armazena os arquivos do projeto “Conectando Gerações: A Inclusão Digital da Pessoa Idosa”, uma iniciativa de extensão do curso de Análise e Desenvolvimento de Sistemas da UNINTER. O projeto visa promover a inclusão digital de pessoas idosas por meio de oficinas teóricas, simuladores práticos e uma plataforma web acessível desenvolvida com HTML, CSS e JavaScript.

Objetivos
Reduzir a desigualdade digital: oferecer materiais de apoio para que pessoas idosas possam utilizar dispositivos móveis, internet e serviços digitais com autonomia e segurança.
Ensinar na prática: combinar microaulas teóricas (Oficinas) com simuladores que permitem treinar as habilidades abordadas.
Promover segurança: conscientizar sobre golpes eletrônicos, privacidade e proteção de dados pessoais.
Funcionalidades
1. Página Inicial (index.html)
Apresenta o projeto, justificando a importância da inclusão digital.
Destaca que metade da população mundial ainda está offline e que grande parte dos idosos brasileiros não usufrui plenamente das ferramentas digitais.
Inclui um controle de acessibilidade para aumentar/diminuir o tamanho de fonte.
2. Oficinas (oficinas.html)

Módulos teóricos em linguagem simples, com conteúdos organizados por tema:

Primeiros passos no celular: ajustando brilho, tamanho da fonte, uso do teclado e dicas de segurança.
WhatsApp sem mistério: envio de áudio, fotos, vídeo chamadas, configurações de privacidade e como bloquear número.
Serviços públicos digitais: acesso a serviços governamentais, cadastros seguros e proteção de dados.
Transporte e rotas: uso de aplicativos de mapas para traçar rotas e salvar locais favoritos.

Cada oficina vem acompanhada de imagens ilustrativas e links para as respectivas fontes.

3. Treinamentos (treinamentos.html)

Simuladores para praticar as habilidades aprendidas:

Simulador de WhatsApp (wpp.html): treino de envio de mensagens de texto/voz, anexos e chamadas.
Simulador de Mapas (maps.html): inserção de origem/destino e geração de rotas, com opção de abrir no Google Maps real.
Simulador Meu SUS (sus.html): consulta a histórico de vacinas, agendamento de consultas e busca de medicamentos fictícia para fins de estudo.
Anti-golpes (golpes.html): ferramentas para detectar textos ou links suspeitos, com explicação de características de golpes comuns.
4. Quiz (quiz.html)

Perguntas de revisão para testar os conhecimentos adquiridos nas oficinas e treinamentos.

5. Contato (contato.html)

Formulário simples para que usuários enviem sugestões ou esclareçam dúvidas sobre as oficinas.

6. Acessibilidade (a11y.js)

Script que aumenta ou diminui dinamicamente o tamanho da fonte em toda a página, facilitando a leitura para diferentes usuários.

Estrutura do Repositório
/
├── index.html
├── oficinas.html
├── treinamentos.html
├── contato.html
├── quiz.html
├── wpp.html
├── maps.html
├── sus.html
├── golpes.html
├── creditos.html
├── style.css
├── a11y.js
└── images/
    ├── elderly-hero.jpg
    ├── familia_avatar.png
    ├── grupo-familia.png
    ├── grupo_familia_avatar.png
    ├── abstract1.png
    ├── abstract2.png
    ├── primei ... (demais imagens)
images/: contém todos os arquivos de imagem utilizados nas páginas (fotos, ilustrações e avatares).
Arquivos HTML: representam as páginas do site.
style.css: define a identidade visual com layout responsivo e cores agradáveis.
a11y.js: implementa funções de acessibilidade.
Como executar localmente
Clonar este repositório ou fazer download dos arquivos.
Abrir o arquivo index.html em qualquer navegador moderno.
Navegar entre as páginas pelas opções da barra de navegação.
Publicação no GitHub Pages

Para disponibilizar o site online via GitHub Pages:

Acesse o repositório no GitHub.
Abra Settings → Pages.
Em Branch, selecione main e a raiz (/), depois clique em Save.
O GitHub gerará um link https://<usuário>.github.io/conectando-geracoes-inclusao-digital/ onde o site estará acessível.
Contribuições

Sugestões de melhoria, correções de erros e novas oficinas são bem-vindas! Utilize o mecanismo de pull requests ou abra uma issue descrevendo sua contribuição.

Licença

Este projeto é um material de apoio educacional e pode ser utilizado livremente para fins não comerciais, mantendo os devidos créditos aos autores e à UNINTER. Caso deseje reutilizar parte do código ou imagens para outros propósitos, verifique as licenças das imagens referenciadas em creditos.html.
