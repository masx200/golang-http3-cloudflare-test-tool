<template>
  <v-app>
    <v-app-bar title="网络测速结果仪表板" color="primary" dark>
      <v-spacer></v-spacer>
      <v-btn icon @click="refreshData">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- 筛选区域 -->
        <v-card class="mb-4">
          <v-card-title>筛选条件</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="3">
                <v-select
                  v-model="filters.country"
                  :items="countryOptions"
                  label="国家"
                  clearable
                  @update:model-value="applyFilters"
                ></v-select>
              </v-col>
              <v-col cols="12" md="3">
                <v-select
                  v-model="filters.asn"
                  :items="asnOptions"
                  label="ASN"
                  clearable
                  @update:model-value="applyFilters"
                ></v-select>
              </v-col>
              <v-col cols="12" md="3">
                <v-select
                  v-model="filters.ipVersion"
                  :items="['IPv4', 'IPv6']"
                  label="IP版本"
                  clearable
                  @update:model-value="applyFilters"
                ></v-select>
              </v-col>
              <v-col cols="12" md="3">
                <v-select
                  v-model="filters.protocol"
                  :items="protocolOptions"
                  label="协议"
                  clearable
                  @update:model-value="applyFilters"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="3">
                <v-select
                  v-model="filters.statusFilter"
                  :items="statusOptions"
                  label="测试状态"
                  @update:model-value="applyFilters"
                ></v-select>
              </v-col>
              <v-col cols="12" md="3">
                <v-btn @click="clearFilters" color="primary" block>清除筛选</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- 统计信息 -->
        <v-row class="mb-4">
          <v-col cols="12" md="3" v-for="(stat, index) in statistics" :key="index">
            <v-card>
              <v-card-title>{{ stat.title }}</v-card-title>
              <v-card-text>
                <div class="text-h4">{{ stat.value }}</div>
                <div class="text-subtitle-1">{{ stat.subtitle }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- 测试结果表格 -->
        <v-card>
          <v-card-title>
            测试结果
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-inner-icon="mdi-magnify"
              label="搜索"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="filteredResults"
              :search="search"
              :sort-by="[{ key: 'latency_ms', order: 'asc' }]"
              :loading="loading"
              class="elevation-1"
            >
              <template v-slot:item.success="{ item }">
                <v-chip :color="item.success ? 'success' : 'error'" dark>
                  {{ item.success ? '成功' : '失败' }}
                </v-chip>
              </template>
              <template v-slot:item.latency_ms="{ item }">
                <v-chip :color="getLatencyColor(item.latency_ms)" dark>
                  {{ item.latency_ms }} ms
                </v-chip>
              </template>
              <template v-slot:item.error_msg="{ item }">
                <span v-if="item.error_msg && item.error_msg !== 'No error message'">
                  {{ item.error_msg }}
                </span>
                <span v-else>-</span>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ref, onMounted, computed } from 'vue'

export default {
  name: 'SpeedDashboard',
  setup() {
    const loading = ref(true)
    const search = ref('')
    const testReports = ref([])
    const allResults = ref([])
    const filteredResults = ref([])
    
    // 筛选条件
    const filters = ref({
      country: null,
      asn: null,
      ipVersion: null,
      protocol: null,
      statusFilter: 'all' // 'all', 'success', 'failed'
    })

    // 状态筛选选项
    const statusOptions = [
      { title: '全部', value: 'all' },
      { title: '成功', value: 'success' },
      { title: '失败', value: 'failed' }
    ]
    
    // 表格头
    const headers = [
      { title: '主机', key: 'host', sortable: true },
      { title: '目标IP', key: 'target_ip', sortable: true },
      { title: 'IP版本', key: 'ip_version', sortable: true },
      { title: '协议', key: 'protocol', sortable: true },
      { title: '状态码', key: 'status_code', sortable: true },
      { title: '延迟(ms)', key: 'latency_ms', sortable: true },
      { title: '服务器', key: 'server_header', sortable: true },
      { title: '状态', key: 'success', sortable: true },
      { title: '错误信息', key: 'error_msg', sortable: false },
      { title: '测试环境', key: 'testEnvironment', sortable: false }
    ]
    
    // 统计信息
    const statistics = computed(() => {
      const totalTests = allResults.value.length
      const successTests = allResults.value.filter(r => r.success).length
      const failedTests = totalTests - successTests
      const avgLatency = allResults.value.reduce((sum, r) => sum + (r.latency_ms || 0), 0) / totalTests || 0
      
      return [
        { title: '总测试数', value: totalTests, subtitle: '个' },
        { title: '成功测试', value: successTests, subtitle: '个' },
        { title: '失败测试', value: failedTests, subtitle: '个' },
        { title: '平均延迟', value: avgLatency.toFixed(2), subtitle: 'ms' }
      ]
    })
    
    // 筛选选项
    const countryOptions = computed(() => {
      const countries = [...new Set(allResults.value.map(r => r.country).filter(Boolean))]
      console.log('Country options:', countries)
      return countries
    })

    const asnOptions = computed(() => {
      const asns = [...new Set(allResults.value.map(r => r.asn).filter(Boolean))]
      console.log('ASN options:', asns)
      return asns
    })
    
    const protocolOptions = computed(() => {
      const protocols = [...new Set(allResults.value.map(r => r.protocol).filter(Boolean))]
      return protocols
    })
    
    // 获取延迟颜色
    const getLatencyColor = (latency) => {
      if (latency < 50) return 'green'
      if (latency < 100) return 'light-green'
      if (latency < 200) return 'lime'
      if (latency < 500) return 'orange'
      return 'red'
    }
    
    // 加载数据
    const loadData = async () => {
      try {
        loading.value = true
        
        // 使用 import.meta.glob 读取所有 failed-test-report-*.json 文件
        const reportFiles = import.meta.glob('../../failed-test-report-*.json', { query: '?raw', import: 'default' })
        
        const reports = []
        const results = []
        
        for (const path in reportFiles) {
          try {
            const content = await reportFiles[path]()
            const report = JSON.parse(content)
            reports.push(report)
            
            // 添加成功测试
            if (report.top_latency_records && Array.isArray(report.top_latency_records)) {
              report.top_latency_records.forEach(test => {
                const result = {
                  ...test,
                  testEnvironment: `${report.test_environment?.ip_info?.country || 'Unknown'} (${report.test_environment?.ip_info?.as_name || 'Unknown'})`,
                  country: report.test_environment?.ip_info?.country,
                  asn: report.test_environment?.ip_info?.asn
                }
                results.push(result)
                console.log('Added success test:', result)
              })
            }

            // 添加失败测试
            if (report.failed_tests && Array.isArray(report.failed_tests)) {
              report.failed_tests.forEach(test => {
                const result = {
                  ...test,
                  testEnvironment: `${report.test_environment?.ip_info?.country || 'Unknown'} (${report.test_environment?.ip_info?.as_name || 'Unknown'})`,
                  country: report.test_environment?.ip_info?.country,
                  asn: report.test_environment?.ip_info?.asn
                }
                results.push(result)
                console.log('Added failed test:', result)
              })
            }
          } catch (error) {
            console.error(`Error loading report ${path}:`, error)
          }
        }

        console.log('All loaded results:', results)
        console.log('Unique countries:', [...new Set(results.map(r => r.country))])
        console.log('Unique ASNs:', [...new Set(results.map(r => r.asn))])

        testReports.value = reports
        allResults.value = results
        filteredResults.value = results
      } catch (error) {
        console.error('Error loading data:', error)
      } finally {
        loading.value = false
      }
    }
    
    // 应用筛选
    const applyFilters = () => {
      let results = [...allResults.value]

      console.log('Applying filters:', filters.value)
      console.log('Results before filtering:', results.length)

      // 按国家筛选
      if (filters.value.country) {
        results = results.filter(r => r.country === filters.value.country)
        console.log('After country filter:', results.length)
      }

      // 按ASN筛选
      if (filters.value.asn) {
        results = results.filter(r => r.asn === filters.value.asn)
        console.log('After ASN filter:', results.length)
      }
      
      // 按IP版本筛选
      if (filters.value.ipVersion) {
        results = results.filter(r => r.ip_version === filters.value.ipVersion)
        console.log('After IP version filter:', results.length)
      }

      // 按协议筛选
      if (filters.value.protocol) {
        results = results.filter(r => r.protocol === filters.value.protocol)
        console.log('After protocol filter:', results.length)
      }

      // 按成功/失败筛选
      if (filters.value.statusFilter === 'success') {
        results = results.filter(r => r.success)
        console.log('After success filter:', results.length)
      } else if (filters.value.statusFilter === 'failed') {
        results = results.filter(r => !r.success)
        console.log('After failed filter:', results.length)
      }

      console.log('Final filtered results:', results.length)
      filteredResults.value = results
    }
    
    // 清除筛选
    const clearFilters = () => {
      filters.value = {
        country: null,
        asn: null,
        ipVersion: null,
        protocol: null,
        statusFilter: 'all'
      }
      filteredResults.value = [...allResults.value]
    }
    
    // 刷新数据
    const refreshData = () => {
      loadData()
    }
    
    // 组件挂载时加载数据
    onMounted(() => {
      loadData()
    })
    
    return {
      loading,
      search,
      headers,
      filteredResults,
      statistics,
      filters,
      countryOptions,
      asnOptions,
      protocolOptions,
      statusOptions,
      getLatencyColor,
      applyFilters,
      clearFilters,
      refreshData
    }
  }
}
</script>