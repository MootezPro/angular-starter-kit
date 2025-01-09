# Étape 1 : Construire l'application Angular
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

# Étape 2 : Préparer NGINX
FROM nginx:alpine
COPY --from=build /app/dist/angular-starter-kit/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
