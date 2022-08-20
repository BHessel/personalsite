import NetflixLogo from "../../images/netflixmmlogo.png";
import LASC from "../../images/LASC.png";
import Bowser from "../../images/bowser.png";
import Thinking from "../../images/thinking.jpeg";
import How from '../../images/how.png'
import Grid from '../../images/grid.jpeg'

export const WebAppData = [
  {
    id: 1,
    title: "Netflix Movie Matcher",
    img: { NetflixLogo },
    link: "https://netflixmoviematcher.herokuapp.com/" ,
  },
  {
    id: 2,
    title: "Lonely Alien Todo List",
    img: { LASC },
    link: "https://alientodolist.herokuapp.com/",
  },
];

export const BlogData = [
    {
        id: 1,
        title: "An Intro to Test-Driven Development and Jest",
        img: { Bowser },
        link: "https://benlearnstocode.medium.com/an-intro-test-driven-development-and-jest-b934704664bc",
    },
    {
        id: 2,
        title: "useContext for Global State",
        img: { Thinking },
        link: "https://benlearnstocode.medium.com/usecontext-for-global-state-9d45c40316af",
    },
    {
        id: 3,
        title: "React Virtual DOM 101",
        img: { How },
        link: "https://benlearnstocode.medium.com/react-virtual-dom-101-fa374e29f624",
    },
    {
        id: 4,
        title: "An Intro to CSS Grid",
        img: { Grid },
        link: "https://benlearnstocode.medium.com/an-intro-to-css-grid-595f19fa7f75",
    }
];

//this could be like Jest, TS, etc.
export const CurrentAreasOfStudy = [];
