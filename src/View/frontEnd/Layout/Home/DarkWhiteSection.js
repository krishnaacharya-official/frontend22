export default function DarkWhiteSection() {
    return (
        <>
            <div className="row-col dark-white">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <div className="p-a-lg text-center">
                        <h3 className="display-4 m-y-lg">Light, Grey, Dark, Black themes</h3>
                        <p className="text-muted text-md m-b-lg">Config any blocks with any colors</p>
                        <a href="home.html" className="btn circle btn-outline b-black m-b-lg p-x-md">Try Settings</a>
                    </div>
                </div>
                <div className="col-md-3"/>
            </div>

            <div className="black cover" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url('images/b10.jpg')" }}>
                <div className="row-col">
                    <div className="col-md-4">
                        <div className="p-a-lg text-center">
                            <h4 className="m-y-lg">One Css framework, Unlimited options &amp; variables</h4>
                            <p className="text-muted text-md m-b-lg">Colors, layouts, components and widgets. we pre-build them for you.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-a-lg text-center">
                            <h4 className="m-y-lg">Two layouts, Horizontal and side navigation</h4>
                            <p className="text-muted text-md m-b-lg">With the flexiable layout options, you can build responsive layouts.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-a-lg text-center">
                            <h4 className="m-y-lg">Three templates, Landing, App, Site templates</h4>
                            <p className="text-muted text-md m-b-lg">Choose the suitable one for your needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}