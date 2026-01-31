import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Hello World 🌱</h1>
        <p style={styles.subtitle}>
          Welcome! This is my first React application, built as an introduction
          to modern frontend development using React and Docker.
        </p>
        <p style={styles.text}>
          Kalel Roscoe 01/30/26
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    backgroundColor: "#22c55e", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "#f0fdf4",
    color: "#000000",
    maxWidth: "600px",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.25rem",
    marginBottom: "15px",
    fontWeight: "500",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
  },
};

export default App;

