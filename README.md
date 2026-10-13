# Barbearia 041 — primeira versão

Site responsivo + login Google de clientes + login por e-mail/senha para administrador + Firestore + painel de serviços, promoções, vouchers, galeria e fidelidade.

## Iniciar localmente
1. Instale Node.js 22.
2. Execute `npm install`.
3. Copie `.env.example` para `.env` e preencha os dados do aplicativo web Firebase.
4. Execute `npm run dev` e abra o endereço exibido.

## Configurar Firebase (obrigatório para login e persistência)
1. Crie projeto no console Firebase, adicione aplicativo Web e copie as configurações para `.env`.
2. Authentication > Sign-in method: habilite Google e Email/Password.
3. Authentication > Settings > Authorized domains: adicione seu domínio `usuario.github.io` e domínio personalizado se houver.
4. Crie Cloud Firestore e Firebase Storage; publique os arquivos `firestore.rules` e `storage.rules` nos respectivos editores do console.
5. Em Authentication > Users, crie seu usuário administrador com e-mail e senha e copie o UID.
6. No Firestore, crie manualmente `admins/SEU_UID` com campo booleano `active: true`. As regras impedem que usuários comuns concedam privilégios a si mesmos.
7. Faça login administrativo, configure horários, endereço, serviços, promoções e mídia.

**Observações**: Os dados do Firebase Web SDK são configurações públicas, não senhas de servidor. Nunca publique credenciais de conta de serviço. A galeria só exibe itens marcados como aprovados. Antes de publicar imagem de clientes, obtenha consentimento específico e documentado. O checkbox de consentimento no perfil não comprova autorização individual para cada arquivo; o administrador deve conferir isso. O sistema ainda não inclui agendamento, pagamento, resgate automático de vouchers nem trilha antifraude para carimbos. Valide as regras no Firebase Emulator antes de usar em produção. O Firebase Storage pode exigir plano de faturamento ativo.

## GitHub Pages
1. Crie repositório público chamado `barbearia041` e envie os arquivos (não envie `.env`).
2. No GitHub, Settings > Secrets and variables > Actions, crie os cinco secrets com os mesmos nomes de `.env.example`.
3. Settings > Pages > Build and deployment > Source: GitHub Actions.
4. Faça push para `main`; o workflow publica em `https://SEU_USUARIO.github.io/barbearia041/`.
5. Se usar outro nome de repositório, ajuste `base` em `vite.config.js`.

## Privacidade
A primeira versão é um MVP. Antes de uso comercial real, implemente política de privacidade/LGPD, mecanismo de revogação de consentimento, exclusão de dados, controles de retenção, regras de vouchers e proteção adicional contra abuso.
