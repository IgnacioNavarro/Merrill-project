import type { NextPage } from "next";
import TopBar from "../components/TopBar";
import { useEffect, useState } from 'react';
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";
import { sendFileToIPFS, ipfsJSON } from "../components/ipfs";
import ButtonAction from "../components/ButtonAction";





const SmallCom: NextPage = () => {
    const [nombreEmpresa, setNombreEmpresa] = useState([]);
    const [nombreColeccion, setNombreColeccion] = useState([]);
    const [ventajaHolder, setventajaHolder] = useState([]);
    const [ventajaUso, setventajaUso] = useState([]);


    const onChangeInput = async (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        //envio de archivo
        const fileInput = event.target as HTMLInputElement;
        const files = fileInput.files;

        if (!files || files.length === 0) {
            return alert("No files selected");
        }

        const file = files[0];
        console.log("Uploading file: ", file.name, file);
        sendFileToIPFS(file);

        //obtener hash
        
    };


    const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        //envio de archivo
        const fileInput = event.target as HTMLInputElement;
        const files = fileInput.files;

        if (!files || files.length === 0) {
            return alert("No files selected");
        }

        const file = files[0];
        console.log("Uploading file: ", file.name, file);
        sendFileToIPFS(file);

    };



    return (
        <div>
            <TopBar title="Tokenización Aqua" />
            <div className="bg-white pt-6">
                <form className="flex flex-col items-center justify-center w-full h-full" onSubmit={() => { onSubmitForm }}>
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
                            <option hidden selected>Selecciona una opción</option>
                            <option value="Transferible">Transferible</option>
                            <option value="NoTransferible">No Transferible</option>
                        </select>
                    </div>
                    <div className="pb-6">
                        <p className="select-none w-full transition-colors relative drop-shadow-md py-2 text-gray-600 font-extrabold flex items-center justify-start">Número de coleccionables a crear:</p>
                        <input type={"number"} className="w-80 h-10 bg-gray-100 border-b-[1px] border-gray-600 p-2 outline-none" placeholder={"Cantidad de tokens"} required min="0" />
                    </div>
                    <div className="pl-9 pb-[30px]">
                        <input type='file' name="file" className="" onChange={(e: React.FormEvent<HTMLInputElement>) => {
                            onChangeInput(e);
                        }} />
                    </div>
                    <ButtonAction>
                        Crear Colección
                    </ButtonAction>
                    <br />
                    <br />
                </form>
            </div >
        </div >

    );
};

export default SmallCom;
