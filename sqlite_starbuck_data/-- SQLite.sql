-- SQLite
SELECT ity.type, itab.item_name, itab.item_img_path FROM item_types as ity
JOIN item_table as itab 
ON ity.id = itab.type_id

WHERE ity.sub_category_id = 17

