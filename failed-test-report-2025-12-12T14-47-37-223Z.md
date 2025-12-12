# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/12 14:47:37
- **数据来源**: connectivity_results-20251212-144736.json
- **总测试数**: 442
- **失败测试数**: 3
- **成功测试数**: 439
- **失败率**: 0.68%
- **平均延迟**: 81.44ms
- **最小延迟**: 46ms
- **最大延迟**: 945ms

## 🌐 当前测试环境信息

- **获取时间**: 2025/12/12 14:47:37
- **IP地址**: 2a09:bac5:c852:2446::39d:2b
- **国家/地区**: United States (US)
- **ASN**: AS13335
- **网络组织**: CLOUDFLARENET
- **网络域名**: cloudflare.com
- **大洲**: North America (NA)
- **地理坐标**: 38.6877, -77.8369
- **时区**: America/New_York
- **数据源**: combined

---

---

## 失败测试详情

### 📊 错误类型统计

- **连接超时: I/O超时**: 3 次 (100.0%)

### 🔍 按错误类型分类的失败测试详情

#### 连接超时: I/O超时 (3 次测试)

| 序号 | 主机/域名                | 目标IP         | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息                                 |
| ---- | ------------------------ | -------------- | ------ | ---- | ------ | -------- | ------ | ---------------------------------------- |
| 227  | 172.64.201.25            | 172.64.201.25  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.64.201.25:443: i/o timeout  |
| 228  | ashton.ns.cloudflare.com | 172.64.35.173  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.64.35.173:443: i/o timeout  |
| 334  | cfip.xxxxxxxx.tk         | 198.41.212.130 | IPv4   | none | N/A    | 0        | N/A    | dial tcp 198.41.212.130:443: i/o timeout |

### 📈 错误分析总结

#### 主错误类型分布

- **连接超时**: 3 次 (100.0%)

#### 错误模式分析

**超时集中度分析**: 共有 3 次超时，主要集中在IP段 172.64（2
次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 3 次失败是因为协议协商失败（protocol:
none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**:
所有失败的测试都使用IPv4，IPv6连接可能更稳定或目标服务器的IPv6配置更好

---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名                             | 目标IP                    | IP版本 | 协议 | 状态    | 延迟(ms) | 服务器     |
| ---- | ------------------------------------- | ------------------------- | ------ | ---- | ------- | -------- | ---------- |
| 67   | asia.877774.xyz                       | 104.16.211.153            | IPv4   | h2   | ✅ 成功 | 46       | cloudflare |
| 179  | silkbook.com                          | 104.26.8.160              | IPv4   | h2   | ✅ 成功 | 47       | cloudflare |
| 355  | ct.877774.xyz                         | 172.64.229.185            | IPv4   | h2   | ✅ 成功 | 47       | cloudflare |
| 15   | yx-auto.pages.dev                     | 172.66.47.112             | IPv4   | h2   | ✅ 成功 | 49       | cloudflare |
| 71   | cloudflare-ip.mofashi.ltd             | 172.67.155.172            | IPv4   | h2   | ✅ 成功 | 49       | cloudflare |
| 160  | benedict.ns.cloudflare.com            | 2606:4700:58::a29f:2ccd   | IPv6   | h2   | ✅ 成功 | 49       | cloudflare |
| 243  | icook.tw                              | 2606:4700:10::6814:1c4a   | IPv6   | h2   | ✅ 成功 | 49       | cloudflare |
| 428  | cmcc.877774.xyz                       | 104.16.148.6              | IPv4   | h2   | ✅ 成功 | 49       | cloudflare |
| 156  | ip.sb                                 | 2606:4700:20::ac43:4bac   | IPv6   | h2   | ✅ 成功 | 50       | cloudflare |
| 6    | www.visa.cn                           | 162.159.152.2             | IPv4   | h2   | ✅ 成功 | 51       | cloudflare |
| 96   | fbi.gov                               | 104.16.149.244            | IPv4   | h2   | ✅ 成功 | 51       | cloudflare |
| 278  | www.wto.org                           | 104.18.41.190             | IPv4   | h2   | ✅ 成功 | 51       | cloudflare |
| 401  | www.hugedomains.com                   | 2606:4700:20::681a:625    | IPv6   | h2   | ✅ 成功 | 51       | cloudflare |
| 16   | yx-auto.pages.dev                     | 172.66.44.144             | IPv4   | h2   | ✅ 成功 | 52       | cloudflare |
| 244  | [2606:4700:83be::11:74f]              | 2606:4700:83be::11:74f    | IPv6   | h2   | ✅ 成功 | 52       | cloudflare |
| 338  | ipv4.ip.sb                            | 104.26.12.31              | IPv4   | h2   | ✅ 成功 | 52       | cloudflare |
| 367  | www.gov.ua                            | 2606:4700:3033::ac43:d17f | IPv6   | h2   | ✅ 成功 | 52       | cloudflare |
| 374  | www.4chan.org                         | 104.16.228.229            | IPv4   | h2   | ✅ 成功 | 52       | cloudflare |
| 389  | huxley.ns.cloudflare.com              | 2a06:98c1:50::ac40:23bc   | IPv6   | h2   | ✅ 成功 | 52       | cloudflare |
| 391  | www.okcupid.com                       | 104.16.223.254            | IPv4   | h2   | ✅ 成功 | 52       | cloudflare |
| 408  | cu.877774.xyz                         | 104.26.4.113              | IPv4   | h2   | ✅ 成功 | 52       | cloudflare |
| 432  | cmcc.877774.xyz                       | 104.16.148.10             | IPv4   | h2   | ✅ 成功 | 52       | cloudflare |
| 36   | toy-people.com                        | 172.67.72.18              | IPv4   | h2   | ✅ 成功 | 53       | cloudflare |
| 72   | cloudflare-ip.mofashi.ltd             | 104.21.72.233             | IPv4   | h2   | ✅ 成功 | 53       | cloudflare |
| 147  | palera.in                             | 104.21.58.72              | IPv4   | h2   | ✅ 成功 | 53       | cloudflare |
| 253  | eur.877774.xyz                        | 104.21.47.209             | IPv4   | h2   | ✅ 成功 | 53       | cloudflare |
| 255  | eur.877774.xyz                        | 104.21.29.164             | IPv4   | h2   | ✅ 成功 | 53       | cloudflare |
| 48   | 104.17.79.11                          | 104.17.79.11              | IPv4   | h2   | ✅ 成功 | 54       | cloudflare |
| 57   | zread.ai                              | 2606:4700:3032::ac43:ca4e | IPv6   | h2   | ✅ 成功 | 54       | cloudflare |
| 105  | cf.090227.xyz                         | 172.64.144.82             | IPv4   | h2   | ✅ 成功 | 54       | cloudflare |
| 155  | ip.sb                                 | 2606:4700:20::681a:c1f    | IPv6   | h2   | ✅ 成功 | 54       | cloudflare |
| 245  | 104.26.13.31                          | 104.26.13.31              | IPv4   | h2   | ✅ 成功 | 54       | cloudflare |
| 349  | steamdb.info                          | 2606:4700:10::ac42:affa   | IPv6   | h2   | ✅ 成功 | 54       | cloudflare |
| 384  | icook.hk                              | 2606:4700:3031::6815:5ad2 | IPv6   | h2   | ✅ 成功 | 54       | cloudflare |
| 407  | sullivan.ns.cloudflare.com            | 2a06:98c1:50::ac40:23a1   | IPv6   | h2   | ✅ 成功 | 54       | cloudflare |
| 411  | cu.877774.xyz                         | 104.26.4.116              | IPv4   | h2   | ✅ 成功 | 54       | cloudflare |
| 413  | cu.877774.xyz                         | 104.26.4.118              | IPv4   | h2   | ✅ 成功 | 54       | cloudflare |
| 8    | www.visa.com.sg                       | 104.18.12.229             | IPv4   | h2   | ✅ 成功 | 55       | cloudflare |
| 26   | craig.ns.cloudflare.com               | 2606:4700:58::a29f:2cc0   | IPv6   | h2   | ✅ 成功 | 55       | cloudflare |
| 99   | fbi.gov                               | 2606:4700::6810:95f4      | IPv6   | h2   | ✅ 成功 | 55       | cloudflare |
| 202  | cf.877774.xyz                         | 2a06:98c1:3102::6812:29be | IPv6   | h2   | ✅ 成功 | 55       | cloudflare |
| 213  | tasteatlas.com                        | 104.17.36.105             | IPv4   | h2   | ✅ 成功 | 55       | cloudflare |
| 249  | www.digitalocean.com                  | 2606:4700::6813:ad44      | IPv6   | h2   | ✅ 成功 | 55       | cloudflare |
| 269  | damien.ns.cloudflare.com              | 2803:f800:50::6ca2:c3a8   | IPv6   | h2   | ✅ 成功 | 55       | cloudflare |
| 353  | 172.67.75.172                         | 172.67.75.172             | IPv4   | h2   | ✅ 成功 | 55       | cloudflare |
| 354  | 104.18.37.13                          | 104.18.37.13              | IPv4   | h2   | ✅ 成功 | 55       | cloudflare |
| 379  | iplocation.io                         | 2606:4700:20::681a:bde    | IPv6   | h2   | ✅ 成功 | 55       | cloudflare |
| 429  | cmcc.877774.xyz                       | 104.16.148.7              | IPv4   | h2   | ✅ 成功 | 55       | cloudflare |
| 68   | bestcf.030101.xyz                     | 104.17.222.192            | IPv4   | h2   | ✅ 成功 | 56       | cloudflare |
| 101  | xn--b6gac.eu.org                      | 104.21.90.78              | IPv4   | h2   | ✅ 成功 | 56       | cloudflare |
| 146  | palera.in                             | 172.67.157.122            | IPv4   | h2   | ✅ 成功 | 56       | cloudflare |
| 220  | www.udemy.com                         | 2606:4700::6810:8fed      | IPv6   | h2   | ✅ 成功 | 56       | cloudflare |
| 248  | www.digitalocean.com                  | 104.19.173.68             | IPv4   | h2   | ✅ 成功 | 56       | cloudflare |
| 275  | ifconfig.co                           | 2606:4700:3030::ac43:a86a | IPv6   | h2   | ✅ 成功 | 56       | cloudflare |
| 280  | www.wto.org                           | 2606:4700:4406::ac40:9242 | IPv6   | h2   | ✅ 成功 | 56       | cloudflare |
| 284  | stock.hostmonit.com                   | 2606:4700:3037::6815:7c1  | IPv6   | h2   | ✅ 成功 | 56       | cloudflare |
| 319  | cf.0sm.com                            | 104.21.7.133              | IPv4   | h2   | ✅ 成功 | 56       | cloudflare |
| 335  | cfip.xxxxxxxx.tk                      | 104.16.232.223            | IPv4   | h2   | ✅ 成功 | 56       | cloudflare |
| 427  | cmcc.877774.xyz                       | 104.16.148.5              | IPv4   | h2   | ✅ 成功 | 56       | cloudflare |
| 18   | yx-auto.pages.dev                     | 2606:4700:310c::ac42:2f70 | IPv6   | h2   | ✅ 成功 | 57       | cloudflare |
| 109  | www.ipchicken.com                     | 104.26.6.112              | IPv4   | h2   | ✅ 成功 | 57       | cloudflare |
| 124  | www.glassdoor.com                     | 104.16.25.46              | IPv4   | h2   | ✅ 成功 | 57       | cloudflare |
| 148  | palera.in                             | 2606:4700:3035::6815:3a48 | IPv6   | h2   | ✅ 成功 | 57       | cloudflare |
| 168  | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6 | IPv6   | h2   | ✅ 成功 | 57       | cloudflare |
| 194  | dnschecker.org                        | 104.26.6.89               | IPv4   | h2   | ✅ 成功 | 57       | cloudflare |
| 215  | tasteatlas.com                        | 2606:4700::6811:2469      | IPv6   | h2   | ✅ 成功 | 57       | cloudflare |
| 277  | www.csgo.com                          | 195.85.59.95              | IPv4   | h2   | ✅ 成功 | 57       | cloudflare |
| 279  | www.wto.org                           | 172.64.146.66             | IPv4   | h2   | ✅ 成功 | 57       | cloudflare |
| 283  | stock.hostmonit.com                   | 104.21.7.193              | IPv4   | h2   | ✅ 成功 | 57       | cloudflare |
| 336  | cfip.xxxxxxxx.tk                      | 188.114.96.125            | IPv4   | h2   | ✅ 成功 | 57       | cloudflare |
| 341  | ipinfo.in                             | 104.21.21.129             | IPv4   | h2   | ✅ 成功 | 57       | cloudflare |
| 350  | steamdb.info                          | 2606:4700:10::6814:22d4   | IPv6   | h2   | ✅ 成功 | 57       | cloudflare |
| 422  | cmcc.877774.xyz                       | 104.16.149.244            | IPv4   | h2   | ✅ 成功 | 57       | cloudflare |
| 21   | cf.877771.xyz                         | 2606:4700:3033::6815:50b4 | IPv6   | h2   | ✅ 成功 | 58       | cloudflare |
| 123  | bowen.ns.cloudflare.com               | 2a06:98c1:50::ac40:2353   | IPv6   | h2   | ✅ 成功 | 58       | cloudflare |
| 177  | whatismyipaddress.com                 | 2606:4700::6813:de4f      | IPv6   | h2   | ✅ 成功 | 58       | cloudflare |
| 189  | 104.18.14.76                          | 104.18.14.76              | IPv4   | h2   | ✅ 成功 | 58       | cloudflare |
| 214  | tasteatlas.com                        | 104.17.37.105             | IPv4   | h2   | ✅ 成功 | 58       | cloudflare |
| 219  | www.udemy.com                         | 2606:4700::6810:8eed      | IPv6   | h2   | ✅ 成功 | 58       | cloudflare |
| 240  | icook.tw                              | 172.66.158.115            | IPv4   | h2   | ✅ 成功 | 58       | cloudflare |
| 272  | ifconfig.co                           | 104.21.54.91              | IPv4   | h2   | ✅ 成功 | 58       | cloudflare |
| 290  | lewis.ns.cloudflare.com               | 2606:4700:58::a29f:2c9f   | IPv6   | h2   | ✅ 成功 | 58       | cloudflare |
| 339  | ipv4.ip.sb                            | 104.26.13.31              | IPv4   | h2   | ✅ 成功 | 58       | cloudflare |
| 400  | www.hugedomains.com                   | 2606:4700:20::ac43:46bf   | IPv6   | h2   | ✅ 成功 | 58       | cloudflare |
| 431  | cmcc.877774.xyz                       | 104.16.148.9              | IPv4   | h2   | ✅ 成功 | 58       | cloudflare |
| 58   | zread.ai                              | 2606:4700:3033::6815:4cf0 | IPv6   | h2   | ✅ 成功 | 59       | cloudflare |
| 107  | cf.090227.xyz                         | 2606:4700:4407::ac40:9052 | IPv6   | h2   | ✅ 成功 | 59       | cloudflare |
| 166  | ip.gs                                 | 2606:4700:3035::ac43:a01c | IPv6   | h2   | ✅ 成功 | 59       | cloudflare |
| 175  | whatismyipaddress.com                 | 104.19.223.79             | IPv4   | h2   | ✅ 成功 | 59       | cloudflare |
| 197  | dnschecker.org                        | 2606:4700:20::681a:759    | IPv6   | h2   | ✅ 成功 | 59       | cloudflare |
| 234  | 104.17.142.12                         | 104.17.142.12             | IPv4   | h2   | ✅ 成功 | 59       | cloudflare |
| 261  | otto.ns.cloudflare.com                | 2803:f800:50::6ca2:c387   | IPv6   | h2   | ✅ 成功 | 59       | cloudflare |
| 285  | stock.hostmonit.com                   | 2606:4700:3033::ac43:bbfb | IPv6   | h2   | ✅ 成功 | 59       | cloudflare |
| 304  | abdullah.ns.cloudflare.com            | 2a06:98c1:50::ac40:23cb   | IPv6   | h2   | ✅ 成功 | 59       | cloudflare |
| 321  | cf.0sm.com                            | 2606:4700:3032::6815:785  | IPv6   | h2   | ✅ 成功 | 59       | cloudflare |
| 337  | cfip.xxxxxxxx.tk                      | 190.93.244.201            | IPv4   | h2   | ✅ 成功 | 59       | cloudflare |
| 359  | ct.877774.xyz                         | 172.64.229.44             | IPv4   | h2   | ✅ 成功 | 59       | cloudflare |
| 375  | iplocation.io                         | 104.26.10.222             | IPv4   | h2   | ✅ 成功 | 59       | cloudflare |
| 381  | icook.hk                              | 104.21.90.210             | IPv4   | h2   | ✅ 成功 | 59       | cloudflare |
| 421  | cmcc.877774.xyz                       | 104.16.149.12             | IPv4   | h2   | ✅ 成功 | 59       | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 8 条记录
- **快 (50-100ms)**: 92 条记录
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

_此报告由 HTTP/3 连接测试报告生成器自动生成_
