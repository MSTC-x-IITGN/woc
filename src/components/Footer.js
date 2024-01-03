import { NavLink } from "react-router-dom"

const sitemap = [
    {name:"Home", href:"/"},
    {name:"Categories", href:"/categories"},
    // {name:"Projects", href:"projects"},
    // {name:"Dreamspark", href:"/dreamspark"},
    {name:"Timeline", href:"/timeline"},
    // {name:"Register", href:"/register"}
] 


export default function Footer() {
    return (     
    <footer className="mt-20 py-5 backdrop-blur-xl shadow px-5 bg-black/[.5] text-gray-100 sticky top-[100vh]">
        <div className="sm:grid sm:grid-cols-3 mb-6 gap-6">
            <div className="flex justify-center sm:justify-end">
                <ul className="block my-5 sm:my-4 text-center sm:text-start text-md">
                    <li className="mb-1 sm:mb-2"><b>Site Map</b></li>
                    {sitemap.map((item) => (
                        <li className="mb-0 sm:mb-1">
                            <NavLink
                            to={item.href}
                            className={
                                "hover:text-cyan-500"
                            }>
                            {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <a href="" className="flex items-center my-1 sm:my-0 justify-center mx-5">
                <img src={process.env.PUBLIC_URL  + "/images/c3.png"} className="w-100 max-h-52" alt="DA-IICT Logo" />
            </a>
            
            <div className="flex justify-center sm:justify-start">
                <div className="block my-5 sm:my-4 text-center sm:text-start text-md">
                    {/* <div className="mb-1"><b>Connect With Us</b></div>
                    <div className="flex shrink items-center justify-center sm:justify-start my-3 gap-4 mb-6">
                        <a href="https://github.com/MSTC-DA-IICT"><img className="h-7" src={process.env.PUBLIC_URL + "/images/github.png"} alt="Github"/></a>
                        <a href="https://www.linkedin.com/company/microsoft-student-technical-club-da-iict/mycompany/?viewAsMember=true"><img className="h-7" src={process.env.PUBLIC_URL + "/images/linkedin.png"} alt="LinkedIn"/></a>
                        <a href="https://www.youtube.com/@mstcda-iict9181"><img className="h-6" src={process.env.PUBLIC_URL + "/images/yt.png"} alt="Youtube"/></a>
                        <a href="https://www.instagram.com/mstc_daiict/"><img className="h-7" src={process.env.PUBLIC_URL + "/images/insta.png"} alt="Instagram"/></a>
                    </div> */}
                    <div className="mb-1"><b>Email</b></div>
                        <a href="mailto: microsoftclub@daiict.ac.in" className="hover:text-cyan-400">
                            microsoftclub@daiict.ac.in
                        </a>
                        <br></br>
                        <a href="mailto: technical.secretary@iitgn.ac.in" className="hover:text-cyan-400">
                            technical.secretary@iitgn.ac.in
                        </a>
                </div>
            </div>
            
        </div>
        <hr className="mx-auto border-gray-500" />
        <div className="mt-4 block text-sm text-gray-400 text-center text-gray-300">  
            © Winter of code, 2024. All Rights Reserved.
        </div>
    </footer>
)}

