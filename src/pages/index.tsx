import { Navbar } from "@/components/Navbar";
import { About } from "@/modules/About";
import { Contact } from "@/modules/Contact";
import { Footer } from "@/modules/Footer";
import { Form } from "@/modules/Form";
import { Header } from "@/modules/Header";
import { Projects } from "@/modules/Projects";

function Main() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Form />
      <Footer />
    </>
  );
}

export default Main;
