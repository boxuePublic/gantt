/**
 * 函数防抖：fn函数在最后一次调用时刻的delay毫秒之后执行！
 * @param fn 执行函数
 * @param delay 时间间隔
 * @param isImmediate 为true，debounce会在delay时间间隔的开始时立即调用这个函数
 * @returns {Function}
 */
function debounce(fn, delay = 100, isImmediate = false) {
  var timer = null; // 初始化timer，作为计时清除依据
  return function () {
    var context = this; // 获取函数所在作用域this
    var args = arguments; // 取得传入参数
    clearTimeout(timer);
    if (isImmediate && timer === null) {
      fn.apply(context, args); // 时间间隔外立即执行
      timer = 0;
      return;
    }
    timer = setTimeout(function () {
      fn.apply(context, args);
      timer = null;
    }, delay);
  };
}

// 节流函数
function throttle(func, delay) {
  let lastTime = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastTime >= delay) {
      func.apply(this, args);
      lastTime = now;
    }
  };
}

/*
 * 转换时间
 * CustomDateFtt(1565059668200,"yyyy-MM-dd hh:mm:ss") => '2019-08-06 10:47:48'
 * CustomDateFtt(1565059668200,"yyyy-MM-dd") => '2019-08-06'
 */
function CustomDateFtt(date, fmt) {
  // 检查输入是否有效
  if (![null, '', undefined].includes(date)) {
    // 将日期字符串转换为 Date 对象
    const parsedDate = new Date(date);

    // 检查日期是否有效
    if (isNaN(parsedDate.getTime())) return ''; // 返回空字符串表示无效日期

    // 创建一个新的 Date 对象
    var dateObj = new Date(parsedDate); // 使用有效的 parsedDate
    var o = {
      'M+': dateObj.getMonth() + 1, // 月份从0开始
      'd+': dateObj.getDate(),
      'h+': dateObj.getHours(),
      'm+': dateObj.getMinutes(),
      's+': dateObj.getSeconds(),
      'q+': Math.floor((dateObj.getMonth() + 3) / 3), // 季度
      S: dateObj.getMilliseconds(), // 毫秒
    };

    // 格式化毫秒
    o.S < 100 && (o.S = o.S < 10 ? '00' + o.S : '0' + o.S);

    // 替换年份
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    }

    // 替换其他格式
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
      }
    }
  } else {
    fmt = '';
  }
  return fmt;
}

function CustomGtTypeOf(obj) {
  if (Number.isNaN(obj) && isNaN(obj)) return 'nan';
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

// 分钟转小时，保留一位小数(向下取整)
function minutesToHours(minutes) {
  if (['', null, undefined].includes(minutes)) {
    return '';
  }

  const days = Math.floor(minutes / (60 * 24));
  const hours = Math.floor((minutes % (60 * 24)) / 60);
  const remainingMinutes = minutes % 60;

  let str = '';
  if (days > 0) {
    str += (days + '天');
  }
  if (hours > 0) {
    str += (hours + '时');
  }
  if (remainingMinutes > 0) {
    str += (remainingMinutes + '分');
  }

  return str;
}

// 计算时间段有多少分钟
function calculateMinutes(startTime, endTime) {
  console.log(startTime, endTime);
  // 将时间字符串转换为 Date 对象
  const startDate = new Date(startTime.replace(/-/g, '/'));
  const endDate = new Date(endTime.replace(/-/g, '/'));

  // 计算时间差（毫秒）
  const timeDifference = endDate - startDate;

  // 将时间差转换为分钟
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));

  return minutesDifference;
}

// 开始时间 + 持续时间，得到结束时间
function getTaskEndTime(startTime, duration) {
  // 将开始时间字符串转换为 Date 对象
  const startDate = new Date(startTime);

  // 检查输入的有效性
  if (isNaN(startDate.getTime()) || typeof duration !== 'number' || duration < 0) {
    // throw new Error('无效的输入');
    return '';
  }

  // 计算结束时间
  const endDate = new Date(startDate.getTime() + duration * 60000); // 60000 毫秒 = 1 分钟

  // 格式化结束时间为 "YYYY-MM-DD HH:MM"
  const year = endDate.getFullYear();
  const month = String(endDate.getMonth() + 1).padStart(2, '0'); // 月份从0开始
  const day = String(endDate.getDate()).padStart(2, '0');
  const hours = String(endDate.getHours()).padStart(2, '0');
  const minutes = String(endDate.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
// 示例用法
// const startTime = "2024-05-05 14:30";
// const duration = 90; // 持续时间为90分钟
// const endTime = getTaskEndTime(startTime, duration);
// console.log(endTime); // 输出: "2024-05-05 16:00"

// ------------------------------- 上面是正式用的函数

function getRandomTimeBetween(start, end) {
  // 解析输入的时间字符串为Date对象
  const startDate = new Date(start);
  const endDate = new Date(end);

  // 计算时间差（毫秒）
  const timeDifference = endDate - startDate;

  // 生成一个随机的毫秒数
  const randomTime = Math.random() * timeDifference;

  // 计算新的日期时间
  const newDate = new Date(startDate.getTime() + randomTime);

  // 获取年、月、日、时和分
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1; // 月份从0开始，所以需要加1
  const date = newDate.getDate();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();

  // 返回格式化的日期时间字符串
  return `${year}-${month.toString().padStart(2, '0')}-${date
    .toString()
    .padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
}

// 中间函数
function getDatesBetween(startTime, endTime) {
  const dates = [];
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  while (startDate <= endDate) {
    dates.push(CustomDateFtt(startDate, 'yyyy-MM-dd'));
    startDate.setDate(startDate.getDate() + 1);
  }
  return dates;
}

function mockListData() {
  const start_time = '2024-09-01 10:00';
  const end_time = '2024-11-30 13:00';
  let arr = [];
  const rows = 40; // 行数

  if (this.start_time && this.end_time) {
    const flag_time = new Date(this.start_time) <= new Date(this.end_time);
    if (flag_time) {
      this.task_start_end_data = this.getDatesBetween(
        this.start_time,
        this.end_time
      );
    }
  }

  for (let i = 1; i < rows + 1; i++) {
    arr.push({
      id: i,
      rowkey_ordername: '订单名称' + i, // 订单名称
      rowkey_processes: '工序名称' + i, // 工序名称
      rowkey_machine: '机器' + i, // 工序名称
      // 300-3000 的正整数
      rowkey_duration: Math.floor(Math.random() * (3000 - 300 + 1)) + 300, // 任务持续时间(分钟)
      rowkey_type: i % 5 === 0 ? '委外' : '自产', // 任务类型(委外、自产)
      planStartTime: getRandomTimeBetween(start_time, end_time), // 计划开始时间
      planEndTime: '2024-10-13 10:00', // 计划结束时间
      taskArr: [
        {
          start_time: '2024-09-05 12:00',
          end_time: '2024-09-06 12:00',
        },
        {
          start_time: '2024-09-09 12:00',
          end_time: '2024-09-12 12:00',
        },
      ],
      maintenanceTime: [
        {
          start_time: '2024-09-04 10:00', // 机器维护开始时间
          end_time: '2024-09-05 10:00', // 机器维护结束时间
        },
        {
          start_time: '2024-09-07 12:00', // 机器维护开始时间
          end_time: '2024-09-08 10:00', // 机器维护结束时间
        },
      ],
    });
  }
  return arr;
}

// 转换函数--合并
function turnDataFn_merge(data = []) {
  let arr = [];
  if (!data.length) return [];
  const len = data.length;
  for (let i = 0; i < len; i++) {
    const item = data[i];

    const cur_orderNo = item.procedure.orderNo;
    const cur_procedureNo = item.procedure.procedureNo;

    const existingIndex = arr.findIndex(v =>
      v.order_no === cur_orderNo &&
      v.processes_no === cur_procedureNo
    );


    const planStartTime = CustomDateFtt(item.maintenance.date + ' 00:00', "yyyy-MM-dd hh:mm");// 工序开始时间
    const planEndTime = getTaskEndTime(item.maintenance.date + ' 00:00', item.dailyHours);// 工序结束时间
    // const planEndTime = getTaskEndTime(item.maintenance.date + ' 00:00', 24 * 60);// 工序结束时间

    if (existingIndex !== -1) {
      arr[existingIndex].taskArr.push({
        "start_time": planStartTime,
        "duration": item.dailyHours,
        "end_time": planEndTime
      });
    } else {
      arr.push({
        "order_id": item.order.id,
        "order_no": item.order.orderNo,
        "order_name": item.order.name,
        // "order_status": "PENDING",
        "processes_id": item.procedure.id,
        "processes_no": item.procedure.procedureNo,
        "processes_name": item.procedure.name,
        // "processes_status": "PROCESSING",
        "machine": {
          "id": item.machine.id,
          "name": item.machine.name,
          "machineNo": item.machine.machineNo,
          "model": item.machine.model,
        },
        "planStartTime": planStartTime,
        "duration": item.dailyHours,
        "planEndTime": planEndTime,
        "taskArr": [
          {
            "start_time": planStartTime,
            "duration": item.dailyHours,
            "end_time": planEndTime
          }
        ],
        // 维护时间
        "maintenanceTime": []
      });
    }
  }
  return arr;
}
