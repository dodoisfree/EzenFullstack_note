import DBPool from "../helper/DBPool.js";
import departmentService from "../services/DepartmentService.js";

(async () => {
  try {
    let result = await departmentService.getList();
    console.log('getList: ', result);

    result = await departmentService.getItem({deptno: 232});
    console.log('getItem: ', result);

    result = await departmentService.addItem({dname: 'MVC학과', loc: '여긴어디?'});
    console.log('addItem: ', result);
    
    result = await departmentService.editItem({deptno: 232, dname: 'MVC학과', loc: '여긴어디?'});
    console.log('editItem: ', result);

    await departmentService.deleteItem({deptno: 232});

    result = await departmentService.getCount();
    console.log(result);
  } catch (e) {
    console.error(e);
  } finally {
    DBPool.close();
  }
})();