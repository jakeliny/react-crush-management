import React, {
    Component
} from 'react';
//react vai fazer o arquivo ser interpretado como react

import request from '../service/request';

export default class NameListCrush extends Component {
    //usando clases, precisa de constructor

    constructor(props) {
        super(props);
        this.state = {
            crushs: []
        }
    }

    componentDidMount() {
        request.listar().then(resposta => {
            //sempre que precisamos popular um componente do construtor usamos setState({})
            this.setState({
                crushs: resposta.data.result
            });
        });
    }

    componentDidUpdate(setState, setProps){
        // if(setProps.crushs === setState.crushs){}
        console.log(setProps);
        console.log(setState);
    }

    deletar = crush => {
        request.deletar(crush).then(resposta => {});
    }

    //como estamos usando classe precisamos do render 
    render() {
        //desestruturação, o crush agr tem o this.state
        const {crushs} = this.state;
        console.log(crushs);
        return (


        <div className="row">
            {crushs && crushs.map((item, index) => {
                return (
                <div key={index} className="col-sm-6 box">
                    <img src={ item.foto } alt="" />
                    <h2>{ item.nome }</h2>
                    <p>Apelido:
                        <b>{ item.apelido }</b> || Whatsapp:
                        <b>{ item.whatsapp}</b>
                    </p>
                    <p>Idade:
                        <b>{ item.idade }</b> || Altura:
                        <b>{ item.altura }</b> || Nota:
                        <b>{ item.nota }</b> || Atitude:
                        <b>{ item.notaatitude }</b> || Responsabilidade:
                        <b>{ item.notaresponsabilidade }</b>
                    </p>
                    <p>Local:
                        <b>{ item.local }</b> || Como conheceu:
                        <b>{ item.comoconheceu }</b>
                    </p>
                    <p>Observações:
                        <b>{ item.observacoes }</b>
                    </p>

                    <div className="buttons mx-auto">
                        <button onClick="editar(crush)" className="btn btn-info">
                        <i className="fas fa-heartbeat"></i>
                        </button>
                        
                        <button onClick="deletar(crush)" className="btn btn-danger">
                        <i className="fas fa-heart-broken"></i>
                        </button>
                    </div>
                </div>
                )
            })}
      </div>

        )
    }
}