import About, { TextParallaxContentExample } from "@/component/About";
import ShuffleHero, { Carouselcomp } from "@/component/Carousel";
import Category from "@/component/Category";
import ClassList from "@/component/ClassList";
import Form from "@/component/Form";
import Images from "@/component/Images";
import Post from "@/component/Post";
import  { NewsLetterFour } from "@/component/Section";




export default function Home() {
  return (
   
    <>
   
    
    <ShuffleHero/>
    <TextParallaxContentExample/>
    <Category/>
    <ClassList/>
    <Post/>
    <Form/>
    <Images/>
    <NewsLetterFour/> 
  
    
    </>
  );
}
