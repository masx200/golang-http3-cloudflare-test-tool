# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2026/2/3 19:53:00
- **数据来源**: connectivity_results-20260203-195300.json
- **总测试数**: 433
- **失败测试数**: 3
- **成功测试数**: 430
- **失败率**: 0.69%
- **平均延迟**: 85.43ms
- **最小延迟**: 41ms
- **最大延迟**: 683ms

## 🌐 当前测试环境信息

- **获取时间**: 2026/2/3 19:53:00
- **IP地址**: 2a09:bac1:76a0:c8::3c0:39
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
| 28 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 97 | huxley.ns.cloudflare.com | 108.162.195.188 | IPv4 | none | N/A | 0 | N/A | dial tcp 108.162.195.188:443: i/o timeout |
| 368 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |

### 📈 错误分析总结

#### 主错误类型分布

- **连接超时**: 3 次 (100.0%)

#### 错误模式分析

**超时集中度分析**: 共有 3 次超时，主要集中在IP段 198.41（1 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 3 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: 所有失败的测试都使用IPv4，IPv6连接可能更稳定或目标服务器的IPv6配置更好



---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|
| 61 | ipv4.ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 297 | ip.gs | 2606:4700:3035::ac43:a01c | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 82 | icook.hk | 2606:4700:3037::ac43:a168 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 200 | xn--b6gac.eu.org | 172.67.153.253 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 269 | time.is | 2606:4700:20::681a:c36 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 280 | 104.16.61.163 | 104.16.61.163 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 304 | otto.ns.cloudflare.com | 2a06:98c1:50::ac40:2387 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 50 | ipinfo.in | 2606:4700:3031::6815:1581 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 56 | steamdb.info | 104.20.34.212 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 59 | steamdb.info | 2606:4700:10::ac42:affa | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 111 | yx-auto.pages.dev | 172.66.47.112 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 150 | toy-people.com | 172.67.72.18 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 12 | www.gov.ua | 2606:4700:3033::ac43:d17f | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 15 | www.ipget.net | 2606:4700:3031::ac43:cf1a | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 16 | www.ipget.net | 2606:4700:3036::6815:fd4 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 54 | cf.0sm.com | 2606:4700:3032::6815:785 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 96 | www.okcupid.com | 104.17.48.63 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 222 | cmcc.877774.xyz | 104.16.148.4 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 277 | rustam.ns.cloudflare.com | 2606:4700:58::a29f:2c94 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 3 | www.7749tv.com | 104.24.211.67 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 19 | www.pcmag.com | 2606:4700::6810:1576 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 157 | zread.ai | 2606:4700:3033::6815:4cf0 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 239 | cf.090227.xyz | 172.64.144.82 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 426 | japan.com | 2606:4700:20::ac43:465c | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 55 | cf.0sm.com | 2606:4700:3037::ac43:bb91 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 83 | cu.877774.xyz | 172.64.145.202 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 107 | www.hugedomains.com | 2606:4700:20::681a:625 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 110 | yx-auto.pages.dev | 172.66.44.144 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 112 | yx-auto.pages.dev | 2606:4700:310c::ac42:2f70 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 293 | ip.sb | 2606:4700:20::681a:d1f | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 298 | ip.gs | 2606:4700:3036::6815:eb0 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 309 | singapore.com | 2606:4700:20::ac43:4bc2 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 411 | www.wto.org | 2606:4700:4406::ac40:9242 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 5 | comicabc.com | 104.21.64.10 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 151 | toy-people.com | 2606:4700:20::681a:324 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 152 | toy-people.com | 2606:4700:20::ac43:4812 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 204 | cf.zhetengsha.eu.org | 172.64.144.82 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 209 | cmcc.877774.xyz | 104.16.148.244 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 216 | cmcc.877774.xyz | 104.16.148.10 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 291 | ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 7 | comicabc.com | 2606:4700:3036::6815:400a | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 62 | ipv4.ip.sb | 104.26.12.31 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 134 | freeyx.cloudflare88.eu.org | 141.101.120.232 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 181 | www.whatismyip.com | 172.67.69.129 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 257 | www.ipchicken.com | 104.26.6.112 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 286 | benedict.ns.cloudflare.com | 2606:4700:58::a29f:2ccd | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 306 | singapore.com | 104.26.12.140 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 311 | local-aria2-webui.masx200.ddns-ip.net | 172.67.157.182 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 322 | [2606:4700:964f::6e2c:588e] | 2606:4700:964f::6e2c:588e | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 25 | trevor.ns.cloudflare.com | 2803:f800:50::6ca2:c39a | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 27 | cfip.xxxxxxxx.tk | 190.93.244.201 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 47 | 104.18.37.13 | 104.18.37.13 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 84 | cu.877774.xyz | 104.18.42.54 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 91 | www.visa.com.sg | 104.18.13.229 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 116 | cf.877771.xyz | 2606:4700:3033::ac43:98b7 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 153 | toy-people.com | 2606:4700:20::681a:224 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 156 | zread.ai | 2606:4700:3032::ac43:ca4e | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 174 | cris.ns.cloudflare.com | 2a06:98c1:50::ac40:23ca | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 183 | www.whatismyip.com | 2606:4700:20::681a:c17 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 210 | cmcc.877774.xyz | 104.16.149.3 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 217 | cmcc.877774.xyz | 104.16.149.1 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 343 | dnschecker.org | 172.67.73.216 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 399 | 172.67.181.209 | 172.67.181.209 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 423 | japan.com | 104.26.4.60 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 11 | www.gov.ua | 2606:4700:3031::6815:1748 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 43 | 172.67.75.172 | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 75 | ct.877774.xyz | 172.64.229.174 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 76 | 104.18.254.88 | 104.18.254.88 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 92 | www.okcupid.com | 104.18.160.63 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 93 | www.okcupid.com | 104.16.144.63 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 123 | sullivan.ns.cloudflare.com | 2a06:98c1:50::ac40:23a1 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 155 | zread.ai | 104.21.76.240 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 177 | asia.877774.xyz | 104.16.211.153 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 212 | cmcc.877774.xyz | 104.16.148.2 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 231 | cmcc.877774.xyz | 104.16.148.8 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 305 | singapore.com | 172.67.75.194 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 308 | singapore.com | 2606:4700:20::681a:c8c | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 324 | whatismyipaddress.com | 104.19.223.79 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 345 | dnschecker.org | 104.26.7.89 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 364 | tasteatlas.com | 104.17.36.105 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 383 | icook.tw | 2606:4700:10::6814:1c4a | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 390 | ifconfig.co | 2606:4700:3037::6815:365b | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 397 | www.digitalocean.com | 2606:4700::6813:ad44 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 6 | comicabc.com | 172.67.174.21 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 44 | shopify.com | 23.227.38.33 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 68 | ct.877774.xyz | 172.64.229.195 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 70 | ct.877774.xyz | 172.64.229.217 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 73 | ct.877774.xyz | 172.64.229.185 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 89 | www.visa.cn | 162.159.153.2 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 154 | zread.ai | 172.67.202.78 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 198 | saas.sin.fan | 162.159.36.20 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 273 | palera.in | 2606:4700:3035::6815:3a48 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 310 | singapore.com | 2606:4700:20::681a:d8c | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 321 | www.visa.com.hk | 104.18.21.69 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 330 | [2606:4700:440b::3e6e:5f06] | 2606:4700:440b::3e6e:5f06 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 385 | 104.18.78.214 | 104.18.78.214 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 415 | stock.hostmonit.com | 2606:4700:3033::ac43:bbfb | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 13 | www.ipget.net | 172.67.207.26 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 31 | iplocation.io | 104.26.10.222 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 34 | iplocation.io | 2606:4700:20::681a:ade | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 49 条记录
- **快 (50-100ms)**: 51 条记录
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
