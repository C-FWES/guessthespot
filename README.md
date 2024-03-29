# GuessTheSpot

A geography location-guessing game inspired by GeoGuessr

![image](https://github.com/C-FWES/guessthespot/assets/69126784/4a4cbc84-5bea-4ca6-8eb8-11fab469769e)

## About

This project is built in [React](React.dev) and [Google Maps API](https://developers.google.com/maps)

## Demo

Demo can be found [here](https://guessthespot.vercel.app/)

Please do not overload the demo with usage as it is running off my own API key and can incur costs if overused.&#x20;

## How to Play

You will be spawned into a Google Streetview at a random location in the world. Your aim is to look around for clues and click a location on the minimap on the left that you think is closest to the streetview, before the one minute timer expires. Points are awarded accordingly to your guess proximity.&#x20;

## Setup / Usage

Setup of this project will require you to have the latest version of [Node.js](nodejs.org "Node") and [npm](npm.org "npm") installed.

Firstly, clone the project by running `git clone https://github.com/C-FWES/guessthespot.git` on your machine. You should then be able to access the project directory from the development environment of your choice, e.g. VS Code.&#x20;

To install all the required dependencies of the project, run `npm install` from the project root.

To start the project in your local browser, run `npm start` from the project root.

This project depends on Google Maps API, so you will need to create a Google Maps API key, and you can do so by following the instructions [here](https://developers.google.com/maps/documentation/javascript/get-api-key). Create a `.env` file at the project root and set the environment variable `REACT_APP_MAP_API_KEY` to your API key.&#x20;
