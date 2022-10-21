function About(){
    return (
        <div className="container d-flex flex-column text-center justify-content-center vh-100 text-align-center">
            <h1 className="p-4">About</h1>
            <div className="d-flex justify-content-center p-4">
                <h3 className="col-4 align-self-center text-start">Boarding House Information System</h3>
                <p className="col-8 text-start"> This is a boarding house information system which helps to boarding house seekers to find boarding houses easily. This system mainly target university students who are in Kilinochchi university premises. For boarding house seekers can register in the system and browse boardings and for initial release of the system doesn't require a registration everyone can see boardings without any registration. There are boarding owners and they can post there boarding in the system and then boarding seekers can see boardings which are posted by owners. Only boarding owners can delete or edit the boardings they posted. We hope to add more features and more functionalities to the system in later releases. </p>
            </div>
        </div>
    );
}

export default About;