import axios from 'axios';
import api from './http';

const apiservice = `${api.baseURL}/usuarios`

const UService = {
    getUsuarios: () => axios.get(apiservice),
    getUsuario: id => axios.get(`${apiservice}/${id}`),
    postUsuario: usuario => axios.post(apiservice, usuario),
    putUsuario: usuario => axios.put(`${apiservice}/${usuario.id}`, usuario),
    deleteUsuario: id => axios.delete(`${apiservice}/${id}`)
}

export default UService
