import React from 'react';
import './footer.css';
import Pagamentos from './images/pagamentos.png';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <footer id="rodape">
                <hr></hr>
                <div class="container">
                    <h4>Formas de pagamento</h4>
                    <p><img src={Pagamentos} alt="Formas de pagamento" class="img-fluid" /></p>
                    <p class="lead">&copy; Recode pro</p>
                </div>
            </footer>
        );
    }
}

export default Footer;