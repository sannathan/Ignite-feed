import { Header } from "./components/header";
import { Post } from "./components/post";
import { Sidebar } from "./components/sidebar";
import "./global.css";

import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Nathan Barbosa"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores dolorem nulla tempora dolor ex suscipit voluptatum. Vel, quibusdam? Voluptatem itaque in eum cum dignissimos voluptatibus amet vero dolorum atque."
          />
          <Post author="Sarah Maria" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
