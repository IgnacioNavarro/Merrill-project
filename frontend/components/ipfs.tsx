import React from "react";
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";
import axios from 'axios';


const ipfsJSON = async (data: any) => {

    const resJSON = await axios({
        method: "post",
        url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
        data: data,
        headers: {
            'pinata_api_key': "ed56f0fe6b1c53fb5d28",
            'pinata_secret_api_key': "46931b6fb0a79b116821f80c1e0c22c6d964bb0a9f4cda1cd195b25fb65c8e13",
        }
    })

}


    const sendFileToIPFS = async (fileImg:any) => {

        console.log("fileImg: ", fileImg);

        if (fileImg) {
            try {

                const formData = new FormData();
                formData.append("file", fileImg);

                console.log("formData: ", formData);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        'pinata_api_key': "ed56f0fe6b1c53fb5d28",
                        'pinata_secret_api_key': "46931b6fb0a79b116821f80c1e0c22c6d964bb0a9f4cda1cd195b25fb65c8e13",
                        "Content-Type": "multipart/form-data"
                    },
                });

                const ImgHash = `https://ipfs.io/ipfs/${resFile.data.IpfsHash}`;
                console.log(ImgHash);

            } catch (error) {
                console.log("Error sending File to IPFS: ")
                console.log(error)
            }
        }
    }

    export {ipfsJSON, sendFileToIPFS};