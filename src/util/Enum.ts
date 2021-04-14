'use strict'
enum ColorEnum { Red, Green, Blue };
/// 数据库类型 {SqlServer=0，MySql=1，Oracle=2，Access=3，SQLite=4}
/// </summary>
enum DatabaseTypeEnum { SqlServer = 0, MySql = 1, Oracle = 2, Access = 3, SQLite = 4 }
/// <summary>
/// 分页排序 { DESC = 0  倒序, ASC = 1  升序}
/// </summary>
enum PageSortEnum { DESC = 0, ASC = 1 }
/// <summary>
/// 是否
/// </summary>
enum IsOrNoEnum { 否 = 0, 是 = 1 }
/// <summary>
/// 描 述：接口响应码， 成功=200，失败=400，异常=-200，没有登录信息=0,错误=-300
/// </summary>
enum ResponseCodeEnum { success = 100, fail = -100, exception = -200, nologin = 0, Error = -300 }