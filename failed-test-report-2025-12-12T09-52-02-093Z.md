# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/12 09:52:02
- **数据来源**: connectivity_results-20251212-095201.json
- **总测试数**: 459
- **失败测试数**: 2
- **成功测试数**: 457
- **失败率**: 0.44%
- **平均延迟**: 54.72ms
- **最小延迟**: 34ms
- **最大延迟**: 961ms

## 🌐 当前测试环境信息

- **获取时间**: 2025/12/12 09:52:02
- **IP地址**: 2a09:bac5:7970:25a5::3c0:3b
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

- **连接超时: I/O超时**: 2 次 (100.0%)

### 🔍 按错误类型分类的失败测试详情

#### 连接超时: I/O超时 (2 次测试)

| 序号 | 主机/域名        | 目标IP         | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息                                 |
| ---- | ---------------- | -------------- | ------ | ---- | ------ | -------- | ------ | ---------------------------------------- |
| 16   | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4   | none | N/A    | 0        | N/A    | dial tcp 198.41.212.130:443: i/o timeout |
| 389  | 172.64.201.25    | 172.64.201.25  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.64.201.25:443: i/o timeout  |

### 📈 错误分析总结

#### 主错误类型分布

- **连接超时**: 2 次 (100.0%)

#### 错误模式分析

**超时集中度分析**: 共有 2 次超时，主要集中在IP段 198.41（1
次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 2 次失败是因为协议协商失败（protocol:
none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**:
所有失败的测试都使用IPv4，IPv6连接可能更稳定或目标服务器的IPv6配置更好

---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名                                              | 目标IP                    | IP版本 | 协议 | 状态    | 延迟(ms) | 服务器     |
| ---- | ------------------------------------------------------ | ------------------------- | ------ | ---- | ------- | -------- | ---------- |
| 359  | cf.877774.xyz                                          | 2a06:98c1:3102::6812:29be | IPv6   | h2   | ✅ 成功 | 34       | cloudflare |
| 432  | www.wto.org                                            | 104.18.41.190             | IPv4   | h2   | ✅ 成功 | 34       | cloudflare |
| 438  | stock.hostmonit.com                                    | 2606:4700:3037::6815:7c1  | IPv6   | h2   | ✅ 成功 | 34       | cloudflare |
| 46   | ipv4.ip.sb                                             | 104.26.13.31              | IPv4   | h2   | ✅ 成功 | 35       | cloudflare |
| 110  | local-aria2-webui.masx200.ddns-ip.net                  | 2606:4700:3031::ac43:9db6 | IPv6   | h2   | ✅ 成功 | 35       | cloudflare |
| 125  | cf.877771.xyz                                          | 2606:4700:3033::ac43:98b7 | IPv6   | h2   | ✅ 成功 | 35       | cloudflare |
| 245  | fbi.gov                                                | 104.16.149.244            | IPv4   | h2   | ✅ 成功 | 35       | cloudflare |
| 282  | time.is                                                | 2606:4700:20::ac43:449d   | IPv6   | h2   | ✅ 成功 | 35       | cloudflare |
| 303  | ip.sb                                                  | 104.26.12.31              | IPv4   | h2   | ✅ 成功 | 35       | cloudflare |
| 319  | singapore.com                                          | 104.26.12.140             | IPv4   | h2   | ✅ 成功 | 35       | cloudflare |
| 321  | singapore.com                                          | 2606:4700:20::681a:d8c    | IPv6   | h2   | ✅ 成功 | 35       | cloudflare |
| 377  | yx-auto.pages.dev | 2606:4700:3033::ac43:a162 | IPv6   | h2   | ✅ 成功 | 35       | cloudflare |
| 406  | 104.18.78.214                                          | 104.18.78.214             | IPv4   | h2   | ✅ 成功 | 35       | cloudflare |
| 429  | ifconfig.co                                            | 2606:4700:3030::ac43:a86a | IPv6   | h2   | ✅ 成功 | 35       | cloudflare |
| 437  | stock.hostmonit.com                                    | 104.21.7.193              | IPv4   | h2   | ✅ 成功 | 35       | cloudflare |
| 448  | japan.com                                              | 172.67.70.92              | IPv4   | h2   | ✅ 成功 | 35       | cloudflare |
| 452  | japan.com                                              | 2606:4700:20::681a:53c    | IPv6   | h2   | ✅ 成功 | 35       | cloudflare |
| 45   | ipv4.ip.sb                                             | 104.26.12.31              | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 47   | shopify.com                                            | 23.227.38.33              | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 49   | steamdb.info                                           | 172.66.175.250            | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 55   | ipinfo.in                                              | 2606:4700:3031::6815:1581 | IPv6   | h2   | ✅ 成功 | 36       | cloudflare |
| 82   | iplocation.io                                          | 104.26.11.222             | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 139  | cu.877774.xyz                                          | 104.26.4.117              | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 142  | cu.877774.xyz                                          | 104.26.4.111              | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 150  | freeyx.cloudflare88.eu.org                             | 141.101.120.224           | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 177  | toy-people.com                                         | 172.67.72.18              | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 192  | www.whatismyip.com                                     | 2606:4700:20::681a:c17    | IPv6   | h2   | ✅ 成功 | 36       | cloudflare |
| 227  | cmcc.877774.xyz                                        | 104.16.149.4              | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 246  | fbi.gov                                                | 104.16.148.244            | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 266  | www.glassdoor.com                                      | 104.17.64.70              | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 291  | palera.in                                              | 104.21.58.72              | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 307  | ip.sb                                                  | 2606:4700:20::681a:d1f    | IPv6   | h2   | ✅ 成功 | 36       | cloudflare |
| 309  | yx-auto.pages.dev                                      | 104.21.14.41              | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 318  | singapore.com                                          | 172.67.75.194             | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 322  | singapore.com                                          | 2606:4700:20::681a:c8c    | IPv6   | h2   | ✅ 成功 | 36       | cloudflare |
| 338  | 104.18.14.76                                           | 104.18.14.76              | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 343  | yx-auto.pages.dev                                      | 2606:4700:310c::ac42:2f70 | IPv6   | h2   | ✅ 成功 | 36       | cloudflare |
| 382  | tasteatlas.com                                         | 104.17.37.105             | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 390  | 104.17.142.12                                          | 104.17.142.12             | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 394  | 104.18.37.40                                           | 104.18.37.40              | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 398  | icook.tw                                               | 2606:4700:10::ac42:9e73   | IPv6   | h2   | ✅ 成功 | 36       | cloudflare |
| 401  | 104.26.13.31                                           | 104.26.13.31              | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 408  | eur.877774.xyz                                         | 104.21.26.150             | IPv4   | h2   | ✅ 成功 | 36       | cloudflare |
| 430  | ifconfig.co                                            | 2606:4700:3037::6815:365b | IPv6   | h2   | ✅ 成功 | 36       | cloudflare |
| 434  | www.wto.org                                            | 2606:4700:4406::ac40:9242 | IPv6   | h2   | ✅ 成功 | 36       | cloudflare |
| 451  | japan.com                                              | 2606:4700:20::681a:43c    | IPv6   | h2   | ✅ 成功 | 36       | cloudflare |
| 8    | www.ipget.net                                          | 172.67.207.26             | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 14   | yx-auto.pages.dev                          | 2606:4700:3031::6815:49fa | IPv6   | h2   | ✅ 成功 | 37       | cloudflare |
| 15   | yx-auto.pages.dev                          | 2606:4700:3034::ac43:97cf | IPv6   | h2   | ✅ 成功 | 37       | cloudflare |
| 63   | ct.877774.xyz                                          | 172.64.229.185            | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 70   | 104.26.6.112                                           | 104.26.6.112              | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 81   | iplocation.io                                          | 172.67.70.100             | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 85   | iplocation.io                                          | 2606:4700:20::681a:ade    | IPv6   | h2   | ✅ 成功 | 37       | cloudflare |
| 90   | icook.hk                                               | 104.21.90.210             | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 104  | www.okcupid.com                                        | 104.16.239.254            | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 107  | www.okcupid.com                                        | 104.16.144.63             | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 146  | na.877774.xyz                                          | 104.18.38.235             | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 178  | toy-people.com                                         | 2606:4700:20::681a:324    | IPv6   | h2   | ✅ 成功 | 37       | cloudflare |
| 190  | www.whatismyip.com                                     | 172.67.69.129             | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 191  | www.whatismyip.com                                     | 104.26.13.23              | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 210  | cmcc.877774.xyz                                        | 104.16.149.244            | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 213  | cmcc.877774.xyz                                        | 104.16.148.3              | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 215  | cmcc.877774.xyz                                        | 104.16.148.5              | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 240  | cf.zhetengsha.eu.org                                   | 2a06:98c1:3101::ac40:919e | IPv6   | h2   | ✅ 成功 | 37       | cloudflare |
| 248  | fbi.gov                                                | 2606:4700::6810:94f4      | IPv6   | h2   | ✅ 成功 | 37       | cloudflare |
| 253  | cf.090227.xyz                                          | 2a06:98c1:3108::6812:2a62 | IPv6   | h2   | ✅ 成功 | 37       | cloudflare |
| 267  | www.glassdoor.com                                      | 104.16.25.46              | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 270  | www.ipchicken.com                                      | 104.26.7.112              | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 302  | ip.sb                                                  | 104.26.13.31              | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 310  | yx-auto.pages.dev                                      | 2606:4700:3031::ac43:9db6 | IPv6   | h2   | ✅ 成功 | 37       | cloudflare |
| 317  | singapore.com                                          | 104.26.13.140             | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 330  | silkbook.com                                           | 172.67.75.208             | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 332  | silkbook.com                                           | 104.26.9.160              | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 336  | [2606:4700:964f::6e2c:588e]                            | 2606:4700:964f::6e2c:588e | IPv6   | h2   | ✅ 成功 | 37       | cloudflare |
| 341  | yx-auto.pages.dev                                      | 172.66.47.112             | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 354  | dnschecker.org                                         | 2606:4700:20::681a:759    | IPv6   | h2   | ✅ 成功 | 37       | cloudflare |
| 374  | yx-auto.pages.dev | 172.67.161.98             | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 379  | gamer.com.tw                                           | 104.18.2.197              | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 396  | icook.tw                                               | 104.20.28.74              | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 409  | eur.877774.xyz                                         | 104.21.47.209             | IPv4   | h2   | ✅ 成功 | 37       | cloudflare |
| 422  | damien.ns.cloudflare.com                               | 2606:4700:58::a29f:2ca8   | IPv6   | h2   | ✅ 成功 | 37       | cloudflare |
| 439  | stock.hostmonit.com                                    | 2606:4700:3033::ac43:bbfb | IPv6   | h2   | ✅ 成功 | 37       | cloudflare |
| 13   | yx-auto.pages.dev                          | 104.21.73.250             | IPv4   | h2   | ✅ 成功 | 38       | cloudflare |
| 38   | www.pcmag.com                                          | 104.16.21.118             | IPv4   | h2   | ✅ 成功 | 38       | cloudflare |
| 51   | steamdb.info                                           | 2606:4700:10::6814:22d4   | IPv6   | h2   | ✅ 成功 | 38       | cloudflare |
| 52   | ipinfo.in                                              | 172.67.198.203            | IPv4   | h2   | ✅ 成功 | 38       | cloudflare |
| 62   | ct.877774.xyz                                          | 172.64.229.174            | IPv4   | h2   | ✅ 成功 | 38       | cloudflare |
| 69   | ct.877774.xyz                                          | 172.64.229.173            | IPv4   | h2   | ✅ 成功 | 38       | cloudflare |
| 73   | www.gov.ua                                             | 104.21.23.72              | IPv4   | h2   | ✅ 成功 | 38       | cloudflare |
| 79   | 104.18.254.88                                          | 104.18.254.88             | IPv4   | h2   | ✅ 成功 | 38       | cloudflare |
| 84   | iplocation.io                                          | 2606:4700:20::ac43:4664   | IPv6   | h2   | ✅ 成功 | 38       | cloudflare |
| 89   | www.4chan.org                                          | 104.16.229.229            | IPv4   | h2   | ✅ 成功 | 38       | cloudflare |
| 109  | local-aria2-webui.masx200.ddns-ip.net                  | 172.67.157.182            | IPv4   | h2   | ✅ 成功 | 38       | cloudflare |
| 137  | cu.877774.xyz                                          | 104.26.4.115              | IPv4   | h2   | ✅ 成功 | 38       | cloudflare |
| 148  | na.877774.xyz                                          | 104.19.74.233             | IPv4   | h2   | ✅ 成功 | 38       | cloudflare |
| 176  | toy-people.com                                         | 104.26.2.36               | IPv4   | h2   | ✅ 成功 | 38       | cloudflare |
| 187  | dylan.ns.cloudflare.com                                | 2a06:98c1:50::ac40:23bb   | IPv6   | h2   | ✅ 成功 | 38       | cloudflare |
| 193  | www.whatismyip.com                                     | 2606:4700:20::681a:d17    | IPv6   | h2   | ✅ 成功 | 38       | cloudflare |
| 196  | cloudflare-ip.mofashi.ltd                              | 188.114.97.3              | IPv4   | h2   | ✅ 成功 | 38       | cloudflare |
| 201  | asia.877774.xyz                                        | 104.17.142.146            | IPv4   | h2   | ✅ 成功 | 38       | cloudflare |

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

_此报告由 HTTP/3 连接测试报告生成器自动生成_
