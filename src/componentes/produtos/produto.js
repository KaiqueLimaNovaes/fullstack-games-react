import './produto.css'

export default function Produto(props){
    return (
       <div class={props.categoria}>
           <div class="cont">
                <div class="card">
                    <div class="imgBox">
                        <img src={require(`../images/produtos/${props.imagem}`).default}></img>
                    </div>
                    <br/>
                    <div class="contentBox">
                        <h2>{props.nome}</h2>
                        <div class="preco">
                            <h3>Preço</h3>
                            <p><strike>R${props.preco}</strike></p>
                        </div>
                        <div class="precoP">
                            <h3>Preço promocional</h3>
                            <p>R${props.precoP}</p>
                        </div>
                        <div class="row">
                            <button>Comprar</button>
                            <button>Ver mais</button>
                        </div>
                    </div>
                </div>
            </div>
       </div> 
    )
}