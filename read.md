Le projet actuel a pour but de nous amener à creer un serveur avec node.js et et le framework(bibbliothèque) express
pour créer un serveur! 


Aussi suite à la création du serveur nous devons creer des routes (CRUD) fonctionnel qui execute chacune des action bien précise dans la base de données qaund la requette liée à cette dernière est appelé! 


Nous avons créer d'abord un fichier test.js qui va contenir le code pour creer le serveur !

{

                onst express = require("express"); ===== cette ligne permet la récupurer la bibliothèque expresse pour la création !

                const test = express(); ==== express est contenu dans la variable test pour faciliter sont utilisation dans le rest du code !

                const port = 5000  === cette ligne a permis la définition du port sur lequel notre serveur s'executera !

                test.use(express.json()) === ceci permet d'avoir la requette au format json 

                test.use("/tasks", require("./routes/tasks.route")) ==== cette ligne de code permet de connecter le fichier contenant ls routes au serveur 

                test.listen(port, ()=>{
                    console.log("hello")
                } )   ==== cette fonction déclanche l'éxécution du serveur quand on sur le port = 50000 et affiche HELLO dans la console !!!

}


Le deuxième fichier tasks.route.js; est le fichier qui a contenu la définion des requettes: post get put, delete !

1`const express = require("express");` 
   → Cette ligne importe le module Express.js dans le fichier, permettant d'utiliser ses fonctionnalités pour créer un serveur web.

2`const router = express.Router();`  
   → Ici, on crée un routeur Express. Un routeur permet de gérer des routes (endpoints) séparément, ce qui facilite l'organisation du code dans une grande application.

3`const listTask = [];`
   → Cette ligne initialise un tableau vide nommé `listTask`. Il va probablement servir à stocker une liste de tâches (ex: une to-do list) que l'on pourra ajouter, supprimer ou modifier via des routes Express.

Ces trois lignes préparent un mini-serveur ou une API Express pour gérer des routes et stocker des tâches en mémoire. 



VERIFITION SI LES ROUTES DEFINIR SONT FONCTIONEL DE+ANS POSTMAN 

CREONS DES TACHE EN ENVOYANT LA REQUETTE DANS POSTMAN ET EN INSERANT LES DONNEES DANS LE  BODY 


![IMAGE DE LA PREMIERE TACHE](<TACHE 1 CREER AVEC POST ET JSON BODY.PNG>)


![IMAGE DE LA DEUXIEME TACHE](<TACHE 2 CREER AVEC POST.PNG>)


![IMAGE DE LA TROISIEME TACHE](<TACHE 3 CREER AVEC POST.PNG>)


RECUPERONS MAINTENANT LA LISTE DES TACHES EN UTILISANT LA REQUETTE GET 

![RECUPERATION DE TOUTES LES TACHES](<RECUPERATION DE TOUS LES ELEMENT AVEC GET.PNG>)

RECUPERATION D'UN ELEMENT EN UTILISANT ID 
![alt text](<RECUPERATION D'UNE SEULE TACHE AVEC ID.PNG>)



MODIFICATION DE LA VALEUR D' UNE TACHE 

![AVANT L'ENVOIE DE LA REQUETTE](<AVANT L'ENVOIE DE LA REQUETTE DE PUT POUR CHANGER.PNG>)

![APRES LE PUT](<APRES LE PUT.PNG>) Les données changes et prennent les données saisies dans le body !!!

SUPPRESSION D'UNE TACHE

 ![AVANT L'ENVOIE DE LA REQUETTE](<AVANT LE DELETE.PNG>)
![APRES L'ENVOIE DE LA REQUETTE](<APRES LE DELETE.PNG>)