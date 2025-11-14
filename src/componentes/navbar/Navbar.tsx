import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"


function navbar() {

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        alert('O Usuário foi desconectado com sucesso!');
        navigate('/');
    }



    return (
        //DIV CONTAINER
        <div
            className="bg-indigo-900"
        >
            <div className="container grid grid-cols-2 text-white">

                <div className='justify-start flex flex-col py-1 px-4'>
                    <Link to="/home" className="text-1xl font bold" >Blog Pessoal</Link>
                </div>

                <div className='flex justify-end gap-3'>

                    <h1 className="text-1x1">Postagens</h1>
                    <h1 className="text-1x1">Temas</h1>
                    <h1 className="text-1x1">Cadastrar</h1>
                    <h1 className="text-1x1">Tema</h1>
                    <h1 className="text-1x1">Perfil</h1>
                    <h1 className="text-1x1">Sair</h1>
                    <Link to='' onClick={logout} className="hover:underline">Sair</Link>


                </div>

            </div>

        </div>



    )
}

export default navbar