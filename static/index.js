layui.use(['layer', 'form', 'laydate'], function () {
  const layer = layui.layer;
  const form = layui.form;
  const laydate = layui.laydate;
  let editIndex = -1;

  // 甘特图初始化
  const Instance_ganttChart = new GanttChart();

  laydate.render({
    elem: '#task_end_time',
    theme: 'ymdhm',
    type: 'datetime',
    value: '2024-10-14 12:00',
    format: 'yyyy-MM-dd HH:mm',
    done: function (value, date) {
      layer.msg('你选择的日期是：' + value + '<br>获得的对象是' + JSON.stringify(date), { icon: 2 });
    },
    btns: ['confirm'],
    fullPanel: true
  });

  // 加入时间分片之前的版本
  // async function queryData() {
  //   let res = await fetch('./static/data.json');
  //   let data = await res.json();

  //   const flatArray = turnDataFn(data);
  //   console.log(flatArray);
  //   // initGanttChart([]);
  //   initGanttChart(flatArray);
  // }
  // queryData();


  async function queryData() {
    let res = await fetch('http://192.168.100.102:8081/api/scheduling/solution/1');
    let data = await res.json();
    console.log(data);

    const flatArray = turnDataFn_merge(data.timeslots);
    console.log(flatArray);
    initGanttChart(flatArray);
  }
  queryData();





  // 渲染甘特图
  function initGanttChart(data) {
    Instance_ganttChart.init({
      el: '#gantt_here',
      permission: 'edit',
      data: data,
      columns: [
        {
          title: '工单名称',
          field: 'order_name',
          align: 'left',
          width: 120,
        },
        {
          title: '工序名称',
          field: 'processes_name',
          align: 'left',
          width: 100,
        },
        {
          title: '工序号',
          field: 'processes_no',
          align: 'left',
          width: 60,
        },
        {
          title: '机器', field: '', align: 'left', width: 100, template: function (item1, item2) {
            return item1.machine.name
          }
        },
        {
          title: '开始时间',
          field: 'planStartTime',
          align: 'center',
          width: 120,
        },

        // {
        //   title: '持续时间', field: 'rowkey_duration', align: 'center', width: 90, template: function (item1, item2) {
        //     return minutesToHours(item1.duration) + 'h'
        //   }
        // },

        // {
        //   title: '操作',
        //   align: 'center',
        //   width: 120,
        //   type: 'operate',
        //   template: function (item1, item2) {
        //     return '<div class="flex item-center"><i class="ri-delete-bin-line ml-5 font-20 cursor-pointer"></i><i class="ri-add-line ml-5 font-20 cursor-pointer"></i></div>';
        //   },
        // },
      ],
      // 任务块的点击事件
      taskClickCallback: function (curEl, insObj, updateTask) {
        const index_1 = Number($(curEl).attr('data-index_1'));
        const index_2 = Number($(curEl).attr('data-index_2'));
        const lineObj = insObj.data[index_1] || {};// 获取当前行数据
        const taskObj = lineObj[index_2] || {}; // 获取当前task数据

        $('#submitEdit').attr('data-index_1', index_1);
        $('#submitEdit').attr('data-index_2', index_2);

        if (lineObj.order_status === 'COMPLETE') {
          layer.msg('该订单已完成');
          return false;
        }
        if (lineObj.processes_status === 'COMPLETE') {
          layer.msg('该工序已完成');
          return false;
        }

        // if (lineObj.processes_status === 'PENDING') {
        //   layer.msg('该工序正在进行中');
        //   return false;
        // }

        // 填充表单数据
        $('#infoEdit').find('#order_name').html(lineObj.order_name);
        $('#infoEdit').find('#processes_name').html(lineObj.processes_name);
        $('#infoEdit').find('#machine_name').html(lineObj.machine.name);

        // const greater
        const startTime_less_current = new Date(lineObj.planStartTime) > new Date();
        const endTime_less_current = new Date(lineObj.planEndTime) < new Date();

        // 开始时间
        console.log(`index.js 69 [lineObj.planStartTime]`, lineObj.planStartTime);
        // if (new Date(lineObj.planStartTime) >= new Date('2025-10-10 10:22:22')) {
        //   // if (new Date(lineObj.planStartTime) >= new Date()) {
        //   $('#task_start_time').removeAttr('disabled');

        //   // 开始时间大于 此时此刻 的时间
        //   $('#task_start_time_name').addClass('requiredlabel');

        // } else {
        //   $('#task_start_time_name').removeClass('requiredlabel');
        //   $('#task_start_time').val(lineObj.planStartTime).attr('disabled', true);
        // }

        const task_start_end_data = Instance_ganttChart.task_start_end_data || [];
        const d1 = new Date(task_start_end_data[0] + ' 00:00');
        const d2 = new Date();
        const minDate = new Date(Math.max(d1.getTime(), d2.getTime()));
        const task_start_end_data_last = task_start_end_data[task_start_end_data.length - 1] || '';// 

        // 渲染开始时间
        laydate.render({
          elem: '#task_start_time',
          theme: 'ymdhm',
          type: 'datetime',
          value: lineObj.planStartTime,
          format: 'yyyy-MM-dd HH:mm',
          min: CustomDateFtt(minDate, "yyyy-MM-dd hh:mm"),
          max: CustomDateFtt(task_start_end_data_last, "yyyy-MM-dd hh:mm"),
          done: function (value, date) {
            if (new Date(value) > new Date($('#task_end_time').val())) {
              layer.msg('开始时间不能大于结束时间');
            }
          },
          disabledDate: function (date) {
            return date < new Date(); // 禁用当前日期之前的所有日期
          },
          btns: ['confirm'],
          fullPanel: true
        });

        // 结束时间
        laydate.render({
          elem: '#task_end_time',
          theme: 'ymdhm',
          type: 'datetime',
          value: lineObj.planEndTime,
          format: 'yyyy-MM-dd HH:mm',
          min: CustomDateFtt(minDate, "yyyy-MM-dd hh:mm"),
          max: CustomDateFtt(task_start_end_data_last, "yyyy-MM-dd hh:mm"),
          done: function (value, date) {
            if (new Date(value) < new Date($('#task_start_time').val())) {
              layer.msg('结束时间不能小于开始时间');
            }
          },
          btns: ['confirm'],
          fullPanel: true
        });

        editIndex = layer.open({
          type: 1,
          title: $('#edit_popup_title').html(),
          offset: 'r',
          closeBtn: false,
          skin: 'laymy-popup-wrapper',
          area: ['600px', '100%'],
          content: $('#infoEdit'),
          anim: 'slideLeft',
          move: false,
          scrollbar: false,
          shadeClose: false,
          success: function (layero, index) {
            console.log(index);
          },
          end: function () {
            console.log('end');
          },
          cancel: function (index, layero) {
            console.log('cancel');
          },
        });
      },
      // 悬浮面板内容
      floatingPanelContent: function (lineObj, index_2, className) {
        const taskObj = lineObj.taskArr[index_2] || {}; // 获取当前task数据
        let html = '';
        html += '<div class="gantt-plane-line">';
        html += ' <span class="gantt-plane-title">工单名称：</span>';
        // html += ' <span class="gantt-plane-text">' + (lineObj.order_name || '') + '</span>';
        html += ' <span class="gantt-plane-text">' + (lineObj.order_name || '') + (lineObj.order_name || '') + (lineObj.order_name || '') + '</span>';
        html += '</div>';

        html += '<div class="gantt-plane-line">';
        html += ' <span class="gantt-plane-title">工序名称：</span>';
        html += ' <span class="gantt-plane-text">' + (lineObj.processes_name || '') + '</span>';
        html += '</div>';

        html += '<div class="gantt-plane-line">';
        html += ' <span class="gantt-plane-title">工序号：</span>';
        html += ' <span class="gantt-plane-text">' + (lineObj.processes_no || '') + '</span>';
        html += '</div>';

        html += '<div class="gantt-plane-line">';
        html += ' <span class="gantt-plane-title">执行机器：</span>';
        html += ' <span class="gantt-plane-text">' + ((lineObj.machine || {}).name || '') + '</span>';
        html += '</div>';

        if (['gantt_task_cell'].includes(className)) {
          html += '<div class="gantt-plane-line">';
          html += ' <span class="gantt-plane-title">开始时间：</span>';
          html += ' <span class="gantt-plane-text">' + (taskObj.start_time || '') + '</span>';
          html += '</div>';

          // html += '<div class="gantt-plane-line">';
          // html += ' <span class="gantt-plane-title">持续时间：</span>';
          // html += ' <span class="gantt-plane-text">' + minutesToHours(taskObj.duration) + 'h' + '</span>';
          // html += '</div>';
          html += '<div class="gantt-plane-line">';
          html += ' <span class="gantt-plane-title">持续时间：</span>';
          html += ' <span class="gantt-plane-text">' + taskObj.duration + '分' + '</span>';
          html += '</div>';
        }

        return html
      }
    });

    // 关闭编辑弹窗
    $(document).on('click', '.laymy-popup-back', function () {
      layer.close(editIndex);
    })

    // 提交编辑事件
    $(document).on('click', '#submitEdit', function () {
      const index_1 = Number($(this).attr('data-index_1'));
      const index_2 = Number($(this).attr('data-index_2'));
      const lineObj = Instance_ganttChart.data[index_1] || {};// 获取当前行数据

      if (new Date($('#task_start_time').val()) > new Date($('#task_end_time').val())) {
        layer.msg('开始时间不能大于结束时间');
        return false;
      }

      if (new Date($('#task_end_time').val()) < new Date($('#task_start_time').val())) {
        layer.msg('结束时间不能小于开始时间');
        return false;
      }
      console.log(`index.js 202 [form.val('testForm')]`, form.val('testForm'));

      Instance_ganttChart.editUpdateTask({
        index_1: index_1,
        index_2: index_2,
        start_time: $('#task_start_time').val(),
        end_time: $('#task_end_time').val(),
      });

      layer.close(editIndex);
    });
  }

  // 提交排产
  $(document).on('click', '#submitScheduling', function () {
    if ($(this).attr('data-disabled') === 'true') {
      return false;
    }
    console.log('index.js 203', '提交排产');

    // const data = Instance_ganttChart.getData();
    // console.log(data);
    // 发送请求
    // $.post('/api/scheduling/solution', data, function (res) {
    //   console.log(res);
    //   layer.msg('排产成功');
    // });
  });

  /* 
  #ADD8E6 待开始 浅蓝色	
  #4CAF50 进行中 绿色
  #FFA500 已完成 橙色
  #76b6cd 现在任务的颜色
  
  */

})
