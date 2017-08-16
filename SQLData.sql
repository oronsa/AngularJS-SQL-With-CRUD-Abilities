DROP DATABASE sampleDB;
CREATE DATABASE sampleDB;

CREATE TABLE carsTable (
    ID int NOT NULL AUTO_INCREMENT,
    CarName varchar(20) NOT NULL,
    Seats int NOT NULL,
	Air_Cond varchar(10) NOT NULL,
	Doors int NOT NULL,
	Transmission varchar(10) NOT NULL,
	Available varchar(10) NOT NULL,
    PRIMARY KEY (ID)
);
CREATE TABLE Orders (
    ID int NOT NULL AUTO_INCREMENT,
	carId int NOT NULL,
    CarName varchar(20) NOT NULL,
    CustomerName varchar(20) NOT NULL,
	EmailAddress varchar(255) NOT NULL,
	FromDate DATE NOT NULL,
	ToDate DATE NOT NULL,
	PhoneNumber varchar(20) NOT NULL,
    PRIMARY KEY (ID)
);
INSERT INTO carsTable (CarName,Seats,Air_Cond,Doors,Transmission,Available	) VALUES ('VW Golf','5','yes','5','Auto','No');
INSERT INTO carsTable (CarName,Seats,Air_Cond,Doors,Transmission,Available	) VALUES ('VW Polo','5','yes','5','Manual','No');
INSERT INTO carsTable (CarName,Seats,Air_Cond,Doors,Transmission,Available	) VALUES ('VW Up','4','yes','4','Auto','yes');
INSERT INTO carsTable (CarName,Seats,Air_Cond,Doors,Transmission,Available	) VALUES ('VW Jeta','5','yes','4','Manual','yes');
INSERT INTO carsTable (CarName,Seats,Air_Cond,Doors,Transmission,Available	) VALUES ('Scoda Fabia','5','yes','5','Manual','yes');
INSERT INTO carsTable (CarName,Seats,Air_Cond,Doors,Transmission,Available	) VALUES ('Scoda Superb','5','yes','5','Auto','yes');
INSERT INTO carsTable (CarName,Seats,Air_Cond,Doors,Transmission,Available	) VALUES ('Mazda 2','5','yes','5','Auto','yes');
INSERT INTO carsTable (CarName,Seats,Air_Cond,Doors,Transmission,Available	) VALUES ('Mazda 3','5','yes','4','Manual','yes');
INSERT INTO carsTable (CarName,Seats,Air_Cond,Doors,Transmission,Available	) VALUES ('Alfa Mito','5','yes','5','Manual','yes');
INSERT INTO carsTable (CarName,Seats,Air_Cond,Doors,Transmission,Available	) VALUES ('Opel Corsa','5','yes','5','Manual','yes');
INSERT INTO carsTable (CarName,Seats,Air_Cond,Doors,Transmission,Available	) VALUES ('Opel Astra','5','yes','5','Manual','No');



INSERT INTO Orders (CarId,CarName,CustomerName,EmailAddress,FromDate,ToDate,PhoneNumber) VALUES ('1','VW Golf','Oron Sason','oron570@gmail.com','2017-08-16','2017-08-20','0506665554');
INSERT INTO Orders (CarId,CarName,CustomerName,EmailAddress,FromDate,ToDate,PhoneNumber) VALUES ('2','VW polo','Oron Sason','oron570@gmail.com','2017-08-16','2017-08-20','0506665554');
INSERT INTO Orders (CarId,CarName,CustomerName,EmailAddress,FromDate,ToDate,PhoneNumber) VALUES ('11','Opel Astra','Oron Sason','oron570@gmail.com','2017-08-16','2017-08-20','0506665554');
