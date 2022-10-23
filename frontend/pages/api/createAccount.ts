// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

/**
 * Paso contraseña "Metamask" por parametro
 * A partir de esta contraseña, genero semilla y
 * la encripto con esa contraseña.
 *
 * Devuelvo la address
 * @param req
 * @param res
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Llamado cuando se hace 
  // en el cliente axios.get('/api/createAccount')

  const body = req.body;
  // { id: nft}
  res.status(200).json({ name: "John Doe" });
}
