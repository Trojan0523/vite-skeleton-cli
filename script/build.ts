/*
 * @Author: BuXiongYu
 * @Date: 2022-11-26 21:22:00
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2023-01-19 14:53:16
 * @Description: 统计build耗时
 */
import 'zx/globals'

export const bootstrap = async () => {
  const timer = new Date()
  await $`unbuild`
  // eslint-disable-next-line no-console
  console.log(`耗时: ${Date.now() - timer.getTime()}ms`)
}

bootstrap()
