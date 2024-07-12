import logo from '../assets/images/logo5.svg';

function HelloWorld(){
    return (
        <nav className="navbar navbar-expand-lg p-2">
            <div className="container-fluid mx-12">

                <img src={logo} alt="" width="130"></img>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse flex-row-reverse" id="navbarToggleExternalContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Página Inicial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Saiba Mais</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link with-pipe" href="#">Contato</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link btnRegister">Registre-se agora -></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HelloWorld