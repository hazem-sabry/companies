var companiesContainer = document.querySelector('.companies');
var loader = document.querySelector('.loader');

function renderCompanies(companies) {

    companies.forEach(company => {
        companiesContainer.innerHTML += `
            <article class="company">
                <figure class="company__poster">
                    <img src="${company.image}" alt="Company Poster" loading="lazy" >
                </figure>
                <div class="company__info">
                    <h1>${company.name}</h1>
                    <span>${company.country}</span>
                    <span>${company.phone}</span>
                    <a href="${company.website}">Visit website</a>
                </div>
            </article>
        `;
    })
}

function getCompanies() {
    // show loader
    loader.classList.remove('hidden');
    fetch(`https://fakerapi.it/api/v1/companies`)
        .then(res => res.json())
        .then(data => {
            renderCompanies(data.data);
        })
        .catch(error => {
            console.log(error);
        })
        .finally( () => {
            // remove loader
            loader.classList.add('hidden');
        })
    
}

getCompanies();