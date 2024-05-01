import About from "@/component/About";
import { Carouselcomp } from "@/component/Carousel";
import Category from "@/component/Category";
import ClassList from "@/component/ClassList";
import Footer from "@/component/Footer";
import Form from "@/component/Form";
import { Navbar } from "@/component/Navbar";
import Post from "@/component/Post";
import Section from "@/component/Section";
import TopCta from "@/component/TopCta";



export default function Home() {
  return (
   
    <>
   
    <Navbar/>
    <Carouselcomp/>
    <About/>
    <Category/>
    <ClassList/>
    <Post/>
    <Form/>
    <Section/>
    
    <Footer/>
    
    </>
  );
}
