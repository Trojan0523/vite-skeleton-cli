/*
 * @Author: BuXiongYu
 * @Date: 2022-11-26 21:22:00
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2022-11-26 21:34:00
 * @Description: 统计build耗时
 */
import 'zx/globals'

export const bootstrap = async () => {
  const timer = new Date()
  await $`pnpm run build`
  console.log(`耗时: ${Date.now() - timer.getTime()}ms`)
}

bootstrap()
