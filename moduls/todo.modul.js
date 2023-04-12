module.exports = {
    SELECTID: "SELECT * FROM todo WHERE id = $1",
    SELECTALL: "SELECT * FROM todo",
    POSTTODO: "INSERT INTO todo(todo_title, todo_text) values($1, $2)",
    UPDATE: "UPDATE todo SET todo_title=$1, todo_text=$2 WHERE id=$3",
    DELETE: "DELETE FROM todo WHERE id = $1",
    PAGINATION: "SELECT * FROM todo OFFSET $1 LIMIT $2",
    FILTERTODO: "SELECT * FROM todo WHERE create_at = $1"
};