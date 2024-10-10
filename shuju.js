[
  {
    "id": 1,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 359,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-04-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 2,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    // 
    "maintenance": {
      "id": 6,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-10-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 3,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 318,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 4,
    "procedure": {
      "id": 704,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "系统集成",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 723,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-10-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 5,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 429,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 6,
    "procedure": {
      "id": 204,
      "orderNo": "ORD-2024-002",
      "machineNo": "01",
      "name": "精加工",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 308,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 7,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 548,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-10-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 8,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 25,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 9,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 563,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 10,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 177,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-04-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 11,
    "procedure": {
      "id": 302,
      "orderNo": "ORD-2024-003",
      "machineNo": "05",
      "name": "注塑成型",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 299,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 12,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 671,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 13,
    "procedure": {
      "id": 704,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "系统集成",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 334,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 14,
    "procedure": {
      "id": 602,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "电路组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 658,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 15,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 63,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 16,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 706,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 17,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 667,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 18,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 366,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-10-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 19,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 539,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-04-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 20,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 237,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 21,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 208,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 22,
    "procedure": {
      "id": 503,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "元件焊接",
      "duration": 300,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 744,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 23,
    "procedure": {
      "id": 204,
      "orderNo": "ORD-2024-002",
      "machineNo": "01",
      "name": "精加工",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 149,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-08",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 24,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 880,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 25,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 69,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 26,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 377,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-10-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 27,
    "procedure": {
      "id": 204,
      "orderNo": "ORD-2024-002",
      "machineNo": "01",
      "name": "精加工",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 205,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 28,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 709,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 29,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 554,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-10-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 30,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 762,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 31,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 747,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 32,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 167,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 33,
    "procedure": {
      "id": 503,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "元件焊接",
      "duration": 300,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 168,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 34,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 618,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 35,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 430,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 36,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 101,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 37,
    "procedure": {
      "id": 603,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "外壳安装",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 12,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-10-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 38,
    "procedure": {
      "id": 302,
      "orderNo": "ORD-2024-003",
      "machineNo": "05",
      "name": "注塑成型",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 534,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-04-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 39,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 21,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-10-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 40,
    "procedure": {
      "id": 1005,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "性能测试",
      "duration": 180,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 441,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 41,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 581,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 42,
    "procedure": {
      "id": 602,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "电路组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 206,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 43,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 885,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 44,
    "procedure": {
      "id": 402,
      "orderNo": "ORD-2024-004",
      "machineNo": "05",
      "name": "焊接",
      "duration": 300,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 202,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 45,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 54,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 46,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 343,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 47,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 150,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-09",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 48,
    "procedure": {
      "id": 302,
      "orderNo": "ORD-2024-003",
      "machineNo": "05",
      "name": "注塑成型",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 336,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 49,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 763,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 50,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 141,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 51,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 849,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 52,
    "procedure": {
      "id": 302,
      "orderNo": "ORD-2024-003",
      "machineNo": "05",
      "name": "注塑成型",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 843,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 53,
    "procedure": {
      "id": 503,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "元件焊接",
      "duration": 300,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 134,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 54,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 315,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 55,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 348,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 56,
    "procedure": {
      "id": 801,
      "orderNo": "ORD-2024-008",
      "machineNo": "02",
      "name": "故障诊断",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 291,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 57,
    "procedure": {
      "id": 602,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "电路组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 806,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 58,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 53,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 59,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 328,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 60,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 681,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 61,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 387,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-11-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 62,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 389,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-11-08",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 63,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 870,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-09",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 64,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 237,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 65,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 667,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 66,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 257,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 67,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 868,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 68,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 336,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 69,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 555,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-10-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 70,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 486,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 71,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 681,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 72,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 579,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 73,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 237,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 74,
    "procedure": {
      "id": 302,
      "orderNo": "ORD-2024-003",
      "machineNo": "05",
      "name": "注塑成型",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 103,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 75,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 198,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-10-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 76,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 813,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 77,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 583,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 78,
    "procedure": {
      "id": 602,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "电路组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 706,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 79,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 143,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 80,
    "procedure": {
      "id": 202,
      "orderNo": "ORD-2024-002",
      "machineNo": "04",
      "name": "机床加工",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 238,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 81,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 674,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 82,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 166,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 83,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 207,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 84,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 306,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 85,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 168,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 86,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 187,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-10-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 87,
    "procedure": {
      "id": 402,
      "orderNo": "ORD-2024-004",
      "machineNo": "05",
      "name": "焊接",
      "duration": 300,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 147,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 88,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 271,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-09",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 89,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 101,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 90,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 195,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-10-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 91,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 818,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 92,
    "procedure": {
      "id": 801,
      "orderNo": "ORD-2024-008",
      "machineNo": "02",
      "name": "故障诊断",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 497,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 93,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 846,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 94,
    "procedure": {
      "id": 801,
      "orderNo": "ORD-2024-008",
      "machineNo": "02",
      "name": "故障诊断",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 846,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 95,
    "procedure": {
      "id": 603,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "外壳安装",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 291,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 96,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 713,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-04-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 97,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 59,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-08",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 98,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 882,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 99,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 202,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 100,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 104,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 101,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 702,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 102,
    "procedure": {
      "id": 302,
      "orderNo": "ORD-2024-003",
      "machineNo": "05",
      "name": "注塑成型",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 326,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 103,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 80,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 104,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 387,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-11-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 105,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 755,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 106,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 846,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 107,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 750,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-09",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 108,
    "procedure": {
      "id": 801,
      "orderNo": "ORD-2024-008",
      "machineNo": "02",
      "name": "故障诊断",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 143,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 109,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 497,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 110,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 682,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 111,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 646,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 112,
    "procedure": {
      "id": 202,
      "orderNo": "ORD-2024-002",
      "machineNo": "04",
      "name": "机床加工",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 813,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 113,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 786,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 114,
    "procedure": {
      "id": 602,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "电路组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 740,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-10-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 115,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 814,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 116,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 608,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 117,
    "procedure": {
      "id": 302,
      "orderNo": "ORD-2024-003",
      "machineNo": "05",
      "name": "注塑成型",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 534,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-04-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 118,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 143,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 119,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 137,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 120,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 439,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 121,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 293,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 122,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 19,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-10-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 123,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 681,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 124,
    "procedure": {
      "id": 204,
      "orderNo": "ORD-2024-002",
      "machineNo": "01",
      "name": "精加工",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 104,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 125,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 563,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 126,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 625,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 127,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 497,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 128,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 40,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 129,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 53,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 130,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 534,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-04-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 131,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 789,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 132,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 512,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 133,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 563,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 134,
    "procedure": {
      "id": 603,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "外壳安装",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 343,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 135,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 634,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 136,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 172,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 137,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 575,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 138,
    "procedure": {
      "id": 402,
      "orderNo": "ORD-2024-004",
      "machineNo": "05",
      "name": "焊接",
      "duration": 300,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 217,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 139,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 318,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 140,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 467,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 141,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 227,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 142,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 131,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 143,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 814,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 144,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 12,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-10-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 145,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 829,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 146,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 668,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 147,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 238,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 148,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 749,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-08",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 149,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 529,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 150,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 336,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 151,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 562,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 152,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 373,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-10-23",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 153,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 530,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 154,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 351,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 155,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 373,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-10-23",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 156,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 129,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 157,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 320,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 158,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 334,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 159,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 562,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 160,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 429,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 161,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 334,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 162,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 534,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-04-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 163,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 488,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 164,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 343,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 165,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 563,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 166,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 774,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 167,
    "procedure": {
      "id": 603,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "外壳安装",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 417,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 168,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 364,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-10-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 169,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 583,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 170,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 562,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 171,
    "procedure": {
      "id": 503,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "元件焊接",
      "duration": 300,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 162,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 172,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 141,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 173,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 668,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 174,
    "procedure": {
      "id": 603,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "外壳安装",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 262,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 175,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 190,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-10-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 176,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 356,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-04-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 177,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 785,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 178,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 873,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 179,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 899,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-04-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 180,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 708,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 181,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 235,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 182,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 140,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 183,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 760,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 184,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 687,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 185,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 601,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 186,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 642,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 187,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 99,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 188,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 173,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-04-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 189,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 786,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 190,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 348,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 191,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 206,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 192,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 28,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 193,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 474,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 194,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 785,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 195,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 529,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 196,
    "procedure": {
      "id": 602,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "电路组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 708,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 197,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 389,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-11-08",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 198,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 349,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 199,
    "procedure": {
      "id": 202,
      "orderNo": "ORD-2024-002",
      "machineNo": "04",
      "name": "机床加工",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 849,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 200,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 863,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 201,
    "procedure": {
      "id": 602,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "电路组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 688,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 202,
    "procedure": {
      "id": 302,
      "orderNo": "ORD-2024-003",
      "machineNo": "05",
      "name": "注塑成型",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 73,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 203,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 444,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 204,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 238,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 205,
    "procedure": {
      "id": 202,
      "orderNo": "ORD-2024-002",
      "machineNo": "04",
      "name": "机床加工",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 846,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 206,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 334,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 207,
    "procedure": {
      "id": 1005,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "性能测试",
      "duration": 180,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 687,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 208,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 81,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 209,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 686,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 210,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 583,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 211,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 719,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-04-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 212,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 81,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 213,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 487,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 214,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 755,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 215,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 800,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 216,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 364,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-10-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 217,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 337,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 218,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 334,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 219,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 187,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-10-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 220,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 219,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 221,
    "procedure": {
      "id": 704,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "系统集成",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 474,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 222,
    "procedure": {
      "id": 801,
      "orderNo": "ORD-2024-008",
      "machineNo": "02",
      "name": "故障诊断",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 124,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 223,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 846,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 224,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 587,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 225,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 621,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 226,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 518,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 227,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 28,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 228,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 614,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-23",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 229,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 332,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 230,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 820,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 231,
    "procedure": {
      "id": 202,
      "orderNo": "ORD-2024-002",
      "machineNo": "04",
      "name": "机床加工",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 607,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 232,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 165,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 233,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 318,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 234,
    "procedure": {
      "id": 402,
      "orderNo": "ORD-2024-004",
      "machineNo": "05",
      "name": "焊接",
      "duration": 300,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 734,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-10-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 235,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 656,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 236,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 28,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 237,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 91,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-09",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 238,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 273,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 239,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 99,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 240,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 134,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 241,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 349,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 242,
    "procedure": {
      "id": 402,
      "orderNo": "ORD-2024-004",
      "machineNo": "05",
      "name": "焊接",
      "duration": 300,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 486,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 243,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 709,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 244,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 90,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-08",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 245,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 148,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 246,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 644,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 247,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 885,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 248,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 814,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 249,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 527,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 250,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 104,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 251,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 777,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 252,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 339,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 253,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 837,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 254,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 667,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 255,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 607,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 256,
    "procedure": {
      "id": 302,
      "orderNo": "ORD-2024-003",
      "machineNo": "05",
      "name": "注塑成型",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 658,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 257,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 629,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 258,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 103,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 259,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 364,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-10-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 260,
    "procedure": {
      "id": 503,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "元件焊接",
      "duration": 300,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 350,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 261,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 293,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 262,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 81,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 263,
    "procedure": {
      "id": 302,
      "orderNo": "ORD-2024-003",
      "machineNo": "05",
      "name": "注塑成型",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 181,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-10-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 264,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 206,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 265,
    "procedure": {
      "id": 302,
      "orderNo": "ORD-2024-003",
      "machineNo": "05",
      "name": "注塑成型",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 28,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 266,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 646,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 267,
    "procedure": {
      "id": 503,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "元件焊接",
      "duration": 300,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 133,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 268,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 54,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 269,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 657,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 270,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 601,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 271,
    "procedure": {
      "id": 202,
      "orderNo": "ORD-2024-002",
      "machineNo": "04",
      "name": "机床加工",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 634,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 272,
    "procedure": {
      "id": 1005,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "性能测试",
      "duration": 180,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 657,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 273,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 896,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-04-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 274,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 74,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-23",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 275,
    "procedure": {
      "id": 801,
      "orderNo": "ORD-2024-008",
      "machineNo": "02",
      "name": "故障诊断",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 858,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 276,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 723,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-10-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 277,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 19,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-10-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 278,
    "procedure": {
      "id": 602,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "电路组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 361,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-10-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 279,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 318,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 280,
    "procedure": {
      "id": 602,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "电路组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 681,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 281,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 882,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 282,
    "procedure": {
      "id": 801,
      "orderNo": "ORD-2024-008",
      "machineNo": "02",
      "name": "故障诊断",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 807,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 283,
    "procedure": {
      "id": 603,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "外壳安装",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 452,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 284,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 629,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 285,
    "procedure": {
      "id": 204,
      "orderNo": "ORD-2024-002",
      "machineNo": "01",
      "name": "精加工",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 296,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 286,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 551,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-10-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 287,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 376,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-10-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 288,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 511,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 289,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 428,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 290,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 734,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-10-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 291,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 366,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-10-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 292,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 777,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 293,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 237,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 294,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 474,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 295,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 790,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 296,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 829,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 297,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 441,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 298,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 667,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 299,
    "procedure": {
      "id": 402,
      "orderNo": "ORD-2024-004",
      "machineNo": "05",
      "name": "焊接",
      "duration": 300,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 28,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 300,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 823,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 301,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 656,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 302,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 713,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-04-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 303,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 671,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 304,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 530,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 305,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 554,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-10-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 306,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 80,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 307,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 657,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 308,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 701,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 309,
    "procedure": {
      "id": 704,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "系统集成",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 273,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 310,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 339,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 311,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 422,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 312,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 548,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-10-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 313,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 329,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-08",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 314,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 359,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-04-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 315,
    "procedure": {
      "id": 204,
      "orderNo": "ORD-2024-002",
      "machineNo": "01",
      "name": "精加工",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 709,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 316,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 128,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 317,
    "procedure": {
      "id": 204,
      "orderNo": "ORD-2024-002",
      "machineNo": "01",
      "name": "精加工",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 166,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 318,
    "procedure": {
      "id": 602,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "电路组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 614,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-23",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 319,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 466,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 320,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 166,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 321,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 590,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 322,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 2,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-10-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 323,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 770,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 324,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 813,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 325,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 833,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 326,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 758,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 327,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 592,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 328,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 60,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-09",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 329,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 581,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 330,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 157,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 331,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 785,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 332,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 336,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 333,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 28,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 334,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 227,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 335,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 356,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-04-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 336,
    "procedure": {
      "id": 402,
      "orderNo": "ORD-2024-004",
      "machineNo": "05",
      "name": "焊接",
      "duration": 300,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 146,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 337,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 70,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 338,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 583,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 339,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 832,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 340,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 70,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 341,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 384,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-11-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 342,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 147,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 343,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 896,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-04-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 344,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 608,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 345,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 24,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 346,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 127,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 347,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 69,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 348,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 105,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-23",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 349,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 53,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 350,
    "procedure": {
      "id": 202,
      "orderNo": "ORD-2024-002",
      "machineNo": "04",
      "name": "机床加工",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 725,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-10-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 351,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 474,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 352,
    "procedure": {
      "id": 801,
      "orderNo": "ORD-2024-008",
      "machineNo": "02",
      "name": "故障诊断",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 833,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 353,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 61,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 354,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 474,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 355,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 452,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 356,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 435,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 357,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 727,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-10-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 358,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 377,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-10-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 359,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 539,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-04-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 360,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 346,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 361,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 125,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 362,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 475,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 363,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 172,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 364,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 744,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 365,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 761,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 366,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 85,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 367,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 326,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 368,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 118,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 369,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 251,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 370,
    "procedure": {
      "id": 704,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "系统集成",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 785,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 371,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 740,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-10-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 372,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 2,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-10-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 373,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 328,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 374,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 820,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 375,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 627,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 376,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 502,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 377,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 667,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 378,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 81,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 379,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 627,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 380,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 596,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 381,
    "procedure": {
      "id": 202,
      "orderNo": "ORD-2024-002",
      "machineNo": "04",
      "name": "机床加工",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 682,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 382,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 608,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 383,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 719,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-04-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 384,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 417,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 385,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 687,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 386,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 99,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 387,
    "procedure": {
      "id": 1005,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "性能测试",
      "duration": 180,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 820,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 388,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 653,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 389,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 880,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 390,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 467,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 391,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 686,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 392,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 105,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-23",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 393,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 25,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 394,
    "procedure": {
      "id": 204,
      "orderNo": "ORD-2024-002",
      "machineNo": "01",
      "name": "精加工",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 614,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-23",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 395,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 870,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-09",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 396,
    "procedure": {
      "id": 202,
      "orderNo": "ORD-2024-002",
      "machineNo": "04",
      "name": "机床加工",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 85,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 397,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 497,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 398,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 104,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 399,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 823,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 400,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 25,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 401,
    "procedure": {
      "id": 603,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "外壳安装",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 334,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 402,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 332,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 403,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 131,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 404,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 458,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 405,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 562,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 406,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 157,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 407,
    "procedure": {
      "id": 1005,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "性能测试",
      "duration": 180,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 529,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 408,
    "procedure": {
      "id": 603,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "外壳安装",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 339,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 409,
    "procedure": {
      "id": 801,
      "orderNo": "ORD-2024-008",
      "machineNo": "02",
      "name": "故障诊断",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 424,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 410,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 460,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 411,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 712,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 412,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 773,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 413,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 53,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 414,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 205,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 415,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 273,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 416,
    "procedure": {
      "id": 302,
      "orderNo": "ORD-2024-003",
      "machineNo": "05",
      "name": "注塑成型",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 105,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-23",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 417,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 147,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 418,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 339,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 419,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 768,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 420,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 809,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 421,
    "procedure": {
      "id": 602,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "电路组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 590,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 422,
    "procedure": {
      "id": 202,
      "orderNo": "ORD-2024-002",
      "machineNo": "04",
      "name": "机床加工",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 187,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-10-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 423,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 768,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 424,
    "procedure": {
      "id": 204,
      "orderNo": "ORD-2024-002",
      "machineNo": "01",
      "name": "精加工",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 318,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 425,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 40,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 426,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 659,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 427,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 512,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 428,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 325,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 429,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 346,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 430,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 777,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 431,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 178,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-04-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 432,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 347,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 433,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 640,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 434,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 343,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 435,
    "procedure": {
      "id": 602,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "电路组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 6,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-10-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 436,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 659,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 437,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 198,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-10-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 438,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 760,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 439,
    "procedure": {
      "id": 503,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "元件焊接",
      "duration": 300,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 681,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 440,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 614,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-23",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 441,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 667,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 442,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 308,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 443,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 225,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 444,
    "procedure": {
      "id": 202,
      "orderNo": "ORD-2024-002",
      "machineNo": "04",
      "name": "机床加工",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 846,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 445,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 785,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 446,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 455,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 447,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 849,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 448,
    "procedure": {
      "id": 801,
      "orderNo": "ORD-2024-008",
      "machineNo": "02",
      "name": "故障诊断",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 565,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 449,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 140,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 450,
    "procedure": {
      "id": 202,
      "orderNo": "ORD-2024-002",
      "machineNo": "04",
      "name": "机床加工",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 647,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 451,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 767,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 452,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 227,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 453,
    "procedure": {
      "id": 801,
      "orderNo": "ORD-2024-008",
      "machineNo": "02",
      "name": "故障诊断",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 467,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 454,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 539,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-04-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 455,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 288,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 456,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 208,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 457,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 356,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-04-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 458,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 893,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-04-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 459,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 458,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 460,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 833,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 461,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 868,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 462,
    "procedure": {
      "id": 603,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "外壳安装",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 512,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 463,
    "procedure": {
      "id": 1005,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "性能测试",
      "duration": 180,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 534,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-04-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 464,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 497,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 465,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 109,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 466,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 339,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 467,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 328,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 468,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 509,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-08",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 469,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 744,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 470,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 133,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 471,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 334,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 472,
    "procedure": {
      "id": 602,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "电路组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 328,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 473,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 435,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 474,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 166,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 475,
    "procedure": {
      "id": 402,
      "orderNo": "ORD-2024-004",
      "machineNo": "05",
      "name": "焊接",
      "duration": 300,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 562,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 476,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 639,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 477,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 205,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 478,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 605,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 479,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 674,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 480,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 680,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 481,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 124,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 482,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 889,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 483,
    "procedure": {
      "id": 1005,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "性能测试",
      "duration": 180,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 868,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 484,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 439,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 485,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 131,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 486,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 206,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 487,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 629,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 488,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 359,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-04-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 489,
    "procedure": {
      "id": 302,
      "orderNo": "ORD-2024-003",
      "machineNo": "05",
      "name": "注塑成型",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 253,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 490,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 74,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-23",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 491,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 806,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 492,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 767,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 493,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 688,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 494,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 774,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 495,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 529,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 496,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 708,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 497,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 150,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-09",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 498,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 288,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 499,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 252,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 500,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 508,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 501,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 151,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 502,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 7,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-10-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 503,
    "procedure": {
      "id": 704,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "系统集成",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 653,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 504,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 511,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 505,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 705,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 506,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 332,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 507,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 540,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-04-08",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 508,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 736,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-10-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 509,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 425,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 510,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 734,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-10-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 511,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 129,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 512,
    "procedure": {
      "id": 704,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "系统集成",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 770,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 513,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 293,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 514,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 287,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 515,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 271,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-09",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 516,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 632,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 517,
    "procedure": {
      "id": 704,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "系统集成",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 308,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 518,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 809,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 519,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 251,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 520,
    "procedure": {
      "id": 202,
      "orderNo": "ORD-2024-002",
      "machineNo": "04",
      "name": "机床加工",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 474,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 521,
    "procedure": {
      "id": 503,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "元件焊接",
      "duration": 300,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 323,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 522,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 688,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 523,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 667,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 524,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 701,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 525,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 457,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 526,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 104,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 527,
    "procedure": {
      "id": 603,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "外壳安装",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 863,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 528,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 458,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 529,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 306,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 530,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 562,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 531,
    "procedure": {
      "id": 503,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "元件焊接",
      "duration": 300,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 575,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 532,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 761,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 533,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 211,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 534,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 90,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-08",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 535,
    "procedure": {
      "id": 503,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "元件焊接",
      "duration": 300,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 723,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-10-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 536,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 348,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 537,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 889,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 538,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 755,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 539,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 299,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 540,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 682,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 541,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 59,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-08",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 542,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 211,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 543,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 469,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 544,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 237,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 545,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 293,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 546,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 551,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-10-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 547,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 809,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 548,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 212,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 549,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 90,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-08",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 550,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 672,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 551,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 25,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 552,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 855,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 553,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 846,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 554,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 346,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 555,
    "procedure": {
      "id": 603,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "外壳安装",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 562,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 556,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 211,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 557,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 377,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-10-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 558,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 479,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 559,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 356,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-04-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 560,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 598,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 561,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 124,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 562,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 147,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 563,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 318,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 564,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 202,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 565,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 512,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 566,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 28,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 567,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 85,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 568,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 700,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 569,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 642,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 570,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 81,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 571,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 864,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 572,
    "procedure": {
      "id": 204,
      "orderNo": "ORD-2024-002",
      "machineNo": "01",
      "name": "精加工",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 112,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 573,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 34,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 574,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 717,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-04-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 575,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 833,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 576,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 16,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-10-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 577,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 678,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 578,
    "procedure": {
      "id": 704,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "系统集成",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 761,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 579,
    "procedure": {
      "id": 1005,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "性能测试",
      "duration": 180,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 701,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 580,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 814,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 581,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 288,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 582,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 508,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 583,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 639,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 584,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 814,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 585,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 260,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 586,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 607,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 587,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 339,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 588,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 166,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 589,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 177,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-04-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 590,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 719,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-04-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 591,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 343,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 592,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 474,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 593,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 712,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 594,
    "procedure": {
      "id": 503,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "元件焊接",
      "duration": 300,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 188,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-10-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 595,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 534,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-04-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 596,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 287,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 597,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 320,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 598,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 717,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-04-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 599,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 384,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-11-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 600,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 205,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 601,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 430,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 602,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 665,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 603,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 260,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 604,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 746,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 605,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 306,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 606,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 73,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 607,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 625,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 608,
    "procedure": {
      "id": 704,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "系统集成",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 736,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-10-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 609,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 809,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 610,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 529,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 611,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 12,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-10-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 612,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 647,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 613,
    "procedure": {
      "id": 1005,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "性能测试",
      "duration": 180,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 232,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 614,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 632,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 615,
    "procedure": {
      "id": 503,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "元件焊接",
      "duration": 300,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 260,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 616,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 389,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-11-08",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 617,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 343,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 618,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 148,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 619,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 28,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 620,
    "procedure": {
      "id": 202,
      "orderNo": "ORD-2024-002",
      "machineNo": "04",
      "name": "机床加工",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 684,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 621,
    "procedure": {
      "id": 1005,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "性能测试",
      "duration": 180,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 534,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-04-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 622,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 873,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 623,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 112,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 624,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 629,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 625,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 103,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 626,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 306,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 627,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 291,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 628,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 563,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 629,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 428,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 630,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 146,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 631,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 740,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-10-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 632,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 184,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-10-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 633,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 653,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 634,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 770,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 635,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 291,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 636,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 529,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 637,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 227,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 638,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 384,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-11-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 639,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 347,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 640,
    "procedure": {
      "id": 202,
      "orderNo": "ORD-2024-002",
      "machineNo": "04",
      "name": "机床加工",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 404,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-11-23",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 641,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 417,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 642,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 404,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-11-23",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 643,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 34,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 644,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 25,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 645,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 849,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 646,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 406,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-11-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 647,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 148,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 648,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 60,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-09",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 649,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 309,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 650,
    "procedure": {
      "id": 801,
      "orderNo": "ORD-2024-008",
      "machineNo": "02",
      "name": "故障诊断",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 701,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 651,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 785,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 652,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 839,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 653,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 148,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 654,
    "procedure": {
      "id": 503,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "元件焊接",
      "duration": 300,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 289,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 655,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 315,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 656,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 537,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-04-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 657,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 194,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-10-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 658,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 681,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 659,
    "procedure": {
      "id": 602,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "电路组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 141,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 660,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 237,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 661,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 479,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 662,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 366,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-10-16",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 663,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 438,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 664,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 143,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 665,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 596,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 666,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 534,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-04-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 667,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 359,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-04-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 668,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 474,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 669,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 339,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 670,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 900,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-04-08",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 671,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 682,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 672,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 700,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 673,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 799,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 674,
    "procedure": {
      "id": 402,
      "orderNo": "ORD-2024-004",
      "machineNo": "05",
      "name": "焊接",
      "duration": 300,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 760,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 675,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 101,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 676,
    "procedure": {
      "id": 1005,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "性能测试",
      "duration": 180,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 339,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 677,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 188,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-10-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 678,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 81,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 679,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 750,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-09",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 680,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 536,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-04-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 681,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 424,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 682,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 823,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 683,
    "procedure": {
      "id": 803,
      "orderNo": "ORD-2024-008",
      "machineNo": "04",
      "name": "系统校准",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 25,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 684,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 611,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 685,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 137,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 686,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 122,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-09",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 687,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 156,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 688,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 125,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 689,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 768,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 690,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 601,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 691,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 81,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 692,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 316,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-23",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 693,
    "procedure": {
      "id": 302,
      "orderNo": "ORD-2024-003",
      "machineNo": "05",
      "name": "注塑成型",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 326,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 694,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 53,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 695,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 24,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 696,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 253,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 697,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 807,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 698,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 529,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 699,
    "procedure": {
      "id": 801,
      "orderNo": "ORD-2024-008",
      "machineNo": "02",
      "name": "故障诊断",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 870,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-09",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 700,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 736,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-10-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 701,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 687,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 702,
    "procedure": {
      "id": 103,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 90,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 573,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 703,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 640,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 704,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 80,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 705,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 472,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 706,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 896,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-04-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 707,
    "procedure": {
      "id": 504,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "功能测试",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 28,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 708,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 767,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-26",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 709,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 640,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 710,
    "procedure": {
      "id": 801,
      "orderNo": "ORD-2024-008",
      "machineNo": "02",
      "name": "故障诊断",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 45,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 711,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 422,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 712,
    "procedure": {
      "id": 1005,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "性能测试",
      "duration": 180,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 562,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 713,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 54,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 714,
    "procedure": {
      "id": 402,
      "orderNo": "ORD-2024-004",
      "machineNo": "05",
      "name": "焊接",
      "duration": 300,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 101,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 715,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 156,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 716,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 318,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 717,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 262,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 718,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 647,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 719,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 237,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 720,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 81,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 721,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 647,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 722,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 455,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 723,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 590,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-11-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 724,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 109,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 725,
    "procedure": {
      "id": 503,
      "orderNo": "ORD-2024-005",
      "machineNo": "04",
      "name": "元件焊接",
      "duration": 300,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 746,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 726,
    "procedure": {
      "id": 1005,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "性能测试",
      "duration": 180,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 334,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 727,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 211,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 728,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 435,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 729,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 814,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 730,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 384,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-11-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 731,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 843,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 732,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 350,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 733,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 219,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 734,
    "procedure": {
      "id": 603,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "外壳安装",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 601,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 735,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 296,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 736,
    "procedure": {
      "id": 905,
      "orderNo": "ORD-2024-009",
      "machineNo": "01",
      "name": "防水处理",
      "duration": 120,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 475,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 737,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 529,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 738,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 328,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 739,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 103,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 740,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 125,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 741,
    "procedure": {
      "id": 603,
      "orderNo": "ORD-2024-006",
      "machineNo": "01",
      "name": "外壳安装",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 428,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-17",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 742,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 672,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-19",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 743,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 667,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-02-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 744,
    "procedure": {
      "id": 804,
      "orderNo": "ORD-2024-008",
      "machineNo": "01",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 425,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 745,
    "procedure": {
      "id": 104,
      "orderNo": "ORD-2024-001",
      "machineNo": "04",
      "name": "包装",
      "duration": 60,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 846,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 746,
    "procedure": {
      "id": 403,
      "orderNo": "ORD-2024-004",
      "machineNo": "03",
      "name": "打磨",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 466,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 747,
    "procedure": {
      "id": 902,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "面板组装",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 177,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-04-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 748,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 725,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-10-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 749,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 364,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-10-14",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 750,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 601,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-12-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 751,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 422,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 752,
    "procedure": {
      "id": 1005,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "性能测试",
      "duration": 180,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 318,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-02-25",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 753,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 814,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 754,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 777,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 755,
    "procedure": {
      "id": 705,
      "orderNo": "ORD-2024-007",
      "machineNo": "03",
      "name": "压力测试",
      "duration": 150,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 713,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-04-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 756,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 837,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 757,
    "procedure": {
      "id": 302,
      "orderNo": "ORD-2024-003",
      "machineNo": "05",
      "name": "注塑成型",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 194,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-10-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 758,
    "procedure": {
      "id": 704,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "系统集成",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 774,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 759,
    "procedure": {
      "id": 204,
      "orderNo": "ORD-2024-002",
      "machineNo": "01",
      "name": "精加工",
      "duration": 120,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 688,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 760,
    "procedure": {
      "id": 1004,
      "orderNo": "ORD-2024-010",
      "machineNo": "04",
      "name": "系统调试",
      "duration": 300,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 829,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 761,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 474,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 762,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 712,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-31",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 763,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 682,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-03-01",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 764,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 122,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-09",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 765,
    "procedure": {
      "id": 601,
      "orderNo": "ORD-2024-006",
      "machineNo": "02",
      "name": "传感器校准",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 112,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-30",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 766,
    "procedure": {
      "id": 901,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "电池制造",
      "duration": 300,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 457,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-15",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 767,
    "procedure": {
      "id": 203,
      "orderNo": "ORD-2024-002",
      "machineNo": "03",
      "name": "热处理",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 422,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 768,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 63,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 769,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 53,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-12-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 770,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 1,
      "name": "电子元件组装",
      "orderNo": "ORD-2024-001",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 455,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-01-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 771,
    "procedure": {
      "id": 604,
      "orderNo": "ORD-2024-006",
      "machineNo": "05",
      "name": "功能测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 884,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-03-23",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 772,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 389,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-11-08",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 773,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 177,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-04-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 774,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 143,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-02",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 775,
    "procedure": {
      "id": 702,
      "orderNo": "ORD-2024-007",
      "machineNo": "01",
      "name": "阀门组装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 486,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-02-13",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 776,
    "procedure": {
      "id": 101,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "元件准备",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PROCESSING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 147,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 777,
    "procedure": {
      "id": 802,
      "orderNo": "ORD-2024-008",
      "machineNo": "05",
      "name": "零件更换",
      "duration": 240,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 165,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 778,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 28,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2024-11-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 779,
    "procedure": {
      "id": 1003,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "冷却液填充",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 289,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2025-01-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 780,
    "procedure": {
      "id": 502,
      "orderNo": "ORD-2024-005",
      "machineNo": "05",
      "name": "电路蚀刻",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 813,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-01-11",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 781,
    "procedure": {
      "id": 303,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "冷却",
      "duration": 120,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 843,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 782,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 10,
      "name": "工业冷却系统安装",
      "orderNo": "ORD-2024-010",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 530,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 783,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 4,
      "name": "Machine 4",
      "machineNo": "04",
      "model": "M4"
    },
    "maintenance": {
      "id": 554,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2024-10-24",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 784,
    "procedure": {
      "id": 301,
      "orderNo": "ORD-2024-003",
      "machineNo": "02",
      "name": "塑料制粒",
      "duration": 180,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 629,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 785,
    "procedure": {
      "id": 102,
      "orderNo": "ORD-2024-001",
      "machineNo": "05",
      "name": "PCB焊接",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": "2024-10-17",
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 140,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-02-27",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 786,
    "procedure": {
      "id": 304,
      "orderNo": "ORD-2024-003",
      "machineNo": "03",
      "name": "修边",
      "duration": 90,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 439,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-12-28",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 787,
    "procedure": {
      "id": 401,
      "orderNo": "ORD-2024-004",
      "machineNo": "04",
      "name": "材料裁剪",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 235,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-12-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 788,
    "procedure": {
      "id": 205,
      "orderNo": "ORD-2024-002",
      "machineNo": "02",
      "name": "质量检测",
      "duration": 90,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": "2024-10-19",
      "status": "PENDING"
    },
    "order": {
      "id": 6,
      "name": "工业传感器组装",
      "orderNo": "ORD-2024-006",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 104,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-01-22",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 789,
    "procedure": {
      "id": 904,
      "orderNo": "ORD-2024-009",
      "machineNo": "02",
      "name": "效率测试",
      "duration": 150,
      "procedureNo": "40",
      "nextProcedureNo": [
        "50"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 530,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2025-03-29",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 790,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 634,
      "machine": {
        "id": 4,
        "name": "Machine 4",
        "machineNo": "04",
        "model": "M4"
      },
      "date": "2025-01-12",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 791,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 789,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-12-18",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 792,
    "procedure": {
      "id": 1002,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "压缩机安装",
      "duration": 180,
      "procedureNo": "20",
      "nextProcedureNo": [
        "30"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 384,
      "machine": {
        "id": 3,
        "name": "Machine 3",
        "machineNo": "03",
        "model": "M3"
      },
      "date": "2024-11-03",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 793,
    "procedure": {
      "id": 404,
      "orderNo": "ORD-2024-004",
      "machineNo": "02",
      "name": "喷漆",
      "duration": 240,
      "procedureNo": "40",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 837,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-02-04",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 794,
    "procedure": {
      "id": 701,
      "orderNo": "ORD-2024-007",
      "machineNo": "02",
      "name": "管道加工",
      "duration": 210,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 9,
      "name": "太阳能面板组装",
      "orderNo": "ORD-2024-009",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 207,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-06",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 795,
    "procedure": {
      "id": 201,
      "orderNo": "ORD-2024-002",
      "machineNo": "05",
      "name": "原料切割",
      "duration": 150,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": "2024-10-18",
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 751,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 796,
    "procedure": {
      "id": 903,
      "orderNo": "ORD-2024-009",
      "machineNo": "05",
      "name": "电路连接",
      "duration": 180,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 8,
      "name": "工业机器人维修",
      "orderNo": "ORD-2024-008",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 746,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 797,
    "procedure": {
      "id": 501,
      "orderNo": "ORD-2024-005",
      "machineNo": "03",
      "name": "PCB设计",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 5,
      "name": "电路板制造",
      "orderNo": "ORD-2024-005",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 746,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-05",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 798,
    "procedure": {
      "id": 1001,
      "orderNo": "ORD-2024-010",
      "machineNo": "03",
      "name": "管道安装",
      "duration": 240,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 2,
      "name": "机械零件加工",
      "orderNo": "ORD-2024-002",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 1,
      "name": "Machine 1",
      "machineNo": "01",
      "model": "M1"
    },
    "maintenance": {
      "id": 162,
      "machine": {
        "id": 1,
        "name": "Machine 1",
        "machineNo": "01",
        "model": "M1"
      },
      "date": "2025-03-21",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 799,
    "procedure": {
      "id": 703,
      "orderNo": "ORD-2024-007",
      "machineNo": "04",
      "name": "泵体安装",
      "duration": 240,
      "procedureNo": "30",
      "nextProcedureNo": [
        "40"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 3,
      "name": "塑料外壳生产",
      "orderNo": "ORD-2024-003",
      "priority": 3,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 3,
      "name": "Machine 3",
      "machineNo": "03",
      "model": "M3"
    },
    "maintenance": {
      "id": 761,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2024-11-20",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 800,
    "procedure": {
      "id": 801,
      "orderNo": "ORD-2024-008",
      "machineNo": "02",
      "name": "故障诊断",
      "duration": 120,
      "procedureNo": "10",
      "nextProcedureNo": [
        "20"
      ],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 4,
      "name": "金属框架焊接",
      "orderNo": "ORD-2024-004",
      "priority": 2,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 5,
      "name": "Machine 5",
      "machineNo": "05",
      "model": "M5"
    },
    "maintenance": {
      "id": 899,
      "machine": {
        "id": 5,
        "name": "Machine 5",
        "machineNo": "05",
        "model": "M5"
      },
      "date": "2025-04-07",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  },
  {
    "id": 801,
    "procedure": {
      "id": 1005,
      "orderNo": "ORD-2024-010",
      "machineNo": "01",
      "name": "性能测试",
      "duration": 180,
      "procedureNo": "50",
      "nextProcedureNo": [],
      "startTime": null,
      "planStartTime": null,
      "status": "PENDING"
    },
    "order": {
      "id": 7,
      "name": "液压系统装配",
      "orderNo": "ORD-2024-007",
      "priority": 1,
      "startDate": null,
      "endDate": null
    },
    "machine": {
      "id": 2,
      "name": "Machine 2",
      "machineNo": "02",
      "model": "M2"
    },
    "maintenance": {
      "id": 211,
      "machine": {
        "id": 2,
        "name": "Machine 2",
        "machineNo": "02",
        "model": "M2"
      },
      "date": "2024-11-10",
      "duration": 0,
      "capacity": 80,
      "status": "IDLE",
      "description": null
    },
    "dailyHours": 10,
    "date": null
  }
]