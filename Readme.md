Projeto 2 — Serviços em Nuvem

Lorenzo Tadeu - 10420067

Lucas Crepalde - 10425647

Pedro Carvalho - 10388298

O projeto se baseia em um CRUD de livros exposto por uma API REST em Node.js/Express 
rodando em uma imagem Docker numa EC2, com dados em um banco de dados MySQL armazenados 
em um RDS (em sub-redes privadas sem acesso a internet), publicado externamente via API Gateway.

O projeto possui uma função Lambda no endpoint /report que consulta a tabela de livros para retornar 
o numero total de livros que essa tabela possui, rodando na porta 3000 (para o Gateway alcançar a EC2) 
e restringindo 3306 apenas a API REST. Sobe na porta 3000 e expõe GET/POST/PUT/DELETE /livros
o API Gateway foi integrado em HTTP apontando para IP-PUBLICO-EC2:3000/livros,

-Atividades de cada um -
Lorenzo: 

criação da VPC, subnets e SGs, provisionou o RDS e testou a conectividade na porta 3306

Lucas:

implementou a API Node, escreveu o Dockerfile e fez o deploy na EC2, além de configurar o API Gateway (rotas `/livros` e integração HTTP) 

Pedro:

crição da Lambda `report-livros`, integrou a rota `/report` e executou testes fim a fim, validando as chamadas via Gateway .
