{
  "name": "crypto-cards-compared",
  "version": "0.0.1",
  "description": "Tool to compare cards ",
  "main": "index.js",
  "repository": "git@github.com:steferr/steferr.github.io",
  "scripts": {
    "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js",
    "test": "mocha --compilers js:babel-core/register --require ./test/test_helper.js --recursive ./test",
    "test:watch": "npm run test -- --watch"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.2.1",
    "babel-loader": "^6.2.0",
    "babel-preset-env": "^1.6.0",
    "babel-preset-es2015": "^6.1.18",
    "babel-preset-react": "^6.1.18",
    "chai": "^3.5.0",
    "chai-jquery": "^2.0.0",
    "jquery": "^2.2.1",
    "jsdom": "^8.1.0",
    "mocha": "^2.4.5",
    "react-addons-test-utils": "^0.14.7",
    "redux-devtools": "^3.4.0",
    "webpack": "^1.12.9",
    "webpack-dev-server": "^1.14.0"
  },
  "dependencies": {
    "babel-preset-stage-1": "^6.1.18",
    "line-height": "^0.3.1",
    "lodash": "^3.10.1",
    "react": "^0.14.3",
    "react-dom": "^0.14.3",
    "react-motion": "^0.5.1",
    "react-redux": "4.3.0",
    "react-router": "^2.0.1",
    "react-scrollbar": "^0.5.1",
    "redux": "^3.0.4"
  }
}
