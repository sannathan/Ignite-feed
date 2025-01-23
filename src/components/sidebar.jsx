import styles from "./sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=400&auto=format&fit=crop&q=40&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"
      />
      <div className={styles.profile}>
        <strong>Nathan Barbosa</strong>
        <span>Web Developer</span>
        <footer>
          <a href="#">Editar seu perfil</a>
        </footer>
      </div>
    </aside>
  );
}
