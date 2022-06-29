# Brandle

- Run using `npm start`

## DB

### brandle

```sql
CREATE TABLE `brandle` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`brand` VARCHAR(50) NOT NULL DEFAULT '0' COLLATE 'latin1_swedish_ci',
	`colour` CHAR(6) NOT NULL DEFAULT '0' COLLATE 'latin1_swedish_ci',
	`trueName` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;
```