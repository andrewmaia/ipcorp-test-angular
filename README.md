# ipcorp-test-angular

Para rodar este projeto é necessário instalar o NodeJs: https://nodejs.org/en/.
Depois deve-se instalar o Angular-Cli: ir em um console e executar: npm install -g @angular/cli

Este projeto está no GIT em https://github.com/andrewmaia/ipcorp-test-api. Mas as bibliotecas
necessárias para o projeto em modo de desenvolvimento da pasta node_modules não estão. Por isso é acoselhado baixar o projeto da pasta que subi para o dropbox (link no email) que já contém tudo.


# Rodar o projeto em desenvolvimento

Primeiramente é necessário rodar o projeto da API no endereço https://localhost:5001 pois este projeto o acessa como backend.
Para rodar o projeto basta navegar até o seu diretório principal (ipcorp-test-api) pelo console do windows e executar ng serve --open
O site deve abrir em  `http://localhost:4200/`


# Funcionamento da Página

A Página acessa o método get padrão da API Asp.Net Core LogSistema que retorna todos as Logs no banco de dados e exibe na tela. As logs no banco serão sempre as últimas 10 do sistema.
Há um botão chamado 'Importar últimos 10 registros' que acessa um outro método get da API Asp.Net Core(GetLogsFromSource) que internamente acessa a API da IpCorp e obtém as 10 logs mais recentes. As logs que estão presentes no banco são excluidas e as novas inseridas (sempre as últimas 10). Após o processo a página recarrega automaticamente com as novas logs vindas do banco de dados, não diretamente da Api da IpCorp.

# Arquitetura
Este projeto é bem simples. Utiliza apenas o app.component (página principal) que chama o serviço LogSistemaService, o qual faz a chamada a API através da classe HttpClient. Foi utilizado a classe Observable da biblioteca rxjs para fazer algumas chamadas assincronas.
