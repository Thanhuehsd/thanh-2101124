import express from "express"
const contactPage = (req, res) => {
    return res.render("home", { data: { title: 'contatc ', content: 'Đây là XỨ SỞ THẦN TIÊN' } })
}
export default contactPage