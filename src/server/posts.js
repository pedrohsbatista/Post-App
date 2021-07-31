var moment = require('moment');
var guid = require('guid');

module.exports = [
  {
    id: guid.raw(),
    titulo: "Postagem 1",
    texto: "Conteúdo da postagem 1",
    data: moment().subtract({hours: 3, minutes: 20}).toISOString(),
    like: 10,
    dislike: 5,
    comentarios: [
        {
            id: guid.raw(),
            texto: "Comentário 1",
            data: moment().subtract({hours: 3, minutes: 10}).toISOString()
        }
    ]
  },
  {
    id: guid.raw(),
    titulo: "Postagem 2",
    texto: "Conteúdo da postagem 2",
    data: moment().subtract({hours: 2, minutes: 30}).toISOString(),
    like: 20,
    dislike: 10,
    comentarios: [
        {
            id: guid.raw(),
            texto: "Comentário 1",
            data:  moment().subtract({hours: 2, minutes: 20}).toISOString()
        },
        {
            id: guid.raw(),
            texto: "Comentário 2",
            data:  moment().subtract({hours: 2, minutes: 10}).toISOString()
        }
    ]
  },
  {
    id: guid.raw(),
    titulo:"Postagem 3",
    texto: "Conteúdo da postagem 3",
    data: moment().subtract({hours: 1, minutes: 40}).toISOString(),
    like: 30,
    dislike: 15,
    comentarios: [
        {
            id: guid.raw(),
            texto: "Comentário 1",
            data:  moment().subtract({hours: 1, minutes: 30}).toISOString()
        },
        {
            id: guid.raw(),
            texto: "Comentário 2",
            data:  moment().subtract({hours: 1, minutes: 20}).toISOString()
        },
        {
            id: guid.raw(),
            texto: "Comentário 3",
            data:  moment().subtract({hours: 1, minutes: 10}).toISOString()
        }
    ]
  }
]