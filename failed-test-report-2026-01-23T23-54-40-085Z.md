# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2026/1/23 23:54:40
- **数据来源**: connectivity_results-20260123-235439.json
- **总测试数**: 440
- **失败测试数**: 3
- **成功测试数**: 437
- **失败率**: 0.68%
- **平均延迟**: 65.40ms
- **最小延迟**: 32ms
- **最大延迟**: 988ms

## 🌐 当前测试环境信息

- **获取时间**: 2026/1/23 23:54:40
- **IP地址**: 2a09:bac5:7976:1cd2::2df:114
- **国家/地区**: United States (US)
- **ASN**: AS13335
- **网络组织**: CLOUDFLARENET
- **网络域名**: cloudflare.com
- **大洲**: North America (NA)
- **地理坐标**: 41.8874, -87.6318
- **时区**: America/Chicago
- **数据源**: combined

---

---

## 失败测试详情

### 📊 错误类型统计

- **连接超时: I/O超时**: 3 次 (100.0%)

### 🔍 按错误类型分类的失败测试详情

#### 连接超时: I/O超时 (3 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 54 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 196 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |
| 430 | lewis.ns.cloudflare.com | 172.64.35.159 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.35.159:443: i/o timeout |

### 📈 错误分析总结

#### 主错误类型分布

- **连接超时**: 3 次 (100.0%)

#### 错误模式分析

**超时集中度分析**: 共有 3 次超时，主要集中在IP段 172.64（2 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 3 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: 所有失败的测试都使用IPv4，IPv6连接可能更稳定或目标服务器的IPv6配置更好



---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|
| 59 | cf.0sm.com | 2606:4700:3032::6815:785 | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 361 | cf.090227.xyz | 2a06:98c1:310d::6812:2bae | IPv6 | h2 | ✅ 成功 | 33 | cloudflare |
| 55 | cfip.xxxxxxxx.tk | 104.16.232.223 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 247 | palera.in | 104.21.58.72 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 359 | cf.090227.xyz | 104.18.43.174 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 394 | eur.877774.xyz | 104.21.29.164 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 426 | japan.com | 2606:4700:20::ac43:465c | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 12 | www.ipget.net | 104.21.15.212 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 239 | cmcc.877774.xyz | 104.16.149.4 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 24 | time.is | 2606:4700:20::ac43:449d | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 90 | iplocation.io | 2606:4700:20::681a:ade | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 128 | www.hugedomains.com | 104.26.7.37 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 318 | cf.877774.xyz | 2a06:98c1:3102::6812:29be | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 376 | icook.tw | 2606:4700:10::6814:1c4a | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 393 | eur.877774.xyz | 104.21.26.150 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 21 | time.is | 104.26.13.54 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 22 | time.is | 2606:4700:20::681a:c36 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 23 | time.is | 2606:4700:20::681a:d36 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 260 | ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 261 | ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 296 | ashton.ns.cloudflare.com | 2606:4700:58::a29f:2cad | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 333 | asia.877774.xyz | 104.17.139.62 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 348 | xn--b6gac.eu.org | 2606:4700:3035::6815:5a4e | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 350 | cf.zhetengsha.eu.org | 172.64.144.82 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 365 | 104.18.37.40 | 104.18.37.40 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 380 | www.digitalocean.com | 2606:4700::6813:ad44 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 415 | www.wto.org | 2a06:98c1:3102::6812:29be | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 428 | japan.com | 2606:4700:20::681a:53c | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 5 | www.ipchicken.com | 172.67.68.101 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 8 | comicabc.com | 104.21.64.10 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 20 | time.is | 172.67.68.157 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 53 | cfip.xxxxxxxx.tk | 190.93.244.201 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 62 | ipv4.ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 94 | ct.877774.xyz | 172.64.229.195 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 99 | ct.877774.xyz | 172.64.229.173 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 193 | zread.ai | 172.67.202.78 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 216 | cmcc.877774.xyz | 104.16.149.7 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 281 | silkbook.com | 2606:4700:20::681a:9a0 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 300 | dnschecker.org | 2606:4700:20::ac43:49d8 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 343 | saas.sin.fan | 162.159.36.20 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 351 | cf.zhetengsha.eu.org | 2a06:98c1:3101::ac40:919e | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 381 | www.digitalocean.com | 2606:4700::6813:ae44 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 60 | ipv4.ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 67 | ipinfo.in | 172.67.198.203 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 73 | steamdb.info | 2606:4700:10::6814:22d4 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 102 | [2606:4700:8de6::5fa2:799e] | 2606:4700:8de6::5fa2:799e | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 130 | www.hugedomains.com | 2606:4700:20::681a:625 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 131 | www.hugedomains.com | 2606:4700:20::681a:725 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 157 | cu.877774.xyz | 104.26.4.115 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 169 | pranab.ns.cloudflare.com | 2a06:98c1:50::ac40:23c7 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 191 | decker.ns.cloudflare.com | 2a06:98c1:50::ac40:239b | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 280 | silkbook.com | 104.26.8.160 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 317 | cf.877774.xyz | 2606:4700:4406::ac40:9242 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 325 | tasteatlas.com | 104.17.36.105 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 327 | tasteatlas.com | 2606:4700::6811:2569 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 349 | cf.zhetengsha.eu.org | 104.18.43.174 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 374 | icook.tw | 104.20.28.74 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 392 | 172.67.181.209 | 172.67.181.209 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 9 | comicabc.com | 2606:4700:3030::ac43:ae15 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 10 | comicabc.com | 2606:4700:3036::6815:400a | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 14 | www.ipget.net | 2606:4700:3036::6815:fd4 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 15 | cf.877771.xyz | 172.67.152.183 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 19 | time.is | 104.26.12.54 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 170 | freeyx.cloudflare88.eu.org | 141.101.120.247 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 172 | freeyx.cloudflare88.eu.org | 2606:4700:3009:aa59:4b79:c982:d8f5:e853 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 183 | toy-people.com | 2606:4700:20::ac43:4812 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 200 | kyree.ns.cloudflare.com | 2803:f800:50::6ca2:c3cf | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 213 | www.whatismyip.com | 2606:4700:20::ac43:4581 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 227 | cmcc.877774.xyz | 104.16.148.5 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 243 | 104.16.61.163 | 104.16.61.163 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 248 | palera.in | 2606:4700:3032::ac43:9d7a | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 253 | ip.gs | 2606:4700:3035::ac43:a01c | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 264 | ip.sb | 2606:4700:20::ac43:4bac | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 302 | dnschecker.org | 2606:4700:20::681a:659 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 315 | cf.877774.xyz | 172.64.146.66 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 337 | [2606:4700:83be::11:74f] | 2606:4700:83be::11:74f | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 355 | fbi.gov | 2606:4700::6810:95f4 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 379 | www.digitalocean.com | 104.19.174.68 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 409 | damien.ns.cloudflare.com | 2606:4700:58::a29f:2ca8 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 411 | 104.19.175.123 | 104.19.175.123 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 413 | www.wto.org | 172.64.146.66 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 425 | japan.com | 172.67.70.92 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 51 | www.pcmag.com | 2606:4700::6810:1476 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 182 | toy-people.com | 104.26.3.36 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 219 | cmcc.877774.xyz | 104.16.149.10 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 273 | singapore.com | 104.26.12.140 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 276 | singapore.com | 2606:4700:20::681a:c8c | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 278 | silkbook.com | 104.26.9.160 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 290 | 162.159.133.85 | 162.159.133.85 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 312 | gamer.com.tw | 104.18.2.197 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 316 | cf.877774.xyz | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 346 | xn--b6gac.eu.org | 104.21.90.78 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 347 | xn--b6gac.eu.org | 2606:4700:3037::ac43:99fd | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 357 | [2606:4700:4408::18c5:3304] | 2606:4700:4408::18c5:3304 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 427 | japan.com | 2606:4700:20::681a:43c | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 6 | www.ipchicken.com | 104.26.6.112 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 30 | wilson.ns.cloudflare.com | 2a06:98c1:50::ac40:236e | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 68 | ipinfo.in | 2606:4700:3037::ac43:c6cb | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 107 | icook.hk | 2606:4700:3037::ac43:a168 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 119 | www.okcupid.com | 104.16.223.254 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 100 条记录
- **快 (50-100ms)**: 0 条记录
- **正常 (100-200ms)**: 0 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录


---

## 详细分析

### 按IP版本统计
- **IPv4 失败**: 3 次
- **IPv6 失败**: 0 次

### 按协议统计

- **none**: 3 次失败


---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

*此报告由 HTTP/3 连接测试报告生成器自动生成*
