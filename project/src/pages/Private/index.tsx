import { useContext } from "react";
import { AuthContext } from '../../contexts/Audh/AuthContext'

export const Private = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <h2>Página Privada</h2>

            Olá {auth.user?.name}, tudo bem?
        </div>
    );
}