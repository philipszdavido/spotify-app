module.exports = function(app) {
        app.dataSources.firestore.automigrate('Albums', function(err) {
            if (err) throw err;

            app.models.Albums.create([{
                name: 'Arrival',
                artists: [{ name: 'Abba' }],
                album_type: 'Pop',
                image: 'http://www.softshoe-slim.com/covers2/a/abba04.jpg',
                tracks: [{
                    name: 'Fernando',
                    image: 'http://images.eil.com/large_image/ABBA_FERNANDO-551337.jpg',
                    duration: 8989
                }],
                release_date: "1976"
            }, {
                name: 'Thriller',
                artists: [{ name: 'Michael Jackson' }],
                album_type: 'Pop',
                image: 'https://upload.wikimedia.org/wikipedia/en/8/89/Michael_jackson_thriller_12_inch_single_USA.jpg',
                tracks: [{
                    name: 'Billie Jean',
                    image: 'https://orig00.deviantart.net/cb71/f/2011/050/c/1/michael_jackson___billie_jean_by_prozdesign-d39xo4g.jpg',
                    duration: 8989,
                }],
                release_date: "1982"
            }], function(err, Artists) {
                if (err) throw err;

                console.log('Models created: \n', Artists);
            });
        });

        app.dataSources.firestore.automigrate('Tracks', function(err) {
            if (err) throw err;

            app.models.Tracks.create([{
                name: 'Fernando',
                image: 'http://images.eil.com/large_image/ABBA_FERNANDO-551337.jpg',
                duration: 8989,
                albums: [{ name: 'Arrival' }],
                artists: [{ name: 'Abba' }]
            }, {
                name: 'Billie Jean',
                image: 'https://orig00.deviantart.net/cb71/f/2011/050/c/1/michael_jackson___billie_jean_by_prozdesign-d39xo4g.jpg',
                duration: 9894,
                albums: [{ name: 'Thriller' }],
                artists: [{ name: 'Michael Jackson' }]
            }], function(err, Tracks) {
                if (err) throw err;

                console.log('Models created: \n', Tracks);
            });
        });