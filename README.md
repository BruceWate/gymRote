# GymRote — PWA

Aplicação web progressiva para acompanhar o plano de hipertrofia de 5 dias.

## Funcionalidades
- Plano semanal: braços, peito, costas, pernas, ombros + reforço de braços.
- Lista de exercícios com séries e repetições.
- Marcação de exercícios concluídos.
- Registo local de carga e repetições realizadas.
- Histórico de sessões.
- Exportação e importação de cópia de segurança JSON.
- Cache offline via Service Worker.

## Como testar
É necessário servir a pasta por HTTP(S); abrir `index.html` diretamente como ficheiro não ativa o Service Worker.

Para teste local com Python:
```bash
python -m http.server 8000
```
Depois abrir `http://localhost:8000` no navegador.

## Instalar no iPhone
1. Publica o conteúdo desta pasta num alojamento HTTPS (por exemplo, GitHub Pages ou Netlify).
2. Abre o endereço publicado no Safari do iPhone.
3. Toca em Partilhar.
4. Escolhe “Adicionar ao ecrã principal”.
5. Confirma o nome GymRote.

## Dados e privacidade
Os registos são guardados no `localStorage` do navegador/dispositivo. Não existe conta nem sincronização na nuvem. Limpar os dados do Safari ou remover os dados do site pode apagar os registos. Usa “Exportar os meus dados” para criar cópias de segurança.

## Nota
A aplicação é uma primeira versão funcional. O registo de carga/repetições é por exercício e fica guardado localmente. Os lembretes/notificações push não estão incluídos nesta versão.

## Demonstrações em vídeo
- Os cartões dos exercícios incluem uma secção expansível de demonstração.
- Alguns exercícios têm vídeos YouTube incorporados, quando foi possível confirmar uma demonstração que cobre o movimento.
- Para os restantes, a aplicação oferece uma pesquisa específica no YouTube em vez de inventar IDs ou apresentar um vídeo não verificado.
- Os vídeos incorporados requerem ligação à Internet; a restante aplicação pode funcionar offline após a primeira visita.
