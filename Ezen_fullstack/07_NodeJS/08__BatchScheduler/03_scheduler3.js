/** 
 * Crontab 스타일의 스케쥴 지정
 */

/** (1) 필요한 패키지 참조하기 */
import logger from "./helper/LogHelper.js";
import schedule from 'node-schedule';

/** (2) 매 분마다 수행 */
schedule.scheduleJob("* * * * *", () => logger.debug('1분에 한번씩 수행'));

/** (3) 매 분마다 수행 */
schedule.scheduleJob("15,45 * * * *", () => logger.debug('매 시 15,45분마다 수행'));

/** (4) 2분마다 수행 */
schedule.scheduleJob("*/2 * * * *", () => logger.debug('2분마다 한번씩 수행'));

logger.info("예약작업이 설정 되었습니다.");