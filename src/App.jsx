import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Exper from "./pages/Exper";

const projectObj = {
  none: {},
  experience: {},
  virtualDays: {
      name: "Virtual Days",
      desc: `Specialize in transforming the way businesses connect with audiences worldwide. Cutting-edge Virtual Event Platform empowers you to, attract top talent globally, engage candidates in immersive, interactive experience at scale and convert interest into actionable and measurable results `,
      linkName: ["Website","Event Site"],
      link: ["https://www.virtualdays.com/",'https://event.virtualdays.com/'],
  },
  empire: {
      name: "Empire",
      desc: "Empire is the product of Activ8Game.com. Won the silver medal in the International Serious Play conference 2022 United States in digital leadership training game. It is a team building facilitated game for corporate. Strategic gameplay with mission to conquer Empire by clever use of cards in the game. For all levels of management.",
      linkName: ["Website"],
      link: ["https://www.activ8games.com/"],
  },
  sofa: {
    name: "Sofa Configurator",
    desc:"I developed a React Three Fiber based sofa configurator allowing users to customize the sofa's material and color in real-time. Additionally, users can modify the material of the wooden stand, providing a fully interactive 3D experience for personalizing the furniture.",
    linkName: ["Netlify"],
    link:["https://software-mha-sofa-configurator.netlify.app/"]
  }
};

function ProjectButtons({setProject}) {
    return (
        <div className="flex flex-wrap lg:flex-nowrap lg:flex-col min-w-2 gap-y-4 gap-x-8 mr-5 justify-start">
            {/* <div className="text-3xl font-bold">Expericence</div>
            <div className="text-lg pt-1">Geniteam</div>
            <div className="text-lg pt-1 ">Geniteam</div> */}
            <div className="text-3xl font-bold">Projects</div>
            <button onClick={()=>{setProject(projectObj.virtualDays)}} className="w-max text-lg underline underline-offset-8 decoration-slate-50">
                Virutal Days
            </button>
            <button onClick={()=>{setProject(projectObj.empire)}} className="w-max text-lg underline underline-offset-8 decoration-slate-50">
                Empire
            </button>
            
            <button onClick={()=>{setProject(projectObj.sofa)}} className="w-max text-lg underline underline-offset-8 decoration-slate-50">
                Sofa Configurator (Personal)
            </button>
            {/* <button onClick={()=>{setProject(projectObj.virtualDays)}} className="w-max text-lg underline underline-offset-8 decoration-slate-50">
                123
            </button> */}
        </div>
    );
}

function App() {
    const [ project, setProject ] = useState(projectObj.none);
    return (
        <div className="h-screen w-full flex justify-center items-center absolute">
            <div className="h-full lg:h-3/4 w-full lg:w-4/5 lg:max-w-5xl lg:px-8 lg:rounded-[2rem] flex flex-col  lg:border-white lg:border-2">
                <Header projectObj={projectObj} setProject={setProject}/>
                {project == projectObj.none && (
                    <Home>
                        <ProjectButtons setProject={setProject} />
                    </Home>
                )}
                {project == projectObj.experience && (
                    <Exper>
                        <ProjectButtons setProject={setProject} />
                    </Exper>
                )}
                {project != projectObj.none && project != projectObj.experience && (
                    <Project project={project}>
                        <ProjectButtons setProject={setProject} />
                    </Project>
                )}
                <Footer />
            </div>
        </div>
    );
}

export default App;
