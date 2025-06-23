# Build para Produção

```bash
ionic build --prod
```

## Configuração do Servidor

- Servir arquivos estáticos de /www

- Configurar rewrite rules para SPA:

### Exemplo NGINX

location / {
  try_files $uri $uri/ /index.html;
}

## Variáveis de Produção

- Atualizar environment.prod.ts com URL final

- Habilitar compression estática
