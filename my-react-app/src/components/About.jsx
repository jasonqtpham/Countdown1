import "../styles/About.css"

const About = () => {
    return (
        <>
            <div > 
                <h3>Home Town: Norfolk, Virginia</h3>
                <h3>School: University of Virginia</h3>
                <p>3rd year Engineering School</p>
            </div >
            <ul className = "bullet" style={{ float: "left" }}>
                <h3 style={{ color: "blue" }}>Hobbies:</h3>
                <li>Tennis</li>
                
                <li>Anime</li>
                
                <li>Games</li>
                <ul>
                    <li>Apex Legends</li>
                    <li><a href="https://www.op.gg/summoners/na/ZeRo8642-NA1" className="" target="_blank">League of Legends</a></li>

                </ul> 
            </ul>
            <div className="bullet" style={{ float: "right" }}>
                <h3 style={{ color: "blue" }}>Favorite Foods</h3>
                <ul>
                    <li>Sushi</li>
                    <li>Pasta</li>
                    <li>Any noodle dish</li>
                </ul>
            </div>    
            <div style={{ textAlign: "center"}} >
                <h3>Pets: Mary (Age 2)</h3>
                    <img src="https://cdn.discordapp.com/attachments/745705550427455530/1223667435262050456/72652248655__FA4FDB98-D86A-432F-8439-DD79F2013119.jpg?ex=661ab01b&is=66083b1b&hm=b1ddfbe26580c287c59396f1bcdb428528fdc06804d01a8d4ec98453aa9fc328&" 
                    width="300" />
            </div>
        </>
    );
};

export default About;