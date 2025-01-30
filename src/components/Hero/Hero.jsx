import "./_hero.scss";
import video_first from "/video/hero_0.webm";
import video_second from "/video/hero_1.webm";
import video_third from "/video/hero_2.webm";
import video_fourth from "/video/hero_3.webm";
import { useLocation } from "react-router-dom";


const contents = [
    {
        path: ">_Home",
        title: "Ephemeral",
        subtitle: "3D Assets Store",
        video: video_third
    },
    {
        path: ">_Plugins",
        title: "Ephemeral",
        subtitle: "3D Assets Store",
        video: video_third
    }
];

const CheckContent = (path) => 
{
    let current;

    if (path === "/")
    {
        return current = contents[0];
    }

    if (path.includes("/category/plugins"))
    {
        return current = contents[1];
    }
    

    return current = contents[0];
}


const Hero = () => 
{
    const location = useLocation();
    const currentPath = location.pathname;
    let currentContent = CheckContent(currentPath);

    console.log(location.pathname);

    return (
        <div className="container hero">

            <div className="hero__video-container">
                <video className="hero__video" muted autoPlay loop disablePictureInPicture playsInline preload="auto">
                    <source src={currentContent.video} type="video/webm"/> 
                </video>
            </div>

            <div className="hero__content">
                <div className="hero__current">
                    <p className="hero__text hero__text--current hero__text--list">
                        {
                            currentContent.path
                        }
                    </p>
                </div>

                <p className="hero__text hero__text--title"> 
                    {
                        currentContent.title
                    }
                </p>

                <strong className="hero__text hero__text--subheader">
                    {
                        currentContent.subtitle
                    }
                </strong>

            </div>
        </div>
    );
};

export default Hero;

{/* <div class="hero">


<div class="hero--content">

    <div class="hero--current">
        <em data-value=">_About./" class="hero--current-text hero--current-game">
            >_About./
        </em>
    </div>
    <h1 class="hero--content-header"> 
        NO ONE ELSE HERE
        <br>LET'S WORK TOGETHER!
    </h1>
    <strong class="hero--content-subheader">
        We could make it...
    </strong>

</div>
            
</div> */}