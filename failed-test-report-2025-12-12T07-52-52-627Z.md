# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/12 07:52:52
- **数据来源**: connectivity_results-20251212-075252.json
- **总测试数**: 458
- **失败测试数**: 2
- **成功测试数**: 456
- **失败率**: 0.44%
- **平均延迟**: 77.76ms
- **最小延迟**: 59ms
- **最大延迟**: 592ms

## 🌐 当前测试环境信息

- **获取时间**: 2025/12/12 07:52:52
- **IP地址**: 2a09:bac1:76c0:260::f:3ba
- **国家/地区**: United States (US)
- **ASN**: AS13335
- **网络组织**: CLOUDFLARENET
- **网络域名**: cloudflare.com
- **大洲**: North America (NA)
- **地理坐标**: 41.6021, -93.6124
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
| 50   | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4   | none | N/A    | 0        | N/A    | dial tcp 198.41.212.130:443: i/o timeout |
| 382  | 172.64.201.25    | 172.64.201.25  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.64.201.25:443: i/o timeout  |

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

| 序号 | 主机/域名                                                             | 目标IP                               | IP版本 | 协议 | 状态    | 延迟(ms) | 服务器     |
| ---- | --------------------------------------------------------------------- | ------------------------------------ | ------ | ---- | ------- | -------- | ---------- |
| 15   | comicabc.com                                                          | 2606:4700:3030::ac43:ae15            | IPv6   | h2   | ✅ 成功 | 59       | cloudflare |
| 80   | 172.67.75.172                                                         | 172.67.75.172                        | IPv4   | h2   | ✅ 成功 | 60       | cloudflare |
| 103  | iplocation.io                                                         | 2606:4700:20::681a:ade               | IPv6   | h2   | ✅ 成功 | 60       | cloudflare |
| 351  | dnschecker.org                                                        | 2606:4700:20::681a:759               | IPv6   | h2   | ✅ 成功 | 60       | cloudflare |
| 377  | tasteatlas.com                                                        | 2606:4700::6811:2569                 | IPv6   | h2   | ✅ 成功 | 60       | cloudflare |
| 18   | www.ipget.net                                                         | 2606:4700:3031::ac43:cf1a            | IPv6   | h2   | ✅ 成功 | 61       | cloudflare |
| 20   | toy-people.com                                                        | 172.67.72.18                         | IPv4   | h2   | ✅ 成功 | 61       | cloudflare |
| 133  | www.hugedomains.com                                                   | 104.26.7.37                          | IPv4   | h2   | ✅ 成功 | 61       | cloudflare |
| 210  | xn--b6gac.eu.org                                                      | 2606:4700:3035::6815:5a4e            | IPv6   | h2   | ✅ 成功 | 61       | cloudflare |
| 262  | cmcc.877774.xyz                                                       | 104.16.148.1                         | IPv4   | h2   | ✅ 成功 | 61       | cloudflare |
| 299  | ip.sb                                                                 | 2606:4700:20::681a:d1f               | IPv6   | h2   | ✅ 成功 | 61       | cloudflare |
| 308  | ip.gs                                                                 | 2606:4700:3036::6815:eb0             | IPv6   | h2   | ✅ 成功 | 61       | cloudflare |
| 336  | yx-auto.pages.dev                                                     | 172.66.47.112                        | IPv4   | h2   | ✅ 成功 | 61       | cloudflare |
| 440  | stock.hostmonit.com                                                   | 2606:4700:3037::6815:7c1             | IPv6   | h2   | ✅ 成功 | 61       | cloudflare |
| 7    | na.877774.xyz                                                         | 104.18.38.235                        | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 69   | steamdb.info                                                          | 172.66.175.250                       | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 78   | cf.0sm.com                                                            | 2606:4700:3037::ac43:bb91            | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 84   | www.gov.ua                                                            | 2606:4700:3033::ac43:d17f            | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 119  | huxley.ns.cloudflare.com                                              | 2803:f800:50::6ca2:c3bc              | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 120  | huxley.ns.cloudflare.com                                              | 2a06:98c1:50::ac40:23bc              | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 132  | www.hugedomains.com                                                   | 172.67.70.191                        | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 147  | yx-auto.pages.dev | 104.21.6.60                          | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 174  | cf.877774.xyz                                                         | 2606:4700:4406::ac40:9242            | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 176  | zread.ai                                                              | 172.67.202.78                        | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 177  | zread.ai                                                              | 2606:4700:3033::6815:4cf0            | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 187  | cloudflare-ip.mofashi.ltd                                             | 2606:4700:3037::6815:48e9            | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 192  | bestcf.030101.xyz                                                     | 2606:4700:0:81e7:c232:ce8d:abff:90e0 | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 196  | www.whatismyip.com                                                    | 104.26.13.23                         | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 202  | saas.sin.fan                                                          | 162.159.36.20                        | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 204  | cf.zhetengsha.eu.org                                                  | 104.18.42.98                         | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 206  | cf.zhetengsha.eu.org                                                  | 2a06:98c1:3101::ac40:919e            | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 214  | fbi.gov                                                               | 2606:4700::6810:94f4                 | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 217  | cf.090227.xyz                                                         | 104.18.35.15                         | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 218  | cf.090227.xyz                                                         | 172.64.152.241                       | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 219  | cf.090227.xyz                                                         | 2a06:98c1:3101::ac40:919e            | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 236  | www.glassdoor.com                                                     | 104.16.25.46                         | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 246  | cmcc.877774.xyz                                                       | 104.16.148.11                        | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 249  | cmcc.877774.xyz                                                       | 104.16.149.1                         | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 255  | cmcc.877774.xyz                                                       | 104.16.149.7                         | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 271  | time.is                                                               | 104.26.13.54                         | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 274  | time.is                                                               | 2606:4700:20::681a:d36               | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 286  | palera.in                                                             | 2606:4700:3035::6815:3a48            | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 316  | www.visa.com.hk                                                       | 104.18.21.69                         | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 330  | 172.67.106.26                                                         | 172.67.106.26                        | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 331  | local-aria2-webui.masx200.ddns-ip.net                                 | 172.67.157.182                       | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 337  | yx-auto.pages.dev                                                     | 172.66.44.144                        | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 350  | dnschecker.org                                                        | 2606:4700:20::681a:659               | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 371  | gamer.com.tw                                                          | 104.18.3.197                         | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 372  | gamer.com.tw                                                          | 104.18.2.197                         | IPv4   | h2   | ✅ 成功 | 62       | cloudflare |
| 399  | [2606:4700:83bd::7d8:2b47]                                            | 2606:4700:83bd::7d8:2b47             | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 412  | otto.ns.cloudflare.com                                                | 2803:f800:50::6ca2:c387              | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 445  | japan.com                                                             | 2606:4700:20::681a:43c               | IPv6   | h2   | ✅ 成功 | 62       | cloudflare |
| 6    | na.877774.xyz                                                         | 104.19.74.233                        | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 11   | yx-auto.pages.dev                                         | 2606:4700:3031::6815:49fa            | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 25   | toy-people.com                                                        | 2606:4700:20::681a:224               | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 35   | decker.ns.cloudflare.com                                              | 2606:4700:58::a29f:2c9b              | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 70   | steamdb.info                                                          | 104.20.34.212                        | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 100  | iplocation.io                                                         | 104.26.10.222                        | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 122  | www.visa.cn                                                           | 162.159.152.2                        | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 123  | www.okcupid.com                                                       | 104.16.239.254                       | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 139  | www.visa.com.sg                                                       | 104.18.12.229                        | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 154  | craig.ns.cloudflare.com                                               | 2606:4700:58::a29f:2cc0              | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 158  | cu.877774.xyz                                                         | 104.26.4.111                         | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 163  | cu.877774.xyz                                                         | 104.26.4.116                         | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 169  | asia.877774.xyz                                                       | 104.17.142.146                       | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 171  | cf.877774.xyz                                                         | 172.64.146.66                        | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 173  | cf.877774.xyz                                                         | 2a06:98c1:3102::6812:29be            | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 186  | cloudflare-ip.mofashi.ltd                                             | 104.21.72.233                        | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 189  | [2606:4700:4409::5b5b:7758]                                           | 2606:4700:4409::5b5b:7758            | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 194  | www.whatismyip.com                                                    | 104.26.12.23                         | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 220  | cf.090227.xyz                                                         | 2a06:98c1:3108::6812:2a62            | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 222  | braden.ns.cloudflare.com                                              | 162.159.44.169                       | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 227  | www.ipchicken.com                                                     | 172.67.68.101                        | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 235  | bowen.ns.cloudflare.com                                               | 2a06:98c1:50::ac40:2353              | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 237  | www.glassdoor.com                                                     | 104.17.64.70                         | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 245  | cmcc.877774.xyz                                                       | 104.16.148.10                        | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 250  | cmcc.877774.xyz                                                       | 104.16.149.2                         | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 260  | cmcc.877774.xyz                                                       | 104.16.149.12                        | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 261  | cmcc.877774.xyz                                                       | 104.16.149.244                       | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 270  | time.is                                                               | 172.67.68.157                        | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 294  | 104.17.68.85                                                          | 104.17.68.85                         | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 298  | ip.sb                                                                 | 2606:4700:20::681a:c1f               | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 307  | ip.gs                                                                 | 2606:4700:3035::ac43:a01c            | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 311  | singapore.com                                                         | 104.26.13.140                        | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 318  | silkbook.com                                                          | 172.67.75.208                        | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 320  | silkbook.com                                                          | 2606:4700:20::ac43:4bd0              | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 322  | silkbook.com                                                          | 2606:4700:20::681a:8a0               | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 323  | whatismyipaddress.com                                                 | 104.19.222.79                        | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 325  | whatismyipaddress.com                                                 | 2606:4700::6813:de4f                 | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 326  | whatismyipaddress.com                                                 | 2606:4700::6813:df4f                 | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 338  | yx-auto.pages.dev                                                     | 2606:4700:310c::ac42:2f70            | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 339  | yx-auto.pages.dev                                                     | 2606:4700:310c::ac42:2c90            | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 346  | ashton.ns.cloudflare.com                                              | 2a06:98c1:50::ac40:23ad              | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 347  | dnschecker.org                                                        | 104.26.6.89                          | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 352  | dnschecker.org                                                        | 2606:4700:20::ac43:49d8              | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 357  | julio.ns.cloudflare.com                                               | 2606:4700:58::a29f:2cd1              | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 369  | yx-auto.pages.dev                | 2606:4700:3033::ac43:a162            | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 380  | www.udemy.com                                                         | 2606:4700::6810:8fed                 | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 397  | 104.26.13.31                                                          | 104.26.13.31                         | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 401  | eur.877774.xyz                                                        | 104.21.26.150                        | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 0 条记录
- **快 (50-100ms)**: 100 条记录
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
