import type { NextPage } from "next";
import TopBar from "../components/TopBar";
import { useEffect, useState } from 'react';
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";
import { sendFileToIPFS, ipfsJSON } from "../components/ipfs";






const SmallCom: NextPage = () => {
    const [buffer, setBuffer] = useState("");
    //const [nombreEmpresa, setNombreEmpresa] = React.useState([]);
    //const [nombreColeccion, setNombreColeccion] = React.useState([]);
    //const [ventajaHolder, setventajaHolder] = React.useState([]);
    //const [ventajaUso, setventajaUso] = React.useState([]);


    const onChangeInput = async (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        const fileInput = event.target as HTMLInputElement;
        const files = fileInput.files;

        if (!files || files.length === 0) {
            return alert("No files selected");
        }

        const file = files[0];
        console.log("Uploading file: ", file.name, file);

        sendFileToIPFS(file);



        /*
        const result = await (ipfs).add(file);
        
        
        console.log("Uploaded file:", result.path, result.cid.toString());
        
        */
    };





    return (
        <div>
            <TopBar title="Tokenización Aqua" />
            <div className="bg-white pt-6">
                <form className="flex flex-col items-center justify-center w-full h-full" onSubmit={() => { }}>
                    <div className="pb-6">
                        <p className="select-none w-full transition-colors relative drop-shadow-md py-2 text-gray-600 font-extrabold flex items-center justify-start">Nombre de la empresa:</p>
                        <input type={"text"} className="w-80 h-10 bg-gray-100 border-b-[1px] border-gray-600 p-2 outline-none" placeholder={"Nombre de la empresa"} required />
                    </div>
                    <div className="pb-6">
                        <p className="select-none w-full transition-colors relative drop-shadow-md py-2 text-gray-600 font-extrabold flex items-center justify-start">Nombre de la colección:</p>
                        <input type={"text"} className="w-80 h-10 bg-gray-100 border-b-[1px] border-gray-600 p-2 outline-none" placeholder={"Nombre de la colección"} required />
                    </div>
                    <div className="pb-6">
                        <p className="select-none w-full transition-colors relative drop-shadow-md py-2 text-gray-600 font-extrabold flex items-center justify-start">Ventaja de Holder:</p>
                        <input type={"text"} className="w-80 h-10 bg-gray-100 border-b-[1px] border-gray-600 p-2 outline-none" placeholder={"Ventaja de Holder"} required />
                    </div>
                    <div className="pb-6">
                        <p className="select-none w-full transition-colors relative drop-shadow-md py-2 text-gray-600 font-extrabold flex items-center justify-start">Ventaja de uso:</p>
                        <input type={"text"} className="w-80 h-10 bg-gray-100 border-b-[1px] border-gray-600 p-2 outline-none" placeholder={"Ventaja de uso"} required />
                    </div>
                    <div className="pb-6">
                        <p className="select-none w-full transition-colors relative drop-shadow-md py-2 text-gray-600 font-extrabold flex items-center justify-start">Tipo de beneficio:</p>
                        <select name="Usos" className="w-80 h-10 bg-gray-100 border-b-[1px] border-gray-600 p-2 outline-none">
                            <option value="Transferible" selected>Transferible</option>
                            <option value="NoTransferible">No Transferible</option>
                        </select>
                    </div>
                    <div className="pb-6">
                        <p className="select-none w-full transition-colors relative drop-shadow-md py-2 text-gray-600 font-extrabold flex items-center justify-start">Número de coleccionables a crear:</p>
                        <input type={"number"} className="w-80 h-10 bg-gray-100 border-b-[1px] border-gray-600 p-2 outline-none" placeholder={"Cantidad de tokens"} required />
                    </div>
                    <div className="pb-[30px]">
                        <input type='file' name="file" className="" onChange={(e: React.FormEvent<HTMLInputElement>) => {
                            onChangeInput(e);
                        }} />
                    </div>

                    <input type={"submit"} className="bg-core-light-blue active:bg-medium-blue transition-colors text-white font-medium py-3 px-6 flex items-center" value={"Crear Colección"} />
                    <br />
                    <br />
                </form>
            </div>
        </div>

    );
};

export default SmallCom;
