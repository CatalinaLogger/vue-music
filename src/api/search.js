import jsonp from 'common/js/jsonp'
import {commonParams, options} from 'api/config'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    platform: 'h5',
    needNewCode: '1'
  })

  return jsonp(url, data, options)
}

export function search(query, page, zhida, perpage) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

  const data = Object.assign({}, commonParams, {
    perpage,
    w: query,
    p: page,
    catZhida: zhida ? 1 : 0,
    zhidaqu: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    n: perpage,
    remoteplace: 'txt.mqq.all',
    uid: 0,
    needNewCode: 1,
    platform: 'h5',
    g_tk: 5318
  })

  return jsonp(url, data, options)
}