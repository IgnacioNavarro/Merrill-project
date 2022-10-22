// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

/**
 * Paso contraseña "Metamask" por parametro
 * A partir de esta contraseña, genero semilla y
 * la encripto con esa contraseña.
 * 
 * Devuelvo la address
 * @param req 
 * @param res 
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
