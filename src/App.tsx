import styled from "styled-components";
import Header from "./components/Header";
import Post, { IPost } from "./components/Post";
import SideBar from "./components/SideBar";
import "./global.css";
import { v4 as uuidv4 } from "uuid";

export const posts: IPost[] = [
  {
    id: uuidv4(),
    author: {
      avatarUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/311897119_532903698682915_7770589364732851892_n.jpg?ccb=11-4&oh=01_AdSkseSUqGWY2k2_dQK8_Hre50pX0wPEvFESC5jpUZeeKw&oe=63D3FE75",
      name: "Kevin Juan",
      role: "Artist-Mc",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉Sensei.Mc/doctorcare" },
    ],
    publishedAt: new Date("2022-11-16 11:03:36"),
  },
  {
    id: uuidv4(),
    author: {
      avatarUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/316460826_198341039349283_7489118768461248870_n.jpg?ccb=11-4&oh=01_AdSPMtQz-0DD-zO6aQZFjYKyvsbhV5qFyUdCsCv6fqmoXg&oe=63D414D0",
      name: "Sabrina Maria",
      role: "Veterinary",
    },
    content: [
      { type: "paragraph", content: "Oii pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉Sabrina.Maria/doctorcare" },
    ],
    publishedAt: new Date("2022-11-16 11:03:36"),
  },
];

export const comments = [];

function App() {
  return (
    <div className="App">
      <Header />
      <SBody>
        <aside>
          <SideBar />
        </aside>
        <main>
          {posts.map((post) => (
            <Post {...post} key={post.id} />
          ))}
        </main>
      </SBody>
    </div>
  );
}

export default App;

const SBody = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;
  gap: 2rem;
  display: grid;
  grid-template-columns: 256px 1fr;
  align-items: flex-start;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
