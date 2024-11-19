import { NowRequest, NowResponse } from '@vercel/node'

export default (req, res) => {
    return res.send("Hey you")
}