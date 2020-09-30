import SpellBookImage from '../assets/spell-book.png';
import TantiveImage from '../assets/tantive.png';
import DinnerTonightImage from '../assets/dinner-tonight.png';

export const allProjects = [
    {
       name:'Spell Book', 
       image: SpellBookImage, 
       description:'Spell Book is an app where the user (witch/wizard) is sorted into a Hogwarts house. Once in a house, the user is able to search through spells, and whichever spell they fancy, they can favourite to be able to use later.', 
       stack:['React', 'Redux', 'React-Router', 'Jest & Enzyme', 'HTML', 'CSS'],
       link: 'https://spell-book.herokuapp.com/',
    },
    {
        name:'Tantive', 
        image: TantiveImage, 
        description:'Tantive is a Star Wars fan site, where a user can view and favourite characters from each Star Wars movie that exists. This was a week long group project intended for us to get a deeper understanding of how React works, learn how to use React-Router, and become better at testing and fetching with React.', 
        stack:['React', 'Redux', 'React-Router', 'Jest & Enzyme', 'HTML', 'CSS'],
        link: 'https://tantive-star-wars.herokuapp.com/'
    },
    {
        name:'Dinner Tonight', 
        image: DinnerTonightImage, 
        description: 'Dinner Tonight is a simple app that allows user to find a recipe by searching for an ingredient or ingredients that they would like to have for dinner.', 
        stack:['React', 'Jest & Enzyme', 'HTML', 'CSS'],
        link: 'https://github.com/Asilo5/dinner-tonight'
    },
]