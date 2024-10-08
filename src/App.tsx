import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";


const posts = [
  {
    id : 1,
    author: {
      avatarUrl: "https://github.com/henriqueplech.png",
      name: "Henrique Plech",
      role: "Software Developer",
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'paragraph', content:'jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2024-05-03 20:00:00'),
  },
  {
    id : 2,
    author: {
      avatarUrl: "https://github.com/lucasbeelen.png",
      name: "Lucas Beelen",
      role: "Software Developer",
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'paragraph', content:'jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2024-05-03 20:00:00'),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
          })}
        </main>
      </div>
    </>
  );
}

export default App;
