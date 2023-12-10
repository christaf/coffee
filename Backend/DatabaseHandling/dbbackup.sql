CREATE SCHEMA apkidb;

CREATE  TABLE apkidb.address ( 
	address_id           INT    NOT NULL AUTO_INCREMENT  PRIMARY KEY,
	country              VARCHAR(128)       ,
	city                 VARCHAR(128)       ,
	street               VARCHAR(128)       ,
	street_number        INT       
 ) engine=InnoDB;

CREATE  TABLE apkidb.default_coffees ( 
	default_coffee_id    INT    NOT NULL AUTO_INCREMENT  PRIMARY KEY,
	name                 VARCHAR(128)       ,
	bean_type            VARCHAR(128)       ,
	brewing_type         VARCHAR(128)       ,
	photo_url            VARCHAR(256)       
 ) engine=InnoDB;

CREATE  TABLE apkidb.delivery ( 
	delivery_id          INT    NOT NULL AUTO_INCREMENT  PRIMARY KEY,
	order_id             INT    NOT NULL   ,
	delivery_date        DATE  DEFAULT curdate()     ,
	CONSTRAINT unq_delivery_order_id UNIQUE ( order_id ) 
 ) engine=InnoDB;

CREATE  TABLE apkidb.favourite_items ( 
	favourite_item_id    INT    NOT NULL AUTO_INCREMENT  PRIMARY KEY,
	default_coffee       INT    NOT NULL   ,
	sweetner_type        VARCHAR(128)       ,
	sweetner_amount      INT       ,
	creamer_type         VARCHAR(128)       ,
	creamer_amount       INT       ,
	additive_1           VARCHAR(128)       ,
	additive_2           VARCHAR(128)       ,
	additive_3           VARCHAR(128)       ,
	CONSTRAINT unq_favourite_items_default_coffee UNIQUE ( default_coffee ) 
 ) engine=InnoDB;

CREATE  TABLE apkidb.orderable_item ( 
	orderable_item_id    INT    NOT NULL AUTO_INCREMENT  PRIMARY KEY,
	default_coffee_id    INT    NOT NULL   ,
	sweetner_type        VARCHAR(128)       ,
	sweetner_amount      INT       ,
	creamer_type         VARCHAR(128)       ,
	creamer_amount       INT       ,
	additive_1           VARCHAR(128)       ,
	additive_2           VARCHAR(128)       ,
	additive_3           VARCHAR(128)       ,
	CONSTRAINT unq_orderable_item_default_coffee_id UNIQUE ( default_coffee_id ) 
 ) engine=InnoDB;

CREATE  TABLE apkidb.customers ( 
	customer_id          INT    NOT NULL AUTO_INCREMENT  PRIMARY KEY,
	customer_name        VARCHAR(128)       ,
	address_id           INT       ,
	favourites_id        INT       ,
	CONSTRAINT unq_customers_favourites_id UNIQUE ( favourites_id ) 
 ) engine=InnoDB;

CREATE INDEX fk_customers_address ON apkidb.customers ( address_id );

CREATE  TABLE apkidb.orders ( 
	order_id             INT    NOT NULL AUTO_INCREMENT  PRIMARY KEY,
	customer_id          INT    NOT NULL   ,
	orderable_items_id   INT       ,
	total_cost           INT       ,
	is_paid              BOOLEAN  DEFAULT false  NOT NULL   ,
	discount             INT       ,
	CONSTRAINT unq_orders_orderable_item_id UNIQUE ( orderable_items_id ) 
 ) engine=InnoDB;

CREATE INDEX fk_orders_customers ON apkidb.orders ( customer_id );

CREATE  TABLE apkidb.`user` ( 
	user_id              INT    NOT NULL AUTO_INCREMENT  PRIMARY KEY,
	customer_id          INT       ,
	email                VARCHAR(128)    NOT NULL   ,
	password             VARCHAR(128)    NOT NULL   ,
	CONSTRAINT unq_user_customer_id UNIQUE ( customer_id ) 
 ) engine=InnoDB;

ALTER TABLE apkidb.customers ADD CONSTRAINT fk_customers_favourite_items FOREIGN KEY ( favourites_id ) REFERENCES apkidb.favourite_items( favourite_item_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE apkidb.customers ADD CONSTRAINT fk_customers_address FOREIGN KEY ( address_id ) REFERENCES apkidb.address( address_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE apkidb.favourite_items ADD CONSTRAINT fk_favourite_items FOREIGN KEY ( default_coffee ) REFERENCES apkidb.default_coffees( default_coffee_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE apkidb.orderable_item ADD CONSTRAINT fk_orderable_item FOREIGN KEY ( default_coffee_id ) REFERENCES apkidb.default_coffees( default_coffee_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE apkidb.orders ADD CONSTRAINT fk_orders_customers FOREIGN KEY ( customer_id ) REFERENCES apkidb.customers( customer_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE apkidb.orders ADD CONSTRAINT fk_orders_orderable_item FOREIGN KEY ( orderable_items_id ) REFERENCES apkidb.orderable_item( orderable_item_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE apkidb.orders ADD CONSTRAINT fk_orders_delivery FOREIGN KEY ( order_id ) REFERENCES apkidb.delivery( order_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE apkidb.`user` ADD CONSTRAINT fk_user_user FOREIGN KEY ( customer_id ) REFERENCES apkidb.customers( customer_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 1, 'cappucino', 'arabica', 'cold brew', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 2, 'latte', 'robusta', 'cold brew', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 3, 'frappucino', 'excelsa', 'cold brew', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 4, 'mocha', 'liberica', 'cold brew', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 5, 'americano', 'arabica', 'cold brew', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 8, 'affogato', 'robusta', 'nitro cold brew coffee', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 9, 'irish coffee', 'excelsa', 'iced coffee', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 10, 'long black', 'liberica', 'espresso machine', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 11, 'doppio', 'arabica', 'chemex', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 12, 'flat white', 'robusta', 'caffee americano', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 13, 'macchiato', 'excelsa', 'vaccum coffee filter', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 14, 'con panna', 'liberica', 'percolator', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 15, 'red eye coffee', 'arabica', 'cortado', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 16, 'cortado', 'robusta', 'arabic coffee', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 17, 'ristretto', 'excelsa', 'caffe machiato', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 18, 'lungo', 'liberica', 'lungo', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 19, 'galao', 'arabica', 'galao', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 20, 'cafe au lait', 'robusta', 'cold brew', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 21, 'nitro coffee', 'excelsa', 'french press', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 22, 'turkish coffee', 'liberica', 'drip coffee', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 23, 'caffee breve', 'arabica', 'espresso', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 24, 'drip', 'robusta', 'moka pot', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 25, 'mazagran', 'excelsa', 'aeropress', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 26, 'mexican coffee', 'liberica', 'iced coffee', null);
INSERT INTO apkidb.default_coffees( default_coffee_id, name, bean_type, brewing_type, photo_url ) VALUES ( 27, 'bulltetproof', 'arabica', 'chemex', null);
INSERT INTO apkidb.customers( customer_id, customer_name, address_id, favourites_id ) VALUES ( 1, 'Mateo', null, null);
INSERT INTO apkidb.`user`( user_id, customer_id, email, password ) VALUES ( 1, null, 'kristoffusz@elo.com', 'dzionselka');
