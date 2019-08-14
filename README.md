# example

![](/images/list.png)
![](/images/content.png)

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

create database myegg;
create table user(
    id int primary key auto_increment,
    username varchar(50) not null,
    password char(32) not null
);
INSERT INTO category (type) VALUES('javaweb'),('php'),('mysql');




标题，内容,阅读量，转发量,收藏量,创建时间,外键（创建者）,类型（外键）,评论（外键）
title,content,forwardcount,collection,date

create database blog;
use blog;
create table bloginfo(
    id int primary key auto_increment,
    title varchar(255),
    content varchar(255),
    readnum int,
    forwardcount int,
    collection int,
    iscollection int,
    createtime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id int,
    foreign key(user_id) references user(id),
    category_id int,
    foreign key(category_id) references category(id),
    comment_id int,
    foreign key(comment_id) references comment(id)
);
Alter table bloginfo add  img varchar(255)

博客操作：
添加博客：
insert into bloginfo set ?;
修改博客内容：
update bloginfo set title=?,content=?;
修改博客访问量：
update bloginfo set readnum=?;
修改博客转发量：
update bloginfo set forwardcount=?;
修改博客转发量：
update bloginfo set collection=?;
删除博客：
delete from bloginfo where id=?;
通过id查找博客：
select * from bloginfo where id=?
用户：
用户名，密码，邮箱
username,password,email

create table user(
     id int primary key auto_increment,
     username varchar(255),
     password varchar(255),
     email varchar(255),
     userinfo_id int,
     foreign key(userinfo_id) references userinfo(id)
);
Alter table user add  isstop int;
用户信息：
等级，访问，排名，积分，发帖，喜欢，评论，粉丝
level,visitnum,rankingnum,integralnum,postingnum,favnum,commentnum,fansnum


create table userinfo(
     id int primary key auto_increment,
     level int,
     visitnum int,
     rankingnum int,
     integralnum int,
     postingnum int,
     favnum int,
     commentnum int,
     fansnum int
);
类型：
类型名称,
category

create table category(
     id int primary key auto_increment,
     type varchar(100)
);
//收藏表
create table collection(
  id int primary key auto_increment,
  user_id int,
  foreign key(user_id) references user(id),
  blog_id int,
  foreign key(blog_id) references bloginfo(id)
);
评论表：
评论内容 ，评论时间，喜欢，不喜欢,用户（外键）
content,date,likenum,hatenum

TIMESTAMP DEFAULT CURRENT_TIMESTAMP

create table comment(
     id int primary key auto_increment,
     content varchar(255),
     createdate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     likenum varchar(255),
     hatenum varchar(255),
     user_id int,
     foreign key(user_id) references user(id),
    blog_id int,
    foreign key(blog_id) references bloginfo(id)
);
Alter table comment add  blog_id int;
Alter table comment add foreign key (blog_id) references bloginfo(id);