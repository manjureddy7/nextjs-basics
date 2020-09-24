// Api folder is to return anything other than React components
// Only one export to a file

import { NextApiRequest, NextApiResponse } from "next";


export default function personJson(req: NextApiRequest, res: NextApiResponse) {
  return res.json({person: "Manoj Reddy"})
}

// http:localhost:3000/api/hello