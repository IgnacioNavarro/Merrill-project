import React from "react";
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";

export default function ipfs(){

    const projectId = '<YOUR PROJECT ID>';
    const projectSecret = '<YOUR PROJECT SECRET>';
    const authorization = "Basic " + btoa(projectId + ":" + projectSecret);

    const [images, setImages] = React.useState<{ cid: CID; path: string }[]>([]);

    let ipfs: IPFSHTTPClient | undefined;
    try {
        ipfs = create({
            url: "https://ipfs.infura.io:5001/api/v0",
            headers: {
                authorization,
            },
        });
    } catch (error) {
        console.error("IPFS error ", error);
        ipfs = undefined;
    }

}