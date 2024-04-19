import { Card } from "./Card";
import Social_network from '/project_images/social_network.png'
import Post_js from '/project_images/Post_Js.png'
import Bs from '/project_images/Bs.png'
import Cat from '/project_images/Cat (1).gif'

function Projects_screen () {

        return(
            <div className="h-4/5 flex justify-center items-center sm:flex-col sm:h-full sm:gap-5 tall:items-start m:items-start s:flex-col s:h-full s:gap-5 ">
               <Card 
               title="Social network" 
               text="In this project i am used: Express, Docker, Prisma, React, Redux toolkit, react-router-dom, nextui." 
               img = {Social_network} 
               alt="social_network"
               hash='L1T9L#?b%M~q0cxuj@$+IotRRPRP'
               />
               <Card 
               title="Post Js" 
               text="In this project i am used: HTML, CSS, React, axios, react-router-dom, react-transition-group." 
               img = {Post_js} 
               alt="Post Js"
               hash='LCR{.6V@~q-;%Mj[WBWB?HbHM{ae'
               />
               <Card 
               title="Botstrap 5" 
               text="In this project i am used: HTML, CSS, React, axios, react-router-dom, react-transition-group." 
               img = {Bs} 
               alt="Botstrap 5"
               hash='LH8zQrSn-tE1%MJ5%2R%nNI-xZov'
               />
               <Card 
               title="Coming soon"  
               img = {Cat} 
               alt="cat"
               hash='LUO;e^~B?HIp~B9tof$%kW$*M{R*'
               />
            </div>
        );
}
// src='./project_images/Post_Js.png'
export default Projects_screen