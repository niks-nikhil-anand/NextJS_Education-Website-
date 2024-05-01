import About, { TextParallaxContentExample } from "@/component/About";
import ShuffleHero, { Carouselcomp } from "@/component/Carousel";
import Category from "@/component/Category";
import ClassList from "@/component/ClassList";
import Footer from "@/component/Footer";
import Form from "@/component/Form";
import Images from "@/component/Images";
import ButtonBaseDemo from "@/component/Images";
import  { Navbar } from "@/component/Navbar";
import Post from "@/component/Post";
import Section, { NewsLetterFour } from "@/component/Section";
import TopCta from "@/component/TopCta";



export default function Home() {
  return (
   
    <>
   
    <Navbar/>
    <ShuffleHero/>
    <TextParallaxContentExample/>
    <Category/>
    <ClassList/>
    <Post/>
    <Form/>
    <Images/>
    <NewsLetterFour/>
    
    <Footer/>
    
    </>
  );
}
