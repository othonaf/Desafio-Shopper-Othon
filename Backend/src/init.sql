CREATE TABLE IF NOT EXISTS drivers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    vehicle VARCHAR(100),
    review_rating DECIMAL(2, 1) NULL,
    review_comment VARCHAR(255),
    value DECIMAL(10, 2) NOT NULL
);

INSERT INTO
    drivers (
        name,
        description,
        vehicle,
        review_rating,
        review_comment,
        value
    )
VALUES (
        'Homer Simpson',
        'Rota padrão calculada',
        'Plymouth Valiant 1973 rosa e enferrujado',
        4.5,
        'Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts',
        2.50
    ),
    (
        'Dominic Toretto',
        'Rota padrão calculada',
        'Dodge Charger R/T 1970 modificado',
        5.0,
        'Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente
boa. Recomendo!',
        5.00
    ),
    (
        'James Bond',
        'Rota padrão calculada',
        'Aston Martin DB5 clássico',
        4.9,
        'Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.',
        10.00
    );

CREATE TABLE IF NOT EXISTS rides (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id VARCHAR(255) NOT NULL,
    origin VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    distance DOUBLE NOT NULL,
    duration VARCHAR(50) NOT NULL,
    driver_id INT NOT NULL,
    driver_name VARCHAR(100) NOT NULL,
    value DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM rides;