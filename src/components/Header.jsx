const Header = ({projectObj,setProject}) => {
  return (
    <div className="flex flex-col pt-8 px-8">
            <div className="w-full flex justify-between">
                <div className="flex gap-x-5 items-start ">
                <button onClick={()=>{setProject(projectObj.none)}} className="max-w-14 md:max-w-20 rounded-2xl overflow-hidden border-2 -mt-4">
                    <img src="/myPic.jpeg" alt="" className="h-full" />
                </button>
                <button onClick={()=>{setProject(projectObj.experience)}} className="text-sm md:text-xl underline underline-offset-8 decoration-slate-50">Experience</button>
                </div>
                <div className="flex gap-x-6 justify-start items-start">
                    <button onClick={()=>{window.open("mailto:software.mha.ali@gmail.com")}} className="max-w-8 md:max-w-10"><img src="/connect/mail.png"></img></button>
                    <button onClick={()=>{window.open("https://www.linkedin.com/in/muhammad-hassan-ali-24216a18b/")}} className="max-w-8 md:max-w-10"><img src="/connect/linkedin.png"></img></button>
                </div>
                </div>
                </div>
  )
}

export default Header