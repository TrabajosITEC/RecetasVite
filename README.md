# Programacion III.

Segundo semestre 2024 | React Vite.

## Tabla de contenidos
- [Crear proyecto con Vite](#crear-proyecto-con-vite)
- [Subir proyecto a GIT](#subir-proyecto-a-git)

## *Crear proyecto con Vite*
***

***Paso 1 - Generar entorno de desarrolo usando Vite.***

Para iniciar ejecutamos el siguiente comando:

```
npm create vite@latest
```
***npm*** viene con la funcionalidad ***create*** incorporada y esta ejecuta el paquete que proporiona el script de creacion de ***vite*** para crear el entorno.
 Esto ultimo es una diferencia entre usar ***vite*** con usar ***creat react app*** ya que este paquete si hay que instalarlo globalmente o bien usar ***npx*** para descargarlo parcialmente.

Requisito: Node 18.18

Pasos a completar:
* Completar nombre de proyecto: Nombre a eleccion
* Completar package del proyecto: Repite nombre de proyecto.
* Seleccionar un framework: React.
* Seleccionar una variante a la cual se orientara la configuracion incial: JavaScript.

***Paso 2 - Instalar paquetes.***

Para iniciar, posicionarse en la carpeta del proyecto que se creo en el paso anterior, previo haber cerrado la consola o abrir una nueva terminal.
```
cd (nombreCarpeta)
```

Instalar dependencias de proyecto

```
npm install
```

***Paso 3 - Iniciar proyecto.***
```
npm run dev
```
El proyecto se inicia en localhost:5173

## *Subir proyecto a GIT*
***
***Paso 1 - Crear entorno de GIT.***

Desde la carpeta del proyecto, ejecutar:
```
git init
```
***Paso 2. Configuracion inicial***

Agregar el README creado por VIT para generar primier commit.

```
git add .gitignore
```
Subir el git ignore para que luego no suba la carpeta ***node modules*** u otras que ya viene como excluidas por ***vite***

Hacer primer commit.

```
git commit -m "first commit"
```
Cambiar nombre a rama principal
```
git branch -M main
```
Vincular rama local a remoto
```
git remote add origin git@github.com:usuariogit/nombreproyecto.git
```
Pushear y vincular rama:
```
git push -u origin main
```

***Paso 3. Subir resto de carpetas***

```
git add .
```

```
git commit -m "Resto carpetas"
```
```
git push origin main
```
