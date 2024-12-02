const error = {
    e404:  (req, res) => {
        res.status(404).render('error', {title: 'Error', menssage: 'Not Found'})
    },
    e500: (req, res, menssage) => {
        res.status(500).render('error', {title: '500', menssage})
    }
}

export default error