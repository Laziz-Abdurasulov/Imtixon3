CREATE DATABASE imtixon3;
\c imtixon3;





CREATE TABLE todo(
    id SERIAL NOT NULL,
    todo_title VARCHAR(128),
    todo_text VARCHAR(255),
    create_at VARCHAR(64)
);



INSERT INTO todo(todo_title, todo_text, create_at)
VALUES
('salom', 'wsdjndskm nkcdmkdk mkmkmkm mkmmkmkm kmkmkmkmk', '14-04-2023'),
('salom', 'wsdjndskm nkcdmkdk mkmkmkm mkmmkmkm kmkmkmkmk', '14-01-2023'),
('salom', 'wsdjndskm nkcdmkdk mkmkmkm mkmmkmkm kmkmkmkmk', '20-02-2023'),
('salom', 'wsdjndskm nkcdmkdk mkmkmkm mkmmkmkm kmkmkmkmk', '17-11-2023'),
('salom', 'wsdjndskm nkcdmkdk mkmkmkm mkmmkmkm kmkmkmkmk', '16-05-2023' ),
('salom', 'wsdjndskm nkcdmkdk mkmkmkm mkmmkmkm kmkmkmkmk', '15-04-2023' ),
('salom', 'wsdjndskm nkcdmkdk mkmkmkm mkmmkmkm kmkmkmkmk', '14-04-2023'),
('salom', 'wsdjndskm nkcdmkdk mkmkmkm mkmmkmkm kmkmkmkmk', '14-07-2021'),
('salom', 'wsdjndskm nkcdmkdk mkmkmkm mkmmkmkm kmkmkmkmk', '14-04-2020'),
('salom', 'wsdjndskm nkcdmkdk mkmkmkm mkmmkmkm kmkmkmkmk', '14-04-2013'),
('salom', 'wsdjndskm nkcdmkdk mkmkmkm mkmmkmkm kmkmkmkmk', '15-04-2022'),
('salom', 'wsdjndskm nkcdmkdk mkmkmkm mkmmkmkm kmkmkmkmk', '04-04-2023'),
('salom', 'wsdjndskm nkcdmkdk mkmkmkm mkmmkmkm kmkmkmkmk', '01-04-2023');
