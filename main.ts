/*
 * @Author: BuXiongYu
 * @Date: 2022-10-19 21:47:19
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2022-10-20 11:54:54
 * @Description: 激活主函数
 */
import { bootstrap } from './utils/prompt';
import { cloneRemoteRepo } from './utils';

async function activate () {
  const promptsResult = await bootstrap();
  // const emitter
  await cloneRemoteRepo(promptsResult.project_name, promptsResult.paths);
}

activate();
