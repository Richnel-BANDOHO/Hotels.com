'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

app.get('/api/content', (req, res) => {
    const content = {
            company: 'Hotels.com',
            blurb: 'Wake up happy',
            header_content: 'With over <strong>140,000 hotels</strong> worldwide, <strong>priced matched guaranteed</strong> and <strong>1.2 million</strong> reviews, why look elsewhere for your next hotel booking.'                
        };

    res.json(content);
});

app.get('/api/hotels', (req, res) => {
    const hotels = [
        {
            city: 'London',
            country: 'United Kingdom',
            hotels: [
                {
                    name: 'The May Fair',
                    stars: 4,
                    prices: [
                        {
                            was: 232,
                            now: 192
                        }
                    ]
                },
                {
                    name: 'Grand Plaza Services Apartments',
                    stars: 3,
                    prices: [
                        {
                            was: null,
                            now: 78
                        }
                    ]
                },
                {
                    name: 'Lancaster Gate Hotel',
                    stars: 5,
                    prices: [
                        {
                            was: 64,
                            now: 61
                        }
                    ]
                },
                {
                    name: 'Radisson Edwardian Grafton Hotel',
                    stars: 2,
                    prices: [
                        {
                            was: null,
                            now: 102
                        }
                    ]
                },
                {
                    name: 'The Rembrandt',
                    stars: 3,
                    prices: [
                        {
                            was: 122,
                            now: 112
                        }
                    ]
                },
            ],
        },
        {
            city: 'New York',
            country: 'United States',
            hotels: [
                {
                    name: 'The Waldorf Astoria',
                    stars: 2,
                    prices: [
                        {
                            was: null,
                            now: 154
                        }
                    ]
                },
                {
                    name: 'Park Central New York Hotel',
                    stars: 5,
                    prices: [
                        {
                            was: 121,
                            now: 89
                        }
                    ]
                },
                {
                    name: 'Hilton Garden Inn New York / West 35th Street',
                    stars: 4,
                    prices: [
                        {
                            was: null,
                            now: 74
                        }
                    ]
                },
                {
                    name: 'Hilton New York',
                    stars: 3,
                    prices: [
                        {
                            was: null,
                            now: 147
                        }
                    ]
                },
                {
                    name: 'Hotel Pennsylvania',
                    stars: 4,
                    prices: [
                        {
                            was: null,
                            now: 60
                        }
                    ]
                },
            ],
        },
        {
            city: 'Paris',
            country: 'France',
            hotels: [
                {
                    name: 'Sofitel Paris Le Faubourg',
                    stars: 5,
                    prices: [
                        {
                            was: null,
                            now: 285
                        }
                    ]
                },
                {
                    name: 'Pullman Paris Tour Eiffel',
                    stars: 4,
                    prices: [
                        {
                            was: 168,
                            now: 89
                        }
                    ]
                },
                {
                    name: 'Champs Elysees Mac Mahon',
                    stars: 3,
                    prices: [
                        {
                            was: null,
                            now: 194
                        }
                    ]
                },
                {
                    name: 'Hotel Regina',
                    stars: 2,
                    prices: [
                        {
                            was: null,
                            now: 159
                        }
                    ]
                },
                {
                    name: 'Hotel Pershing Hall Paris',
                    stars: 4,
                    prices: [
                        {
                            was: null,
                            now: 283
                        }
                    ]
                },
            ],
        },
    ];

    res.json(hotels);
})

app.listen(port);
console.log('server started on ' + port);