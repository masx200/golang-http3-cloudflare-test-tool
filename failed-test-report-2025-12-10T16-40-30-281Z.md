# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/10 16:40:30
- **数据来源**: connectivity_results.json
- **总测试数**: 479
- **失败测试数**: 9
- **成功测试数**: 470
- **失败率**: 1.88%
- **平均延迟**: 109.17ms
- **最小延迟**: 75ms
- **最大延迟**: 824ms

---

## 失败测试详情

### 📊 错误类型统计

- **连接超时: I/O超时**: 8 次 (88.9%)
- **DNS解析错误: 其他DNS错误**: 1 次 (11.1%)

### 🔍 按错误类型分类的失败测试详情

#### 连接超时: I/O超时 (8 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 10 | 119.194.220.146 | 119.194.220.146 | IPv4 | none | N/A | 0 | N/A | dial tcp 119.194.220.146:443: i/o timeout |
| 98 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |
| 296 | 52.76.110.129 | 52.76.110.129 | IPv4 | none | N/A | 0 | N/A | dial tcp 52.76.110.129:443: i/o timeout |
| 303 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 315 | 121.188.182.190 | 121.188.182.190 | IPv4 | none | N/A | 0 | N/A | dial tcp 121.188.182.190:443: i/o timeout |
| 386 | 115.22.115.218 | 115.22.115.218 | IPv4 | none | N/A | 0 | N/A | dial tcp 115.22.115.218:443: i/o timeout |
| 405 | 111.171.108.67 | 111.171.108.67 | IPv4 | none | N/A | 0 | N/A | dial tcp 111.171.108.67:443: i/o timeout |
| 443 | 175.212.207.13 | 175.212.207.13 | IPv4 | none | N/A | 0 | N/A | dial tcp 175.212.207.13:443: i/o timeout |

#### DNS解析错误: 其他DNS错误 (1 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 230 | 168.138.184.172 | 168.138.184.172 | IPv4 | h2 | N/A | 0 | N/A | Get "https://local-aria2-webui.masx200.ddns-ip.net:443/": remote error: tls: unrecognized name |

### 📈 错误分析总结

#### 主错误类型分布

- **连接超时**: 8 次 (88.9%)
- **DNS解析错误**: 1 次 (11.1%)

#### 错误模式分析

**超时集中度分析**: 共有 8 次超时，主要集中在IP段 119.194（1 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 8 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: 所有失败的测试都使用IPv4，IPv6连接可能更稳定或目标服务器的IPv6配置更好



---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|| 174 | decker.ns.cloudflare.com | 2803:f800:50::6ca2:c39b | IPv6 | h2 | ✅ 成功 | 75 | cloudflare |
| 185 | yx-auto.pages.dev | 2606:4700:310c::ac42:2c90 | IPv6 | h2 | ✅ 成功 | 77 | cloudflare |
| 139 | xn--b6gac.eu.org | 2606:4700:3037::ac43:99fd | IPv6 | h2 | ✅ 成功 | 79 | cloudflare |
| 387 | cf.090227.xyz | 172.66.44.77 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 140 | 172.64.156.195 | 172.64.156.195 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 219 | singapore.com | 2606:4700:20::681a:c8c | IPv6 | h2 | ✅ 成功 | 81 | cloudflare |
| 314 | www.udemy.com | 2606:4700::6810:8eed | IPv6 | h2 | ✅ 成功 | 81 | cloudflare |
| 363 | time.is | 172.67.68.157 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 378 | asia.877774.xyz | 104.17.139.62 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 420 | bhr01erx45.inzjddnkdz.de5.net | 2606:4700:3034::ac43:97cf | IPv6 | h2 | ✅ 成功 | 81 | cloudflare |
| 435 | ifconfig.co | 172.67.168.106 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 15 | fbi.gov | 2606:4700::6810:94f4 | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 148 | uriah.ns.cloudflare.com | 162.159.44.194 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 198 | iplocation.io | 2606:4700:20::681a:ade | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 200 | iplocation.io | 2606:4700:20::ac43:4664 | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 205 | ip.sb | 104.26.12.31 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 226 | www.pcmag.com | 104.16.21.118 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 266 | cmcc.877774.xyz | 104.16.148.1 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 360 | cloudflare-ip.mofashi.ltd | 2606:4700:3037::6815:48e9 | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 467 | tasteatlas.com | 2606:4700::6811:2469 | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 26 | toy-people.com | 2606:4700:20::681a:324 | IPv6 | h2 | ✅ 成功 | 83 | cloudflare |
| 30 | julio.ns.cloudflare.com | 2606:4700:58::a29f:2cd1 | IPv6 | h2 | ✅ 成功 | 83 | cloudflare |
| 160 | www.whatismyip.com | 2606:4700:20::681a:c17 | IPv6 | h2 | ✅ 成功 | 83 | cloudflare |
| 233 | abdullah.ns.cloudflare.com | 108.162.195.203 | IPv4 | h2 | ✅ 成功 | 83 | cloudflare |
| 311 | www.udemy.com | 104.16.143.237 | IPv4 | h2 | ✅ 成功 | 83 | cloudflare |
| 345 | saas.sin.fan | 162.159.36.20 | IPv4 | h2 | ✅ 成功 | 83 | cloudflare |
| 350 | zread.ai | 2606:4700:3033::6815:4cf0 | IPv6 | h2 | ✅ 成功 | 83 | cloudflare |
| 365 | time.is | 2606:4700:20::ac43:449d | IPv6 | h2 | ✅ 成功 | 83 | cloudflare |
| 389 | cf.090227.xyz | 2606:4700:310c::ac42:2c4d | IPv6 | h2 | ✅ 成功 | 83 | cloudflare |
| 434 | japan.com | 2606:4700:20::681a:43c | IPv6 | h2 | ✅ 成功 | 83 | cloudflare |
| 80 | 172.64.157.120 | 172.64.157.120 | IPv4 | h2 | ✅ 成功 | 84 | cloudflare |
| 146 | sullivan.ns.cloudflare.com | 2a06:98c1:50::ac40:23a1 | IPv6 | h2 | ✅ 成功 | 84 | cloudflare |
| 190 | 172.67.181.209 | 172.67.181.209 | IPv4 | h2 | ✅ 成功 | 84 | cloudflare |
| 299 | cris.ns.cloudflare.com | 172.64.35.202 | IPv4 | h2 | ✅ 成功 | 84 | cloudflare |
| 326 | www.hugedomains.com | 2606:4700:20::ac43:46bf | IPv6 | h2 | ✅ 成功 | 84 | cloudflare |
| 335 | cf.0sm.com | 2606:4700:3037::ac43:bb91 | IPv6 | h2 | ✅ 成功 | 84 | cloudflare |
| 397 | cf.877771.xyz | 104.21.80.180 | IPv4 | h2 | ✅ 成功 | 84 | cloudflare |
| 416 | www.wto.org | 2606:4700:4406::ac40:9242 | IPv6 | h2 | ✅ 成功 | 84 | cloudflare |
| 451 | comicabc.com | 2606:4700:3036::6815:400a | IPv6 | h2 | ✅ 成功 | 84 | cloudflare |
| 16 | fbi.gov | 2606:4700::6810:95f4 | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 20 | cf.877774.xyz | 2606:4700:4406::ac40:9242 | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 36 | kyree.ns.cloudflare.com | 2606:4700:58::a29f:2ccf | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 105 | trevor.ns.cloudflare.com | 2a06:98c1:50::ac40:239a | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 120 | palera.in | 172.67.157.122 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 175 | decker.ns.cloudflare.com | 2a06:98c1:50::ac40:239b | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 184 | yx-auto.pages.dev | 2606:4700:310c::ac42:2f70 | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 187 | ipv4.ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 206 | ip.sb | 2606:4700:20::681a:c1f | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 216 | singapore.com | 104.26.12.140 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 254 | cmcc.877774.xyz | 104.16.149.2 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 257 | cmcc.877774.xyz | 104.16.149.5 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 262 | cmcc.877774.xyz | 104.16.149.10 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 279 | 104.26.13.31 | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 290 | www.visa.com.hk | 104.18.21.69 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 306 | cfip.xxxxxxxx.tk | 104.16.232.223 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 309 | cfip.xxxxxxxx.tk | 188.114.96.125 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 320 | www.okcupid.com | 104.16.239.254 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 327 | www.hugedomains.com | 2606:4700:20::681a:725 | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 357 | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3030::6815:e29 | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 375 | huxley.ns.cloudflare.com | 2a06:98c1:50::ac40:23bc | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 391 | icook.hk | 104.21.90.210 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 428 | 103.160.204.59 | 103.160.204.59 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 432 | japan.com | 2606:4700:20::ac43:465c | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 438 | ifconfig.co | 2606:4700:3030::ac43:a86a | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 441 | na.877774.xyz | 104.19.74.233 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 48 | benedict.ns.cloudflare.com | 2606:4700:58::a29f:2ccd | IPv6 | h2 | ✅ 成功 | 86 | cloudflare |
| 53 | bestcf.030101.xyz | 104.18.80.219 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 61 | lewis.ns.cloudflare.com | 2803:f800:50::6ca2:c39f | IPv6 | h2 | ✅ 成功 | 86 | cloudflare |
| 64 | ct.877774.xyz | 172.64.229.217 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 70 | ct.877774.xyz | 172.64.229.185 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 93 | craig.ns.cloudflare.com | 162.159.44.192 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 119 | palera.in | 104.21.58.72 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 130 | whatismyipaddress.com | 2606:4700::6813:df4f | IPv6 | h2 | ✅ 成功 | 86 | cloudflare |
| 132 | www.gov.ua | 104.21.23.72 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 158 | www.whatismyip.com | 104.26.13.23 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 194 | shopify.com | 23.227.38.33 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 215 | wilson.ns.cloudflare.com | 2a06:98c1:50::ac40:236e | IPv6 | h2 | ✅ 成功 | 86 | cloudflare |
| 217 | singapore.com | 104.26.13.140 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 243 | steamdb.info | 172.66.175.250 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 245 | steamdb.info | 2606:4700:10::6814:22d4 | IPv6 | h2 | ✅ 成功 | 86 | cloudflare |
| 322 | 104.16.45.84 | 104.16.45.84 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 332 | cf.0sm.com | 104.21.7.133 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 333 | cf.0sm.com | 172.67.187.145 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 334 | cf.0sm.com | 2606:4700:3032::6815:785 | IPv6 | h2 | ✅ 成功 | 86 | cloudflare |
| 351 | zread.ai | 2606:4700:3032::ac43:ca4e | IPv6 | h2 | ✅ 成功 | 86 | cloudflare |
| 390 | cf.090227.xyz | 2606:4700:310c::ac42:2fb3 | IPv6 | h2 | ✅ 成功 | 86 | cloudflare |
| 417 | www.wto.org | 2a06:98c1:3102::6812:29be | IPv6 | h2 | ✅ 成功 | 86 | cloudflare |
| 437 | ifconfig.co | 2606:4700:3037::6815:365b | IPv6 | h2 | ✅ 成功 | 86 | cloudflare |
| 444 | www.ipget.net | 104.21.15.212 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 446 | www.ipget.net | 2606:4700:3036::6815:fd4 | IPv6 | h2 | ✅ 成功 | 86 | cloudflare |
| 11 | 172.64.41.88 | 172.64.41.88 | IPv4 | h2 | ✅ 成功 | 87 | cloudflare |
| 44 | moura.ns.cloudflare.com | 2a06:98c1:50::ac40:23d9 | IPv6 | h2 | ✅ 成功 | 87 | cloudflare |
| 45 | benedict.ns.cloudflare.com | 108.162.195.205 | IPv4 | h2 | ✅ 成功 | 87 | cloudflare |
| 57 | lewis.ns.cloudflare.com | 108.162.195.159 | IPv4 | h2 | ✅ 成功 | 87 | cloudflare |
| 89 | braden.ns.cloudflare.com | 2606:4700:58::a29f:2ca9 | IPv6 | h2 | ✅ 成功 | 87 | cloudflare |
| 104 | trevor.ns.cloudflare.com | 2803:f800:50::6ca2:c39a | IPv6 | h2 | ✅ 成功 | 87 | cloudflare |
| 192 | gamer.com.tw | 104.18.3.197 | IPv4 | h2 | ✅ 成功 | 87 | cloudflare |
| 201 | www.visa.com.sg | 104.18.12.229 | IPv4 | h2 | ✅ 成功 | 87 | cloudflare |
| 250 | cf.zhetengsha.eu.org | 172.66.44.77 | IPv4 | h2 | ✅ 成功 | 87 | cloudflare |
| 317 | www.okcupid.com | 104.16.223.254 | IPv4 | h2 | ✅ 成功 | 87 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 0 条记录
- **快 (50-100ms)**: 100 条记录
- **正常 (100-200ms)**: 0 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录


---

## 详细分析

### 按IP版本统计
- **IPv4 失败**: 9 次
- **IPv6 失败**: 0 次

### 按协议统计

- **none**: 8 次失败
- **h2**: 1 次失败


---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

*此报告由 HTTP/3 连接测试报告生成器自动生成*
