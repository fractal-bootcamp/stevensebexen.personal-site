export interface Project {
  id: string
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  iconAlt: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 'components',
    name: 'Storybook',
    shortDescription: 'React components made by an actual dragon.',
    longDescription: 'This site contains a list of components that I have implemented - the design specs on many were given to me, but the code and finer points of styling are all my own.',
    icon: '',
    iconAlt: 'A book',
    url: 'https://admirable-cat-412cdf.netlify.app/'
  },
  {
    id: 'originalgame',
    name: 'Tic Tac Toe',
    shortDescription: 'I\'m very creative.',
    longDescription: 'Tic Tac Toe is an incredibly original game concept wherein players have to line up 3 pieces of their pieces in a row to win. A sleek, minimalist interface attempts to highlight the elegant simplicity of the game, without dismissing its technical and strategic depth.',
    icon: '',
    iconAlt: 'A 3x3 grid',
    url: 'https://sparkly-taiyaki-256b84.netlify.app/'
  }
];

export default projects;
