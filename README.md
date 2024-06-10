![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/9f5e9de7-4b7e-47c6-9870-b9c253b1a704)-------------------------------------------------------------FirstAPP:------------------------------------------------------------
         ETAPE 1 :
télécharger et installer nodejs :
https://nodejs.org/en
Verifier l’installation avec cette commande dans vootre
terminal : npm --version
installer le serveur de json acev cette ligne de
commande : npm install json-server

          ETAPE 2 :
Dans votre cmd vous tappez la commande suivant pour
installer Angular : npm install -g @angular/cli

         ETAPE 3 :
Vous ouvrez le cmd de votre dossier ou vou souhaitez
créer le projet. Et vous tapez cette commande pour
créer le projet angular : ng new nom-de-projet

          ETAPE 4 :
Vous ouverez votre projet dans intellig ide et dans le
terminal vous executer la commande : ng serve pour
démarer votre projet.

          ETAPE 5 :
Il faut installer bootstrap dans votre terminal vous executer cette ligne de commade :
   npm i bootstrap bootstrap-icons


Ensuite dans votre fichier angular.json vous allez ver
styles :[] et scripts : [] et vous ajouter les liens indiquer
dans le scrin ci-dessous

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/b8243938-cace-4ec0-b762-af42286cecf2)

Dans votre fichier styles.css vous ajouter la ligne suivante :

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/29d76167-170c-4928-90c6-9afc12291310)

ETAPE 6 :
Creer le style html de notre application dans le fichier app.component.html , commencant par la bar de navigation qui fonctionne avec des routes dans notre application Angular :
Au debut il a utilisé seulement un simple code html avec ul li pour afficher une bare de navigation qui contient 3 bouton : Home Products et New Product

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/61627aee-3821-49d1-8609-6a6047b0ff93)

Donc aprés il a besoin de créer un composant (component) pour chaque bouton, et pour les creer on utilise les commandes suivantes :
ng g c home ng g c products ng g c new-product

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/34a78e71-59bd-477e-ab9a-566070008954)

Dans le fichier app.routes.ts on va créer les routes svuits : qui seront utiliser dans routerLink=““ dans le fichier app.component.html

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/1840f64b-2bc3-4c48-9389-be91145833d4)

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/140e2761-5f00-49c1-a833-7e170ed70ec2)

dans notre fichier app.component.ts on va créer une liste d’action :
Le composant AppComponent ci-dessous est lecomposant racine de l'application Angular,responsable de la mise en page générale et de la navigation entre différentes vues. Ce composant
gère une liste d'actions de navigation représentées par un tableau d'objets contenant des titres, des routes et des icônes. Il définit également une méthode setCurrentAction() pour mettre à jour
l'action actuelle lorsqu'un bouton est cliqué

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/e414f157-81fc-487c-aa58-15b1a5fe13e7)

La vue app.component.html associée à ce composant contient une barre de navigation <nav> avec des boutons générés dynamiquement à l'aide de *ngFor, chaque bouton étant lié à une route spécifique grâce à
routerLink. La classe des boutons est déterminée dynamiquement en fonction de l'action actuelle. Enfin, la balise <router-outlet> est utilisée pour afficher les vues des différentes routes de l'application.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/986a35a8-5841-4a72-93c8-d90f9823eefc)


ETAPE 7 :
Pour créer ma base de donner je doit céer un dossier dans mon projet applé data dans lequel je doit creer un fichier applé db.json ou je vais spécifier mes données de products ;

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/1803391b-fe0b-4447-a1cb-57d4bd29a2c8)

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/350d0389-6265-4a52-829b-e89bc364ee99)

Et pour démarer json server on utilise la commande : json-server -w data/db.json -p 8089

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/fff397da-8ebb-483d-84c2-c5e58a1d7315)

ETAPE 8 :
On va créer un service, on utilisant la commande : ng g s services/products

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/63cfa9e1-d5e2-4fc3-bd9d-8571cd8ff581)

Pour afficher la liste des produits en cliquant sur le bouton Products :

On peut envoyer une requete http au backend pour recevoir les donner donc pour cela on utilise le Module HttpClient dans product.service.ts

Le service ProductService est un service Angular injectable qui gère les opérations CRUD liées aux produits. Il utilise HttpClient pour effectuer des
requêtes HTTP vers un serveur backend. Le service offre des méthodes telles que getProducts() pour récupérer la liste des produits, checkProducts() pour
vérifier ou décocher un produit, et deleteProducts() pour supprimer un produit. Chaque méthode retourne un observable qui peut être souscrit dans d'autres
composants pour obtenir les données ou gérer les erreurs de manière asynchrone. Ce service est annoté avec @Injectable({ providedIn: 'root' }), ce qui signifie
qu'il est disponible à l'injection de dépendances dans toute l'application sans nécessiter d'importations supplémentaires

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/0dde75e1-858c-4b73-8aeb-dcaa32f41acf)

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/bc92270b-5adf-4571-ad6e-7e481ffe5834)

Ensuite dans le composent products.component.ts : Le composant ProductsComponent est un composant Angular qui gère l'affichage et la manipulation des
produits. Il utilise le service ProductService pour interagir avec les données des produits. Dans sa méthode ngOnInit(), il appelle getProducts() pour
récupérer la liste des produits au chargement du composant. La méthode getProducts() utilise le service ProductService pour récupérer les produits via une
requête HTTP, puis met à jour la liste des produits. Les méthodes handleCheckProduct() et handleDelete() sont des gestionnaires d'événements qui interagissent avec le service ProductService pour
vérifier ou supprimer un produit, respectivement. Après chaque opération réussie, elles mettent à jour la liste des produits en appelant à nouveau
getProducts(). Ce composant utilise également des fonctionnalités d'Angular telles que HttpClientModule, NgForOf et AsyncPipe pour gérer les requêtes HTTP
et le rendu asynchrone des données.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/4b48fb94-1383-42d9-906e-0c102661bb7e)

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/0c70ecb6-adee-48e6-85c3-9ebf88d8a4e4)

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/2b42149e-d078-4102-9119-165b6351b813)

Et pour afficher cela en apyant sur le bouton products, dans le fichier products.component.html on a utiliser le code ci-dessous ;
Ce code HTML représente la structure d'une liste de produits affichée dans une table. Chaque produit est affiché dans une ligne de tableau avec trois colonnes :
"Name", "Price" et "Checked". Les produits sont obtenus à partir d'une liste products à l'aide de la directive *ngFor. Pour chaque produit, son nom et son
prix sont affichés dans les deux premières colonnes, et un bouton est utilisé pour vérifier ou décocher le produit, tandis qu'un autre bouton permet de
supprimer le produit de la liste. Les icônes des boutons sont déterminées dynamiquement en fonction de l'état de vérification du produit, utilisant des
classes conditionnelles basées sur la propriété checked de chaque produit.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/e10b6d1c-56d9-42bd-b5f0-0f4a5721bafa)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/2c48a1e6-b52d-4649-beef-402aece2633b)


Ajouter un produit :
Le fichier new-product.component.ts:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/74f62a6a-0c09-4e7e-8f8f-00459374c46f)

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/cd939b5b-6009-436d-b1d0-794088f4a07c)


Le fichier ‘new-product.component.ts’ définit le composant Angular ‘NewProductComponent’, chargé de créer de nouveaux produits. Il comporte des importations des modules et services Angular
nécessaires, tels que ‘Component’, ‘OnInit’, ‘FormBuilder’, ‘FormGroup’, ‘Validators’, etc. Le composant est annoté avec ‘@Component’ pour définir ses métadonnées telles que le sélecteur,
le modèle de fichier HTML associé et le style. Son constructeur injecte les services ‘FormBuilder’ et ‘ProductService’. La méthode ‘ngOnInit’, héritée de l'interface ‘OnInit’, initialise le formulaire de
produit avec des champs comme le nom, le prix et un indicateur de vérification. Enfin, la méthode ‘saveProduct’ est appelée lors de la soumission du formulaire. Elle récupère les valeurs du formulaire,
crée un objet ‘Product’, puis utilise ‘ProductService’ pour sauvegarder le produit, en traitant les réponses en fonction du succès ou de l'erreur de la requête.

Le fichier product.service.ts :

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/a7e281e4-066c-4e33-aabe-223c4bf48f31)

Dans ce fichier, nous avons la méthode "saveProduct()" du service ProductService. Cette méthode utilise le protocole HTTP pour envoyer une requête POST au serveur backend, spécifiquement à
l'URL "http://localhost:8089/products", pour enregistrer le produit fourni en tant que paramètre. Le produit est envoyé au format JSON.
Le fichier new-product.component.html:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/1e9ddfa1-265f-4376-a7d5-b6dbf5da91f4)

Le fichier ‘new-product.component.html’ contient le template HTML associé au composant ‘NewProductComponent’, définissant la structure visuelle du formulaire de création de produit. Ce template
utilise des éléments HTML standard tels que ‘<div>’, ‘<form>’, et ‘<input>’, disposés avec des classes Bootstrap pour la mise en page.
Les éléments du formulaire sont liés aux propriétés du formulaire définies dans le composant à l'aide de ‘formControlName’. La gestion des événements est assurée par ‘(ngSubmit)’, qui appelle la méthode
‘saveProduct()’ du composant lorsque le formulaire est soumis. En outre, des validations côté client sont appliquées aux champs du formulaire à l'aide de validateurs fournis par Angular, tels que
‘required’ pour le nom et ‘min’ pour le prix.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/71da9eaf-66c0-4b15-b9cf-1153fa61977a)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/ff0439b7-9836-4d39-abd6-1c2bd2732b72)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/dd7825ed-eabf-4611-8278-3d730db3c4cf)


Chercher un produit : Le fichier product.service.ts:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/3c714602-f1b5-4b65-bbb9-004f39e2d0fc)

La méthode searchProducts dans le fichier product.service.ts permet d'effectuer une recherche de produits en fonction d'un mot-clé spécifié. En utilisant une requête HTTP GET, elle communique avec
l'API de produits en incluant le paramètre name_like dans l'URL. Cette utilisation du paramètre name_like permet à l'API de filtrer les produits dont le nom ressemble au mot-clé spécifié par la variable keyword,
offrant ainsi une fonctionnalité de recherche flexible. Le fichier product.component.ts:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/06cad5cc-6e72-44fc-b474-919cea33bc52)

Cette méthode est définie dans le composant product.component.ts.Elle utilise le service productService pour effectuer une recherche deproduits en fonction du mot-clé spécifié dans la variable keyword.
Lorsque la réponse est reçue avec succès, la méthode subscribe est utilisée pour écouter les résultats. Lorsque de nouveaux produits sont émis, la variable this.products est mise à jour avec les produits de la
recherche, ce qui met à jour l'affichage des produits dans le composant.
Le fichier product.component.html:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/33e23b51-2ba6-4ac1-b325-91a3f40c9bfe)


Le code HTML extrait du fichier `product.component.html` crée unebarre de recherche de produits avec un champ de texte et un bouton de recherche. Le champ de texte est lié à une variable `keyword` dans
le composant TypeScript, permettant la saisie en temps réel. Lorsque le bouton de recherche est cliqué, il déclenche la fonction `searchProducts()` du composant TypeScript pour effectuer la
recherche des produits correspondant au mot-clé saisi.
L’affichage :

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/021d3dcc-2f44-4c59-8155-51478cd7329f)


La pagination :
Pour mettre en œuvre la pagination, les méthodes getProducts des fichiers product.service.ts et product.component.ts ont été mises à jour.
La méthode getProduct() du fichier product.service.ts:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/cbe8704f-08ec-4760-b07a-baceaab2008b)


Cette méthode est responsable de récupérer une page de produits àpartir de l'API. Elle prend en paramètres le numéro de page (page) et la taille de la page (size). En utilisant une requête HTTP GET, elle
communique avec l'API en spécifiant les paramètres _page et _limit dans l'URL pour indiquer quelle page de produits et combien de produits doivent être récupérés. L'option {observe:'response'} est
utilisée pour récupérer la réponse complète de la requête, y compris les en-têtes de réponse. Cette méthode retourne un Observable qui émet la réponse HTTP contenant les produits de la page demandée.
La méthode getProduct() du fichier product.component.ts:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/e4dc1635-eae4-45a3-83c5-c08174fe5a7f)

Cette méthode est appelée dans le composant product.component.ts pour récupérer une page de produits à afficher. Elle utilise le service productService pour appeler la méthode getProducts avec les
numéros de page et la taille de page actuels (this.currentPage et this.pageSize). Lorsque la réponse est reçue avec succès, la méthode subscribe est utilisée pour traiter la réponse. La liste des produits est
extraite du corps de la réponse (resp.body as Product[]), et le nombre total de produits est extrait de l'en-tête de réponse x-total-count. En
utilisant ces informations, le nombre total de pages est calculé en fonction de la taille de la page, ce qui permet de déterminer la pagination. Cette méthode met à jour les propriétés products (liste
des produits), totalPages (nombre total de pages) et currentPage en conséquence.
Le fichier product.component.html:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/7937059d-8f34-4120-846e-7e5fe72f96f1)

Ce bloc de code HTML et Angular est conçu pour générer une liste de boutons de pagination dans l'interface utilisateur. L'élément <ul> représente une liste non ordonnée qui ne s'affiche que si la variable
totalPages est définie et supérieure à zéro, ce qui garantit une présentation dynamique des boutons de pagination. Chaque élément <li> de cette liste est créé dynamiquement à l'aide de la directive
*ngFor, qui itère sur une liste de la longueur égale à totalPages. Pour chaque page, un bouton est généré avec la valeur correspondante
affichée à l'intérieur. Le style des boutons varie en fonction de la page
actuelle grâce à la directive [ngClass], qui applique la classe 'btnsuccess' si la page correspond à la page actuelle, et 'btn-outlinesuccess' sinon. Cela permet de mettre en évidence visuellement la
page actuelle pour l'utilisateur.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/9f744982-c70f-436b-9244-c3fa5bd9bc6a)


Nous avons apporté une modification significative en renommant la méthode getProduct() en searchProduct() afin de mieux refléter sa
 fonctionnalité, qui consiste à rechercher des produits en fonction d'un mot-clé donné. Cette modification a été implémentée à la fois dans le
fichier product.service.ts et dans le fichier product.component.ts. Le fichier product.service.ts:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/1788fce2-5ef2-4174-8581-4d117e072dc6)


Dans le fichier product.service.ts, la méthode searchProducts() a été mise à jour pour accepter un paramètre supplémentaire keyword, qui
représente le mot-clé à rechercher. Cette méthode utilise cet argument keyword pour inclure le mot-clé dans l'URL de la requête
HTTP, permettant ainsi de rechercher des produits contenant ce mot￾clé spécifique. Le fichier product.component.ts:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/5f90d8ea-4a47-499a-ac3c-35fe2c1095a5)

Dans le fichier product.component.ts, la méthode searchProducts() a également été mise à jour pour inclure le paramètre keyword lors de
l'appel à la méthode searchProducts() du service productService. Cette modification permet d'effectuer une recherche de produits avec
pagination, où le mot-clé spécifié est pris en compte pour filtrer les résultats de la recherche.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/ea81be1b-3194-4976-a034-ce470002ff2d)


La modification des produits :
Dans le but de permettre la modification des produits dans notre application, nous avons ajouté des fonctionnalités spécifiques. Tout d'abord, dans le fichier product.component.html, un bouton a été
 ajouté pour chaque produit, permettant de déclencher l'édition de ce produit. Ce bouton est lié à la fonction handleEdit() définie dans le
fichier product.component.ts.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/8ee2215b-d074-48a8-b2d6-0b98135d029d)


Ensuite, nous avons créé un nouveau composant Angular appelé
edit-product à l'aide de la commande ng generate component editproduct. Ce composant est destiné à fournir une interface pour la modification des produits.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/d480f24d-c224-481a-b3e5-597e645fe679)


Le fichier product.component.ts:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/f163c667-8b04-43f5-9c24-df2c9fb18376)

La fonction handleEdit() dans le fichier product.component.ts est responsable de la navigation vers la page de modification (editProduct) avec l'identifiant du produit à éditer.
Le fichier app.routes.ts:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/34f66641-329b-4c45-850d-e51d9f1f7a3a)

Pour prendre en charge cette nouvelle route, nous avons ajouté la définition de la route editProduct/:id dans le fichier app.routes.ts.
Cette route est associée au composant EditProductComponent nouvellement créé.
Le fichier product.service.ts:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/207ce782-76c1-42d8-974a-2e6861c0c9a2)

La méthode getProductById() envoie une requête HTTP GET au backend pour récupérer les détails d'un produit spécifique. Elle utilise l'identifiant du produit fourni en paramètre pour construire l'URL de
l'endpoint approprié. Une fois la réponse reçue, elle renvoie un observable contenant les détails du produit, qui peuvent ensuite être
consommés par le composant edit-product.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/2d0e4b70-ad28-422e-bb2b-f3d48797a07f)

La méthode updateProduct() est utilisée pour mettre à jour les informations d'un produit existant sur le backend. Elle envoie une requête HTTP PUT avec le produit modifié en tant que corps de la
requête vers l'endpoint correspondant au produit spécifié. Cette méthode renvoie également un observable contenant le produit mis à jour après que la requête a été exécutée avec succès.
Le fichier edit-product.component.ts:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/02f946e2-e3b9-4327-ba47-612161169713)

Dans cette méthode ngOnInit(), nous initialisons le composant lors de son chargement. Tout d'abord, nous utilisons ActivatedRoute pour
extraire l'identifiant du produit à partir de l'URL de la page actuelle à l'aide de snapshot.params['id']. Ensuite, nous utilisons ce productId
pour appeler la méthode getProductById() du service ProductService, qui envoie une requête HTTP pour récupérer les
détails du produit correspondant à cet identifiant.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/ec725421-2213-4ac8-bc9e-40599efb3e34)

Cette méthode updateProduct() est responsable de la mise à jour des informations d'un produit dans l'application Angular. Tout d'abord,
elle récupère les valeurs actuelles du formulaire de produit à l'aide de this.productFormGroup.value, où productFormGroup est un objet de
type FormGroup qui représente le formulaire réactif associé à
l'édition du produit.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/3165920e-337a-421e-b971-3eb19bfe0128)

Ce fichier HTML constitue le formulaire de modification d'un produit dans l'application. La structure est composée d'une carte Bootstrap avec un en-tête affichant l'ID du produit en cours d'édition. Le
contenu de la carte est conditionnellement rendu pour éviter les erreurs d'affichage lors de l'initialisation du formulaire. Le formulaire
lui-même est lié au FormGroup productFormGroup et comporte des champs pour le nom, le prix et l'état de vérification du produit. Un bouton "Save" est présent pour soumettre les modifications, avec une
désactivation conditionnelle si le formulaire est invalide. En résumé, ce fichier offre une interface utilisateur claire et fonctionnelle pour la modification des détails d'un produit.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/ce65217b-192a-4cef-9a05-642bd1a76bbc)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/43436a1c-d84f-4087-b557-a02e76d39040)


 ng g s services/app-state

   ![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/7d164c7e-400b-46f6-bc01-5a89918ce0d5)

Le service a une propriété appelée productsState qui contient l'état des produits, y compris des champs tels que
products (un tableau de produits), keyword (pour la fonctionnalité de recherche), totalPages, pageSize, currentPage, totalProducts, status, et errorMessage (pour
stocker les messages d'erreur liés à la récupération desproduits).

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/4026e395-2f1e-4bd1-acf7-19d24ab37072)

Ce composant Angular (ProductsComponent) gère l'affichage et les interactions des produits dans votre application. Il utilise différents modules et services pour
effectuer des opérations telles que la recherche de produits, la gestion des actions telles que la sélection, la suppression, la navigation et l'édition des produits.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/1d49a79f-b7c0-41c3-b4e9-109fddc795ca)


Ce code HTML représente une interface utilisateur pour afficher et interagir avec une liste de produits dans une application Angular. Il permet de rechercher des produits
par mot-clé, d'afficher les produits sous forme de tableau avec des fonctionnalités de sélection, de suppression, d'édition et de pagination.
 ng g c dashboard

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/71e25a9a-8686-4faf-a5da-4963b90f063d)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/27e74277-4784-45e2-b71d-8695b1290784)

Ce code crée un composant Angular appelé DashboardComponent qui affiche des informations résumées sur les produits de votre application. Il utilise le
service AppStateService pour accéder à l'état des produits et affiche le nombre de pages, la taille, le total de produits et le nombre de produits sélectionnés.
 ng g c navbar

 ![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/cac4fd2a-f55d-4519-aa27-08649871340b)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/23ed99d1-bba7-43db-9d61-34d23f3d5052)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/695b7c9f-c059-449b-a22c-cb42911e45f3)


Ce code crée un composant Angular NavbarComponent qui représente la barre de navigation de l'application. Il contient des boutons pour accéder à différentes parties de
l'application et affiche un spinner de chargement lorsque nécessaire.
 ng g c app-errors

 ![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/e033de8a-6ac5-4b7f-9909-eb3f79a03210)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/d6cc3986-bf25-4169-9bbe-b3b7c487734a)


le composant Angular AppErrorsComponent affiche les erreurs de l'application lorsque le statut est "ERROR". Il utilise le service AppStateService pour récupérer les
informations sur l'erreur à afficher.
ng g interceptor app-http

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/ba885dcc-12bd-4c26-a5c8-7e06578ea9ce)


L’intercepteur HTTP AppHttpInterceptor gère l'ajout d'un en-tête d'autorisation aux requêtes sortantes et contrôle
l'affichage du spinner de chargement pendant la durée de la requête grâce aux services AppStateService et LoadingService.
 ng g s services/loading

 ![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/070fbc52-fd2d-41bd-b03d-56479715da96)

le Angular LoadingService utilise un observable (isLoading$) pour gérer l'état du spinner de chargement dans l'application. Il fournit des méthodes
showLoadingSpinner() et hideLoadingSpinner() pour afficher et cacher le spinner en émettant des valeurs booléennes.
1/Création de la page login:


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/6f1da778-5eb9-4d32-9b35-5b7a6d51931c)


On crée la partie html de la page login avec les deux champs username et password :


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/af422108-95cf-4e8c-8595-d42dc4acb156)

la modification dans le fichier login.component.ts pour crée un formulaire de connexion avec deux champs (username et password) et une méthode pour gérer la soumission du
formulaire et afficher les valeurs entrées dans la console.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/cc1473d1-b51c-4c83-ba96-892d1751f032)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/f759c3a0-de3d-4916-8661-258d95e55ec3)


Et voila la page de connexion avec les deux champs:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/fbd17824-e1f9-467f-a19a-4a6bb19ecffa)


2/Création de la template admin:

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/197e85e3-fa0b-48a6-8cb2-67afd3d7d8ca)


Dans admin-template. component.html on met ca c-à-d le navbar et le dashboard ne s’affiche que lorqsue je suis connecté.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/13775b68-6a80-4bef-9083-c77d707f85c0)


Et dans app. component.html on met seulement router-outlet pour ne pas afficher rien que le formulaire:


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/9d197c3a-84d0-4a3f-b26a-39193b81f340)


On a fait quelque modifications au niveau des routes pour rendre quelques pages accessibles seleument aprés la connexion


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/ff4cf4c3-6313-4a53-ae0f-9815a8eef6ea)


Un test pour la connexion de l’admin et se dériger vers la page admin:


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/9f6bcc3e-306b-4ec6-b994-c02aa9845c22)


Des modifications au niveau de navbar.component.ts

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/36a88dd5-8bfa-4949-8db0-0337391dd465)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/11133a9c-3515-467b-9614-a35a04543729)


J'ai créé et configuré un service d'authentification en Angular, puis déplacé les fichiers pertinents dans le package service pour une meilleure organisation.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/a400f3ca-4381-40b2-8da6-ce6056a22b56)


Dans le fichier auth.service.ts, j'ai défini authState pour stocker l'état initial de l'authentification de l'utilisateur, incluant les rôles et le token, et  ajouté la méthode setAuthState pour mettre à jour cet état de manière
dynamique, facilitant la gestion des sessions utilisateur

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/3a623780-becc-47c5-8bf2-e153254c3368)


J'ai installé le package jwt-decode via npm pour décoder et extraire les informations des tokens JWT dans notre application, améliorant ainsi la gestion de l'authentification et la sécurité des données utilisateur.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/62ac2a8f-5525-4837-9300-287861f693b3)


Dans AuthService, nous importons Injectable pour l'injection, HttpClient pour les requêtes HTTP, firstValueFrom pour gérer les Observables,
AppStateService pour l'état global, et jwtDecode pour décoder les tokens JWT.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/631e9f8a-653e-4226-8098-770c696e983b)


La méthode login dans AuthService utilise HttpClient pour récupérer les données utilisateur, vérifie le mot de passe, et met à jour l'état global via AppStateService
si les identifiants sont valides, sinon rejette avec "Bad credentials".

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/efb503d0-22d3-45c9-9e86-aaaea71f2f2f)


Dans cette mise à jour du LoginComponent, j'ai ajouté la variable errorMessage pour capturer et afficher les erreurs lors de la tentative de connexion de l'utilisateur.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/3375506e-f9dc-4661-bd12-7e0c0894bc32)


Dans la méthode handleLogin, j'appelle la fonction de connexion avec les identifiants fournis. Si l'authentification est réussie, l'utilisateur est
redirigé vers la page d'administration. En cas d'échec, le message d'erreur correspondant est affiché.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/df910be1-963c-47de-bad0-6a841cc241ac)


Dans le fichier login.component.html, j'ai ajouté une alerte qui affiche les messages d'erreur lorsqu'une tentative de connexion échoue.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/870fd10f-b823-4e72-902c-1aed82094116)


Le formulaire de connexion affiche l'alerte "Bad credentials" en cas d'erreur d'identification, au-dessus des champs de saisie.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/fce9d110-e064-405e-a303-648572b94019)


Affichage de l'Utilisateur dans la Barre de Navigation
Dans le fichier navbar.component.html, j'ai ajouté des conditions pour afficher le nom de l'utilisateur et un bouton de déconnexion si l'utilisateur est authentifié, sinon un bouton de connexion apparaît pour
les utilisateurs non authentifiés.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/3cdbc4fa-acab-4487-be5b-8c8412aa162e)


Dans le fichier navbar.component.ts, j'ai ajouté les méthodes logout et login. La méthode logout réinitialise l'état d'authentification et redirige
l'utilisateur vers la page de connexion, tandis que la méthode login dirige simplement l'utilisateur vers la page de connexion.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/f42c992d-26a1-45ff-8ce3-8c3b51610791)


La barre de navigation affiche le nom de l'utilisateur connecté, user1, avec une option pour se déconnecter, indiquant une gestion réussie de
l'état de connexion de l'utilisateur.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/3eb86c41-6141-420f-a21e-9dcfa72ea685)


Protection routes
J'ai créé deux gardiens Angular, AuthenticationGuard etAuthorizationGuard, pour sécuriser les routes en vérifiant l'authentification et les autorisations des utilisateurs.


 ![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/93e06911-69dd-4698-a438-7d1ec183166e)


Dans la classe AuthenticationGuard, j'ai implémenté la méthode canActivate pour vérifier si l'utilisateur est authentifié. Si l'état
d'authentification est confirmé, l'accès est autorisé. Dans le cas contraire, l'utilisateur est redirigé vers la page de connexion et l'accès à
la route est refusé. Cette méthode assure que seuls les utilisateurs authentifiés peuvent accéder aux routes protégées.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/3f877acc-9e36-4e80-835c-e7a97a0237ac)


Dans AuthorizationGuard, la méthode canActivate vérifie si les rôles de l'utilisateur correspondent aux rôles requis de la route. Si ce n'est pas le
cas, l'utilisateur est redirigé vers une page "Non autorisé". Cela assure que seules les personnes autorisées accèdent à certaines routes.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/8dd7e083-b8bc-4352-8334-6721aa8d5970)


J'ai créé le composant not-authorized pour afficher une page d'erreur lorsque les utilisateurs tentent d'accéder à des routes pour lesquelles ils
n'ont pas les autorisations nécessaires.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/c65cc169-8600-4acd-89d0-9df934df586d)


Dans le fichier not-authorized.component.html, j'ai conçu une page qui affiche le message "You are not authorized" pour signaler un accès refusé.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/ede815ee-c931-45f5-bafc-d3ba712375ef)


Dans le fichier app.routes.ts, j'ai défini les routes sécurisées par AuthenticationGuard et AuthorizationGuard. La route notAuthorized
redirige vers une page spécifique lorsqu'un accès non autorisé est détecté. AuthenticationGuard vérifie si l'utilisateur est connecté, tandis
que AuthorizationGuard contrôle les permissions pour accéder aux routes administratives.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/38e67869-c715-4e28-8aaf-20ca4b1d4114)


Si un utilisateur sans droits d'admin essaie d'accéder aux sectionsd'ajout ou de modification de produits, le message "You are not authorized" s'affiche comme suit :


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/6cd0b7f4-7b5e-4f24-9ec9-7a29c11c6b50)

Dans le fichier products.component.html, j'ai utilisé des conditions *ngIf pour afficher les boutons d'édition, de suppression, et de
 vérification uniquement si je possède le rôle 'ADMIN'. Cela assure que seuls les administrateurs peuvent modifier, supprimer ou vérifier les
produits.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/debc5a9d-d535-42f1-a1de-fa9b98f41cda)


Si un utilisateur qui ne possède pas le rôle 'ADMIN' consulte le fichier products.component.html, il ne voit pas les options pour éditer,
supprimer ou cocher les produits. Il peut seulement visualiser la liste des produits avec leurs noms et prix, ce qui lui permet de parcourir les
informations sans pouvoir apporter des modifications.

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/53ffc17d-1b71-4b40-8b96-04fe7247ae9a)


--------------------------------------------SecondAPP:
 Développer et Tester la partie Backend avec Spring.
Créer les entités JPA
●Payment


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/e2d3bad4-f391-4bee-9628-ad8a86de4369)

Cette entité capture les détails d'un paiement effectué par un étudiant.
●PaymentType


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/57ecad7c-8eb6-470c-a9ad-c8a12583bf4b)


Cette énumération définit les différents types de paiements possibles.
●PaymentStatus


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/68b31901-8821-474d-b2be-1263f6d3694c)


Cette énumération représente l'état d'un paiement.
●Student


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/6baca2d9-c725-45b0-8ce9-ab3c96f1c857)


Cette entité représente les informations d'un étudiant, y compris des détails personnels et d'identification.

Créer les interfaces JPARepository basées sur Spring Data
●PaymentRepository

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/941f5e90-8979-4279-85b3-5f4288c82c34)


Ces méthodes permettent de rechercher des paiements selon le code de l'étudiant, le statut du paiement ou le type de paiement.
●StudentRepository


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/72282179-5f69-4542-8a6e-571e16fd8bb4)


Ces méthodes permettent de rechercher des étudiants en fonction de leur code d'identification ou de l'identifiant de leur programme.
Générer des données aléatoires concernant quelques étudiants et pour chaque étudiants des payement


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/1767652c-1588-48d3-b155-67456b9e13ca)


créer une Web service RESTful (ResController) qui permet d'exposer les fonctionnalisés suivantes :
●Consulter tous les payements

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/9a8a8fdb-e2ed-41cf-a57e-0ee78a39f4ff)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/8eef3d79-ac45-47bc-9c0d-e8cbbd355df5)


●Consulter un payement sachant son id


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/53ca657b-0ef9-4188-be21-339f03b38673)


●Consulter les payements d'un type donné


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/53d29ae9-05e2-4be2-b360-2752215fe3cd)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/7230c83c-debf-4f8b-bd09-8e0de26766a5)


●Consulter les payements d'un status donné


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/6effe44d-ee46-4e2a-871d-b1a610267c1b)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/9e95f376-6579-45c3-867d-38add69a4005)


●Consulter les payements d'un étudiant donné


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/daa96047-5f62-4a3a-8005-cd1801c2542c)


●Consulter les payements d'une filière donnée


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/468ef062-b500-465d-bab4-0f4ff9bb3cdd)


●Consulter tous les étudiants


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/de175243-3865-4508-8d80-c0237b80c66d)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/005b8675-1e03-4bf1-a538-6606792dc06b)


●Consulter les étudiants d'une filière donnée


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/d0738178-0f5d-4997-ba6b-5a62ef4bf49f)


●Consulter un étudiant sachant son code


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/44faa92b-fb99-48d5-9718-196f7d45b023)


●Effectuer un nouveau payement avec les données et le reçu de payement au format pdf


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/9ab385f3-00e4-4864-9cbc-bcad4971d3e3)


●Mettre à jour le status d'un payement


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/4da534c8-df97-43bd-8fce-a21bd5ea7a7a)


●Consulter le reçu d'un payement  (fichier pdf) 


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/f9884436-25f6-4ff7-93c5-4f394eb52eb7)


 Tester le backend en utilisant un client REST (Postman) et avec SWAGGER UI


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/dc31984e-b0f4-4ee6-b2cc-6f77d23369cc)


On accède à http://localhost:8021/swagger-ui/index.html pour visualiser la documentation interactive de l'API, explorer les différents endpoints disponibles et tester les requêtes directement via l'interface utilisateur de Swagger.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/6f807887-7fcd-4557-a993-f21e9a633f23)


Je teste la mise à jour du statut d'un paiement avec l'ID 1 en exécutant :


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/72e53ea2-c6cd-4591-9bcc-8137eaff2fac)



Je teste la création d'un nouveau paiement, en incluant les données requises et en attachant le reçu de paiement au format PDF.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/8e92798f-baa1-435c-8a1e-7daa972ef0b9)


Et pour récupérer le fichier associé à un paiement spécifique :


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/bdc9d196-66a5-4b2b-9872-8fc760004966)


On accede a http://localhost:8021/payments/41/file pour voir le file 
Faire un refactoring du code en utilisant la couche service, les DTOs et les Mappers
Je créer la classe service/PaymentService :


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/2c61db45-f793-43cc-8430-42afd50934d4)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/bae6142a-fb23-40ed-866e-8493cb1a0ae1)


En PaymentRestController :
Je créer dtos/paymentDTO :

![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/4effa284-60e8-437b-b823-ea6af62b2266)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/60447e99-7ff3-4a9b-9a7f-28e1e3ef5fc5)


B: Développer et Tester la partie Frontend avec angular : 
1. Créer un projet angular : 
La première commande pour créer le projet frontend angular et la commande pour installer le matériels  : 
-ng new frontend-ang-app --directory=./ --no-standalone
-ng add @angular/material


2.Intégrer Angular Material : 
La commande pour créer le component admin-template  : 
-ng g c admin-template


3.Créer une page template contenant un Toolbar avec une barre de menu et un Side Menu
créer une nav barre et side barre dans le fichier:   

Admin-template.component.html :
Ce code utilise Angular Material pour créer une barre d'outils avec plusieurs éléments interactifs. La balise <mat-toolbar> 
est utilisée avec la couleur primaire définie. À l'intérieur, il y a un bouton avec une icône de menu qui, lorsqu'il est cliqué, déclenche la
fonction toggle() pour ouvrir ou fermer un tiroir latéral. Ensuite, il y a trois boutons qui redirigent vers différentes routes de l'application 
(/home, /profile, /logout). Le quatrième bouton est un bouton matMenuTrigger qui ouvre un menu déroulant contenant deux options (Load Students et Load Payments)
, chacune redirigeant vers une autre route de l'application lorsqu'elle est sélectionnée.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/c01e7979-9a66-4635-913a-bb41c5b662f5)


Ce code crée un conteneur de tiroirs à l'aide des composants <mat-drawer-container>, <mat-drawer>, et <mat-drawer-content>. À l'intérieur du tiroir (<mat-drawer>), 
il y a une liste (<mat-list>) de boutons (<mat-list-item>) qui redirigent vers différentes parties de l'application lorsqu'ils sont cliqués (/dashboard, /students, /payments). 
Le contenu principal de l'application est affiché dans <mat-drawer-content> à travers <router-outlet>, ce qui permet de charger dynamiquement les composants correspondant aux différentes 
routes de l'application.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/6df94eba-7224-4c17-a914-7fbdd94db4be)


4.Créer les différents component de l'application :
-ng g c login    
-ng g c students
-ng g c dashboard
-ng g c payments
-ng g c home
-ng g c profile
-ng g c load-students
-ng g c load-payments
Ensuite on a defini les routes qui définissent les chemins et les composants correspondants pour la navigation dans une application Angular. 
Par exemple, lorsque le chemin "/home" est accédé, le composant HomeComponent est chargé. De même, "/profile" chargera ProfileComponent, "/logout" 
chargera LogoutComponent, et ainsi de suite. Cela permet à l'application de charger les composants appropriés en fonction de l'URL demandée par l'utilisateur.
Ces routes sont utiliser dans ddmin-template.component.html 


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/35ab84b4-f6f4-4216-b047-d8468ed18213)


--Mettre à jours la page hom.component.html


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/41688827-c872-40af-a824-d5e63e940ac7)


Création de la classe container dans le dossier css:


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/bc09c1f5-5e2f-4e9c-a857-170b811955de)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/a5cb76c8-986f-4072-bcaf-054e25e7740b)


--Mettre à jours la page load-students.component.html


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/45f514d3-045e-4f39-b6fe-dedf35ea6b28)



--Mettre à jours la page payments.component.html


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/aa877bfd-bba8-4db4-9622-c0ed166fca3e)


--Mettre à jours la page profile.component.html


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/d8f449a5-0c78-4cff-8221-cb2ccb125076)


--Mettre à jours la page students.component.html


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/b10ba5bb-37b7-43e9-b279-dd15100097a0)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/55b52379-90cf-477b-b130-9c669866b80f)


--Mettre à jours la page app.component.html


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/81025f88-cedc-4aa7-8121-8318572a7cee)


--Mettre à jours la page Dashboard.component.html


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/133b47c1-bc2e-4b64-adb8-cc19de6dac4b)


-On va changer les routes:


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/8855293f-b005-4dcd-a990-2c33d34fc4cf)


---La page d’Authentification:


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/9c638436-ca71-4f61-8a76-183b457f2cf2)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/f951f097-fcb2-4350-9617-d1e58004af79)


----Login.component.ts   pour récupérer les données du formulaire:


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/d1da5c50-f4d5-48ba-b670-c291ce3e1ef4)


Et pour faire un systéme d’authentification basique on va créer service avec:
  ng g s sevices/auth
--auth.service.ts: pour gérer l’authentification avec 2 utilisateurs admin et user1


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/c4bea2d3-9c40-432e-9161-1f271a677f84)


-Admin-template.ts


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/92621e2e-4ac8-4b0b-91e0-d86966104238)


La fonction logout dans auth.services.ts pour se déconnecter :


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/2a7d7e5d-f760-48fc-ad1c-feed6e8e3a8b)


Lorsque l’user1 qui se conncte on aura ca:


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/0abd3d9c-9366-4040-a5ec-60156f893ccf)


Pour protejer la connexion an va créer un guard avec la commande 


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/f08b757d-2bd1-43d5-98c0-440b196c5fa2)


--Auth.guards.ts


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/290ed06b-701c-4fe5-8e6a-9eb054039361)


On va declarer le service dans le fichier app.module.ts : 


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/b4dd9c28-f92a-4964-bea1-8c71aa5971b2)


puis il faut protéger la route admin dans le fichier app-routing.module.ts: 


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/c95f2519-424a-424c-a81b-77abe7292a00)


Lorsque nous entrons l'URL : http://localhost:4200/admin, rien ne s'affiche


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/55f17389-a219-4ccc-83e5-a484480f86c2)



![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/af58b8c3-9a34-49e9-a632-b60c56d181ee)



Le fichier auth.guard.ts contient un gardien d'authentification (AuthGuard) qui protège les routes. Le gardien utilise deux services injectés, 
AuthService pour vérifier si l'utilisateur est authentifié, et Router pour naviguer. La méthode canActivate vérifie si l'utilisateur est authentifié 
via authService.isAuthenticated. Si c'est le cas, l'accès à la route est autorisé (return true). Sinon, l'utilisateur est redirigé vers la page de déconnexion 
(/logout) et l'accès est refusé (return false). Ce gardien s'assure que seules les personnes authentifiées peuvent accéder aux routes protégées.



![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/b1b5c010-6fdb-4bf8-8fd6-b2ef6ba9ac55)



![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/dec36307-19f6-4ba8-8eb5-68f56526a15a)


Pour protéger les routes par les rôles on va ajouter un autre Guard : authorization.guard.ts, 
 on va déclarer AuthorizationGuard dans providers dans le fichier app.module.ts : 


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/54100f3b-4edb-416d-812d-4da28605a565)



dans le fichier app-routing.module.ts on doit protéger les routes : 



![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/eb16c4b0-7834-49ee-baa1-50e5529dac87)


Le fichier authorization.guard.ts protège les routes en fonction des rôles des utilisateurs. Il utilise AuthService pour vérifier 
l'authentification et obtenir les rôles de l'utilisateur, et Router pour la navigation. La méthode canActivate vérifie si l'utilisateur 
est authentifié ; sinon, il est redirigé vers /logout. Si l'utilisateur est authentifié, elle compare ses rôles avec ceux requis pour la route.
Si un rôle correspond, l'accès est autorisé, sinon, il est refusé. Ce gardien s'assure que seuls les utilisateurs authentifiés et autorisés accèdent aux routes protégées.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/e940aa04-224d-45fd-9667-756613d69c58)


Le menu doit être masqué pour l'utilisateur user1 et s'afficher pour l'utilisateur admin .Pour ce faire, nous allons ajouter un test de rôle dans le fichier admin-template.component.html :


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/63a545d9-d364-476e-aede-108876e1faaf)


Authentification avec l’utilisateur user1 :


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/57fd14c1-6f0e-4a0d-bf6f-49dac0ffb979)


Affichage des données du Backend : 
le fichier payment.component.ts : 
Le composant PaymentsComponent affiche les données des paiements provenant du backend en utilisant Angular Material. 
Lors de l'initialisation (ngOnInit), une requête GET est envoyée à l'URL "http://localhost:8021/payments" pour récupérer 
les paiements. Si la requête réussit, les données sont stockées dans payments et assignées à dataSource en tant que MatTableDataSource, 
puis configurées pour la pagination et le tri à l'aide de MatPaginator et MatSort. En cas d'erreur, celle-ci est loguée dans la console.
Le tableau affiche les colonnes définies par displayedColumns, permettant ainsi une présentation structurée et interactive des paiements.


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/631dc9b1-a0b5-4b41-88dc-dbc988dde948)


Le fichier payment.component.html : 


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/468b31ba-c06c-422c-943a-b3e2c9f835d8)


![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/8bbd191b-ceaf-4934-8165-500f290e9125)



![image](https://github.com/ELFAHIM-SANA/EL-FAHIM-SANA-TP4-SD/assets/131165163/bda79473-d70c-4a97-8e5c-5a1059f20c89)










































