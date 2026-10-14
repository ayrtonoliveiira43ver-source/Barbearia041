# Barbearia 041 — ERP

Painel exclusivo do proprietário, com Firebase Authentication + Firestore. Sem integração com adquirentes, bancos, emissão fiscal ou conciliação automática. Os pagamentos são lançados manualmente.

## Publicação
1. Substitua os arquivos antigos do repositório pelos deste pacote, inclusive `.github/workflows/deploy.yml`.
2. No Firebase Console > Firestore > Regras, publique o conteúdo de `firestore.rules`. **Isso substitui as regras do site antigo**, que deixará de funcionar.
3. Preserve o documento `admins/{UID}` com `role: "admin"` e `active: true`.
4. GitHub > Settings > Pages > Build and deployment > Source: GitHub Actions.
5. Firebase Authentication > Settings > Authorized domains: adicione `ayrtonoliveiira43ver-source.github.io` se necessário.
6. Em Actions, confira o build. Site: https://ayrtonoliveiira43ver-source.github.io/Barbearia041/

## Local
`npm install` e `npm run dev`.

## Limitações desta versão
- Um único proprietário; nenhuma permissão para funcionários.
- Valores em reais e datas armazenados como strings ISO. Não é contabilidade oficial.
- Cartão, Pix e dinheiro são lançamentos manuais; não há captura real de pagamentos.
- Receita de atendimentos usa valor bruto menos taxa e desconto. Lucro gerencial = receita líquida de atendimentos + outras entradas - despesas. Estoque e equipamento não são contabilizados automaticamente como despesa; registre compras/despesas separadamente para evitar inconsistência.
- Não há automação de backup, fechamento de caixa, contas parceladas, conciliação bancária, controle de consumo de estoque por atendimento, impostos ou notas fiscais.
- Recomendado testar com registros fictícios antes de uso real.
