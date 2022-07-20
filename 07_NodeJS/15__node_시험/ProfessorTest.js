import DBPool from "./helper/DBPool.js";
import professorService from "./services/ProfessorService.js";

(async () => {
  try {
    let result = await professorService.getList();
    console.log('getList: ', result);

    result = await professorService.getItem({profno: 9913});
    console.log('getItem: ', result);

    result = await professorService.addItem({name: '나교수', userid: 'test123', position: '조교수', sal: 320, hiredate: '2022-07-18 00:00:00', comm: null, deptno: 202});
    console.log('addItem: ', result);
    
    result = await professorService.editItem({profno: 9913, name: '너교수', userid: 'test1234', position: '조조교수', sal: 320, hiredate: '2022-07-18 00:00:00', comm: null, deptno: 202});
    console.log('editItem: ', result);

    await professorService.deleteItem({profno: 9913});

    result = await professorService.getCount();
    console.log(result);
  } catch (e) {
    console.error(e);
  } finally {
    DBPool.close();
  }
})();