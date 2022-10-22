// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';


type Data = {
  name: string
}

/**
 * Devuelvo un objeto con los activos de la cartera
 * pasada por parametro
 * 
 * JSON: [
 * {
 *  "nombreActivo": "BBVA Lebron Experience",
 * ...
 * }]
 * @param req 
 * @param res 
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

//call to pinhata API in order to send the NFT to the blockchain
export function sendJSONToPinata(data: any) {

    const result = async () =>{

        const resJSON = await axios({
            method: "post",
            url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
            data: data,
            headers: {
                    //'pinata_api_key': PINATA_API_KEY,
                    //'pinata_secret_api_key': PINATA_API_SECRET
                }
            });
            
        const tokenURI = `ipfs://${resJSON.data.IpfsHash}`;

   
    }
    return result();
}

export function sendFileToPinata = async (fileImg: any) => {

        if (fileImg) {
            try {

                const formData = new FormData();
                formData.append("file", fileImg);

                const result = async () =>{
                    const resFile = await axios({
                        method: "post",
                        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                        data: formData,
                        headers: {
                            'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
                            'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
                            "Content-Type": "multipart/form-data"
                        },
                    });

                    const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
                    // console.log(response.data.IpfsHash);
                    sendJSONToPinata(ImgHash)
                }

                return result();
            } catch (error) {
                console.log("File to IPFS: ")
                console.log(error)
            }
        }
    }
