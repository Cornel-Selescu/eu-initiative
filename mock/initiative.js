const initiatives = [{
    id: 1,
    title: 'end the slaughter age',
    details: {
        initiativeLogo: 'http://localhost:3000/end-slaughter.png',
        objectives: [
            `1 - Exclude livestock farming from list of activities eligible for agricultural subsidies and include ethical and environmentally friendly alternatives, such as cellular agriculture and plant proteins.`,
            `2 - Incentives for the production and sale of plant-based products and those made using cellular agriculture.`
        ],
        commissionWebpage: 'https://europa.eu/citizens-initiative/initiatives/details/2022/000003',
        initiativeWebsite: 'https://www.endtheslaughterage.eu/',
        contactRep: {
            name: 'Filippo Borsellino',
            email: 'endtheslaughterage@gmail.com'
        },
        contactSub: {
            name: 'Darryl Grima',
            email: 'info@veggymalta.com'
        },
        registrationNumber: 'ECI(2022)000003',
        registrationDate: '05/06/2022'
    },
    signaturesInfo: {
        totalSignitures: 1000000,
        onlineSignitures: 33944,
        endDate: '05/06/2023',
        socialMedia: {
            facebook: 'https://www.facebook.com/EndTheSlaughterAge',
            twitter: 'https://twitter.com/InteroperableEU/status/1115552962972147712/photo/1',
            instagram: 'https://www.instagram.com/endtheslaughterage/',
            linkedin: 'https://www.linkedin.com/in/cornelselescu/'
        }
    },
    recentSignatories: [{
        country: 'Italy',
        date: '12-Oct-2022'
    }, {
        country: 'France',
        date: '11-Oct-2022'
    }, {
        country: 'Italy',
        date: '11-Oct-2022'
    }, {
        country: 'France',
        date: '11-Oct-2022'
    }, {
        country: 'Italy',
        date: '11-Oct-2022'
    }]
}];




module.exports = initiatives[0];