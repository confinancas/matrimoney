# Matrimoney

As finanças do casal num app só de vocês.

O Matrimoney junta num lugar só o dinheiro do casal: as contas e os cartões de vocês e as transações de cada um. Cada pessoa entra com a própria passkey, sem senha.

**Em desenvolvimento.** A versão 0.1.0 já instala o app na sua conta da Cloudflare e faz a configuração inicial, com a chave da IA. O cadastro do casal, as passkeys, a conexão com os bancos e as telas do dia a dia chegam nas próximas versões.

## Para quem é

Para casais que querem cuidar do dinheiro juntos sem entregar esses dados a uma empresa. O app não roda em um servidor da Confinanças: ele fica instalado na sua conta gratuita da Cloudflare, com o seu banco de dados e as suas chaves.

## O que o app vai fazer

- Conectar as contas e os cartões do casal.
- Categorizar as transações. A categorização com IA é opcional: você cola uma chave da Anthropic no app, e ela fica cifrada no seu banco, sem nunca chegar ao navegador.

## Licença

Matrimoney é software livre, licenciado sob a [GNU AGPL-3.0-or-later](LICENSE). Você pode usar, estudar, copiar, mudar e redistribuir. Se você modificar o app e oferecer a versão modificada a outras pessoas pela rede, precisa dar a elas o código dessa versão.

## Este repositório

Aqui ficam a marca do Matrimoney e o que é próprio do app. O código do produto está no repositório [confinancas/core-money](https://github.com/confinancas/core-money), usado como dependência presa à versão `v0.1.0`.

## Instalar e atualizar

Você vai precisar de uma conta gratuita na Cloudflare e, no computador, do Git e do Node 22.

**Antes de começar, escolha o endereço.** O Matrimoney fica num endereço `https://matrimoney.<seu-subdominio>.workers.dev`. Esse endereço é fixo para sempre: as passkeys só funcionam nele. Escolha o subdomínio no painel da Cloudflare (Workers e Pages) antes de instalar. Trocar depois deixa todo mundo sem acesso.

**Instalar (uma vez):**
1. Baixe o app com o Git: `git clone https://github.com/confinancas/matrimoney.git` e entre na pasta, com `cd matrimoney`. Baixar o ZIP não serve: a atualização usa o Git.
2. Coloque no arquivo `.env` desta pasta o token da Cloudflare (`CLOUDFLARE_API_TOKEN`) e o id da conta (`CLOUDFLARE_ACCOUNT_ID`), ou rode `npx wrangler login`.
3. Rode `npm ci` e depois `npm run instalar`.
4. O terminal mostra o endereço, um código de primeiro acesso e um QR code. Guarde o código até terminar a configuração. Escaneie o QR code com o celular para abrir a configuração inicial.

**Atualizar:** rode `npm run atualizar`. Ele baixa a versão nova, instala e publica. Os seus dados e as suas chaves continuam.

**Se ninguém conseguir entrar:** rode `npm run recuperar-acesso`. Ele gera um link de uso único, válido por 60 minutos.

**Limite do plano gratuito:** a Cloudflare aceita até 5 cron jobs por conta. O limite vale para a conta inteira, não para cada app: se você usar outros apps na mesma conta, os agendamentos deles contam junto.
