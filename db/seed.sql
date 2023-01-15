\c raffles_dev;

INSERT INTO raffles
(rafflename,dates, is_winner, secretcode)
VALUES
('Yesenia Raffle', 'January 25, 2023', true, 'Polleverywhere'),
('Mollys Raffle', 'January 25, 2023', false, 'secretvalentine'),
('Mikes Raffle', 'January 25, 2023', true, 'secretsanta');

INSERT INTO participants
(raffle_id, firstname, lastname, email, phone)
VALUES
('1', 'Evan', 'Bragg', 'bragg@gmail.com', 3477644478),
('1', 'Evie', 'Graham', 'bragg@gmail.com', 3477644478),
('2', 'David', 'Bragg', 'bragg@gmail.com', 3477644478),
('2', 'Evan', 'Bragg', 'bragg@gmail.com', 3477644478),
('2', 'Elle', 'Graham', 'bragg@gmail.com', 3477644478),
('2', 'Everly', 'Lopez', 'bragg@gmail.com', 3477644478),
('3', 'Emmanuel', 'Bragg', 'bragg@gmail.com', 3477644478)