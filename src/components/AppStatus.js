import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

export function AppError({children}){
const {error, setError} = useContext(AppContext);


    return <>
        {error ? 
        <div className="error">
            {error} <button onClick={() => setError(null)}>Cerrar</button>
        </div> : null}
    </>
}

export function AppWaiting(){
    const {waiting, setWaiting} = useContext(AppContext);
    return <> {waiting ? <div className="waiting">Cargando.....</div> : null} </>
}