create table tbl_work (
    id bigint unsigned auto_increment primary key,
    work_price varchar(255) not null,
    genre_type varchar(255) not null,
    file_content varchar(255),
    read_count int default 0,
    constraint fk_work_post foreign key (id)
    references tbl_post(id)
);

insert into tbl_work
values(28,21000,'comedy','파일설명9','14');

select *from tbl_work;
