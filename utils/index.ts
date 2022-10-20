/*
 * @Author: BuXiongYu
 * @Date: 2022-10-19 22:06:52
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2022-10-20 22:22:21
 * @Description: 工具函数
 */
import degit from 'degit'
import fs from 'fs-extra'
import 'zx/globals'
import path from 'path'
import { cwd } from 'node:process';
import pc from 'picocolors'
import consola from 'consola'

// 下载远端仓库
export const cloneRemoteRepo = (projectName: string, selectedProgram: string) => {
  const emitter = degit('https://github.com/trojan0523/vite-skeleton', {
    cache: true,
    force: true,
    verbose: true,
  })

  emitter.on('info', info => {
    if (info.code === 'SUCCESS') {
      consola.success(`project ${info.repo.user}/${info.repo.name} cloned ${pc.yellow('success')}`)
    }
  })

  emitter.clone(`__${projectName}`).then(async () => {
    await handleSelectedProgram(projectName, selectedProgram);
    consola.success('project created successful')
    console.log(`
      First  Step: ${pc.red('cd')} ${pc.gray(projectName)}
      Second Step: ${pc.green('pnpm i')}
      Third  Step: ${pc.yellow('pnpm run start:dev')}
      `)
  });
}

/**
 * 取出选择路径项目模板
 * @param projectName 项目名称
 * @param selectedPath 拉下来的monorepo模板仓的克隆选项
 */
export const handleSelectedProgram = async (projectName: string, selectedPath: string) => {
  const projectPath = fixedToRelativePath('/')
  // judge directory path exist status and create directory based on what you type for the project name
  if (hasDir(path.join(projectPath, `${projectName}`))) {
    await $`rm -rf ./__${projectName}`
    consola.error('directory path existed, please retype the project name as the directory path')
    process.exit(0)
  } else {
    await $`mkdir ${projectName}`
  }
  // copy selectedPath program
  await $`cp -r  ${projectPath}__${projectName}/apps/${selectedPath}/ ${projectName}`
  await $`rm -rf ./__${projectName}`
}

/**
 * 根据传入的相对跟目录路径计算绝对路径
 * @param {string} pathname 相对路径
 * @returns 绝对路径
 */
 function fixedToRelativePath (pathname) {
  return path.join(cwd(), pathname)
}

function hasDir (projectPath: string) {
  return fs.existsSync(projectPath)
}
