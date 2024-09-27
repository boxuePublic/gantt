var arr = [
  {
    "id": 1,
    "name": "电子元件组装",
    "orderNumber": "ORD-2024-001",
    "priority": 2,
    "status": "PENDING",// IDLE completed processing pending
    "startProcess": {
      "id": 101,
      "name": "元件准备",
      "duration": 120,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "model": "M1",
        "capacity": 10,
        "status": "IDLE"
      },
      "startTime": null,
      "planStartTime": "2024-10-17T08:00:00",
      "status": "PROCESSING",
      "requiresMachine": true,
      "link": [
        {
          "id": 1,
          "next": {
            "id": 102,
            "name": "PCB焊接",
            "duration": 180,
            "machine": {
              "id": 2,
              "name": "Machine 2",
              "model": "M2",
              "capacity": 10,
              "status": "IDLE"
            },
            "startTime": null,
            "planStartTime": "2024-10-17T10:00:00",
            "status": "PENDING",
            "requiresMachine": true,
            "link": [
              {
                "id": 2,
                "next": {
                  "id": 103,
                  "name": "功能测试",
                  "duration": 90,
                  "machine": {
                    "id": 3,
                    "name": "Machine 3",
                    "model": "M3",
                    "capacity": 10,
                    "status": "IDLE"
                  },
                  "startTime": null,
                  "planStartTime": "2024-10-17T13:00:00",
                  "status": "PENDING",
                  "requiresMachine": true,
                  "link": [
                    {
                      "id": 3,
                      "next": {
                        "id": 104,
                        "name": "包装",
                        "duration": 60,
                        "machine": {
                          "id": 3,
                          "name": "Machine 3",
                          "model": "M3",
                          "capacity": 10,
                          "status": "IDLE"
                        },
                        "startTime": null,
                        "planStartTime": "2024-10-17T14:30:00",
                        "status": "PENDING",
                        "requiresMachine": true,
                        "link": null,
                        "endTime": null
                      },
                      "parallel": false
                    }
                  ],
                  "endTime": null
                },
                "parallel": false
              }
            ],
            "endTime": null
          },
          "parallel": false
        }
      ],
      "endTime": null
    },
    "startTimeRange": [
      "2024-10-17T08:00:00",
      "2024-10-17T10:00:00",
      "2024-10-17T13:00:00",
      "2024-10-17T14:30:00"
    ]
  },
  {
    "id": 2,
    "name": "机械零件加工",
    "orderNumber": "ORD-2024-002",
    "priority": 1,
    "status": "PENDING",
    "startProcess": {
      "id": 201,
      "name": "原料切割",
      "duration": 150,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "model": "M5",
        "capacity": 10,
        "status": "IDLE"
      },
      "startTime": null,
      "planStartTime": "2024-10-18T09:30:00",
      "status": "PENDING",
      "requiresMachine": true,
      "link": [
        {
          "id": 4,
          "next": {
            "id": 202,
            "name": "机床加工",
            "duration": 240,
            "machine": {
              "id": 2,
              "name": "Machine 2",
              "model": "M2",
              "capacity": 10,
              "status": "IDLE"
            },
            "startTime": null,
            "planStartTime": "2024-10-18T12:00:00",
            "status": "PENDING",
            "requiresMachine": true,
            "link": [
              {
                "id": 5,
                "next": {
                  "id": 203,
                  "name": "热处理",
                  "duration": 180,
                  "machine": {
                    "id": 1,
                    "name": "Machine 1",
                    "model": "M1",
                    "capacity": 10,
                    "status": "IDLE"
                  },
                  "startTime": null,
                  "planStartTime": "2024-10-19T08:00:00",
                  "status": "PENDING",
                  "requiresMachine": true,
                  "link": [
                    {
                      "id": 6,
                      "next": {
                        "id": 204,
                        "name": "精加工",
                        "duration": 120,
                        "machine": {
                          "id": 3,
                          "name": "Machine 3",
                          "model": "M3",
                          "capacity": 10,
                          "status": "IDLE"
                        },
                        "startTime": null,
                        "planStartTime": "2024-10-19T11:00:00",
                        "status": "PENDING",
                        "requiresMachine": true,
                        "link": [
                          {
                            "id": 7,
                            "next": {
                              "id": 205,
                              "name": "质量检测",
                              "duration": 90,
                              "machine": {
                                "id": 4,
                                "name": "Machine 4",
                                "model": "M4",
                                "capacity": 10,
                                "status": "IDLE"
                              },
                              "startTime": null,
                              "planStartTime": "2024-10-19T13:00:00",
                              "status": "PENDING",
                              "requiresMachine": true,
                              "link": null,
                              "endTime": null
                            },
                            "parallel": false
                          }
                        ],
                        "endTime": null
                      },
                      "parallel": false
                    }
                  ],
                  "endTime": null
                },
                "parallel": false
              }
            ],
            "endTime": null
          },
          "parallel": false
        }
      ],
      "endTime": null
    },
    "startTimeRange": [
      "2024-10-18T09:30:00",
      "2024-10-18T12:00:00",
      "2024-10-19T08:00:00",
      "2024-10-19T11:00:00",
      "2024-10-19T13:00:00"
    ]
  },
  {
    "id": 3,
    "name": "塑料外壳生产",
    "orderNumber": "ORD-2024-003",
    "priority": 3,
    "status": "PENDING",
    "startProcess": {
      "id": 301,
      "name": "塑料制粒",
      "duration": 180,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "model": "M1",
        "capacity": 10,
        "status": "IDLE"
      },
      "startTime": null,
      "planStartTime": "2024-10-19T07:00:00",
      "status": "PENDING",
      "requiresMachine": true,
      "link": [
        {
          "id": 8,
          "next": {
            "id": 302,
            "name": "注塑成型",
            "duration": 240,
            "machine": {
              "id": 5,
              "name": "Machine 5",
              "model": "M5",
              "capacity": 10,
              "status": "IDLE"
            },
            "startTime": null,
            "planStartTime": "2024-10-19T10:00:00",
            "status": "PENDING",
            "requiresMachine": true,
            "link": [
              {
                "id": 9,
                "next": {
                  "id": 303,
                  "name": "冷却",
                  "duration": 120,
                  "machine": {
                    "id": 3,
                    "name": "Machine 3",
                    "model": "M3",
                    "capacity": 10,
                    "status": "IDLE"
                  },
                  "startTime": null,
                  "planStartTime": "2024-10-19T14:00:00",
                  "status": "PENDING",
                  "requiresMachine": true,
                  "link": [
                    {
                      "id": 10,
                      "next": {
                        "id": 304,
                        "name": "修边",
                        "duration": 90,
                        "machine": {
                          "id": 2,
                          "name": "Machine 2",
                          "model": "M2",
                          "capacity": 10,
                          "status": "IDLE"
                        },
                        "startTime": null,
                        "planStartTime": "2024-10-19T16:00:00",
                        "status": "PENDING",
                        "requiresMachine": true,
                        "link": null,
                        "endTime": null
                      },
                      "parallel": false
                    }
                  ],
                  "endTime": null
                },
                "parallel": false
              }
            ],
            "endTime": null
          },
          "parallel": false
        }
      ],
      "endTime": null
    },
    "startTimeRange": [
      "2024-10-19T07:00:00",
      "2024-10-19T10:00:00",
      "2024-10-19T14:00:00",
      "2024-10-19T16:00:00"
    ]
  }
]