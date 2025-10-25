# Dockerfile
# Usa uma imagem base leve do Nginx para servir arquivos estáticos
FROM nginx:alpine

# Copia todos os arquivos do seu projeto para o diretório de serviço do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Comando padrão para iniciar o servidor
CMD ["nginx", "-g", "daemon off;"]