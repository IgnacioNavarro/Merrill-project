import type { NextPage } from "next";
import TopBar from "../components/TopBar";
import React, { useEffect, useState } from 'react';
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";





const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const files = (form[6] as HTMLInputElement).files;



    if (!files || files.length === 0) {
        return alert("No files selected");
    }

    const file = files[0];
    console.log("Uploading file: ", file.name, file);


    // upload files
    /*
    const result = await (ipfs as IPFSHTTPClient).add(file);

    const uniquePaths = new Set([
        ...images.map((image) => image.path),
        result.path,
    ]);
    const uniqueImages = [...uniquePaths.values()]
        .map((path) => {
            return [
                ...images,
                {
                    cid: result.cid,
                    path: result.path,
                },
            ].find((image) => image.path === path);
        });

    // @ts-ignore
    setImages(uniqueImages);

    form.reset();
    */
};





//const [nombreEmpresa, setNombreEmpresa] = React.useState([]);
//const [nombreColeccion, setNombreColeccion] = React.useState([]);
//const [ventajaHolder, setventajaHolder] = React.useState([]);
//const [ventajaUso, setventajaUso] = React.useState([]);




const SmallCom: NextPage = () => {
    return (
        <div>
            <TopBar title="Tokenización Aqua" />
            <div className="bg-white pt-6">
                <form className="flex flex-col items-center justify-center w-full h-full" onSubmit={onSubmitHandler}>
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
                            const newValue = e.currentTarget.value;
                            console.log(newValue);
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
