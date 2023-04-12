const { fetch, fetchAll } = require("../src/pg");
const { SELECTID, SELECTALL, POSTTODO, UPDATE, DELETE, PAGINATION, FILTERTODO } = require('../moduls/todo.modul')

module.exports = {
    GET: async (req, res) => {
        if (!isNaN(+req.params.id)) {

            res.send({
                data: await fetch(
                    SELECTID,
                    req.params.id),
            });
        } else {
            res.send({
                data: await fetchAll(SELECTALL),
            });
        }
    },

    GET: async (req, res) => {
        const { page, limit } = req.body

        if (page, limit) {
            res.send({
                data: await fetchAll(PAGINATION),
            });
        } else {
            console.log(error);
        }
    },

    POST: async (req, res) => {
        const { todo_title, todo_text } = req.body;
        res.send({
            data: await fetch(
                POSTTODO, todo_title, todo_text
            )
        })
    },

    PUT: async (req, res) => {
        const { id } = req.params;
        const { todo_title, todo_text } = req.body;
        const SELECTID = id;

        if (!SELECTID) {
            res.send("id not found");
            return;
        }
        if (!todo_title || !todo_text) {
            res.send("Not found")
        } else {
            const Title = todo_title ? todo_title : SELECTID.todo_title
            const Text = todo_text ? todo_text : SELECTID.todo_text
            res.send({
                data: await fetch(UPDATE, Title, Text, SELECTID)
            });
        }
    },

    DELETE: async (req, res) => {
        const { id } = req.params;
        res.send({
            data: await fetch(DELETE, id)
        })
    }

};
