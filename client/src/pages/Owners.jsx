import Owner from "../components/Owner";

function Owners(){
    return (
        <>
        <h2 className="container text-center pt-4 pb-2">Owners</h2>
        <div className="container d-flex flex-wrap">

            <Owner name="Jenna" img="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg"/>
            <Owner name="Olivia" img="https://images.pexels.com/photos/1830770/pexels-photo-1830770.jpeg"/>
            <Owner name="Caroline" img="https://images.pexels.com/photos/785435/pexels-photo-785435.jpeg"/>
            <Owner name="Amy" img="https://images.pexels.com/photos/1454187/pexels-photo-1454187.jpeg"/>
        </div>
        </>
    );
}

export default Owners;