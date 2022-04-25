/**
 *
 *Projects
 *
 *
 */
type Project = { name: string; image: string; body: string; link: string };

const projectsData: Project[] = [
  {
    name: "Short Circuit",
    image: "/ShortCircuit.png",
    body: `An app to make electric vehicle
    users lifes easier.
    Made in 4 weeks in a fully agile
    team.
    A full stack app using Node.js on
    the backend and Next.js on the
    front end
    `,
    link: "https://short-circuit-nine-0byte.herokuapp.com/",
  },
  {
    name: "Journal-Me",
    image: "/journalMe.png",
    body: `An app to attach journal entries to
    individual days.
    Made in 3 days by a fully agile
    team of 4.
    Uses React on the frontend,
    Node.js on the backend and a
    PostgreSQL database.
    `,
    link: "https://naughty-lamport-6cf54f.netlify.app/",
  },
  {
    name: "Speedify",
    image: "/Speedify.png",
    body: `An app to test average typing
    speed
    A personal and early experiment
    in React
    Uses Reacts rendering to highlight
    correct and incorrect characters
`,
    link: "https://sparkling-kulfi-d2badf.netlify.app/",
  },
];

export default projectsData;
