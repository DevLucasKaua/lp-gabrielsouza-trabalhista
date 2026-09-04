# Deploy — Hostinger (automático via GitHub Actions)

A landing é um **static export** do Next.js (`output: "export"`), publicado na
Hostinger por FTP a cada push na branch `main`.

- **Subdomínio:** `previdenciario.gabrielesouzaadvogados.com.br`
- **Pipeline:** `.github/workflows/deploy.yml`
- **Saída do build:** `out/` (gerada por `npm run build`)

## Setup único

### 1. Criar o subdomínio na Hostinger (hPanel)

1. hPanel → **Domínios → Subdomínios**.
2. Criar `previdenciario` sob `gabrielesouzaadvogados.com.br`.
3. Anote a **pasta raiz** que a Hostinger cria para ele (ex.:
   `public_html/previdenciario` ou
   `domains/previdenciario.gabrielesouzaadvogados.com.br/public_html`).
4. Emita o **SSL grátis** para o subdomínio (SSL → instalar).

### 2. Pegar as credenciais de FTP

hPanel → **Arquivos → Contas FTP**. Anote:

- **Host FTP** (ex.: `ftp.gabrielesouzaadvogados.com.br` ou o IP do servidor)
- **Usuário FTP**
- **Senha FTP**

### 3. Cadastrar os secrets no GitHub

Repositório → **Settings → Secrets and variables → Actions → New repository secret**:

| Secret           | Valor                                                        |
| ---------------- | ------------------------------------------------------------ |
| `FTP_SERVER`     | host FTP da Hostinger                                        |
| `FTP_USERNAME`   | usuário FTP                                                  |
| `FTP_PASSWORD`   | senha FTP                                                    |
| `FTP_SERVER_DIR` | pasta raiz do subdomínio, **com barra no fim** (ex.: `/public_html/previdenciario/`) |

## Como publicar

- **Automático:** faça merge/push na branch `main` → o deploy roda sozinho.
- **Manual:** aba **Actions → Deploy para Hostinger → Run workflow**.

Acompanhe o progresso e eventuais erros na aba **Actions** do GitHub.

## Trocar o domínio no futuro

Edite `siteConfig.url` e `siteConfig.domain` em `src/config/site.ts`. Esses
valores alimentam `metadataBase`, canonical, sitemap, robots, JSON-LD e Open Graph.
