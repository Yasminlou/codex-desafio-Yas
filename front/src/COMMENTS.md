## 💡 Ideias que Gostaria de Implementar (se houvesse mais tempo)

- Busca com Elasticsearch: Seria interessante implementar uma funcionalidade de busca utilizando Elasticsearch, o que permitiria indexar as matérias e vídeos de forma eficiente, possibilitando buscas rápidas e relevantes para o usuário. Isso seria feito criando um índice com os dados da API local, atualizando-o sempre que novos conteúdos fossem adicionados, e integrando a busca ao frontend com sugestões instantâneas.

- Filtros por categoria: Permitir que os usuários filtrem notícias por categoria (ex: esportes, política, tecnologia).

- Página de detalhes da matéria: Ao clicar em uma matéria, redirecionar para uma página dedicada com o conteúdo completo e matérias relacionadas.

- Scroll infinito: Carregamento dinâmico de matérias conforme o usuário rola a página.


- Dark mode: Adicionar um modo escuro para melhorar a experiência do usuário.

- Testes de integração com Cypress: Além dos testes unitários com Jest e RTL, adicionar testes de fluxo completos.

## 📌 Decisões Tomadas e Justificativas

- Uso de React: Escolhido por ser uma biblioteca leve e eficiente para construção de SPAs.

- Modal de vídeo manual: Em vez de usar uma biblioteca externa para modal, foi implementado do zero para ter maior controle do comportamento visual.

- Estilo semelhante ao G1: Escolha feita para simular um ambiente real e treinarmos atenção a detalhes visuais.

- Renderização condicional por tipo de conteúdo: Separar a lógica de exibição para matérias, vídeos, agrupadores e anúncios facilitou a manutenção do código e respeitou as regras de negócio.

## 🏗️ Arquiteturas Testadas e Modificações

- Componente único para todos os tipos: Inicialmente, tentamos um único componente para todos os tipos de conteúdo, mas isso gerava muitos ifs e código acoplado. A solução foi criar componentes separados: ArticleCard, VideoCard, GroupedArticles, AdCard, cada um com suas responsabilidades.

- Exibição de modal inline: O modal inicialmente era um simples div absoluto, mas isso causava problemas com foco e acessibilidade. Foi adaptado para uma estrutura que cobre a tela com fundo escurecido.

- Tentativa de usar Styled Components: Foi descartado para simplificar e seguir um padrão CSS tradicional com arquivos .css separados.