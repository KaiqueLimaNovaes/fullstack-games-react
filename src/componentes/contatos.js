import email from '../componentes/images/email.png';
import whats from '../componentes/images/w.png';

function Contatos(){
    return (
        <div class="container-fluid">
            <h2>Contato</h2>
            <hr />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src={email} alt="email" width="50px" />
                        <p class="lead">contato@fullstackgames.com</p>
                    </div>
                    <div class="col">
                        <img src={whats} alt="whatsapp" width="50px" />
                        <p class="lead">11 986634923</p>
                    </div>
                </div>
                <form method="post" action="">
                    <div class="form-group">
                        <h4>Nome:</h4>
                        <input type="text" name="nome" placeholder="Digite seu nome ..." class="form-control" />
                    </div>
                    <div class="form-group">
                        <h4>Mensagem:</h4>
                        <textarea name="msg" placeholder="Digite sua mensagem ..." class="form-control"></textarea>
                    </div>
                    <br /><br />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    )
}

export default Contatos;