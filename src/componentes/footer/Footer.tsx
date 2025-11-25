import { FacebookLogoIcon, GithubLogoIcon, Globe, InstagramLogoIcon } from '@phosphor-icons/react'
import { LinkedinLogoIcon } from '@phosphor-icons/react/dist/ssr/LinkedinLogo'
import React, { useContext, type ReactNode } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function footer() {
    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext);

    let component: ReactNode
    if (usuario.token !== "") {
        component = (
            <div
                className="bg-indigo-900"
            >
                <div className="container text-white">



                    <div className="flex flex-col justify-center items-center gap-0.5 py-4">

                        <h1 className="text-3x3 font-bold">Blog Pessoal | Rafaela Lemes | 2025</h1>
                        <h2 className="text-1x1">Acesse minhas redes sociais</h2>
                    </div>

                    <div className="flex justify-center gap-1 py-4">
                        < a href="https://www.linkedin.com/m/in/rafaela-lemes-a310861b6/" target="brank">
                            <LinkedinLogoIcon size={34} weight='bold' />
                        </a>

                        <a href="https://www.instagram.com/raafalemes/" target="blank">
                            <InstagramLogoIcon size={34} weight='bold' />
                        </a>

                        <a href="https://github.com/LemesdeMorais" target="blank">
                            <GithubLogoIcon size={34} weight='bold' />
                        </a>

                        <a href="https://lemesdemorais.github.io/Front-end-Rafaela/" target="blank">
                            <Globe size={34} weight='bold' />
                        </a>





                    </div>




                </div>

            </div>


        )
    }


    return (
        <>
            {component}
        </>


    )
}

export default footer