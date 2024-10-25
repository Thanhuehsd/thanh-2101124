import express from "express"
const getContact = (req, res) => {
    return res.render("home", { data: { title: 'Page Contact',
        page:'contact', 
        name: 'tương vĩnh thành', 
        email: 'ht@gmail.com',
        phonenumber: '123456' } })
}
export default getContact