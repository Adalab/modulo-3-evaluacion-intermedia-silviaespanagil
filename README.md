# React App: Make your Pokedex
## _Gotta catch 'em all!_
¡Hola mundo!

As a way to practice React I've developed this web application where you can look some information about some Pokemons and add them to your own Pokedex.✨

![image](https://user-images.githubusercontent.com/81619759/125288644-a7e10c80-e31e-11eb-9e20-8900383261d8.png)


## Initial Requirements 📋

- Create a react app
- The app must render Pokemon cards with information from a Json
- There must be an App, a PokeList and a Pokemon component

## Extra features 🔥
- Add some styles
- Create a  favorite  area

## Built with 🔨
- Visual Code Studio: as code editor
- SASS
- React

## Development ⌨️

I began writting down my PokeList component which feeds  itself from the JSON prop that is hosted in the App component. 

At PokeList I mapped the array so I could take the array objects and use them in the Pokemon.js component where I draw the cards using again props. You may notice that the Pokemon Type is an array inside my object so I had to map this also so I could render this information into the card.

For the extra features I added a little heart so the user can choose it favorite Pokemon. As the action happen a new array is created that renders a new area that I called "Pokedex". For the styles just installed SASS and added some cute styles inspired in a Pokemon color palette.


## Want to clone my repository? 🐑🐑

Go for it! And if you make something pretty, please show me

## Do you have any idea? ✏️

I'm an student and as I stated before am learning React and Javascript right now, so, if  you have any idea that I could develope please tell me so and I will try to.

## License

MIT
