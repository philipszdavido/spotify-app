# Spotify-app
This repo demonstrates how to run and host a loopback app on Google App Engine.

I modelled the Spotify Web API. Spotify is an online music service that gives you instant access to millions of songs – from old favorites to the latest hits.

* [Web API Object Model](#web-api-object-model)
* [Run the hosted app on Google App Engine](#run-the-hosted-app-on-google-app-engine)
* [API Summary](#api-summary)
* [Run Locally](#run-locally)
* [Deploying](#deploying)

## Web API Object Model
I created three models for this demo `Albums`, `Tracks` and `Artists`.

* Albums Model Structure
```sh
    "artists": [{
     "name": ""
    }],
    "album_type": "",
    "image": "",
    "tracks": [{
     "name": ""
    }],
    "release_date": ""
```
* Tracks Model Structure
```sh
   "artists": [{
    "name": ""
   }],
   "albums": [{
    "name": ""
   }],
   "duration": "",
   "image": "",
   "name": ""
```
* Artists Model Structure
```sh
    "name": "",
    "popularity": "",
    "genres": [{
     "name": ""
    }],
    "image": ""
```
## Run the hosted app on Google App Engine
* **Note**: I used Google Cloud Firestore service as my datastore.

# Albums Tests
### Albums POST Test - This creates a new album
```sh
CLIENT_ID="<YOUR-CLIENT-ID-HERE>";
CLIENT_SECRET="YOUR-CLIENT-SECRET-HERE";

JWT=$(curl --request POST \
  --url https://<YOUR-AUTH0-DOMAIN>.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"'$CLIENT_ID'","client_secret":"'$CLIENT_SECRET'","audience":"<YOUR-AUDIENCE-ATTRIBUTE-HERE>","grant_type":"client_credentials"}' | jq .access_token -r);

curl --request POST \
  --url https://<YOUR_URL_HERE>.appspot.com/api/albums \
  --header 'authorization: Bearer '$JWT \
  --header 'content-type: application/json' \
  --data '{"name":"Dangerous","artists":[{"name":"Michael Jackson"}],"album_type":"Pop","image":"michaeljackson.png","tracks":[{"name":"Dangerous"}],"release_date":"1991"}'
```

### Albums GET Test - This retrieves all albums from the database
```sh
CLIENT_ID="<YOUR-CLIENT-ID-HERE>";
CLIENT_SECRET="YOUR-CLIENT-SECRET-HERE";

JWT=$(curl --request POST \
  --url https://<YOUR-AUTH0-DOMAIN>.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"'$CLIENT_ID'","client_secret":"'$CLIENT_SECRET'","audience":"<YOUR-AUDIENCE-ATTRIBUTE-HERE>","grant_type":"client_credentials"}' | jq .access_token -r);

curl --request GET \
  --url https://<YOUR_URL_HERE>.appspot.com/api/albums \
  --header 'authorization: Bearer '$JWT
```

### Albums GET `<id>` Test - This retrieves a specific album id from the database 
```sh
CLIENT_ID="<YOUR-CLIENT-ID-HERE>";
CLIENT_SECRET="YOUR-CLIENT-SECRET-HERE";

JWT=$(curl --request POST \
  --url https://<YOUR-AUTH0-DOMAIN>.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"'$CLIENT_ID'","client_secret":"'$CLIENT_SECRET'","audience":"<YOUR-AUDIENCE-ATTRIBUTE-HERE>","grant_type":"client_credentials"}' | jq .access_token -r);

curl --request GET \
  --url https://<YOUR_URL_HERE>.appspot.com/api/albums/5a12c7b384a89046c0624bf4 \
  --header 'authorization: Bearer '$JWT
```
# Tracks Test
### Tracks POST Test - This creates a new track instance.
```sh
CLIENT_ID="<YOUR-CLIENT-ID-HERE>";
CLIENT_SECRET="YOUR-CLIENT-SECRET-HERE";

JWT=$(curl --request POST \
  --url https://<YOUR-AUTH0-DOMAIN>.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"'$CLIENT_ID'","client_secret":"'$CLIENT_SECRET'","audience":"<YOUR-AUDIENCE-ATTRIBUTE-HERE>","grant_type":"client_credentials"}' | jq .access_token -r);

curl --request POST \
  --url https://<YOUR_URL_HERE>.appspot.com/api/tracks \
  --header 'authorization: Bearer '$JWT \
  --header 'content-type: application/json' \
  --data '{"artists":[{"name":"Michael Jackson"}],"albums":[{"name":"Thriller"}],"duration":90,"image":"billiejean.png","name":"Beat It"}'
```
### Tracks GET Test - This retrieves all tracks from the database.
```sh
CLIENT_ID="<YOUR-CLIENT-ID-HERE>";
CLIENT_SECRET="YOUR-CLIENT-SECRET-HERE";

JWT=$(curl --request POST \
  --url https://<YOUR-AUTH0-DOMAIN>.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"'$CLIENT_ID'","client_secret":"'$CLIENT_SECRET'","audience":"<YOUR-AUDIENCE-ATTRIBUTE-HERE>","grant_type":"client_credentials"}' | jq .access_token -r);

curl --request GET \
  --url https://<YOUR_URL_HERE>.appspot.com/api/tracks \
  --header 'authorization: Bearer '$JWT
```
### Tracks GET `<id>` Test - This retrieves a specific track id from the database.
```sh
CLIENT_ID="<YOUR-CLIENT-ID-HERE>";
CLIENT_SECRET="YOUR-CLIENT-SECRET-HERE";

JWT=$(curl --request POST \
  --url https://<YOUR-AUTH0-DOMAIN>.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"'$CLIENT_ID'","client_secret":"'$CLIENT_SECRET'","audience":"<YOUR-AUDIENCE-ATTRIBUTE-HERE>","grant_type":"client_credentials"}' | jq .access_token -r);

curl --request GET \
  --url https://<YOUR_URL_HERE>.appspot.com/api/tracks/5a12c7b384a89046c0624bf6 \
  --header 'authorization: Bearer '$JWT
```
# Artists Test
### Artists POST Test - This creates a new artist instance.
```sh
CLIENT_ID="<YOUR-CLIENT-ID-HERE>";
CLIENT_SECRET="YOUR-CLIENT-SECRET-HERE";

JWT=$(curl --request POST \
  --url https://<YOUR-AUTH0-DOMAIN>.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"'$CLIENT_ID'","client_secret":"'$CLIENT_SECRET'","audience":"<YOUR-AUDIENCE-ATTRIBUTE-HERE>","grant_type":"client_credentials"}' | jq .access_token -r);

curl --request POST \
  --url https://<YOUR_URL_HERE>.appspot.com/api/artists \
  --header 'content-type: application/json' \
  --header 'authorization: Bearer '$JWT \
  --data '{"name":"Bob Marley","popularity":90,"genres":[{"name":"Pop"}],"image":"bm.jpg"}'
```
### Artists GET Test - This retrieves all artists from the database.
```sh
CLIENT_ID="<YOUR-CLIENT-ID-HERE>";
CLIENT_SECRET="YOUR-CLIENT-SECRET-HERE";

JWT=$(curl --request POST \
  --url https://<YOUR-AUTH0-DOMAIN>.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"'$CLIENT_ID'","client_secret":"'$CLIENT_SECRET'","audience":"<YOUR-AUDIENCE-ATTRIBUTE-HERE>","grant_type":"client_credentials"}' | jq .access_token -r);

curl --request GET \
  --url https://<YOUR_URL_HERE>.appspot.com/api/artists \
  --header 'authorization: Bearer '$JWT
```
### Artists GET `<id>` Test - This retrieves a specific artist id from the database 
```sh
CLIENT_ID="<YOUR-CLIENT-ID-HERE>";
CLIENT_SECRET="YOUR-CLIENT-SECRET-HERE";

JWT=$(curl --request POST \
  --url https://<YOUR-AUTH0-DOMAIN>.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"'$CLIENT_ID'","client_secret":"'$CLIENT_SECRET'","audience":"<YOUR-AUDIENCE-ATTRIBUTE-HERE>","grant_type":"client_credentials"}' | jq .access_token -r);

curl --request GET \
  --url https://<YOUR_URL_HERE>.appspot.com/api/artists/5a12c7b384a89046c0624bf4 \
  --header 'authorization: Bearer '$JWT
```
## API Summary

#### Note

All requests must be prefixed with  **<YOUR_URL_HERE>.appspot.com/api/**

## Albums

EndPoint | Functionality
-------- | -------------
POST /albums/ | Creates a new album instance.
GET /albums/ | Returns all albums.
GET /albums/`<id>` | Returns the specified album id.
PUT /albums/`<id>` | Update album attributes.
DELETE /albums/`<id>` | Delete album.

## Tracks

EndPoint | Functionality
-------- | -------------
POST /tracks/ | Creates a new track instance.
GET /tracks/ | Returns all tracks.
GET /tracks/`<id>` | Returns the specified track id
PUT /tracks/`<id>` | Update track attributes.
DELETE /tracks/`<id>` | Delete track.

## Artists

EndPoint | Functionality
-------- | -------------
POST /artists/ | Creates a new artist instance.
GET /artists/ | Returns all artists.
GET /artists/`<id>` | Returns the specified artist id.
PUT /artists/`<id>` | Update artist attributes.
DELETE /artists/`<id>` | Delete artist.


## Run Locally

1.  Clone this repo:

        git clone https://github.com/philipszdavido/spotify-app.git

1.  Move into the `spotify-app` directory from the terminal:

        cd spotify-app

1.  Install depedencies using `npm` or `yarn`:

        npm install

    or

        yarn install

1.  Run the sample with `npm` or `yarn`:

        npm start

    or

        yarn start

1.  Visit the application at `http://localhost:3000`.

## Deploying

1.  Use the [Google Cloud Console][console] to create a Google Cloud Platform
    project.
1.  [Enable billing][billing] for your project.

1.  Use the Cloud SDK to deploy your app.

        gcloud app deploy

    Note: If there is a `yarn.lock` file then `yarn install` will be used during
    deployment. Delete the `yarn.lock` file to fall back to `npm install`.

1.  View your deployed application at `https://YOUR_PROJECT_ID.appspot.com` or `gcloud app browse`.

[nodejs]: https://nodejs.org/
[appengine]: https://cloud.google.com/appengine/docs/flexible/nodejs/
[nodejs_dev]: https://cloud.google.com/community/tutorials/how-to-prepare-a-nodejs-dev-environment
[sdk]: https://cloud.google.com/sdk/
[console]: https://console.cloud.google.com
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[official_samples]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/appengine
[community_samples]: https://cloud.google.com/community/tutorials/?q=%22Node.js%22
