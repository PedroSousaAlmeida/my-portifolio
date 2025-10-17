# Configuração do EmailJS para Formulário de Contato

Este guia explica como configurar o EmailJS para que o formulário de contato funcione corretamente.

## Passos para Configuração

### 1. Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu email

### 2. Adicionar Serviço de Email

1. No painel do EmailJS, vá para **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Para **Outlook**:
   - Selecione "Outlook"
   - Conecte sua conta `pedro.almeida.work@outlook.com`
   - Autorize o acesso
5. Copie o **Service ID** que será gerado (ex: `service_abc123`)

### 3. Criar Template de Email

1. Vá para **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template:

**Subject:**
```
New Contact from {{from_name}} - {{subject}}
```

**Content (Body):**
```
You have received a new message from your portfolio!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. No campo **To Email**, coloque: `{{to_email}}`
5. Salve o template e copie o **Template ID** (ex: `template_xyz789`)

### 4. Obter Public Key (User ID)

1. Vá para **"Account"** → **"General"**
2. Copie o **Public Key** (ou User ID) (ex: `user_def456`)

### 5. Configurar no Código

Abra o arquivo `src/components/ContactSection.vue` e substitua as credenciais nas linhas 277-281:

```javascript
await emailjs.send(
  'service_abc123',      // Substitua pelo seu Service ID
  'template_xyz789',     // Substitua pelo seu Template ID
  templateParams,
  'user_def456'          // Substitua pelo seu Public Key
);
```

### 6. Testar

1. Execute `pnpm run dev`
2. Acesse o formulário de contato
3. Preencha e envie uma mensagem de teste
4. Verifique se recebeu o email em `pedro.almeida.work@outlook.com`

## Exemplo Completo

```javascript
await emailjs.send(
  'service_abc123',
  'template_xyz789',
  {
    from_name: 'João Silva',
    from_email: 'joao@example.com',
    subject: 'Proposta de Projeto',
    message: 'Olá, gostaria de discutir um projeto...',
    to_email: 'pedro.almeida.work@outlook.com'
  },
  'user_def456'
);
```

## Limites do Plano Gratuito

- 200 emails por mês
- Templates ilimitados
- Perfeito para portfólios pessoais

## Troubleshooting

### Erro: "Service ID inválido"
- Verifique se copiou corretamente o Service ID
- Certifique-se de que o serviço está ativo

### Emails não chegam
- Verifique a pasta de spam
- Confirme que o template está configurado corretamente
- Teste o template diretamente no painel do EmailJS

### Erro de CORS
- EmailJS já está configurado para funcionar com qualquer domínio
- Se tiver problemas, adicione seu domínio nas configurações de segurança

## Alternativa: Usar Formspree

Se preferir não usar EmailJS, você pode voltar ao Formspree:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- campos do formulário -->
</form>
```

---

**Nota:** Mantenha suas credenciais do EmailJS seguras. Não as commite em repositórios públicos se estiver usando variáveis de ambiente.
