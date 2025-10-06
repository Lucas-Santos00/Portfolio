import Menu from "@/components/menu/Menu";
import Projects from "@/components/projects/Projects";
import Header from "@/components/header/Header";
import GetInTouch from "@/components/get-in-touch/GetInTouch";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (<>
    <Menu />
    <Header/>
    <main>
      <Projects />
      <GetInTouch />
    </main>
    <Footer />
  </>);
}
