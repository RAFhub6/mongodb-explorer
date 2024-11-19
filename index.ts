import { NowRequest, NowResponse } from '@vercel/node'

export default (_req: NowRequest, res: NowResponse) => {
    return res.send("Hey you")
}