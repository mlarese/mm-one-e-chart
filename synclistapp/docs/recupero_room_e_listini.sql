SELECT multirate.multirate_id,
       multirate_code,
       multirate_name,
       multirate_status,
       multirate_periods.multirate_visibility_start,
       multirate_periods.multirate_visibility_end,
       multirate_periods.multirate_validity_start,
       multirate_periods.multirate_validity_end,
       room_id,
       room_code,
       room_name,
       room_virtual
  FROM multirate
  inner join multirate_details using(multirate_id)
  inner join multirate_specification using(multirate_id)
  inner join multirate_details_rooms using(multirate_details_id)
  inner join multirate_periods using (multirate_id)
  inner join room using(room_id)
  inner join room_details using(room_id)

  where
  multirate_specification.language = 'it' and
  room_details.language = 'it' and
  multirate.structure_id = 157 and
  multirate_status = 1 and
  multirate_periods.multirate_period_deleted = 0
  ;