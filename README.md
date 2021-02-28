# Projecte M06-UF3 → CRUD Zelda 

![captura_git](https://user-images.githubusercontent.com/58809030/109426820-cc7fbc00-79ef-11eb-9db7-eb1e03924828.png)

1. INICI

Hi ha que realitzar un CRUD (Create Read Update Delete) sobre una temàtica lliure en un únic fitxer HTML. Has de crear una SPA (Single Page Application) no recarregable.
El fitxer HTML sols contindrà diversos elements de tipus DIV sobre els qual es crearan tots els elements HTML necessaris des de codi Javascript.
Cada DIV ha d’estar inicialment vuit i identificat perun identificador únic. La creació de tots els elements HTML s’han de fer obligatòriament utilitzant 
les funcions vistes a classecom createElement, createTextNode, ...

2. OBJECTIU 1/3: Requisits per un 5 (Obligatori)

Al obrir l’aplicació web, sols serà visible el contingut del primer DIV que contindrà una taula amb els registres guardats, si no hi han elements per mostrar es mostrarà
un text indicant-ho. També hi haurà unbotó que eliminarà (NO ocultarà) tot el contingut del primer DIV i afegirà al segon DIV un formulari amb els següents elements 
HTML com a mínim:

●2 camp de tipus text.

●1 camp numèric.

●1 camp de selecció múltiple.

●1 camp per seleccionar un fitxer d’imatge.

●1 menú desplegable amb 4 opcions.

Es valorarà positivament afegir més elements HTML al formulari de altres tipus o funcionaments. Tota la informació generada per el formulari serà guardat en un array on
cada posició serà un objecte JSON amb les dades emplenades. Un dels camps de l’objecte JSON ha de tenir un valor únic  autoincremental gestionat per l'aplicació. 
Alguns camps del formulari serà obligatoris (3 com a mínim) i altres seran opcionals. És validarà des de codi Javascript que estiguin tots els camps obligatoris
correctament emplenats i, en cas contrari, no es permetrà l’enviament del formulari i els elements HTML que no estiguin correctament emplenats s’han de ressaltar 
modificant les seves propietats.Almenys 2 elements HTML del formulari han de tenir una validació per expressió regular feta des de codi Javascript. S'han d'utilitzar
almenys 3 tipus diferents d'esdeveniments (dos de ratolí i un de teclat).

Una vegada emplenat correctament el formulari es guardarà la informació en un objecte JSON a l’array, s’eliminarà tot el contingut del DIV on està el formulari i al 
primer DIV es tornarà a crear una taula amb els registres guardats.A la taula s’ha de mostrar la informació de tots els registres, inclosa la imatge i enllaços per
poder modificar i eliminar cadascun dels registres. A més al fer doble clic sobre la imatge aquesta ha de ser eliminada de la taula i del registre (JSON) corresponent
de l’array. L’enllaç de modificar no ha de fer res per ara, però l’enllaç d’eliminar si ha d’eliminar el registre de la taula i de l'array.A l’eliminar la imatge d'un
registre o el registre complet de la taula, NO es pot eliminar la taula i tornar a crear-la, s’ha d’afectar només als elements implicats únicament.NO es pot fer cap
botó o enllaç per tancar i tornar a obrir l’aplicació o per recarregar-la.S’ha de realitzar una memòria obligatòria explicant les parts principals de l’aplicació, 
les dificultats trobades i un conclusió individual.

● Mostrar la taula amb tota la funcionalitat: 1,5 punts.

● Formulari per inserir amb tota la funcionalitat: 2,5 punts.

● Memòria: 1 punt.

3. OBJECTIU 2/3: Requisits per 1,5 punts

Amplia l’apartat anterior creant un nou DIV que es mostrí al prémer l’enllaç de modificar. La resta d’elements DIV s’han de buidar igual que a l’apartat anterior.
Al DIV s’han de crear tots els elements HTML necessaris per mostrar la informació emmagatzemada del registre corresponent i poder modificar-la. 
El formulari de modificació ha de tenir la mateixa funcionalitat que el d’inserir un nou registre de l’apartat anterior, sols que s’ha d’emplenar amb la informació
del registre.

L'identificador únic de cada registre no s'ha de poder modificar.

● Formulari per modificar amb tota la funcionalitat: 1,5 punts.

4. OBJECTIU 3/3: Requisits per 3,5 punts

Amplia l’aplicació per fer una relació 1:N, cada registre JSON del primer array ha de tenir un nou arrayamb elements JSON. Al fer clic a un registre de la taula
principal s’ha de mostrar una nova taula a un nou DIV (eliminant el contingut del DIV anterior) amb la informació dels registres relacionats, un botó per crear més 
registres, un altre per mostrar la taula principal, eliminant tots el contingut del DIV i els enllaços per modificar i eliminar un registre. Tot ha de funcionar. 
A l’eliminar el registre de la taula, NO es pot eliminar la taula i tornar a crear-la, s’ha d’afectar només l’element implicat únicament. Els tipus d'elements HTML 
han de ser variats com a l'objectiu 1 (inputs de diversos tipus, radiobuttons, checkbox, select, imatges, audios, videos, ...). 

Almenys 2 elements HTML del formulari han de tenir una validació per expressió regular feta des de codi Javascript diferents a les anteriors.

S'han d'utilitzar almenys 2 tipus diferents d'esdeveniments (un de ratolí i un de teclat) diferents als anteriors. NO es pot fer cap botó o enllaç per tancar
i tornar a obrir l’aplicació o per recarregar-la. Es valorarà positivament afegir més elements HTML al formulari de altres tipus o funcionaments. 

●Mostrar la taula amb tota la funcionalitat: 1 punt. 

●Formulari per inserir amb tota la funcionalitat: 1,25 punt. 

●Formulari per modificar amb tota la funcionalitat: 1,25 punt.
