import{Bt as e,Ht as t,Q as n,U as r,W as i,er as a,qn as o,qt as s,yn as c}from"./framework.1C2EKWue.js";import{n as l}from"./theme.DpOiG7rg.js";import"./chunks/vue-i18n.CZQNuURD.js";import{a as u,i as d}from"./chunks/vue-router.BQFWT1Bk.js";var f={__name:`JAVA_JDBC`,setup(f,{expose:p}){let m=o(JSON.parse(`{"title":"java学习","description":"","frontmatter":{"title":"java学习","date":"2026-09-25","updated":"2026-10-3","categories":["Valaxy 笔记"],"tags":["学习"],"top":3},"headers":[{"level":3,"title":"数据库连接参数","slug":"数据库连接参数","link":"#数据库连接参数","children":[]},{"level":3,"title":"JDBC 三大核心对象","slug":"jdbc-三大核心对象","link":"#jdbc-三大核心对象","children":[]},{"level":3,"title":"核心业务逻辑","slug":"核心业务逻辑","link":"#核心业务逻辑","children":[{"level":4,"title":"获取连接","slug":"获取连接","link":"#获取连接","children":[]},{"level":4,"title":"SQL命令","slug":"sql命令","link":"#sql命令","children":[]},{"level":4,"title":"创建 PreparedStatement","slug":"创建-preparedstatement","link":"#创建-preparedstatement","children":[]},{"level":4,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":4,"title":"执行","slug":"执行","link":"#执行","children":[]},{"level":4,"title":"遍历结果集","slug":"遍历结果集","link":"#遍历结果集","children":[]},{"level":4,"title":"封装Emp对象","slug":"封装emp对象","link":"#封装emp对象","children":[]}]},{"level":3,"title":"catch块 异常处理","slug":"catch块-异常处理","link":"#catch块-异常处理","children":[]},{"level":3,"title":"finally 释放资源","slug":"finally-释放资源","link":"#finally-释放资源","children":[]}],"relativePath":"pages/posts/JAVA_JDBC.md"}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,t(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{title:`java学习`,date:`2026-09-25`,updated:`2026-10-3`,categories:[`Valaxy 笔记`],tags:[`学习`],top:3}}),(t,o)=>{let u=l;return e(),i(u,{frontmatter:a(_)},{"main-content-md":c(()=>[...o[0]||=[r(`h1`,{id:`java-初步使用jdbc-操作数据库`,tabindex:`-1`},[n(`Java 初步使用JDBC 操作数据库 `),r(`a`,{class:`header-anchor`,href:`#java-初步使用jdbc-操作数据库`,"aria-label":`Permalink to "Java 初步使用JDBC 操作数据库"`},`​`)],-1),r(`h3`,{id:`数据库连接参数`,tabindex:`-1`},[n(`数据库连接参数 `),r(`a`,{class:`header-anchor`,href:`#数据库连接参数`,"aria-label":`Permalink to "数据库连接参数"`},`​`)],-1),r(`div`,{class:`language-`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`String url = "jdbc:mysql://localhost:3306/test";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`String username = "root";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`String password = "123456";`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`ul`,null,[r(`li`,null,[r(`code`,null,`url`),n(`：JDBC 连接地址，`),r(`code`,null,`localhost:3306`),n(` 是 MySQL 默认主机和端口，`),r(`code`,null,`test`),n(` 是数据库名`)]),r(`li`,null,[r(`code`,null,`username`),n(),r(`code`,null,`数据库账号`)]),r(`li`,null,"password`：数据库密码")],-1),r(`h3`,{id:`jdbc-三大核心对象`,tabindex:`-1`},[n(`JDBC 三大核心对象 `),r(`a`,{class:`header-anchor`,href:`#jdbc-三大核心对象`,"aria-label":`Permalink to "JDBC 三大核心对象"`},`​`)],-1),r(`div`,{class:`language-`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`Connection conn = null;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`PreparedStatement stmt = null;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`ResultSet rs = null;`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`对象`),r(`th`,null,`作用`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`code`,null,`Connection`)]),r(`td`,null,`代表与数据库的一次连接会话`)]),r(`tr`,null,[r(`td`,null,[r(`code`,null,`PreparedStatement`)]),r(`td`,null,[n(`预编译 SQL 语句对象，支持 `),r(`code`,null,`?`),n(` 占位符，能防止 SQL 注入`)])]),r(`tr`,null,[r(`td`,null,[r(`code`,null,`ResultSet`)]),r(`td`,null,`查询结果集，类似一个游标，逐行读取数据`)])])],-1),r(`h3`,{id:`核心业务逻辑`,tabindex:`-1`},[n(`核心业务逻辑 `),r(`a`,{class:`header-anchor`,href:`#核心业务逻辑`,"aria-label":`Permalink to "核心业务逻辑"`},`​`)],-1),r(`h4`,{id:`获取连接`,tabindex:`-1`},[n(`获取连接 `),r(`a`,{class:`header-anchor`,href:`#获取连接`,"aria-label":`Permalink to "获取连接"`},`​`)],-1),r(`ul`,null,[r(`li`,null,[r(`code`,null,`数据库驱动 `)])],-1),r(`div`,{class:`language-`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`conn = DriverManager.getConnection(url, username, password);`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`h4`,{id:`sql命令`,tabindex:`-1`},[n(`SQL命令 `),r(`a`,{class:`header-anchor`,href:`#sql命令`,"aria-label":`Permalink to "SQL命令"`},`​`)],-1),r(`div`,{class:`language-`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`String sql = "select * from emp where name = ? and phone = ?"; // ? 是占位符`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`h4`,{id:`创建-preparedstatement`,tabindex:`-1`},[n(`\xA0创建 PreparedStatement `),r(`a`,{class:`header-anchor`,href:`#创建-preparedstatement`,"aria-label":`Permalink to "\xA0创建 PreparedStatement"`},`​`)],-1),r(`div`,{class:`language-`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`stmt = conn.prepareStatement(sql); // 把 SQL 发送给数据库进行预编译`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`p`,null,`%%优点：性能好（可复用执行计划）、安全（防 SQL 注入）%%`,-1),r(`h4`,{id:`参数`,tabindex:`-1`},[n(`参数 `),r(`a`,{class:`header-anchor`,href:`#参数`,"aria-label":`Permalink to "参数"`},`​`)],-1),r(`div`,{class:`language-`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`stmt.setString(1, "王大岁");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`stmt.setString(2, "17637191904");`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`p`,null,[r(`strong`,null,[r(`code`,null,`setString(int index, String value)`)]),n(` 索引从 `),r(`strong`,null,`1`),n(` 开始`)],-1),r(`h4`,{id:`执行`,tabindex:`-1`},[n(`执行 `),r(`a`,{class:`header-anchor`,href:`#执行`,"aria-label":`Permalink to "执行"`},`​`)],-1),r(`div`,{class:`language-`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`rs = stmt.executeQuery();`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`h4`,{id:`遍历结果集`,tabindex:`-1`},[n(`遍历结果集 `),r(`a`,{class:`header-anchor`,href:`#遍历结果集`,"aria-label":`Permalink to "遍历结果集"`},`​`)],-1),r(`div`,{class:`language-`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`while (rs.next()) { ... }`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`h4`,{id:`封装emp对象`,tabindex:`-1`},[n(`封装Emp对象 `),r(`a`,{class:`header-anchor`,href:`#封装emp对象`,"aria-label":`Permalink to "封装Emp对象"`},`​`)],-1),r(`div`,{class:`language-`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`Emp emp = new Emp();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setId(rs.getLong("id"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setEmployeeNo(rs.getString("employee_no"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setName(rs.getString("name"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setGender(rs.getInt("gender"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setBirthDate(rs.getObject("birth_date", LocalDate.class));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setIdCard(rs.getString("id_card"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setPhone(rs.getString("phone"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setEmail(rs.getString("email"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setDepartmentId(rs.getLong("department_id"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setPosition(rs.getString("position"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setHireDate(rs.getObject("hire_date", LocalDate.class));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setSalary(rs.getBigDecimal("salary"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setTerminationDate(rs.getObject("termination_date", LocalDate.class));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setCreatedDate(rs.getObject("created_date", LocalDateTime.class));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setUpdatedDate(rs.getObject("updated_date", LocalDateTime.class));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`emp.setIsDeleted(rs.getInt("is_deleted"));`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`hr`,null,null,-1),r(`blockquote`,null,[r(`p`,null,`Emp类 添加 @Data // 自动添加get set 方法 @AllArgsConstructor // 自动添加全参构造 @NoArgsConstructor // 自动添加无参构造`)],-1),r(`div`,{class:`language-`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`@Data`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`@AllArgsConstructor`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`@NoArgsConstructor`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`public class Emp {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 主键 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private Long id;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 工号 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private String employeeNo;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 姓名 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private String name;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 性别：0-未知 1-男 2-女 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private Integer gender;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 出生日期 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private LocalDate birthDate;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 身份证号 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private String idCard;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 手机号码 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private String phone;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 邮箱 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private String email;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 部门ID */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private Long departmentId;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 职位 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private String position;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 入职日期 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private LocalDate hireDate;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 基本工资 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private BigDecimal salary;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 离职日期 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private LocalDate terminationDate;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 创建时间 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private LocalDateTime createdDate;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 更新时间 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private LocalDateTime updatedDate;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /** 是否删除：0-正常 1-删除 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    private Integer isDeleted;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`h3`,{id:`catch块-异常处理`,tabindex:`-1`},[n(`catch块 异常处理 `),r(`a`,{class:`header-anchor`,href:`#catch块-异常处理`,"aria-label":`Permalink to "catch块 异常处理"`},`​`)],-1),r(`div`,{class:`language-`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`catch (Exception e) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    e.printStackTrace();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`h3`,{id:`finally-释放资源`,tabindex:`-1`},[n(`finally 释放资源 `),r(`a`,{class:`header-anchor`,href:`#finally-释放资源`,"aria-label":`Permalink to "finally 释放资源"`},`​`)],-1),r(`div`,{class:`language-`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`finally {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    try {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        if (rs != null) rs.close();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        if (stmt != null) stmt.close();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        if (conn != null) conn.close();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    } catch (SQLException se) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        se.printStackTrace();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1)]]),main:c(()=>[s(t.$slots,`main`)]),"main-header":c(()=>[s(t.$slots,`main-header`)]),"main-header-after":c(()=>[s(t.$slots,`main-header-after`)]),"main-nav":c(()=>[s(t.$slots,`main-nav`)]),"main-content-before":c(()=>[s(t.$slots,`main-content-before`)]),"main-content":c(()=>[s(t.$slots,`main-content`)]),"main-content-after":c(()=>[s(t.$slots,`main-content-after`)]),"main-nav-before":c(()=>[s(t.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[s(t.$slots,`main-nav-after`)]),comment:c(()=>[s(t.$slots,`comment`)]),footer:c(()=>[s(t.$slots,`footer`)]),aside:c(()=>[s(t.$slots,`aside`)]),"aside-custom":c(()=>[s(t.$slots,`aside-custom`)]),default:c(()=>[s(t.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};