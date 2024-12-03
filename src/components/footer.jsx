function Footer({ zoom, setZoom} ) {
    return (  


        
              

        <nav className="navbar fixed-bottom navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav text-end">
                    <li className="nav-item">
                    <button type="button" className="btn btn-sucess" onClick={ ()=> setZoom(Number(zoom) - 0.1) }><i className="fa-solid fa-magnifying-glass-minus"></i></button>
                    </li>
                    <li className="nav-item">
                    <button type="button" className="btn btn-sucess" onClick={ ()=> setZoom(Number(zoom) + 0.1) }><i className="fa-solid fa-magnifying-glass-plus"></i></button>
                    </li>
                    
                </ul>
            </div>
        </div>
        </nav>


    );
}

export default Footer;