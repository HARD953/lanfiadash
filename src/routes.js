import React from 'react'


//Accueil
const Accueil = React.lazy(() => import('./views/accueil/Accueil'))

//acteurs
const Administrateurs = React.lazy(() => import('./views/acteurs/administrateurs/Administrateurs'))
const SuperAdministrateurs = React.lazy(() => import('./views/acteurs/super-administrateurs/SuperAdministrateurs'))
const Agents = React.lazy(() => import('./views/acteurs/agents/Agents'))
const Donateurs = React.lazy(() => import('./views/acteurs/donateurs/Donateurs'))

//Cibles
const Individuels = React.lazy(() => import('./views/cibles/individuels/Individuels'))
const Menages = React.lazy(() => import('./views/cibles/menages/Menages'))

//Dons
const Argents = React.lazy(() => import('./views/dons/argents/Argents'))
const Objets = React.lazy(() => import('./views/dons/objets/Objets'))

//Cartes
const Cartes = React.lazy(() => import('./views/cartes/Cartes'))

//Criteres
const Criteres = React.lazy(() => import('./views/criteres/Criteres'))

//Criteres
const Statistiques = React.lazy(() => import('./views/statistiques/Statistiques'))

//Details
const DetailsActeurs = React.lazy(() => import('./views/details/detailsActeurs/DetailsActeurs'))
const DetailsCibles = React.lazy(() => import('./views/details/detailsCibles/DetailsCibles'))
const DetailsDons = React.lazy(() => import('./views/details/detailsDons/DetailsDons'))


//Compte
const Compte = React.lazy(() => import('./views/compte/Compte'))





const route_principale = 'dashboard'

const routes = [
    //Accueil
    { path: `${route_principale}`, name: 'Accueil', element: Accueil },

    //Acteurs
    { path: `/${route_principale}/acteur/administrateurs`, name: 'Administrateurs', element: Administrateurs },
    { path: `/${route_principale}/acteur/super-administrateurs`, name: 'Super-Administrateurs', element: SuperAdministrateurs },
    { path: `/${route_principale}/acteur/agents`, name: 'Agents', element: Agents },
    { path: `/${route_principale}/acteur/donateurs`, name: 'Donateurs', element: Donateurs },

    //Menages
    { path: `/${route_principale}/cibles/individuels`, name: 'Individuels', element: Individuels },
    { path: `/${route_principale}/cibles/menages`, name: 'Menages', element: Menages },

    //Dons
    { path: `/${route_principale}/dons/argents`, name: 'Argents', element: Argents },
    { path: `/${route_principale}/dons/objets`, name: 'Objets', element: Objets },

    //Cartes
    { path: `/${route_principale}/cartes`, name: 'Cartes', element: Cartes },

    //Criters
    { path: `/${route_principale}/criteres`, name: 'Criteres', element: Criteres },
    
    //Statistiques
    { path: `/${route_principale}/statistiques`, name: 'Statistiques', element: Statistiques },
    
    //Details
    { path: `/${route_principale}/details/acteurs`, name: 'Acteurs Details', element: DetailsActeurs },
    { path: `/${route_principale}/details/cibles`, name: 'Cibles Details', element: DetailsCibles },
    { path: `/${route_principale}/details/dons`, name: 'Dons Details', element: DetailsDons },

     //Statistiques
     { path: `/${route_principale}/compte`, name: 'Compte', element: Compte },
]

export default routes
