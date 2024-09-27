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

  async function queryData() {
    let res = await fetch('./static/data.json');
    let data = await res.json();

    const flatArray = turnDataFn(data);
    console.log(flatArray);
    // initGanttChart([]);
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
          width: 170,
        },
        {
          title: '工序名称',
          field: 'processes_name',
          align: 'left',
          width: 170,
        },
        {
          title: '机器', field: '', align: 'left', width: 170, template: function (item1, item2) {
            return item1.machine.name
          }
        },
        {
          title: '开始时间',
          field: 'planStartTime',
          align: 'center',
          width: 120,
        },
        {
          title: '持续时间', field: 'rowkey_duration', align: 'center', width: 90, template: function (item1, item2) {
            return minutesToHours(item1.duration) + 'h'
          }
        },
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
      // 任务快的点击事件
      taskClickCallback: function (curEl, insObj) {
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

        // 渲染开始时间
        laydate.render({
          elem: '#task_start_time',
          theme: 'ymdhm',
          type: 'datetime',
          value: lineObj.planStartTime,
          format: 'yyyy-MM-dd HH:mm',
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
          min: CustomDateFtt(new Date(), "yyyy-MM-dd hh:mm"),
          value: lineObj.planEndTime,
          format: 'yyyy-MM-dd HH:mm',
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

      layer.close(editIndex);
    });
  }


  /* 
  #ADD8E6 待开始 浅蓝色	
  #4CAF50 进行中 绿色
  #FFA500 已完成 橙色
  #76b6cd 现在任务的颜色
  
  */

})
