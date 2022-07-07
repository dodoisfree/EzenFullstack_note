import DBPool from "./helper/DBPool.js";
import mybatisMapper from "mybatis-mapper";

mybatisMapper.createMapper([
  './mappers/DepartmentMapper.xml',
  './mappers/ProfessorDepartmentMapper.xml',
]);

(async () => {
  const dbcon = await DBPool.getConnection();

  let params = {deptno: 201};
  let query = mybatisMapper.getStatement('DepartmentMapper', 'selectItem', params);
  let [result] = await dbcon.query(query);
  console.log(result);

  params = {dname: 202, offset: 0, listCount: 3};
  query = mybatisMapper.getStatement('DepartmentMapper', 'selectList', params);
  [result] = await dbcon.query(query);
  console.log(result);

  params = {dname: '풀스택', loc: '1401호'};
  query = mybatisMapper.getStatement('DepartmentMapper', 'insertItem', params);
  [result] = await dbcon.query(query);
  console.log(`affectedRows=${result.affectedRows}, insertId=${result.insertId}`);
 
  params = {deptno: 300};
  query = mybatisMapper.getStatement('DepartmentMapper', 'deleteItem', params);
  [result] = await dbcon.query(query);
  console.log(`affectedRows=${result.affectedRows}`);

  params = {deptno: 300, dname: '수정된학과', loc: '수정된위치'};
  query = mybatisMapper.getStatement('DepartmentMapper', 'updateItem', params);
  [result] = await dbcon.query(query);
  console.log(`affectedRows=${result.affectedRows}`);

  query = mybatisMapper.getStatement('DepartmentMapper', 'selectCountAll');
  [result] = await dbcon.query(query);
  console.log(`cnt=${result[0].cnt}`);
  
  query = mybatisMapper.getStatement('ProfessorDepartmentMapper', 'selectJoin');
  [result] = await dbcon.query(query);
  console.log(result);

  dbcon.release();
  DBPool.close();
})();