function Error() {
    return (
        <div>
            <h1>404</h1>
            <h2> Oups La page que vous demandez n'existe pas.</h2>
            <a
          className="Error-link"
          href="http://localhost:3005/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retourner vers la page d'accueil
        </a>
        </div>
        
    )
}

export default Error