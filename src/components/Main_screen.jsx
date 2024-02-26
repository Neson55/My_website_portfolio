import Typewriter from 'typewriter-effect';

function Main_screen() {

    return (
        <div className="h-4/5 flex justify-center items-center ">
            <div className=" text-3xl text-center mx-auto" >
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Neson')
                            .pauseFor(2500)
                            .typeString('<br/>')
                            .pauseFor(2500)
                        .typeString("I'm professional Web Developer")
                            .pauseFor(2500)
                            .deleteChars(26)
                            .pauseFor(1000)
                            .typeString("Junior Web Developer") 
                            .start();
                    }}
                />
            
            </div>
        </div>
    );
}

export default Main_screen