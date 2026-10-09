---
title: 数据库MySQL 练习
date: 2026-09-27
updated: 2026-10-3
categories:
  - 学习
tags:
  - MySQL
---


#  查询所有数据库

```
show databases ;
```


# 切换数据库
```
use  test;
```

# 查询当前正在使用的数据库
```
select database();
```


 # 创建表
```NYSQL
create database db03;
```

 # 删除数据库
 ```
 drop database db03;
 ```

###   创建表 user_01

```
create table user_01(
    id int comment 'ID、唯一标识',
    username varchar(50) comment '用户名',
    name varchar(10) comment '姓名',
    age int comment '年龄',
    gender char(1) comment '性别'
) comment "用户表";
```

## 删除表
```
drop table user_01;

```
#  添加 唯一标识
```
create table user_01(
    id int primary key auto_increment comment 'ID、唯一标识', -- 主键约束 auto_increment 自增
    username varchar(50) not null unique comment '用户名', -- 非空 且 唯一
    name varchar(10)  not null comment '姓名', -- 非空
    age int comment '年龄',
    gender char(1) default '男' comment '性别' -- 默认 男
) comment "用户表";
```
  ---


# 查询所有字段
```
select id, username, name, age, gender from user_01;

```
# 查询所有字段
```
select * from user_01;

```
# 插入数据
```
insert into user_01(id, username, name, age, gender)
values(12,'wei','微微一笑',20,'男');
```

# 修改数据
```
update user_01 set username='lisi',name='李四',age=19 where id=1;
update user_01 set username='wangWu',name='王五',age=20 where id=2;
update user_01 set id=4 where name='张三';
```

# 删除数据
```
delete from user_01 where name='得分';

```

#  查询字段
```
select name 姓名,age 年龄 from user_01;
select * from user_01;
```
---
# 条件查询
---

|  比较运算符号  |  功能 |逻辑运算符|功能
| :---:|:---:|:---:|:---:|
|>|大于|and或者&&|并且（多个条件同时成立）|
|>=|大于等于|or或\|\||或者（多个条件任意一个成立）|
|<|小于|not 或！|非,不是|
|<=|小于等于|||
|=|等于|||
|<>或者!=|不等于|||
|between...and...|在某个范围内（含最小、最大值）|
|int(...)|在in之后的列表中的值，多选一|||
|linkw  占位符|模糊匹配(% 任意个字符 \_单个字符|||
|is null |是null |||

---

```
-- 查询年龄大于10的
select id ID, name 年龄,age 年龄 from user_01 where age>10;

-- 查询名字为李四的
select * from user_01 where name='李四';

-- 查询 age 为 null 的记录
select * from user_01 where age is  null;

 -- 查询 age 不为 null 的记录
select * from user_01 where age is not null;
```


>  %  : 匹配任意个字符
>   _   : 匹配单个字符

- 查询两个字的

```
select * from user_01 where name like '__';
```
- 查询姓 王 的员工
```
select * from user_01 where name like '王%';

```

 - 查询username 包含 a 的
```
select * from user_01 where username like '%a%';
```
