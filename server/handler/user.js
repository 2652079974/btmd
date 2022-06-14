exports.register = (req, res) => {
    let { username, password, stuno, nickname } = req.body
    res.send('ok')
}