USE urheilijaprofiili;

CREATE TABLE urheilijat (
id int(11) NOT NULL AUTO_INCREMENT,
etunimi VARCHAR (50),
sukunimi VARCHAR (50),
kutsumanimi VARCHAR (50),
syntymavuosi DATE,
paino INT,
kuvanlinkki VARBINARY (1000), 
laji VARCHAR(100),
saavutukset VARCHAR (50),
PRIMARY KEY (id)
);



INSERT INTO urheilijat
(id, etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuvanlinkki, laji, saavutukset)  VALUES 
(1, 'Iivo', 'Niskanen', 'Iivo', '1992-01-12', NULL, 'Ei', 'maastohiihto', ' Kulta Olympialaiset 2014, 2018');

INSERT INTO urheilijat
(id, etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuvanlinkki, laji, saavutukset)  VALUES 
(2, 'Kaisa', 'Mäkäräinen', 'Kappa', '1983-01-11', NULL, 'https://fi.wikipedia.org/wiki/Kaisa_M%C3%A4k%C3%A4r%C3%A4inen#/media/Tiedosto:Kaisa_M%C3%A4k%C3%A4r%C3%A4inen_(FIN)_with_Crystal_Globe_IBU_2018_(cropped).jpg', 'Naisten ampumahiihto', ' Kulta MM-kilpailut 2011');

INSERT INTO urheilijat
(id, etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuvanlinkki, laji, saavutukset)  VALUES 
(3, 'Petra ', ' Olli', 'Petra', '1994-06-05', NULL, 'https://fi.wikipedia.org/wiki/Petra_Olli#/media/Tiedosto:Petra_Olli_20181124.jpg', '	paini', ' Kulta MM-kilpailut 2014');

INSERT INTO urheilijat
(id, etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuvanlinkki, laji, saavutukset)  VALUES 
(5, 'Noah', 'Lyles', 'Noah', '1997-07-18', '70', 'https://fi.wikipedia.org/wiki/Noah_Lyles#/media/Tiedosto:Noah_Lyles_(cropped).jpg','miesten yleisurheilu', ' Kulta MM-kilpailut 2019, 2020');

CREATE OR REPLACE USER 'hoang6'@'localhost' IDENTIFIED BY 'hoang2021';
GRANT SELECT,INSERT,UPDATE,DELETE ON urheilijat TO 'hoang6'@'localhost';urheilijat