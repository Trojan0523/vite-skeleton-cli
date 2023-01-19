/*
 * @Author: BuXiongYu
 * @Date: 2022-10-19 21:47:19
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2023-01-19 15:12:22
 * @Description: 激活主函数
 */
import { bootstrap } from './utils/prompt'
import { cloneRemoteRepo, cloneRemoteTypeScriptRepo } from './utils'

async function activate() {
  const promptsResult = await bootstrap()
  if (promptsResult.paths === 'typescript-template')
    await cloneRemoteTypeScriptRepo(promptsResult.project_name)

  else
    await cloneRemoteRepo(promptsResult.project_name, promptsResult.paths)
}

activate()
