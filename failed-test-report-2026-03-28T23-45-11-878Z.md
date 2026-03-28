# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2026/3/28 23:45:11
- **数据来源**: connectivity_results-20260328-234511.json
- **总测试数**: 432
- **失败测试数**: 2
- **成功测试数**: 430
- **失败率**: 0.46%
- **平均延迟**: 54.06ms
- **最小延迟**: 28ms
- **最大延迟**: 962ms

## 🌐 当前测试环境信息

- **获取时间**: 2026/3/28 23:45:11
- **IP地址**: 2a09:bac6:d680:25a5::3c0:e
- **国家/地区**: United States (US)
- **ASN**: AS13335
- **网络组织**: CLOUDFLARENET
- **网络域名**: cloudflare.com
- **大洲**: North America (NA)
- **地理坐标**: 37.751, -97.822
- **时区**: America/Chicago
- **数据源**: combined

---

---

## 失败测试详情

### 📊 错误类型统计

- **连接超时: I/O超时**: 2 次 (100.0%)

### 🔍 按错误类型分类的失败测试详情

#### 连接超时: I/O超时 (2 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 32 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 368 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |

### 📈 错误分析总结

#### 主错误类型分布

- **连接超时**: 2 次 (100.0%)

#### 错误模式分析

**超时集中度分析**: 共有 2 次超时，主要集中在IP段 198.41（1 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 2 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: 所有失败的测试都使用IPv4，IPv6连接可能更稳定或目标服务器的IPv6配置更好



---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|
| 43 | ipv4.ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 28 | cloudflare |
| 345 | dnschecker.org | 2606:4700:20::681a:759 | IPv6 | h2 | ✅ 成功 | 31 | cloudflare |
| 80 | icook.hk | 2606:4700:3031::6815:5ad2 | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 27 | cf.0sm.com | 2606:4700:3037::ac43:bb91 | IPv6 | h2 | ✅ 成功 | 33 | cloudflare |
| 138 | pranab.ns.cloudflare.com | 2a06:98c1:50::ac40:23c7 | IPv6 | h2 | ✅ 成功 | 33 | cloudflare |
| 23 | steamdb.info | 2606:4700:10::ac42:affa | IPv6 | h2 | ✅ 成功 | 35 | cloudflare |
| 77 | icook.hk | 104.21.90.210 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 304 | singapore.com | 104.26.12.140 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 378 | [2606:4700:83be::11:74f] | 2606:4700:83be::11:74f | IPv6 | h2 | ✅ 成功 | 35 | cloudflare |
| 408 | www.wto.org | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 409 | www.wto.org | 2a06:98c1:3102::6812:29be | IPv6 | h2 | ✅ 成功 | 35 | cloudflare |
| 422 | japan.com | 104.26.5.60 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 42 | ipv4.ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 69 | iplocation.io | 172.67.70.100 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 85 | trevor.ns.cloudflare.com | 2803:f800:50::6ca2:c39a | IPv6 | h2 | ✅ 成功 | 36 | cloudflare |
| 103 | www.okcupid.com | 104.16.239.254 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 136 | pranab.ns.cloudflare.com | 172.64.35.199 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 192 | saas.sin.fan | 162.159.36.5 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 298 | otto.ns.cloudflare.com | 172.64.35.135 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 306 | singapore.com | 104.26.13.140 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 363 | tasteatlas.com | 104.17.37.105 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 367 | 104.17.142.12 | 104.17.142.12 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 375 | 104.18.37.40 | 104.18.37.40 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 413 | stock.hostmonit.com | 2606:4700:3037::6815:7c1 | IPv6 | h2 | ✅ 成功 | 36 | cloudflare |
| 20 | ipinfo.in | 2606:4700:3037::ac43:c6cb | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 22 | steamdb.info | 172.66.175.250 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 41 | ipv4.ip.sb | 104.26.12.31 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 68 | cu.877774.xyz | 172.64.145.202 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 70 | iplocation.io | 104.26.10.222 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 74 | iplocation.io | 2606:4700:20::681a:ade | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 76 | www.4chan.org | 104.16.229.229 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 96 | www.visa.cn | 162.159.152.2 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 105 | www.hugedomains.com | 104.26.7.37 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 109 | www.hugedomains.com | 2606:4700:20::681a:625 | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 184 | www.whatismyip.com | 104.26.12.23 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 219 | cmcc.877774.xyz | 104.16.148.244 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 227 | xn--b6gac.eu.org | 2606:4700:3035::6815:5a4e | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 239 | cf.090227.xyz | 2a06:98c1:3101::ac40:919e | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 270 | palera.in | 104.21.58.72 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 286 | benedict.ns.cloudflare.com | 2a06:98c1:50::ac40:23cd | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 296 | ip.gs | 2606:4700:3036::6815:eb0 | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 301 | otto.ns.cloudflare.com | 2a06:98c1:50::ac40:2387 | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 308 | singapore.com | 2606:4700:20::ac43:4bc2 | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 328 | 162.159.133.85 | 162.159.133.85 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 332 | cf.877774.xyz | 2606:4700:4406::ac40:9242 | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 334 | ashton.ns.cloudflare.com | 108.162.195.173 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 383 | 104.26.13.31 | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 387 | www.digitalocean.com | 104.19.174.68 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 392 | eur.877774.xyz | 104.21.47.209 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 410 | www.wto.org | 2606:4700:4406::ac40:9242 | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 411 | stock.hostmonit.com | 172.67.187.251 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 424 | japan.com | 2606:4700:20::681a:43c | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 11 | www.ipget.net | 2606:4700:3036::6815:fd4 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 44 | 172.67.75.172 | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 67 | cu.877774.xyz | 104.18.42.54 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 98 | www.visa.com.sg | 104.18.12.229 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 101 | www.okcupid.com | 104.16.144.63 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 104 | www.okcupid.com | 104.17.48.63 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 115 | yx-auto.pages.dev | 172.66.44.144 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 117 | yx-auto.pages.dev | 2606:4700:310c::ac42:2f70 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 125 | freeyx.cloudflare88.eu.org | 172.64.146.198 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 128 | craig.ns.cloudflare.com | 162.159.44.192 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 130 | craig.ns.cloudflare.com | 2a06:98c1:50::ac40:23c0 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 132 | na.877774.xyz | 104.18.38.235 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 133 | na.877774.xyz | 104.18.187.25 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 148 | toy-people.com | 104.26.3.36 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 151 | toy-people.com | 2606:4700:20::ac43:4812 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 152 | toy-people.com | 2606:4700:20::681a:224 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 164 | decker.ns.cloudflare.com | 2803:f800:50::6ca2:c39b | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 172 | 104.16.223.179 | 104.16.223.179 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 175 | dylan.ns.cloudflare.com | 108.162.195.187 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 182 | cloudflare-ip.mofashi.ltd | 2606:4700:3037::6815:48e9 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 195 | bestcf.030101.xyz | 104.17.185.207 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 211 | cmcc.877774.xyz | 104.16.149.6 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 216 | cmcc.877774.xyz | 104.16.149.9 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 226 | xn--b6gac.eu.org | 172.67.153.253 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 228 | xn--b6gac.eu.org | 2606:4700:3037::ac43:99fd | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 229 | cf.zhetengsha.eu.org | 104.18.35.15 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 233 | fbi.gov | 104.16.148.244 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 236 | fbi.gov | 2606:4700::6810:95f4 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 240 | cf.090227.xyz | 2a06:98c1:3108::6812:2a62 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 244 | braden.ns.cloudflare.com | 172.64.35.169 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 247 | braden.ns.cloudflare.com | 2a06:98c1:50::ac40:23a9 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 262 | moura.ns.cloudflare.com | 2803:f800:50::6ca2:c3d9 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 263 | time.is | 104.26.12.54 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 266 | time.is | 2606:4700:20::ac43:449d | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 268 | time.is | 2606:4700:20::681a:c36 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 271 | palera.in | 2606:4700:3035::6815:3a48 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 284 | benedict.ns.cloudflare.com | 2606:4700:58::a29f:2ccd | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 287 | 104.17.68.85 | 104.17.68.85 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 288 | ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 291 | ip.sb | 2606:4700:20::681a:c1f | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 354 | gamer.com.tw | 104.18.2.197 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 358 | uriah.ns.cloudflare.com | 2606:4700:58::a29f:2cc2 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 359 | uriah.ns.cloudflare.com | 2803:f800:50::6ca2:c3c2 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 362 | [2606:4700:4408::18c5:3304] | 2606:4700:4408::18c5:3304 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 366 | tasteatlas.com | 2606:4700::6811:2569 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 381 | icook.tw | 2606:4700:10::ac42:9e73 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 388 | www.digitalocean.com | 104.19.173.68 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 393 | eur.877774.xyz | 104.21.26.150 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 100 条记录
- **快 (50-100ms)**: 0 条记录
- **正常 (100-200ms)**: 0 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录


---

## 详细分析

### 按IP版本统计
- **IPv4 失败**: 2 次
- **IPv6 失败**: 0 次

### 按协议统计

- **none**: 2 次失败


---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

*此报告由 HTTP/3 连接测试报告生成器自动生成*
