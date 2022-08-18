
export class ProductService {

    getProductsSmall() {
        return fetch('data/api.json').then(res => res.json()).then(d => d.data);
    }

    getProducts() {
        return fetch('https://apivulnerable.herokuapp.com/aladmin/').then(res => res.json()).then(d => d.results);
    }
    getSuperAdmins() {
        return fetch('https://apivulnerable.herokuapp.com/alsuperadmin/').then(res => res.json()).then(d => d.results);
    }
    getAdmins() {
        return fetch('https://apivulnerable.herokuapp.com/aladmin/').then(res => res.json()).then(d => d.results);
    }
    getAgentsParAdmins() {
        return fetch('https://apivulnerable.herokuapp.com/alagent/').then(res => res.json()).then(d => d.results);
    }
    getAgents() {
        return fetch('https://apivulnerable.herokuapp.com/allagent/').then(res => res.json()).then(d => d.results);
    }
    getRecPers() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablegs/').then(res => res.json()).then(d => d.results);
    }
    getVulVie() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablecon/').then(res => res.json()).then(d => d.results);
    }
    getVulEtu() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerableetud/').then(res => res.json()).then(d => d.results);
    }
    getVulPhy() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablephys/').then(res => res.json()).then(d => d.results);
    }
    getVulChom() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerableoccup/').then(res => res.json()).then(d => d.results);
    }
    getDonateurs() {
        return fetch('https://apidons.herokuapp.com/listdonateur/').then(res => res.json()).then(d => d.results);
    }
    getArgent() {
        return fetch('https://apidons.herokuapp.com/listargea/').then(res => res.json()).then(d => d.results);
    }
    getNature() {
        return fetch('https://apidons.herokuapp.com/listnaturea/').then(res => res.json()).then(d => d.results);
    }
    getIndividus() {
        return fetch('https://apivulnerable.herokuapp.com/individus/').then(res => res.json()).then(d => d.data);
    }
    getMenages() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablegs/').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch('data/api.json').then(res => res.json()).then(d => d.data);
    }
}
    