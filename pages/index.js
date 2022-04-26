import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import DownloadCv from "../components/downloadCv/DownloadCv";
import Intro from "../components/intro/Intro";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <DownloadCv />
      <Contact />
    </div>
  );
}
