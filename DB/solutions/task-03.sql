select * from todos where status = 'completed';

select * from todos order by created_at

select * from todos order by created_at desc

select * from todos where title like '%meeting%' or description like '%meeting%'

-- i had a little problem with the last query, forgot which sign to put before and after the filter to make the field contain the word