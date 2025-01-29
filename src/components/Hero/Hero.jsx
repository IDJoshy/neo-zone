import "./_hero.scss";

const Hero = ({ children }) => {
    return (
        <div className="container hero">
            <div className="hero__container">
                <h1 className="hero__title"></h1>
                <p className="hero__subtitle"></p>
            </div>
        </div>
    );
};

export default Hero;