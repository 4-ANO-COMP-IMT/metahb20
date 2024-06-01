import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GENRES } from '../shared/domain/enums/genresEnum';
// Rest of the code

class Cadastro extends React.Component{
    render(){
        return (
            <div className='container-sm mt-2 border border-dark rounded '>
                <div className='row justify-content-center border'>
                    <div className='col-6'>
                        <h1 className='display-5 text-center '>Cadastro</h1>
                    </div>
                </div>

                <div className='row justify-content-center '>
                    <div className='col-6'>
                        <form>
                            <div className='form-group'>
                                <label>Nome</label>
                                <input type='text' className='form-control' />
                            </div>

                            <div className='form-group'>
                                <label>Email</label>
                                <input type='email' className='form-control' />
                            </div>

                            <div className='form-group'>
                                <label>Gêneros Favoritos</label>
                                <select className='form-control'>
                                    <option value=''>Selecione...</option>
                                    {Object.values(GENRES).map(genre => (
                                        <option key={genre} value={genre}>{genre}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='form-group'>
                                <label>Livro Favorito</label>
                                <input type='text' className='form-control' />
                            </div>

                            <div className='form-group m-3'>
                                <button className='btn btn-primary mx-2'>Cadastrar</button>
                                <button className='btn btn-light ml-2'>Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cadastro;