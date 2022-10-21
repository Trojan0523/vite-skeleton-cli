/*
 * @Author: BuXiongYu
 * @Date: 2022-10-19 21:47:49
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2022-10-21 23:15:04
 * @Description: 用户选择界面
 */
import type { PromptObject } from 'prompts'
import prompts from 'prompts'
import pc from 'picocolors'
import consola from 'consola'
import { listenTriggerExit } from '.'

export const bootstrap = async () => {
  listenTriggerExit()
  const message: Array<PromptObject> = [
    {
      type: 'text',
      name: 'project_name',
      initial: 'project-name',
      message: '请输入项目名称',
    },
    {
      type: 'select',
      name: 'paths',
      message: '请选择需要写入文件夹',
      choices: [
        { title: 'vite-express', value: 'vite-express' },
        { title: 'vite-nest', value: 'vite-nest' },
      ],
      hint: '- Space to select. Return to submit',
    },
  ]
  const params = await prompts(message)
  consola.info(pc.blue(`项目名称: ${params.project_name}`))
  consola.info(pc.blue(`模板选项: ${params.paths}`))
  return params
}
