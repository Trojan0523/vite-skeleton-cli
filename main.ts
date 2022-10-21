/*
 * @Author: BuXiongYu
 * @Date: 2022-10-19 21:47:19
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2022-10-21 23:15:13
 * @Description: 激活主函数
 */
import { bootstrap } from './utils/prompt'
import { cloneRemoteRepo } from './utils'

async function activate() {
  const promptsResult = await bootstrap()
  await cloneRemoteRepo(promptsResult.project_name, promptsResult.paths)
}

activate()
