## Getting Started

This is the frontend code for my option scanner, which scans for unusual option activity on the NASDAQ and lists it on an easy to read datatable. You can take a look at the 
[demo](https://stoic-lumiere-6592fe.netlify.app/). Due to database costs, the page above is just a demo. This app utilizes react and a collection of libraries to accomplish this.

## Building this yourself
In order to build and deploy this application yourself, you will need a mongodb database, which can be populated easily using my script for [scraping option data](https://github.com/vxlm/TDA-Option-Scraper). You then need to set up an API which allows you to query the mongodb database, and point the application apiURI in app.js, line21
to our endpoint which exposes the collection named *unusual*. After this is set up, you are done and can run this database and app on your local machine, in order to scrape much more data and important statistics.

## Deploying this app on netlify for free
To deploy the frontend to netlify is a rather easy task. First, make an account on [netlify](https://www.netlify.com/). Then, in terminal, inside of your react app,
```
npm run build
npm install netlify-cli -g
netlify deploy
```

and you are done! The database and API hosting is more complicated, and will cost money for a decent size database. For a free version, mongodb provides atlas, which can store up to 512mb of storage.
