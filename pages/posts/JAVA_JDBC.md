
---
title: java学习
date: 2026-09-25
tags:
  - 学习
---

# Java 初步使用JDBC 操作数据库

### 数据库连接参数
```
String url = "jdbc:mysql://localhost:3306/test";
String username = "root";
String password = "123456";
```
- `url`：JDBC 连接地址，`localhost:3306` 是 MySQL 默认主机和端口，`test` 是数据库名
- `username`  `数据库账号`
-  password`：数据库密码

###  JDBC 三大核心对象

```
Connection conn = null;
PreparedStatement stmt = null;
ResultSet rs = null;
```

| 对象                  | 作用                                 |
| ------------------- | ---------------------------------- |
| `Connection`        | 代表与数据库的一次连接会话                      |
| `PreparedStatement` | 预编译 SQL 语句对象，支持 `?` 占位符，能防止 SQL 注入 |
| `ResultSet`         | 查询结果集，类似一个游标，逐行读取数据                |
### 核心业务逻辑

#### 获取连接
- `数据库驱动 `
```
conn = DriverManager.getConnection(url, username, password);
```

#### SQL命令
```
String sql = "select * from emp where name = ? and phone = ?"; // ? 是占位符
```

####  创建 PreparedStatement
```
stmt = conn.prepareStatement(sql); // 把 SQL 发送给数据库进行预编译
```
%%优点：性能好（可复用执行计划）、安全（防 SQL 注入）%%
####  参数
```
stmt.setString(1, "王大岁");
stmt.setString(2, "17637191904");
```
**`setString(int index, String value)`** 索引从 **1** 开始

####  执行
```
rs = stmt.executeQuery();
```
#### 遍历结果集

```
while (rs.next()) { ... }
```

#### 封装Emp对象
```
Emp emp = new Emp();
emp.setId(rs.getLong("id"));
emp.setEmployeeNo(rs.getString("employee_no"));
emp.setName(rs.getString("name"));
emp.setGender(rs.getInt("gender"));
emp.setBirthDate(rs.getObject("birth_date", LocalDate.class));
emp.setIdCard(rs.getString("id_card"));
emp.setPhone(rs.getString("phone"));
emp.setEmail(rs.getString("email"));
emp.setDepartmentId(rs.getLong("department_id"));
emp.setPosition(rs.getString("position"));
emp.setHireDate(rs.getObject("hire_date", LocalDate.class));
emp.setSalary(rs.getBigDecimal("salary"));
emp.setTerminationDate(rs.getObject("termination_date", LocalDate.class));
emp.setCreatedDate(rs.getObject("created_date", LocalDateTime.class));
emp.setUpdatedDate(rs.getObject("updated_date", LocalDateTime.class));
emp.setIsDeleted(rs.getInt("is_deleted"));
```

---
> Emp类
> 添加
> @Data  // 自动添加get set 方法
> @AllArgsConstructor // 自动添加全参构造
> @NoArgsConstructor // 自动添加无参构造

```
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Emp {
    /** 主键 */
    private Long id;

    /** 工号 */
    private String employeeNo;

    /** 姓名 */
    private String name;

    /** 性别：0-未知 1-男 2-女 */
    private Integer gender;

    /** 出生日期 */
    private LocalDate birthDate;

    /** 身份证号 */
    private String idCard;

    /** 手机号码 */
    private String phone;

    /** 邮箱 */
    private String email;

    /** 部门ID */
    private Long departmentId;

    /** 职位 */
    private String position;

    /** 入职日期 */
    private LocalDate hireDate;

    /** 基本工资 */
    private BigDecimal salary;

    /** 离职日期 */
    private LocalDate terminationDate;

    /** 创建时间 */
    private LocalDateTime createdDate;

    /** 更新时间 */
    private LocalDateTime updatedDate;

    /** 是否删除：0-正常 1-删除 */
    private Integer isDeleted;


}
```

### catch块 异常处理
```
catch (Exception e) {
    e.printStackTrace();
}
```

### finally 释放资源

```
finally {
    try {
        if (rs != null) rs.close();
        if (stmt != null) stmt.close();
        if (conn != null) conn.close();
    } catch (SQLException se) {
        se.printStackTrace();
    }
}
```


