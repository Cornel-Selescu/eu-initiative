const initiatives = [
    {
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
        }],
        thresholdCountries: [{
            country: 'Belgium',
            supporters: 50000,
            maxSupporters: 85000
        }, {
            country: 'Italy',
            supporters: 1000,
            maxSupporters: 100000
        }, {
            country: 'France',
            supporters: 12345,
            maxSupporters: 23456
        }, {
            country: 'Germany',
            supporters: 9999,
            maxSupporters: 10050
        }, {
            country: 'Romania',
            supporters: 300000,
            maxSupporters: 300000
        }, {
            country: 'Bulgaria',
            supporters: 300000,
            maxSupporters: 1000
        }, {
            country: 'croATIa',
            supporters: 300000,
            maxSupporters: 1000
        },]
    }, {
        id: 2,
        title: 'win it on the pitch',
        details: {
            initiativeLogo: 'http://localhost:3000/win-the-pitch.png',
            objectives: [
                `PROTECT CLUBS, COMMUNITIES, AND COMPETITIONS`,
                `Council recommendation on protecting the model of sport in Europe based on values, solidarity, sustainability, and open competitions `,
                `The European model of sport is based on popular principles such as sporting merit, promotion and relegation, qualification to Europe via domestic success, and financial solidarity. This model and its principles must be further protected at the EU-level to prevent any more super league style breakaway attempts and protect our clubs, communities and competitions from hostile and reckless corporate and financial prospecting into European sport by private organisations and sovereign wealth funds.`,
                `Sport is an integral part of the fabric of European society and culture that must be protected and promoted for the benefit of all.`,
                `We are calling on the Council to adopt a Recommendation providing an EU framework and guidelines for member state action to:`,
                `• Protect the model of football in Europe`,
                `• Recognise the social value of sport in European society`,
                `• Recognise the specific nature of sport in EU Competition rules`,
                `• Strengthen EU vision and long-term policy on the future &amp; governance of European sport`
            ],
            commissionWebpage: 'https://europa.eu/citizens-initiative/initiatives/details/2022/000001',
            initiativeWebsite: 'https://winitonthepitch.eu/',
            contactRep: {
                name: 'Ronan Evain',
                email: 'info@fanseurope.org'
            },
            contactSub: {
                name: 'Martha Mestre Gens Vida da Conceição',
                email: 'marthagens@gmail.com'
            },
            registrationNumber: 'ECI(2022)000001',
            registrationDate: '13/03/2022'
        },
        signaturesInfo: {
            totalSignitures: 100000,
            onlineSignitures: 90501,
            endDate: '05/06/2024',
            socialMedia: {
                facebook: 'https://www.facebook.com/EndTheSlaughterAge',
                instagram: 'https://www.instagram.com/endtheslaughterage/',
            }
        },
        recentSignatories: [{
            country: 'greece',
            date: '15-Oct-2022'
        }, {
            country: 'sPaiN',
            date: '13-Oct-2022'
        }, {
            country: 'rOMANIA',
            date: '12-Oct-2022'
        }, {
            country: 'Bulgaria',
            date: '11-Oct-2022'
        }, {
            country: 'Italy',
            date: '11-Oct-2022'
        }],
        thresholdCountries: [{
            country: 'Belgium',
            supporters: 50000,
            maxSupporters: 85000
        }, {
            country: 'Italy',
            supporters: 10000,
            maxSupporters: 100000
        }, {
            country: 'France',
            supporters: 12345,
            maxSupporters: 23456
        }, {
            country: 'Germany',
            supporters: 1,
            maxSupporters: 10050
        }, {
            country: 'Romania',
            supporters: 300000,
            maxSupporters: 300000
        }, {
            country: 'Bulgaria',
            supporters: 300000,
            maxSupporters: 1000
        }, {
            country: 'croATIa',
            supporters: 300000,
            maxSupporters: 1000
        },]
    }];


module.exports = initiatives[0];