import type { NextPage } from "next";
import { Buffer } from 'buffer';
import TopBar from "../components/TopBar";









const SmallCom: NextPage = () => {
    return (
        <div>
            <TopBar title="Tokenización Aqua"/>
            <div className="bg-white">
            <form className="flex flex-col items-center justify-center w-full h-full">
                <p>Nombre de la empresa:</p>
                <input type={"text"} className="w-80 h-10 border-2 border-gray-300 rounded-md p-2" placeholder={"Nombre de la empresa"} />
                <p>Número de la empresa:</p>
                <input type={"text"} className="w-80 h-10 border-2 border-gray-300 rounded-md p-2" placeholder={"Número de la empresa"} />
                <p>Nombre de la colección:</p>
                <input type={"text"} className="w-80 h-10 border-2 border-gray-300 rounded-md p-2" placeholder={"Nombre de la colección"} />
                <p>Ventajas por tenerlo:</p>
                <input type={"text"} className="w-80 h-10 border-2 border-gray-300 rounded-md p-2" placeholder={"Ventaja de Holder"} />
                <p>Ventajas por canjearlo:</p>
                <input type={"text"} className="w-80 h-10 border-2 border-gray-300 rounded-md p-2" placeholder={"Ventaja de uso"} />

                <p>Tipo de beneficio:</p>
                <select name="Usos">
                    <option value="Transferible">Transferible</option>
                    <option value="NoTransferible" selected>No Transferible</option>
                </select>
                <p>Número de coleccionables a crear:</p>
                <input type={"number"} className="w-80 h-10 border-2 border-gray-300 rounded-md p-2" placeholder={"Cantidad de tokens"} />
                <input className="profile-image-selection" type='file' />

                <input type={"submit"} className="bg-core-light-blue active:bg-medium-blue transition-colors text-white font-medium py-3 px-6 flex items-center" value={"Crear Colección"} />

            </form>
            </div>
        </div>

    );
};

export default SmallCom;
